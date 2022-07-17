import Meta from "../components/Meta";
import Image from "next/image";
import ArtileList from "../components/ArticleList";
import { server } from "../config";

export default function Home({ articles }) {
  console.log(articles);

  return (
    <div>
      <Meta />
      <h1>Welcome to next home page</h1>
      <ArtileList articles={articles}></ArtileList>
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(`${server}/api/articles`);

  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};

// export const getStaticProps = async () => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts?_limit=6`
//   );

//   const articles = await res.json();

//   return {
//     props: {
//       articles,
//     },
//   };
// };
