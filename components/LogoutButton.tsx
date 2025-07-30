"use client";

import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = () => {
    // Di sini bisa tambahkan clear token/session jika ada
    router.push("/");
  };

  return (
    <Button
      variant="destructive"
      className="justify-start w-full gap-2"
      onClick={handleLogout}
    >
      <LogOut className="w-5 h-5" />
      Logout
    </Button>
  );
}
