"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

type Product = {
  id?: string;
  name?: string;
  price?: number;
  stock?: number;
};

export default function ProductForm({ product }: { product?: Product }) {
  const router = useRouter();

  const [name, setName] = useState(product?.name || "");
  const [price, setPrice] = useState(product?.price || 0);
  const [stock, setStock] = useState(product?.stock || 0);

  const isEdit = !!product?.id;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const body = { name, price, stock };

    await fetch(`/api/products${isEdit ? `/${product.id}` : ""}`, {
      method: isEdit ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    router.push("/dashboard/products");
    router.refresh();
  };

  return (
    <div>
      <h2 className="mb-4 text-lg font-medium">Products</h2>
      <Separator className="mb-6" />

      <Card className="max-w-md mx-auto">
        <CardContent className="pt-6 space-y-4">
          <h2 className="mb-4 text-2xl font-semibold">Edit Product</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="price">Price</Label>
              <Input
                id="price"
                type="number"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="stock">Stock</Label>
              <Input
                id="stock"
                type="number"
                value={stock}
                onChange={(e) => setStock(Number(e.target.value))}
                required
              />
            </div>
            <Button type="submit" className="w-full cursor-pointer">
              {isEdit ? "Update" : "Create"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
