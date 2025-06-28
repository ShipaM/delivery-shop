import { ProductCardProps } from "@/types/product";
import { getProductsByCategory } from "../api/products/route";

export const fetchProductsByCategory = async (
  category: string
): Promise<{
  data: ProductCardProps[] | null;
  error: string | null;
}> => {
  try {
    const products = await getProductsByCategory(category);
    const availableProducts = products.filter(
      (product) => product.quantity > 0
    );
    return {
      data: availableProducts as unknown as ProductCardProps[],
      error: null,
    };
  } catch (err) {
    const error = err instanceof Error ? err.message : "Unknown error";
    console.error(`Error while getting category products "${category}":`, err);
    return {
      data: null,
      error,
    };
  }
};
