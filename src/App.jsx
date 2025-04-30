import { useState } from "react";
import "./App.css";
import Itemform from "./components/ItemForm";
import ItemsTable from "./components/ItemsTable.jsx";
// import ExpandableText from "./components/ExpandableText";
// import Alert from "./components/Alert";
// import Button from "./components/Button";

function App() {
  const [cart, setCart] = useState([
    { name: "milk", amount: 15, category: "groceries" },
    { name: "gum", amount: 5, category: "entertainment" },
    { name: "beer", amount: 10, category: "groceries" },
    { name: "frozen pitzza", amount: 20, category: "groceries" },
    { name: "salt", amount: 2, category: "groceries" },
    { name: "battery", amount: 4, category: "utilities" },
  ]);

  const categorys = ["groceries", "utilities", "entertainment"];

  function addToCart(item) {
    setCart([...cart, item]);
  }

  function deleteFromCart(item) {
    setCart(
      cart.filter((i) => {
        return i !== item;
      }),
    );
  }

  return (
    <div className="m-5">
      <Itemform addToCart={addToCart} categorys={categorys}></Itemform>
      <ItemsTable
        cart={cart}
        categorys={categorys}
        handleDelete={deleteFromCart}
      ></ItemsTable>
    </div>
  );
}

export default App;
