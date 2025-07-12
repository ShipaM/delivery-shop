import fetchProductsByCategory from "./fetchProducts";
import { CONFIG } from "../../../config/config";
import ProductsSection from "./ProductsSection";

const Actions = async () => {
  try {
    const { items } = await fetchProductsByCategory("actions", {
      randomLimit: CONFIG.ITEMS_PER_PAGE_MAIN_PRODUCTS,
    });

    return (
      <ProductsSection
        title="Actions"
        viewAllButton={{ text: "All actions", href: "actions" }}
        products={items}
      />
    );
  } catch {
    return <div className="text-red-500">Error: Failed to load stocks</div>;
  }
};

export default Actions;
