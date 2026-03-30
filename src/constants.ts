import { Student, AttendanceAlert, WeeklyData } from './types';

export const MOCK_STUDENTS: Student[] = [
  {
    id: '1',
    studentId: '2023-0104',
    name: 'Ananda Kassapa',
    initials: 'AK',
    attendance: {
      'Mon 23': 'present',
      'Tue 24': 'present',
      'Wed 25': 'present',
      'Thu 26': 'unmarked',
      'Fri 27': 'present',
    },
    summary: 80,
  },
  {
    id: '2',
    studentId: '2023-0105',
    name: 'Dhammananda Nayaka',
    initials: 'DN',
    attendance: {
      'Mon 23': 'present',
      'Tue 24': 'present',
      'Wed 25': 'present',
      'Thu 26': 'present',
      'Fri 27': 'present',
    },
    summary: 100,
  },
  {
    id: '3',
    studentId: '2023-0106',
    name: 'Sumana Mahinda',
    initials: 'SM',
    attendance: {
      'Mon 23': 'present',
      'Tue 24': 'absent',
      'Wed 25': 'present',
      'Thu 26': 'present',
      'Fri 27': 'present',
    },
    summary: 80,
  },
  {
    id: '4',
    studentId: '2023-0107',
    name: 'Vimutti Ratana',
    initials: 'VR',
    attendance: {
      'Mon 23': 'unmarked',
      'Tue 24': 'unmarked',
      'Wed 25': 'unmarked',
      'Thu 26': 'unmarked',
      'Fri 27': 'unmarked',
    },
    summary: 0,
  },
];

export const MOCK_ALERTS: AttendanceAlert[] = [
  {
    id: 'a1',
    studentName: 'Sariputta Thera',
    message: 'Missed 3 consecutive sessions',
    type: 'warning',
    actionLabel: 'Notify',
  },
  {
    id: 'a2',
    studentName: 'Rahul Anuludha',
    message: 'Medical leave documented',
    type: 'info',
    actionLabel: 'View',
  },
];

export const WEEKLY_DISTRIBUTION: WeeklyData[] = [
  { day: 'MON', percentage: 92 },
  { day: 'TUE', percentage: 98 },
  { day: 'WED', percentage: 98, isCurrent: true },
  { day: 'THU', percentage: 70 },
  { day: 'FRI', percentage: 85 },
];
