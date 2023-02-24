
import {
  ClipboardDocumentListIcon,
  UserIcon,
  VideoCameraIcon,
  ViewfinderCircleIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  CheckCircleIcon,
  UsersIcon,
 } from "@heroicons/react/24/outline"
 import {HomeIcon} from '@heroicons/react/24/solid'

 
// routing 
export const navlinks = [
  {
    name: 'All Campaigns',
    Icon: HomeIcon,
    link: '/',
    disabled: false,
  },
  {
    name: 'Share Your Story',
    Icon: ClipboardDocumentListIcon, 
    link: '/Forum',
    disabled: false,
  },
  {
    name: 'Educational Videos',
    Icon: VideoCameraIcon, 
    link: '/Streaming',
    disabled: false,
  },
  {
    name: 'Your Profile',
    Icon: UserIcon,
    link: '/Profile',
    disabled: false,
  },
  {
    name: 'Clinical Therapists',
    Icon: UsersIcon,
    link: '/Supporter',
    disabled: false,
  },
  {
    name: 'Your Campaigns',
    Icon: ChatBubbleOvalLeftEllipsisIcon,
    link: '/Your_Campaign',
    disabled: false,
  },
];

export const abuse_category =[
  { name: 'A victim of economic abuse in Japan', Icon: UserIcon, },
  { name: 'Sexual Harassments in Japan', Icon: CheckCircleIcon, },
  { name: 'Rapes in Japan', Icon: CheckCircleIcon, },
  { name: 'Economic Abuses', Icon: CheckCircleIcon, },
  { name: 'Gaslighting', Icon: CheckCircleIcon, },
  { name: 'Parental Coercive Control', Icon: CheckCircleIcon, },
  { name: 'Power Harassment', Icon: CheckCircleIcon, },
  { name: 'Cult Brain-Wash', Icon: CheckCircleIcon, },
  { name: 'Corporate Burrying', Icon: CheckCircleIcon, },

]

export const psychosis_category = [
  { name: 'PTSD', Icon: CheckCircleIcon, },
  { name: 'C-PTSD', Icon: CheckCircleIcon, },
  { name: 'Depression', Icon: CheckCircleIcon, },
  { name: 'Schizopherenia', Icon: CheckCircleIcon, },
  { name: 'Hypochondriasis', Icon: CheckCircleIcon, },
  { name: 'Narcissistc Personality Disorder', Icon: CheckCircleIcon, },
  { name: 'Insomnia', Icon: CheckCircleIcon, },
  { name: 'Bipolar disorder', Icon: CheckCircleIcon, },
];

export const treatment_category = [
  { name: 'Music Therapy', Icon: CheckCircleIcon, },
  { name: 'Cognitive Processing Therapy', Icon: CheckCircleIcon, },
  { name: 'Prolonged Exposure Therapy', Icon: CheckCircleIcon, },
  { name: 'Stress Inoculation Training', Icon: CheckCircleIcon, },
]; 



export const supporter_category = [
  { name: 'Clinical Psychologist', Icon: CheckCircleIcon, },
  { name: 'Non Profit Org', Icon: CheckCircleIcon, },
  { name: 'Public Service', Icon: CheckCircleIcon, },
  { name: 'Others', Icon: CheckCircleIcon, },
]; 

