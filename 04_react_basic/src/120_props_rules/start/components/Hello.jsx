const Hello = (props) => {
  console.log(props);
  const ob = Reflect.getOwnPropertyDescriptor(props, "name");
  console.log(ob);
  return (
    <div>
      <h3>Hello {props.name}</h3>
    </div>
  );
};

export default Hello;
