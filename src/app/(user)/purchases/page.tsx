import GenericListPage from "@/app/(products)/GenericListPage";
import fetchPurchases from "../fetchPurchases";

const AllPurchases = async ({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; itemsPerPage?: string }>;
}) => {
  return (
    <GenericListPage
      searchParams={searchParams}
      props={{
        fetchData: () => fetchPurchases(),
        pageTitle: "All purchases",
        basePath: "/purchases",
        errorMessage: "Failed to load purchases",
      }}
    />
  );
};

export default AllPurchases;
