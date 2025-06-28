import { ProductCardProps } from "@/types/product";
import { Metadata } from "next";
import { fetchProductsByCategory } from "../fetchProducts";
import ProductsSection from "../ProductsSection";

export const metadata: Metadata = {
  title: "All new items from the Severianochka store",
  description: "List of all new products",
};

export default async function AllNew() {
  const { data: products, error } = await fetchProductsByCategory("new");

  if (error) {
    return <div className="text-red-500 py-8">Error: {error}</div>;
  }

  return (
    <ProductsSection
      title="All new products"
      viewAllButton={{ text: "Back to main", href: "/" }}
      products={products as ProductCardProps[]}
    />
  );
}
