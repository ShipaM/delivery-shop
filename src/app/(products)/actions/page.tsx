import { fetchProductsByCategory } from "../fetchProducts";
import GenericListPage from "../GenericListPage";

export const metadata = {
  title: 'Promotions of the store "Severyanochka"',
  description: "Promotional items from the Severianochka store",
};

export default async function AllActions({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; itemsPerPage?: string }>;
}) {
  return (
    <GenericListPage
      searchParams={searchParams}
      props={{
        fetchData: () => fetchProductsByCategory("actions"),
        pageTitle: "All actions",
        basePath: "/actions",
      }}
    />
  );
}
