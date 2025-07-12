import fetchProductsByCategory from "../fetchProducts";
import GenericListPage from "../GenericListPage";

export const metadata = {
  title: 'Promotions of the store "Severyanochka"',
  description: "Promotional items from the Severianochka store",
};

const AllActions = async ({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; itemsPerPage?: string }>;
}) => {
  return (
    <GenericListPage
      searchParams={searchParams}
      props={{
        fetchData: ({ pagination: { startIdx, perPage } }) =>
          fetchProductsByCategory("actions", {
            pagination: { startIdx, perPage },
          }),
        pageTitle: "All actions",
        basePath: "/actions",
        errorMessage: "Error: Failed to load stocks",
      }}
    />
  );
};

export default AllActions;
