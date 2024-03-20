"use client";

import { FiLogOut } from "react-icons/fi";
import React from "react";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

function LogoutButton() {
  const router = useRouter();

  const supabase = createClientComponentClient();
  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.log(error);
    }
    router.push("/");
  };
  return (
    <button onClick={handleLogout} className="">
      <FiLogOut />
    </button>
  );
}

export default LogoutButton;
