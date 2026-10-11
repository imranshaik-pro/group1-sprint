export function accessDecision(userId:string,ownerId:string|undefined,status:string,action:string,target?:string):number {
 const admin=userId===ownerId;
 if(action==='claim-owner')return ownerId?409:200;
 if(['create-invitation','revoke-invitation'].includes(action))return admin?200:403;
 if(action==='redeem-invitation')return ownerId?200:403;
 if(action==='membership')return !admin?403:!target||target===userId?400:200;
 if(action==='request-access')return status==='unregistered'?403:200;
 return admin||status==='active'?200:403;
}
