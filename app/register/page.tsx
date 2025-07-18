"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify(form),
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) {
      await signIn("credentials", {
        email: form.email,
        password: form.password,
        callbackUrl: "/dashboard",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Register</h1>
      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleChange}
        className="input"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        className="input"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
        className="input"
      />
      <button type="submit" className="btn mt-4">
        Register
      </button>
    </form>
  );
}
