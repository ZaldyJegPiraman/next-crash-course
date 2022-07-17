import Link from "next/link";

const ArticleItem = ({ article }) => {
  return (
    <Link href="/article/[id]" as={`/article/${article.id}`}>
      <a className="card" style={{ width: "100%" }}>
        <div className="card-body">
          <h5 className="card-title">{article.title} &rarr;</h5>
          <p className="card-text">{article.body}</p>
        </div>
      </a>
    </Link>
  );
};

export default ArticleItem;
