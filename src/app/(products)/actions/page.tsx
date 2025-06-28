import { ProductCardProps } from "@/types/product";
import { fetchProductsByCategory } from "../fetchProducts";
import ProductsSection from "../ProductsSection";

export const metadata = {
  title: 'Promotions of the store "Severyanochka"',
  description: "Promotional items from the Severianochka store",
};

export default async function AllActions() {
  const { data: products, error } = await fetchProductsByCategory("actions");

  if (error) {
    return <div className="text-red-500 py-8">Error: {error}</div>;
  }

  return (
    <ProductsSection
      title="All actions"
      viewAllButton={{ text: "Back to main", href: "/" }}
      products={products as ProductCardProps[]}
    />
  );
}
