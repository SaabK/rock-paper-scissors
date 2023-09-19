import { useSelector } from "react-redux";
import ChooseCharacter from "./components/ChooseCharacter";
import Match from "./components/Match";
import Rules from "./components/Rules";
import Topbar from "./components/Topbar";
import { RootState } from "./store";

function App() {
  const {
    player: { player },
  } = useSelector((state: RootState) => state);

  return (
    <div className="h-screen text-white py-5 flex flex-col justify-between">
      <Topbar />
      <main>{player === null ? <ChooseCharacter /> : <Match />}</main>
      <Rules />
    </div>
  );
}

export default App;
