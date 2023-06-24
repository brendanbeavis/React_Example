import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";
import { useState } from "react";

let heading = "List Of Cities";
let items = [
  "Melbourne",
  "Sydney",
  "Hobart",
  "Brisbane",
  "Canberra",
  "Perth",
  "Darwin",
];

const handleSelectedItem = (item: string) => {
  console.log(item);
};

function App() {
  const [show, setToShow] = useState(false);

  return (
    <>
      <h1>Beavis TypeScript Example</h1>
      A simple TypeScript example with bootstrap components and built using vite
      <hr />
      <div>
        {show && (
          <Alert onClose={() => setToShow(false)}>
            I love <b> lamp.</b>
          </Alert>
        )}
      </div>
      <div>
        <ListGroup
          items={items}
          heading={heading}
          onSelectItem={handleSelectedItem}
        ></ListGroup>
      </div>
      <div>
        <Button onClick={() => setToShow(true)}>Click</Button>
      </div>
    </>
  );
}

export default App;
