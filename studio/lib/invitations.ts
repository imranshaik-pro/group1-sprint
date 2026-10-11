export function newInvitationToken():string {
 return Array.from(crypto.getRandomValues(new Uint8Array(32)),b=>b.toString(16).padStart(2,'0')).join('');
}
export async function invitationHash(token:unknown):Promise<string|null> {
 if(typeof token!=='string'||!/^\p{ASCII_Hex_Digit}{64}$/u.test(token))return null;
 const digest=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(token));
 return Array.from(new Uint8Array(digest),b=>b.toString(16).padStart(2,'0')).join('');
}
export function invitationUsable(invitation:{status:string;expiresAt:string}|undefined,now=Date.now()):boolean {
 return !!invitation&&invitation.status==='active'&&Date.parse(invitation.expiresAt)>now;
}
export function invitationJoinStatus(status:string):string {
 // An invitation only requests admission; it cannot unpause or approve an account.
 return status==='unregistered'?'pending':status;
}
