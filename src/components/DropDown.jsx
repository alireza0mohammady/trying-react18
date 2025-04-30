import { useState } from "react";
import { GoChevronDown } from "react-icons/go";

const DropDown = (props) => {
  const { placeHolder, options, selectedOption, setSelectedOption } = props;
  const [show, setShow] = useState(false);

  return (
    <section className="flex flex-col justify-stretch items-stretch">
      <div
        onClick={() => setShow(!show)}
        className="px-3 py-1 rounded-lg text-gray-700 border-gray-700 border-1 flex items-end gap-2 justify-between"
      >
        {selectedOption || placeHolder || "select an option"}
        <GoChevronDown size={22} />
      </div>
      <div className="relative w-full">
        <div
          className={`bg-gray-200 rounded-lg ${show ? "absolute" : "hidden"} mt-2 px-3 py-1 text-gray-700 w-full`}
        >
          {options.map((item) => {
            return (
              <div
                key={item}
                className="border-gray-200 hover:border-gray-700 border-b-1 transition-all duration-500"
                onClick={() => {
                  setSelectedOption(item);
                  setShow(false);
                }}
              >
                {item}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DropDown;
