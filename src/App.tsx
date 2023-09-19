import ChooseCharacter from "./components/ChooseCharacter";
// import Match from "./components/Match";
import Rules from "./components/Rules";
import Topbar from "./components/Topbar";

function App() {
  return (
    <div className="h-screen text-white py-5 flex flex-col justify-between">
      <Topbar />
      <main>
        <ChooseCharacter />
        {/* <Match /> */}
      </main>
      <Rules />
    </div>
  );
}

export default App;
