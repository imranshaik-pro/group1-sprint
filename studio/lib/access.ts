export function accessDecision(userId:string,ownerId:string|undefined,status:string,action:string,target?:string):number {
 const admin=userId===ownerId;
 if(action==='claim-owner')return ownerId?409:200;
 if(action==='membership')return !admin?403:!target||target===userId?400:200;
 if(action==='request-access')return 200;
 return admin||status==='active'?200:403;
}
