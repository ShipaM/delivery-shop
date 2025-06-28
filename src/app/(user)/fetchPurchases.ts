import { ProductCardProps } from "@/types/product";
import { getPurchases } from "../api/users/purchases/route";

export const fetchPurchases = async (): Promise<{
  data: ProductCardProps[] | null;
  error: string | null;
}> => {
  try {
    const purchases = await getPurchases();
    return {
      data: purchases as unknown as ProductCardProps[],
      error: null,
    };
  } catch (err) {
    const error = err instanceof Error ? err.message : "Unknown error";
    console.error(`Error while getting purchases:`, err);
    return {
      data: null,
      error,
    };
  }
};
