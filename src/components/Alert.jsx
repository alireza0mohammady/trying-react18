import Button from "./Button";

const Alert = (props) => {
  return (
    <Button
      handleClick={() => {
        console.error("alert component");
      }}
      colorStyle="bg-red-200 text-red-700 border-red-700"
    >
      {props.children}
    </Button>
  );
};

export default Alert;
