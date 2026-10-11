"""Exercise the actual SQLite schema and race-safe membership registration SQL."""
import sqlite3
from pathlib import Path

db=sqlite3.connect(':memory:')
for migration in sorted(Path('drizzle').glob('*.sql')):
    db.executescript(migration.read_text())
db.execute("INSERT INTO invitations VALUES (?,?,?,?,?,?,?)",('link','hash','Study circle','active','owner','2026-10-11T10:00:00Z','2026-10-18T10:00:00Z'))
for user,status in [('new','unregistered'),('pending','pending'),('approved','active'),('paused','suspended')]:
    db.execute("INSERT INTO members (user_id,email,name,status,created_at) VALUES (?,?,?,?,?)",(user,user+'@example.test',user,status,'2026-10-11T10:00:00Z'))
join="""UPDATE members SET status='pending', invitation_id=? WHERE user_id=? AND status IN ('unregistered','pending') AND (invitation_id IS NULL OR invitation_id=?) AND EXISTS (SELECT 1 FROM invitations WHERE id=? AND status='active' AND expires_at>?) RETURNING status"""
def redeem(user,now='2026-10-11T12:00:00Z'):
    return db.execute(join,('link',user,'link','link',now)).fetchall()
assert redeem('new')==[('pending',)]
assert redeem('new')==[('pending',)], 'Repeated registration remains a single pending member'
assert redeem('approved')==[], 'Invitations cannot downgrade active accounts'
assert redeem('paused')==[], 'Invitations cannot unpause accounts'
assert redeem('pending','2026-10-18T10:00:00Z')==[], 'Exactly expired links are invalid'
db.execute("UPDATE invitations SET status='revoked' WHERE id='link'")
assert redeem('pending')==[], 'A revocation between lookup and update blocks registration'
assert db.execute("SELECT status,invitation_id FROM members WHERE user_id='new'").fetchone()==('pending','link')
assert db.execute("SELECT status FROM members WHERE user_id='approved'").fetchone()==('active',)
print('Invitation migration and conditional registration checks passed.')
