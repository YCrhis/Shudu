import { User } from "./user";

export type RepairStatus =
  | "pending"
  | "in_progress"
  | "completed"
  | "cancelled";

export interface RepairEmployee {
  profiles: User;
}

export interface RepairI {
  id?: number;
  name_vehicle: string;
  title: string;
  description: string;
  vehicle_type: string;
  license_plate: string;
  vehicle_model: string;
  init_date: string;
  end_date: string;
  status: string;
  repair_employees?: RepairEmployee[];
}

export interface RepairAddedResponse {
  success: boolean;
  message: string;
  status: number;
  data: User[];
}
