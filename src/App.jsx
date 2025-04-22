import "./App.css";
import ListGroup from "./components/ListGroup";

function App() {
  const items = ["one", "two", "three", "four"];
  return (
    <div>
      <ListGroup items={items} heading="numbers"></ListGroup>
    </div>
  );
}

export default App;
