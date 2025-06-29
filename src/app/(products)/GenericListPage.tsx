import ArticleSection from "../(articles)/ArticlesSection";
import { ProductCardProps } from "@/types/product";
import { ContentItem } from "@/types/contentItem";
import ProductsSection from "./ProductsSection";
import { ArticleCardProps } from "@/types/articleCard";
import { CONFIG } from "../../../config/config";
import PaginationWrapper from "@/components/PaginationWrapper";
type GenericListPageProps = {
  fetchData: () => Promise<{
    data: ContentItem[] | null;
    error: string | null;
  }>;
  pageTitle: string;
  basePath: string;
  contentType?: "articles";
};

const GenericListPage = async ({
  searchParams,
  props,
}: {
  searchParams: Promise<{ page?: string; itemsPerPage?: string }>;
  props: GenericListPageProps;
}) => {
  const params = await searchParams;
  const page = params?.page;
  const itemsPerPage = params?.itemsPerPage || CONFIG.ITEMS_PER_PAGE;

  const currentPage = Number(page) || 1;
  const perPage = Number(itemsPerPage);
  const startIdx = (currentPage - 1) * perPage;

  const { data: items, error } = await props.fetchData();
  console.log("items", items);
  const paginatedItems = items?.slice(startIdx, startIdx + perPage);

  if (error) {
    return <div className="text-red-500 py-8">Error: {error}</div>;
  }

  return (
    <>
      {!props.contentType ? (
        <ProductsSection
          title={props.pageTitle}
          viewAllButton={{ text: "Go to main", href: "/" }}
          products={paginatedItems as ProductCardProps[]}
        />
      ) : (
        <ArticleSection
          title={props.pageTitle}
          viewAllButton={{ text: "Go to main", href: "/" }}
          articles={paginatedItems as ArticleCardProps[]}
        />
      )}

      {items && items?.length > perPage && (
        <PaginationWrapper
          totalItems={items?.length}
          currentPage={currentPage}
          basePath={props.basePath}
          contentType={props.contentType}
        />
      )}
    </>
  );
};

export default GenericListPage;
