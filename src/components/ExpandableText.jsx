import { useState } from "react";
import Button from "./Button";

const ExpandableText = (props) => {
  let { maxChars, children } = props;
  let [expande, setExpande] = useState(false);
  function toggleExpande() {
    setExpande(!expande);
  }
  if (expande)
    return (
      <div>
        {children}
        <span> </span>
        <Button
          style="border-1 rounded-sm text-xs p-[2px]"
          handleClick={toggleExpande}
        >
          less
        </Button>
      </div>
    );
  return (
    <div>
      {children.slice(0, maxChars)}
      <span>... </span>
      <Button
        style="border-1 rounded-sm text-xs p-[2px]"
        handleClick={toggleExpande}
      >
        more
      </Button>
    </div>
  );
};

export default ExpandableText;
