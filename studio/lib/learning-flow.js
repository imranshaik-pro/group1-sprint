import {batch4Lessons} from './curriculum-batch4.js';
import {batch3Lessons} from './curriculum-batch3.js';
import {topics} from './content.js';
import {batch1Lessons} from './curriculum-batch1.js';
import {batch2Lessons} from './curriculum-batch2.js';
const topicIds=new Set(topics.map(t=>t.id));
export function lessonSegmentCount(id){if(!topicIds.has(id))return 0;return (batch4Lessons[id]||batch3Lessons[id]||batch2Lessons[id]||batch1Lessons[id])?.segments.length||(['t-1-1','t-5-0'].includes(id)?4:1);}
export const stages=['learn','recall','practice','revise'];
export function latestFlow(events,topic){return events.filter(e=>e.type==='learning-flow'&&e.data.topic===topic).at(-1)?.data||{topic,stage:'learn',segment:0,answers:['','',''],reviewed:false,reflection:'',practiceDone:false};}
export function validFlow(d){return !!d&&/^t-[0-6]-[0-9]$/.test(d.topic)&&stages.includes(d.stage)&&Number.isInteger(d.segment)&&d.segment>=0&&d.segment<lessonSegmentCount(d.topic)&&Array.isArray(d.answers)&&d.answers.length===3&&d.answers.every(a=>typeof a==='string'&&a.length<=1500)&&typeof d.reviewed==='boolean'&&typeof d.reflection==='string'&&d.reflection.length<=1500&&(!('practiceDone' in d)||typeof d.practiceDone==='boolean');}
export function canAdvance(d){return d.stage==='learn'||d.stage==='recall'&&d.reviewed&&d.answers.every(a=>a.trim().length>=10)||d.stage==='practice'&&d.reflection.trim().length>=10;}
export const teluguSegments=[
 {title:'హక్కులు ఎందుకు అవసరం?',text:'ప్రభుత్వానికి అధికారం ఉంది. కానీ ఆ అధికారం ఉపయోగించినప్పుడు మన గౌరవం, సమానత్వం, స్వేచ్ఛను కాపాడాలి. హక్కు అంటే కేవలం వాగ్దానం కాదు: ఉల్లంఘన జరిగితే న్యాయ పరిష్కారం పొందే మార్గం కూడా ఉండాలి.',example:'ఒక ప్రభుత్వ కార్యాలయంలో మీపై వివక్ష జరిగిందనుకోండి. ఏ హక్కు వర్తిస్తుంది, పరిష్కారం కోసం ఎక్కడికి వెళ్లాలి అని ఆలోచించడం ఈ పాఠం ఉద్దేశం.'},
 {title:'సమానత్వం, స్వేచ్ఛ వేర్వేరు',text:'సమానత్వం అంటే చట్టం ముందు సమానంగా చూడటం. స్వేచ్ఛ అంటే మనకు ఉన్న నిర్దిష్ట స్వేచ్ఛలు. రెండూ ఒకే విషయం కావు. సమానత్వ హక్కులు Articles 14–18; స్వేచ్ఛకు సంబంధించిన హక్కులు Articles 19–22. ⚠ ఖచ్చితమైన పరిధి, మినహాయింపులను రాజ్యాంగంలో చూడండి.',example:'ఒకరిపై వివక్ష చూపడం, ఒకరి భావప్రకటనను పరిమితం చేయడం వేర్వేరు సమస్యలు. ముందుగా సమస్యను గుర్తించి, తరువాత సంబంధిత హక్కును ఎంచుకోండి.'},
 {title:'పరీక్షలో వచ్చే గందరగోళం',text:'Article 17 అంటరానితనాన్ని రద్దు చేస్తుంది. ఆస్తి హక్కు ప్రస్తుతం ప్రాథమిక హక్కు కాదు; Article 300A కింద రాజ్యాంగ హక్కు. ⚠ అధికారిక పాఠ్యంలో ఖచ్చితమైన పదాలను పరిశీలించండి.',example:'“రాజ్యాంగంలో ఉంది” అంటే తప్పనిసరిగా “ప్రాథమిక హక్కు” అని కాదు. ఈ రెండు వర్గాలను కలిపేయడం ఒక సాధారణ పొరపాటు.'},
 {title:'మీ మాటల్లో చెప్పండి',text:'నోట్స్ మూసేయండి. హక్కులు ఎందుకు అవసరం? సమానత్వం, స్వేచ్ఛ మధ్య తేడా ఏమిటి? ఆస్తి హక్కు ఏ వర్గంలో ఉంది? మీ మాటల్లో చెప్పగలిగితే తరువాతి దశకు వెళ్లండి.',example:'చిన్న పరీక్షలో మంచి స్కోరు రావడం ఒక్కటే పట్టు సాధించినట్లు కాదు. రోజులు గడిచిన తరువాత కూడా గుర్తు చేసుకోగలగాలి.'}
];
export const recallPrompts=['Why does a right need a remedy? హక్కుకు పరిష్కార మార్గం ఎందుకు అవసరం?','Explain equality versus freedom and their article groups. సమానత్వం, స్వేచ్ఛ మధ్య తేడా చెప్పండి.','Explain untouchability and the present status of property. అంటరానితనం, ఆస్తి హక్కు గురించి చెప్పండి.'];
export const recallReferences=['Rights need an enforceable remedy when violated.','Equality: Articles 14–18; freedom: Articles 19–22. Verify the scope in the Constitution.','Article 17 abolishes untouchability; property is a constitutional right under Article 300A, outside Part III.'];

