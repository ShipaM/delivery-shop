import ProductsSection from "@/app/(products)/ProductsSection";
import { fetchPurchases } from "../fetchPurchases";

const AllNew = async () => {
  const { data: purchases, error } = await fetchPurchases();

  if (error) {
    return <div className="text-red-500 py-8">Error: {error}</div>;
  }

  return (
    <ProductsSection
      title="All purchases"
      viewAllButton={{ text: "Back to main", href: "/" }}
      products={purchases || []}
    />
  );
};

export default AllNew;
