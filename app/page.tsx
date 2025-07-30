"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex flex-col items-center justify-center h-screen px-4 text-center bg-gray-100">
      <h1 className="mb-2 text-4xl font-bold text-gray-800">Makasir App</h1>
      <p className="mb-6 text-gray-600">
        Aplikasi kasir modern berbasis web untuk membantu UMKM dan toko ritel
        mengelola transaksi harian dengan mudah dan efisien.
      </p>
      <Button
        onClick={() => router.push("/login")}
        className="px-6 py-2 text-base cursor-pointer"
      >
        Login
      </Button>
    </main>
  );
}
