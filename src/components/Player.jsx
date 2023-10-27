import { useRef, useState } from "react";

export default function Player() {
  let playerName = useRef();

  const [enteredPlayerName, setPlayerName] = useState(null);

  function handleClick() {
    setPlayerName(playerName.current.value);
    playerName.current.value = "";
  }

  return (
    <section id="player">
      <h2>
        Welcome {enteredPlayerName ? enteredPlayerName : "unknown entity"}
      </h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
