import { Timestamp } from "next/dist/server/lib/cache-handlers/types";
import { User } from "./user";

export interface RepairI {
    id?: number;
    name_vehicle: string;
    title: string;
    description: string;
    vehicle_type: string;
    license_plate: string;
    vehicle_model:string;
    init_date: string
    end_date: string
}   

export interface RepairAddedResponse {
  success: boolean;
  message: string;
  status: number;
  data: User[];
}