const Header = () => {
  const x = 5;

  return (
    <div className="bg-light p-5 rounded">
      <h1 className="title">
        This is a custom components with inline jsx styles
      </h1>
      <style jsx>
        {`
          .title {
            color: ${x > 5 ? "red" : "green"};
          }
        `}
      </style>
      <p className="lead">
        This example is a quick exercise to illustrate how the top-aligned
        navbar works. As you scroll, this navbar remains in its original
        position and moves with the rest of the page.
      </p>
      <a
        className="btn btn-lg btn-primary"
        href="/docs/5.0/components/navbar/"
        role="button"
      >
        View navbar docs »
      </a>
    </div>
  );
};

export default Header;
