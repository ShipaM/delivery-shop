import { Metadata } from "next";
import GenericListPage from "../GenericListPage";
import fetchProductsByCategory from "../fetchProducts";

export const metadata: Metadata = {
  title: "All new items from the Severianochka store",
  description: "List of all new products",
};

const AllNew = async ({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; itemsPerPage?: string }>;
}) => {
  return (
    <GenericListPage
      searchParams={searchParams}
      props={{
        fetchData: ({ pagination: { startIdx, perPage } }) =>
          fetchProductsByCategory("new", { pagination: { startIdx, perPage } }),
        pageTitle: "All new",
        basePath: "/new",
        errorMessage: "There are no new products",
      }}
    />
  );
};

export default AllNew;
