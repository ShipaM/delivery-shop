import fetchProductsByCategory from "./fetchProducts";
import { CONFIG } from "../../../config/config";
import ProductsSection from "./ProductsSection";

const NewProducts = async () => {
  try {
    const { items } = await fetchProductsByCategory("new", {
      randomLimit: CONFIG.ITEMS_PER_PAGE_MAIN_PRODUCTS,
    });
    return (
      <ProductsSection
        title="Новинки"
        viewAllButton={{ text: "All new", href: "new" }}
        products={items}
      />
    );
  } catch {
    return <div className="text-red-500">Error: failed to load new items</div>;
  }
};

export default NewProducts;
