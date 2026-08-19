'use client'

import { Logout } from "@/actions/auth";

const InPage = () => {

   const handleLogout = async () => {
    const response = await Logout();

    if (!response.success) {
      console.error(response.message);
      return;
    }

    window.location.href = "/auth";
  };

  return (
     <button onClick={handleLogout}>
      Logout
    </button>
  )
}

export default InPage