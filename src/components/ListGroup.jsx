function ListGroup() {
  const items = ["one", "two", "three", "four", "five"];
  const listItems = items.map((item, i) => {
    return (
      <li
        key={i}
        className="border-b-1 border-gray-400 last:border-b-0 py-2 px-4"
      >
        {item}
      </li>
    );
  });

  return (
    <div className="mx-5">
      <h2 className="text-4xl py-2">list</h2>
      <ul className="border-1 border-gray-400 rounded-lg ">
        {!items.length && "no items"}
        {listItems}
      </ul>
    </div>
  );
}

export default ListGroup;
