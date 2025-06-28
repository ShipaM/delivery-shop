import { fetchPurchases } from "./fetchPurchases";
import ProductsSection from "../(products)/ProductsSection";

const Purchases = async () => {
  const { data: purchases, error } = await fetchPurchases();

  if (error) {
    return <div className="text-red-500 py-8">Error: {error}</div>;
  }

  return (
    <ProductsSection
      title="Purchased before"
      viewAllButton={{ text: "All purchases", href: "purchases" }}
      products={purchases || []}
      compact
    />
  );
};

export default Purchases;
