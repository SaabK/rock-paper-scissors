import paperIcon from "../assets/icon-paper.svg";
import scissorsIcon from "../assets/icon-scissors.svg";
import rockIcon from "../assets/icon-rock.svg";
import Character from "./Character";

function Game() {
  return (
    <div className="w-fit mx-auto px-2 my-10 grid grid-cols-2 gap-x-6 gap-y-3 md:gap-x-10 md:gap-y-7 justify-items-center ">
      <Character name="paper" image={paperIcon} />
      <Character name="scissors" image={scissorsIcon} />
      <Character
        name="rock"
        image={rockIcon}
        className="col-span-2 self-center"
      />
    </div>
  );
}

export default Game;
