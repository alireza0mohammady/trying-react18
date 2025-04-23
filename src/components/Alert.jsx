const Alert = (props) => {
  const { children, isVisible } = props;
  return (
    <div
      className={`px-6 py-4 bg-red-100 text-red-700 text-center rounded-lg my-5 ${!isVisible ? "hidden" : ""}`}
    >
      {children}
    </div>
  );
};

export default Alert;
