import ListGroup from "./Components/ListGroup";
import Alert from "./Components/Alert";
import Button from "./Components/Button";
import { BsFillCalendarFill } from "react-icons/bs";
import { useState } from "react";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const [alertVisible, setAlertVisibility] = useState(false);

  const handleSelection = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelection}
      />
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}
      <Button color="danger" onClick={() => setAlertVisibility(true)}>
        Click Me
      </Button>
      <p>
        <br></br>
      </p>
      <BsFillCalendarFill color="red" size={40} />
    </div>
  );
}

export default App;
