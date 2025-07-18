"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await signIn("credentials", {
      email: form.email,
      password: form.password,
      redirect: false,
    });

    if (res?.ok) router.push("/dashboard");
    else alert("Login gagal");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <input
        name="email"
        type="email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="input"
        placeholder="Email"
      />
      <input
        name="password"
        type="password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
        className="input"
        placeholder="Password"
      />
      <button type="submit" className="btn mt-4">
        Login
      </button>
    </form>
  );
}
