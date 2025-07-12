import { CONFIG } from "../../../config/config";
import PaginationWrapper from "@/components/PaginationWrapper";
import ArticleSection from "../(articles)/ArticlesSection";
import { ProductCardProps } from "@/types/product";
import { ArticleCardProps } from "@/types/articleCard";
import ProductsSection from "./ProductsSection";
import { PaginatedResponse } from "@/types/contentItem";

export interface GenericListPageProps {
  fetchData: (options: {
    pagination: { startIdx: number; perPage: number };
  }) => Promise<PaginatedResponse>;
  pageTitle: string;
  basePath: string;
  errorMessage: string;
  contentType?: "articles";
}

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

  try {
    const { items, totalCount } = await props.fetchData({
      pagination: { startIdx, perPage },
    });

    const totalPages = Math.ceil(totalCount / perPage);

    return (
      <>
        {!props.contentType ? (
          <ProductsSection
            title={props.pageTitle}
            products={items as ProductCardProps[]}
          />
        ) : (
          <ArticleSection
            title={props.pageTitle}
            articles={items as ArticleCardProps[]}
          />
        )}

        {totalPages > 1 && (
          <PaginationWrapper
            totalItems={totalCount}
            currentPage={currentPage}
            basePath={props.basePath}
            contentType={props.contentType}
          />
        )}
      </>
    );
  } catch {
    return <div className="text-red-500">{props.errorMessage}</div>;
  }
};

export default GenericListPage;
