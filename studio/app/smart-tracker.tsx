'use client';
import {learningReport,websiteSessions,trackerHTML} from '../lib/learning-analytics.js';
import {topics} from '../lib/content.js';
import type {StudyEvent} from '../lib/event-validation';
export default function SmartTracker({events,onPractise}:{events:StudyEvent[];onPractise:(topic:string)=>void}){const report=learningReport(websiteSessions(events),topics);return <div onClick={e=>{const el=(e.target as HTMLElement).closest<HTMLElement>('[data-coach-topic]');if(el?.dataset.coachTopic)onPractise(el.dataset.coachTopic);}} dangerouslySetInnerHTML={{__html:trackerHTML(report)}}/>;}
