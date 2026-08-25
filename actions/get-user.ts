import { createClient } from "@/supabase/server";

export const GetUser = async () => {
  try {
    const supabase = await createClient();
    const {
      data: { user: session },
    } = await supabase.auth.getUser();

    if (!session) {
      return null;
    }

    const userId = session.id;

    const { data: userData, error: userError } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", userId)
      .single();

    if (userError) {
      console.error("Error calling user", userError);
    }

    return userData;
  } catch (error) {}
};

export const GetAllUsers = async () => {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("profiles")
      .select(`*`);
    
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
      data
    };
  } catch (error) {
    return {
      success: false,
      message: error,
      status: 400,
    };
  }
};
