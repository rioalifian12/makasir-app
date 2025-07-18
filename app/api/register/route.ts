import { prisma } from "@/lib/prisma";
import { hash } from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, email, password } = await req.json();

  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) {
    return NextResponse.json({ error: "User sudah ada" }, { status: 400 });
  }

  const hashed = await hash(password, 10);

  const user = await prisma.user.create({
    data: { name, email, password: hashed },
  });

  return NextResponse.json(user);
}
