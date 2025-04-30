const Button = (props) => {
  const { children, onClick, style } = props;
  return (
    <button
      type="button"
      className={
        style ||
        "bg-blue-200 text-blue-700 border-blue-700 px-4 py-2 rounded-lg border-1"
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
