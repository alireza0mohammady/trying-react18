const Button = (props) => {
  return (
    <button
      type="button"
      className={`px-4 py-2 rounded-lg border-1 ${props.colorStyle}`}
      onClick={props.handleClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
