"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const res = await signIn("credentials", {
      email: form.email,
      password: form.password,
      redirect: false,
    });

    if (res?.ok) {
      router.push("/dashboard");
    } else {
      setError("Email atau password salah.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-8 bg-muted">
      <Card className="w-full max-w-md border shadow-md border-border">
        <CardHeader className="pb-0 space-y-1 text-center">
          <CardTitle className="text-2xl font-semibold">Login</CardTitle>
        </CardHeader>

        <form onSubmit={handleSubmit}>
          <CardContent className="px-6 py-6 space-y-4">
            {error && (
              <div className="px-3 py-2 text-sm text-red-600 bg-red-100 rounded-md">
                {error}
              </div>
            )}

            <div className="space-y-1">
              <Label className="mb-3" htmlFor="email">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
            </div>

            <div className="space-y-1">
              <Label className="mb-3" htmlFor="password">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                required
              />
            </div>
          </CardContent>

          <CardFooter className="flex flex-col gap-4 px-6 py-4">
            <Button type="submit" className="w-full cursor-pointer">
              Login
            </Button>
            <p className="text-sm text-center text-muted-foreground">
              Belum punya akun?{" "}
              <Link href="/register" className="text-primary hover:underline">
                Daftar di sini
              </Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
