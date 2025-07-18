import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default async function DashboardPage() {
  const productCount = await prisma.product.count();
  const transactionCount = await prisma.transaction.count();

  return (
    <div>
      <h2 className="mb-4 text-lg font-medium">Dashboard</h2>
      <Separator className="mb-6" />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Link href="/dashboard/products">
          <Card className="transition-shadow cursor-pointer hover:shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold">Produk</h3>
              <p className="text-sm text-muted-foreground">
                Kelola data produk di sini.
              </p>
              <p className="mt-2 text-2xl font-bold">{productCount}</p>
              <p className="text-sm text-muted-foreground">Total Produk</p>
            </CardContent>
          </Card>
        </Link>

        <Link href="/dashboard/transactions">
          <Card className="transition-shadow cursor-pointer hover:shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold">Transaksi</h3>
              <p className="text-sm text-muted-foreground">
                Lihat dan kelola transaksi.
              </p>
              <p className="mt-2 text-2xl font-bold">{transactionCount}</p>
              <p className="text-sm text-muted-foreground">Total Transaksi</p>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
}
