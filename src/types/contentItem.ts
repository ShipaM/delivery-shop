import { ArticleCardProps } from "./articleCard";
import { ProductCardProps } from "./product";

export type ContentItem = ProductCardProps | ArticleCardProps;

export type PaginatedResponse = {
  items: ContentItem[];
  totalCount: number;
};
