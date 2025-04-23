const Button = (props) => {
  const { children, handleClick, style } = props;
  return (
    <button
      type="button"
      className={`px-4 py-2 rounded-lg border-1 ${style || "bg-blue-200 text-blue-700 border-blue-700"}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
