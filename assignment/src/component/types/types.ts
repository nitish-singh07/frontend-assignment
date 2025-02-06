export interface Patient {
  id: string;
  name: string;
  condition: string;
  date: string;
  status: "Active" | "Completed" | "New";
  avatar: string;
}

export interface TestData {
  name: string;
  time: string;
  average: string;
  indicator: number[];
}

export interface WorkloadData {
  department: string;
  percentage: number;
}

export interface Appointment {
  day: string;
  date: number;
  doctor: string;
  time: string;
  patient: string;
  specialty: string;
}

export interface TestChartData {
  value: number;
  index: number;
}

export interface TestItem {
  name: string;
  time: string;
  average: string;
  data: number[];
}

export interface CalendarDay {
  day: number;
  isActive: boolean;
}

export interface AppointmentData {
  day: string;
  date: number;
  specialty: string;
  time: string;
  doctor: string;
}
