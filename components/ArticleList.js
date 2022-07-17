import ArticleItem from "../components/ArticleItem";

const ArticleList = ({ articles }) => {
  return (
    <div className="row">
      {articles.map((article) => (
        <div
          key={article.id}
          className="col col-md-6 col-lg-4"
          style={{ margin: 10 }}
        >
          <ArticleItem article={article}></ArticleItem>
        </div>
      ))}
    </div>
  );
};

export default ArticleList;
