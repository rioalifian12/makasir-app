import { Separator } from "@/components/ui/separator";
import Sidebar from "@/components/ui/dashboard/Sidenav";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <Separator />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
