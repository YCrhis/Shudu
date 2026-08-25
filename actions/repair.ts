import { createClient } from "@/supabase/server";
import { RepairI } from "@/types/repair";

export const InsertRepair = async (repair: RepairI) => {
  try {
      console.log("REPAIR RECEIVED:", repair);
    console.log("NAME VEHICLE:", repair.name_vehicle);
    const supabase = await createClient();
    const { error } = await supabase.from("repair").insert({
      name_vehicle: repair.name_vehicle,
      title: repair.title,
      description: repair.description,
      vehicle_type: repair.vehicle_type,
      license_plate: repair.license_plate,
      vehicle_model: repair.vehicle_model,
      init_date: repair.init_date,
      end_date: repair.end_date,
    });

    if (error) {
      return {
        success: false,
        message: error.message,
        status: 400,
      };
    }

    return {
      success: true,
      message: "repair added successfully",
      status: 201,
    };
  } catch (error) {
    return {
      success: false,
      message: error,
      status: 400,
    };
  }
};
