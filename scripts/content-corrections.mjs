// Narrow, source-backed corrections. These do not approve the rest of a question bank.
export function correctContent(q){
 if(q.id==='geo-atmosphere-climatology-mcq-1'){
  const explanation=q.explanation.replace(/~0\.03%/g,'roughly 0.04% (variable; VERIFY the dated measurement)').replace(/\| Carbon dioxide \| 0\.03% \|/g,'| Carbon dioxide | roughly 0.04%; variable — VERIFY |');
  return {...q,explanation,corrections:[{field:'explanation',original:q.explanation,reason:'Outdated atmospheric CO2 approximation; retain variable/date caveat.',source:'https://www.noaa.gov/jetstream/atmosphere',checkedOn:'2026-10-10'}]};
 }
 if(q.id==='hist-ap-andhra-movement-formation-mcq-19')return {...q,source:'https://www.indiacode.nic.in/bitstream/123456789/2123/1/A2014-6.pdf',explanation:'Section 5(1) of the Andhra Pradesh Reorganisation Act, 2014 established Hyderabad as a common capital for a period not exceeding ten years from the appointed day. This question concerns that historical provision. Section 46 addresses revenue distribution and development incentives, not the common-capital provision. VERIFY the exact wording and dated amendments against India Code; distinguish the original provision from later capital arrangements.',corrections:[{field:'explanation',original:q.explanation,reason:'Identify Section 5 explicitly; remove reliance on an unsourced Wikipedia verification claim and distinguish the historical provision.',source:'https://www.indiacode.nic.in/bitstream/123456789/2123/1/A2014-6.pdf',checkedOn:'2026-10-10'}]};
 return q;
}
