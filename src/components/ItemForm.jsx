import DropDown from "./DropDown";
import Button from "./Button";
import { useState } from "react";

const Itemform = (props) => {
  const { addToCart, categorys } = props;

  const [formValue, setFormValue] = useState({
    name: "",
    amount: "",
    category: "",
  });

  const [errors, setErrors] = useState({
    name: "field is empty",
    amount: "select the amount",
    category: "select a caregory",
    show: false,
  });

  function handleSubmit() {
    if (errors.name || errors.amount || errors.category) {
      setErrors({ ...errors, show: true });
    } else {
      addToCart(formValue);
      setFormValue({
        name: "",
        amount: "",
        category: "",
      });
      setErrors({
        name: "field is empty",
        amount: "select the amount",
        category: "select a caregory",
        show: false,
      });
    }
  }

  function handleCategoryChange(option) {
    if (option) {
      setFormValue({ ...formValue, category: option });
      setErrors({ ...errors, category: "" });
    } else {
      setErrors({ ...errors, category: "select a category" });
    }
  }

  function handleNameChange(event) {
    setFormValue({ ...formValue, name: event.target.value });
    setErrors({ ...errors, name: "" });
    if (event.target.value.length < 5) {
      setErrors({ ...errors, name: "at least 5 character" });
    }
    if (event.target.value.length > 25) {
      setErrors({ ...errors, name: "maximum 25" });
    }
  }

  function handleAmuntChange(event) {
    setFormValue({ ...formValue, amount: event.target.value });
    setErrors({ ...errors, amount: "" });
    if (event.target.value <= 0) {
      setErrors({ ...errors, amount: "number should be more than 0" });
    }
  }

  return (
    <form className="flex flex-col">
      <label className="mb-1">name</label>
      <input
        onChange={handleNameChange}
        type="text"
        value={formValue.name}
        className="border-1 rounded-lg px-2 py-1 border-gray-700 text-gray-700"
      />
      <span className="text-xs mt-0.5 text-red-700">
        {errors.show && errors.name ? errors.name : <pre> </pre>}
      </span>
      <label className="mt-2 mb-1">number</label>
      <input
        onChange={handleAmuntChange}
        type="number"
        value={formValue.amount}
        className="border-1 rounded-lg px-2 py-1 border-gray-700 text-gray-700"
      />
      <span className="text-xs mt-0.5 text-red-700">
        {errors.show && errors.amount ? errors.amount : <pre> </pre>}
      </span>
      <label className="mt-2 mb-1">category</label>
      <DropDown
        placeHolder={"select"}
        options={categorys}
        setSelectedOption={handleCategoryChange}
        selectedOption={formValue.category}
      />
      <span className="text-xs mt-0.5 text-red-700">
        {errors.show && errors.category ? errors.category : <pre> </pre>}
      </span>
      <Button
        style="w-fit bg-blue-600 text-white px-2 py-1 rounded-md mt-2 text-sm mt-0.5"
        onClick={handleSubmit}
      >
        ADD
      </Button>
    </form>
  );
};

export default Itemform;
