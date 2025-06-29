import { Metadata } from "next";
import { fetchProductsByCategory } from "../fetchProducts";
import GenericListPage from "../GenericListPage";

export const metadata: Metadata = {
  title: "All new items from the Severianochka store",
  description: "List of all new products",
};

export default async function AllNew({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; itemsPerPage?: string }>;
}) {
  return (
    <GenericListPage
      searchParams={searchParams}
      props={{
        fetchData: () => fetchProductsByCategory("new"),
        pageTitle: "All new products",
        basePath: "/new",
      }}
    />
  );
}
