import "./Expression.css";

const Expression = () => {
  const title = "Expression";
  const hello = (arg) => `${arg} Function`;
  return (
    <div className={title.toLocaleLowerCase()}>
      <h3>Hello {title}</h3>
      <h3>{hello("Yeah")}</h3>
    </div>
  );
};

export default Expression;
