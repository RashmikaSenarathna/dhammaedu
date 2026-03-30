export type AttendanceStatus = 'present' | 'absent' | 'unmarked';

export interface Student {
  id: string;
  studentId: string;
  name: string;
  initials: string;
  attendance: {
    [day: string]: AttendanceStatus;
  };
  summary: number;
}

export interface AttendanceAlert {
  id: string;
  studentName: string;
  message: string;
  type: 'warning' | 'info';
  actionLabel: string;
}

export interface WeeklyData {
  day: string;
  percentage: number;
  isCurrent?: boolean;
}
