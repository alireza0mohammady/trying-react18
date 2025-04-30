import { useState } from "react";
import Button from "./Button";
import DropDown from "./DropDown";

const ItemsTable = (props) => {
  const { cart, categorys, handleDelete } = props;
  const [category, setCategoty] = useState("all");

  function createTableItems(items) {
    if (category == "all") {
      return items.map((i) => {
        return (
          <tr
            key={i.name}
            className="flex w-full justify-between items-center border-b-1 text-start p-1"
          >
            <td className="w-5/16">{i.name}</td>
            <td className="w-3/16 ">{i.amount}$</td>
            <td className="w-5/16">{i.category}</td>
            <td className="w-3/16">
              <Button
                style={"bg-red-700 text-white px-2 py-0.5 rounded-md"}
                onClick={() => handleDelete(i)}
              >
                Delete
              </Button>
            </td>
          </tr>
        );
      });
    }
    return items.map((i) => {
      if (i.category == category) {
        return (
          <tr
            key={i.name}
            className="flex w-full justify-between items-center border-b-1 text-start p-1"
          >
            <td className="w-5/16">{i.name}</td>
            <td className="w-3/16 ">{i.amount}$</td>
            <td className="w-5/16">{i.category}</td>
            <td className="w-3/16">
              <Button
                style={"bg-red-700 text-white px-2 py-0.5 rounded-md"}
                onClick={() => handleDelete(i)}
              >
                Delete
              </Button>
            </td>
          </tr>
        );
      }
    });
  }

  function calcTotal() {
    let total = 0;
    if (category == "all") {
      total = cart.reduce((total, i) => {
        return i.amount + total;
      }, 0);
      return total;
    }
    total = cart.reduce((total, i) => {
      return i.category == category ? total + i.amount : total;
    }, 0);
    return total;
  }

  return (
    <section className="mt-4">
      <DropDown
        placeHolder="table drop down"
        options={["all", ...categorys]}
        selectedOption={category}
        setSelectedOption={setCategoty}
      ></DropDown>
      <table className="w-full mt-4 ">
        <thead>
          <tr className="w-full flex justify-between border-b-1">
            <th className="py-0.5 w-5/16 text-start">name</th>
            <th className="py-0.5 w-3/16 text-start">amount</th>
            <th className="py-0.5 w-5/16 text-start">category</th>
            <th className="py-0.5 w-3/16 text-start">action</th>
          </tr>
        </thead>
        <tbody className="">{createTableItems(cart)}</tbody>
        <tfoot>
          <tr className="flex w-full justify-between items-center border-b-1 text-start p-1">
            <td className="w-5/16">total</td>
            <td className="w-3/16 ">{calcTotal()}$</td>
            <td className="w-5/16">{category}</td>
            <td className="w-3/16"></td>
          </tr>
        </tfoot>
      </table>
    </section>
  );
};

export default ItemsTable;
