import { fetchArticles } from "./fetchArticles";
import ArticleSection from "./ArticlesSection";

const Articles = async () => {
  const { data: articles, error } = await fetchArticles();

  if (error) {
    return <div className="text-red-500 py-8">Error: {error}</div>;
  }

  return (
    <ArticleSection
      title="Articles"
      viewAllButton={{ text: "All articles", href: "articles" }}
      articles={articles || []}
      compact
    />
  );
};

export default Articles;
