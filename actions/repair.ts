import { createClient } from "@/supabase/server";
import { RepairI } from "@/types/repair";
import { User } from "@/types/user";

export const InsertRepair = async (repair: RepairI) => {
  try {
    const supabase = await createClient();
    const { error, data } = await supabase
      .from("repair")
      .insert({
        name_vehicle: repair.name_vehicle,
        title: repair.title,
        description: repair.description,
        vehicle_type: repair.vehicle_type,
        license_plate: repair.license_plate,
        vehicle_model: repair.vehicle_model,
        init_date: repair.init_date,
        end_date: repair.end_date,
      })
      .select("id")
      .single();

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
      status: 200,
      data: data,
    };
  } catch (error) {
    return {
      success: false,
      message: error,
      status: 400,
    };
  }
};

export const InsertEmployeeRepair = async (emp: User[], idRepair: string) => {
  const supabase = await createClient();

  const createBody = emp.map((e) => ({
    repair_id: idRepair,
    user_id: e.id,
  }));

  const { error } = await supabase.from("repair_employees").insert(createBody);

  if (error) {
    return {
      success: false,
      message: error.message,
      status: 400,
    };
  }

  return {
    success: true,
    message: "employee added to repair successfully",
    status: 201,
  };
};

export const ListRepairs = async () => {
  const supabase = await createClient();
  const { data, error } = await supabase.from("repair").select(`
  *,
  repair_employees (
    profiles(
      id,
      email,
      full_name,
      avatar_url
    )
  )
`);

  if (error) {
    return {
      success: false,
      message: error.message,
      status: 400,
    };
  }

  return {
    success: true,
    message: "ok",
    status: 200,
    data,
  };
};
