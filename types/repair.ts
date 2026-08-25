import { Timestamp } from "next/dist/server/lib/cache-handlers/types";

export interface RepairI {
    id?: number;
    name_vehicle: string;
    title: string;
    description: string;
    vehicle_type: string;
    license_type: string;
    vehicle_year: string;
    init_date: Timestamp
    end_date: Timestamp
}   