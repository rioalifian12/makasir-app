import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.product.delete({
      where: {
        id: params.id,
      },
    });

    return NextResponse.redirect(new URL("/dashboard/products", request.url));
  } catch (error) {
    console.error("Failed to delete product:", error);
    return new NextResponse("Failed to delete product", { status: 500 });
  }
}
