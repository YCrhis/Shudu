import { createClient } from "@/supabase/server"


export const GetUser = async() => {
    try {
        const supabase = await  createClient();
        const {data: {user: session}} = await supabase.auth.getUser();

        if(!session){
            return null;
        }

        const userId = session.id;

        const {data: userData, error: userError} = await supabase.from('profiles').select("*").eq("id", userId).single()

        if(userError){
            console.error("Error calling user" , userError)
        }

        console.log(userData, ' uuuu')

        return userData

    } catch (error) {
        
    }
}