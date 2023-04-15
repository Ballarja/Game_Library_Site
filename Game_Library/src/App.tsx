import ListGroup from "./Components/ListGroup";
import Alert from "./Components/Alert";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

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
      <p>
        <br></br>
      </p>
      <Alert>Hello World</Alert>
    </div>
  );
}

export default App;
