"use client";

import { Login } from "@/actions/auth";

export default  function Page() {

  const handleGoogleLogin = async () => {
    const response = await Login();
    console.log(response)
    
};

  return <button onClick={handleGoogleLogin}>Google</button>;
}
