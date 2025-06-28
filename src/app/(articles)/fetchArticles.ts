import { getArticles } from "../api/articles/route";
import { Article } from "@/types/article";

export const fetchArticles = async (): Promise<{
  data: Article[] | null;
  error: string | null;
}> => {
  try {
    const articles = await getArticles();
    return {
      data: articles as unknown as Article[],
      error: null,
    };
  } catch (err) {
    const error = err instanceof Error ? err.message : "Unknown error";
    console.error(`Error while getting articles:`, err);
    return {
      data: null,
      error,
    };
  }
};
