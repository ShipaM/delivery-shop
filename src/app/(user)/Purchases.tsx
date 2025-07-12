import fetchPurchases from "./fetchPurchases";
import { CONFIG } from "../../../config/config";
import ProductsSection from "../(products)/ProductsSection";

const Purchases = async () => {
  try {
    const { items } = await fetchPurchases({
      userPurchasesLimit: CONFIG.ITEMS_PER_PAGE_MAIN_PRODUCTS,
    });

    return (
      <ProductsSection
        title="Purchased before"
        viewAllButton={{ text: "All purchases", href: "purchases" }}
        products={items}
      />
    );
  } catch {
    return (
      <div className="text-red-500">
        Ошибка: не удалось загрузить Ваши покупки
      </div>
    );
  }
};

export default Purchases;
