import Player from "./components/Player.jsx";
import TitleChallenge from "./components/TitleChallenge.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TitleChallenge title="Easy" targetTime={1} />
        <TitleChallenge title="Not Easy" targetTime={5} />
        <TitleChallenge title="Getting Tough" targetTime={10} />
        <TitleChallenge title="Pros only" targetTime={15} />
      </div>
    </>
  );
}

export default App;
