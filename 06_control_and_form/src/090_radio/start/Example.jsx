const Example = () => {
  const RADIO_COLLECTION = ["Apple", "Banana", "Cherry"];
  return (
    <>
      {RADIO_COLLECTION.map((value) => {
        return (
          <label>
            <input type="radio" value={value} />
            {value}
          </label>
        );
      })}
    </>
  );
};

export default Example;
