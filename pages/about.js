import CustomStyles from "../styles/customstyles.module.css";
import Header from "../components/header";
import Meta from "../components/meta";

const about = () => {
  return (
    <div>
      <Meta title="About" />
      <h1 className={CustomStyles.RedHeader + " " + CustomStyles.ItalicHeader}>
        This is about page
      </h1>
      <Header></Header>
    </div>
  );
};

export default about;
