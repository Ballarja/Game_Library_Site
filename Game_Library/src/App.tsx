import { useState } from "react";

function App() {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    }
  });

  const handleClick = () => {
    setGame({ ...game, player.name: "Jim" });
  };

  return (
    <div>
      {player.name}
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
