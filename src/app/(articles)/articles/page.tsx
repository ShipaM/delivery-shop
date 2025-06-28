import { fetchArticles } from "../fetchArticles";
import ArticleSection from "../ArticlesSection";

export const metadata = {
  title: 'Articles on the website of the store "Severyanochka"',
  description: 'Read articles on the website of the store "Severyanochka"',
};

const AllArticles = async () => {
  const { data: articles, error } = await fetchArticles();

  if (error) {
    return <div className="text-red-500 py-8">Ошибка: {error}</div>;
  }

  return (
    <ArticleSection
      title="All articles"
      viewAllButton={{ text: "Back to main", href: "/" }}
      articles={articles || []}
    />
  );
};

export default AllArticles;
