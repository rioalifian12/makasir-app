"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import LogoutButton from "@/components/LogoutButton";
import { LayoutDashboard, Package, ScrollText } from "lucide-react";

export default function Sidenav() {
  const pathname = usePathname();

  const navItems = [
    {
      href: "/dashboard",
      icon: <LayoutDashboard className="w-5 h-5" />,
      label: "Dashboard",
    },
    {
      href: "/dashboard/products",
      icon: <Package className="w-5 h-5" />,
      label: "Produk",
    },
    {
      href: "/dashboard/transactions",
      icon: <ScrollText className="w-5 h-5" />,
      label: "Pelanggan",
    },
  ];

  return (
    <aside className="flex flex-col justify-between w-64 h-screen bg-white shadow-md">
      <div>
        <div className="p-4 border-b">
          <Link href="/dashboard">
            <h1 className="text-2xl font-semibold text-gray-800">Makasir</h1>
          </Link>
        </div>

        <nav className="p-4 space-y-2">
          {navItems.map((item) => (
            <Link href={item.href} key={item.href}>
              <Button
                variant={pathname === item.href ? "default" : "ghost"}
                className="justify-start w-full gap-2 mb-2 cursor-pointer"
              >
                {item.icon}
                {item.label}
              </Button>
            </Link>
          ))}
        </nav>
      </div>

      <div className="p-4 border-t cursor-pointer">
        <LogoutButton />
      </div>
    </aside>
  );
}
