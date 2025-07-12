import GenericListPage from "@/app/(products)/GenericListPage";
import fetchArticles from "../fetchArticles";

export const metadata = {
  title: 'Articles on the website of the store "Severyanochka"',
  description: 'Read articles on the website of the store "Severyanochka"',
};

const AllArticles = async ({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; itemsPerPage?: string }>;
}) => {
  return (
    <GenericListPage
      searchParams={searchParams}
      props={{
        fetchData: () => fetchArticles(),
        pageTitle: "All articles",
        basePath: "/articles",
        contentType: "articles",
        errorMessage: "Error: Failed to load articles",
      }}
    />
  );
};

export default AllArticles;
