import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  let [alert, setAlert] = useState(false);

  function toggleAlert() {
    setAlert(!alert);
    console.log(1);
  }

  return (
    <div className="m-5">
      <Alert isVisible={alert}>app props to alert</Alert>
      <Button handleClick={toggleAlert}>toggle alert</Button>
    </div>
  );
}

export default App;
