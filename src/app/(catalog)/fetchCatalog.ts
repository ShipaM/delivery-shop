import { CatalogProps } from "@/types/catalog";

export const fetchCatalog = async (): Promise<{
  data: CatalogProps[] | null;
  error: string | null;
}> => {
  try {
    const res = await fetch("/api/catalog");
    if (!res.ok) throw new Error("Failed to fetch catalog");
    const data = await res.json();
    return { data, error: null };
  } catch (error) {
    return {
      data: null,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
};
