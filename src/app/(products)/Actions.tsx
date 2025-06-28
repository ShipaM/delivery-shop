import { ProductCardProps } from "@/types/product";
import ProductsSection from "./ProductsSection";
import { fetchProductsByCategory } from "./fetchProducts";

export default async function AllActions() {
  const { data: products, error } = await fetchProductsByCategory("actions");

  if (error) {
    return <div className="text-red-500 py-8">Error: {error}</div>;
  }

  return (
    <ProductsSection
      title="All actions"
      viewAllButton={{ text: "All actions", href: "/actions" }}
      products={products as ProductCardProps[]}
      compact
    />
  );
}
