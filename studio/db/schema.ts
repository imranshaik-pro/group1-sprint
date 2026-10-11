import { sqliteTable, text, integer, index } from 'drizzle-orm/sqlite-core';
export const ownership = sqliteTable('ownership', { key: integer('key').primaryKey(), userId: text('user_id').notNull(), createdAt: text('created_at').notNull() });
export const members = sqliteTable('members', { userId: text('user_id').primaryKey(), email: text('email').notNull(), name: text('name').notNull(), status: text('status').notNull().default('pending'), invitationId: text('invitation_id'), createdAt: text('created_at').notNull() });
export const events = sqliteTable('events', { id: text('id').primaryKey(), userId: text('user_id').notNull(), eventId: text('event_id').notNull(), payload: text('payload').notNull(), createdAt: text('created_at').notNull() }, t=>[index('events_user').on(t.userId)]);
export const audit = sqliteTable('audit', { id: text('id').primaryKey(), actor: text('actor').notNull(), subject: text('subject').notNull(), action: text('action').notNull(), createdAt: text('created_at').notNull() });

export const invitations = sqliteTable('invitations', { id:text('id').primaryKey(), tokenHash:text('token_hash').notNull().unique(), label:text('label').notNull(), status:text('status').notNull().default('active'), createdBy:text('created_by').notNull(), createdAt:text('created_at').notNull(), expiresAt:text('expires_at').notNull() });
