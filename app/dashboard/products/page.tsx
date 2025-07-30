import { getProducts } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default async function ProductPage() {
  const products = await getProducts();

  return (
    <div className="space-y-6">
      <h2 className="mb-4 text-lg font-medium">Products</h2>
      <Separator className="mb-6" />

      <Link href="/dashboard/products/create">
        <Button
          className="cursor-pointer bg-emerald-500 hover:bg-emerald-600"
          size="sm"
          variant="default"
        >
          Add Product
        </Button>
      </Link>

      <div className="mt-4 overflow-x-auto border rounded-lg">
        {products.length === 0 ? (
          <p className="p-4 text-center text-muted-foreground">
            No products available.
          </p>
        ) : (
          <table className="min-w-full text-sm text-left table-auto">
            <thead className="text-gray-700 uppercase bg-gray-100 dark:bg-gray-800 dark:text-gray-200">
              <tr>
                <th className="px-4 py-3">#</th>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Price</th>
                <th className="px-4 py-3">Stock</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, i) => (
                <tr
                  key={product.id}
                  className="transition border-t hover:bg-muted/50"
                >
                  <td className="px-4 py-2">{i + 1}</td>
                  <td className="px-4 py-2">{product.name}</td>
                  <td className="px-4 py-2">
                    Rp{product.price.toLocaleString()}
                  </td>
                  <td className="px-4 py-2">{product.stock}</td>
                  <td className="px-4 py-2 space-x-2 text-right">
                    <Link href={`/dashboard/products/edit/${product.id}`}>
                      <Button
                        className="cursor-pointer"
                        size="sm"
                        variant="outline"
                      >
                        Edit
                      </Button>
                    </Link>
                    <form
                      action={`/dashboard/products/delete/${product.id}`}
                      method="POST"
                      className="inline"
                    >
                      <Button
                        className="cursor-pointer"
                        size="sm"
                        variant="destructive"
                        type="submit"
                      >
                        Delete
                      </Button>
                    </form>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
