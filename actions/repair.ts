import { createClient } from "@/supabase/server";
import { RepairI } from "@/types/repair";

export const InsertRepair = async (repair: RepairI) => {
  try {
    const supabase = await createClient();
    const { error } = await supabase.from("repair").insert({
      name_vehicle: repair.name_vehicle,
      title: repair.title,
      description: repair.description,
      vehicle_type: repair.vehicle_type,
      vehicle_year: repair.vehicle_type,
      license_type: repair.license_type,
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
