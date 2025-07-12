import fetchArticles from "./fetchArticles";
import ArticleSection from "./ArticlesSection";
import { CONFIG } from "../../../config/config";

const Articles = async () => {
  try {
    const { items } = await fetchArticles({
      articlesLimit: CONFIG.ITEMS_PER_PAGE_MAIN_ARTICLES,
    });

    return (
      <ArticleSection
        title="Articles"
        viewAllButton={{ text: "All articles", href: "articles" }}
        articles={items}
      />
    );
  } catch {
    return <div className="text-red-500">Error: Failed to load articles</div>;
  }
};

export default Articles;
