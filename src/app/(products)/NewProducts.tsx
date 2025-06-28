import { ProductCardProps } from "@/types/product";
import ProductsSection from "./ProductsSection";
import { fetchProductsByCategory } from "./fetchProducts";

export default async function NewProducts() {
  const { data: products, error } = await fetchProductsByCategory("new");

  if (error) {
    return <div className="text-red-500 py-8">Error: {error}</div>;
  }

  return (
    <ProductsSection
      title="All new products"
      viewAllButton={{ text: "All new products", href: "/new" }}
      products={products as ProductCardProps[]}
      compact
    />
  );
}
