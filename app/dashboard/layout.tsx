import Link from "next/link";
import LogoutButton from "@/components/LogoutButton";
import { Separator } from "@/components/ui/separator";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="flex items-center justify-between px-6 py-4 bg-white shadow">
        <Link href="/dashboard">
          <h1 className="text-2xl font-semibold text-gray-800">Makasir</h1>
        </Link>

        <LogoutButton />
      </header>
      <Separator />
      <main className="p-6">{children}</main>
    </div>
  );
}
