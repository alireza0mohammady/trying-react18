import { useState } from "react";

function ListGroup(props) {
  const [activeItem, setActiveItem] = useState(-1);
  let { items, heading } = props;
  return (
    <div className="mx-5">
      <h2 className="text-4xl py-2">{heading}</h2>
      <ul className="border-1 border-gray-400 rounded-lg overflow-hidden">
        {!items.length && "no items"}
        {items.map((item, i) => {
          return (
            <li
              key={i}
              className={
                activeItem === i
                  ? "border-b-1 border-gray-400 last:border-b-0 py-2 px-4 bg-blue-500 text-white"
                  : "border-b-1 border-gray-400 last:border-b-0 py-2 px-4"
              }
              onClick={() => {
                setActiveItem(i);
              }}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ListGroup;
