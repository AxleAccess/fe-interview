export interface CalendarEvent {
  id: string;
  name: string;
  color: string;
  dates: string[]; // YYYY-MM-DD
}

export const CALENDAR_START_DATE = '2025-10-19';

function generateDateRange(startDate: string, endDate: string): string[] {
  const dates: string[] = [];
  const start = new Date(startDate);
  const end = new Date(endDate);

  for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
    dates.push(d.toISOString().split('T')[0]);
  }

  return dates;
}

export const MOCK_EVENTS: CalendarEvent[] = [
  {
    id: '1',
    name: 'Acme Corp - Campus Visit',
    color: '#3B82F6',
    dates: ['2025-10-20']
  },
  {
    id: '2',
    name: 'Goldman Sachs - Info Session',
    color: '#8B5CF6',
    dates: ['2025-10-21', '2025-10-22']
  },
  {
    id: '3',
    name: 'Tech Career Fair',
    color: '#10B981',
    dates: generateDateRange('2025-10-22', '2025-10-25')
  },
  {
    id: '4',
    name: 'Microsoft - Engineering Workshop',
    color: '#F59E0B',
    dates: ['2025-10-23', '2025-10-24']
  },
  {
    id: '5',
    name: 'Meta - Product Design Session',
    color: '#EF4444',
    dates: ['2025-10-23']
  },
  {
    id: '6',
    name: 'Startup Networking Lunch',
    color: '#EC4899',
    dates: ['2025-10-24']
  },
  {
    id: '7',
    name: 'McKinsey & Co - Consulting Summit',
    color: '#6366F1',
    dates: generateDateRange('2025-10-27', '2025-11-02')
  },
  {
    id: '8',
    name: 'Deloitte - Leadership Development',
    color: '#14B8A6',
    dates: [
      '2025-10-28', '2025-10-29',
      '2025-11-03', '2025-11-04'
    ]
  },
  {
    id: '9',
    name: 'AWS - Cloud Computing Bootcamp',
    color: '#F97316',
    dates: generateDateRange('2025-11-06', '2025-11-08')
  },
  {
    id: '10',
    name: 'J.P. Morgan - Investment Banking Forum',
    color: '#06B6D4',
    dates: generateDateRange('2025-11-09', '2025-11-11')
  },
  {
    id: '11',
    name: 'Boston Consulting Group - Case Workshop Day 1',
    color: '#8B5CF6',
    dates: ['2025-11-12']
  },
  {
    id: '12',
    name: 'Boston Consulting Group - Case Workshop Day 2',
    color: '#8B5CF6',
    dates: ['2025-11-13']
  },
  {
    id: '13',
    name: 'Finance Industry Expo',
    color: '#10B981',
    dates: generateDateRange('2025-11-12', '2025-11-14')
  },
  {
    id: '14',
    name: 'Google - Coffee Chats',
    color: '#EF4444',
    dates: ['2025-11-13']
  },
  {
    id: '15',
    name: 'Fall Recruiting Season - Open Access',
    color: '#64748B',
    dates: generateDateRange('2025-11-10', '2025-11-21')
  },
  {
    id: '16',
    name: 'Salesforce - Sales Engineer Panel',
    color: '#3B82F6',
    dates: ['2025-11-17']
  },
  {
    id: '17',
    name: 'Bain & Company - Strategy Workshop',
    color: '#F59E0B',
    dates: ['2025-11-18']
  },
  {
    id: '18',
    name: 'Apple - Design Thinking Session',
    color: '#EC4899',
    dates: ['2025-11-20']
  },
  {
    id: '19',
    name: 'Stripe - Engineering Mixer',
    color: '#F97316',
    dates: generateDateRange('2025-11-21', '2025-11-22')
  },
  {
    id: '20',
    name: 'Bloomberg - Data Analytics Day',
    color: '#06B6D4',
    dates: ['2025-10-20']
  },
  {
    id: '21',
    name: 'LinkedIn Recruiter Meetup',
    color: '#0A66C2',
    dates: ['2025-10-23']
  },
  {
    id: '22',
    name: 'Resume Review Workshop',
    color: '#7C3AED',
    dates: ['2025-10-23']
  },
  {
    id: '23',
    name: 'Networking Happy Hour',
    color: '#F472B6',
    dates: ['2025-10-23']
  },
  {
    id: '24',
    name: 'IBM - AI Research Presentation',
    color: '#0F62FE',
    dates: ['2025-11-13']
  },
  {
    id: '25',
    name: 'Twitter/X - Social Media Panel',
    color: '#1DA1F2',
    dates: ['2025-11-13']
  },
  {
    id: '26',
    name: 'Career Services Drop-In',
    color: '#059669',
    dates: ['2025-11-13']
  },
  {
    id: '27',
    name: 'Uber - Product Manager Talk',
    color: '#000000',
    dates: ['2025-11-13']
  },
  {
    id: '28',
    name: 'Adobe - Creative Workshop',
    color: '#FF0000',
    dates: ['2025-10-30']
  },
  {
    id: '29',
    name: 'Spotify - Engineering Culture Talk',
    color: '#1DB954',
    dates: ['2025-10-30']
  },
  {
    id: '30',
    name: 'Tesla - Manufacturing Tour',
    color: '#CC0000',
    dates: ['2025-10-30']
  },
  {
    id: '31',
    name: 'Netflix - Content Strategy Session',
    color: '#E50914',
    dates: ['2025-10-30']
  },
  {
    id: '32',
    name: 'Interview Prep Bootcamp',
    color: '#9333EA',
    dates: ['2025-10-30']
  },
  {
    id: '33',
    name: 'Alumni Networking Event',
    color: '#14B8A6',
    dates: ['2025-10-30']
  }
];
