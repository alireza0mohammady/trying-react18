// import { useState } from "react";
import "./App.css";
import ExpandableText from "./components/ExpandableText";
// import Alert from "./components/Alert";
// import Button from "./components/Button";
function App() {
  return (
    <div className="m-5">
      <ExpandableText maxChars={10}>
        hello hello hello hello hello hello hello hello hello hello hello hello
        hello hello hello hello hello hello hello hello hello hello hello hello
        hello hello hello hello hello hello hello
      </ExpandableText>
    </div>
  );
}

export default App;
