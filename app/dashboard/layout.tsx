import LogoutButton from "@/components/LogoutButton";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <header className="flex justify-between p-4 border-b">
        <h1 className="text-xl font-bold">Dashboard</h1>
        <LogoutButton />
      </header>
      <main className="p-4">{children}</main>
    </div>
  );
}
