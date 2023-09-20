import scissorsImage from "../assets/icon-scissors.svg";
import rockImage from "../assets/icon-rock.svg";
import paperImage from "../assets/icon-paper.svg";
import Character from "./Character";
import Result from "./Result";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { choices } from "../data/data";
import { IOpponent, IResult, player } from "../types";
import { setResult } from "../features/result/resultSlice";

function Match() {
  const dispatch = useDispatch();

  const [choosing, setChoosing] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(false);
  const [opponent, setOpponent] = useState<IOpponent & player>({
    image: "",
    player: null,
  });

  const {
    player: { player },
    result: { result },
  } = useSelector((state: RootState) => state);
  const calculatedResult = calculateResult(player, opponent.player);

  const image = getImage(player);

  useEffect(() => {
    setChoosing(true);
    const showOpponent = setTimeout(() => {
      setOpponent(generateOpponent());
      setChoosing(false);
    }, 1299);

    const showResult = setTimeout(() => {
      setVisible(true);
    }, 2400);

    return () => {
      clearTimeout(showResult);
      clearTimeout(showOpponent);
    };
  }, []);

  useEffect(() => {
    dispatch(setResult(calculatedResult));
  }, [calculatedResult]);

  return (
    <motion.div
      className="flex justify-center items-end md:items-center gap-10 md:gap-16 mx-auto w-fit flex-wrap md:flex-nowrap"
      layoutId="result"
    >
      <div className="flex flex-col items-center gap-8 order-1 md:order-1">
        <p className="uppercase text-base md:text-lg tracking-widest order-2 md:order-1">
          You Picked
        </p>
        <Character
          image={image}
          name={player}
          size="big"
          className="order-1 md:order-2"
          result={result}
        />
      </div>

      {visible && <Result className="order-3 md:order-2" />}

      <div className="flex flex-col items-center gap-8 order-2 md:order-3">
        <p className="uppercase text-base md:text-lg tracking-widest order-2 md:order-1">
          The House Picked
        </p>
        {choosing ? (
          <div className="w-32 h-32 md:w-44 md:h-44 bg-radial-gradient-end rounded-full order-1 md:order-2" />
        ) : (
          <Character
            image={opponent.image}
            name={opponent.player}
            size="big"
            className="order-1 md:order-2"
            result={
              result === "win" ? "lose" : result === "draw" ? "draw" : "win"
            }
          />
        )}
      </div>
    </motion.div>
  );
}

function getImage(player: string | null) {
  let image;

  switch (player) {
    case "paper":
      image = paperImage;
      break;
    case "rock":
      image = rockImage;
      break;
    case "scissors":
      image = scissorsImage;
      break;
    default:
      image = "";
      break;
  }

  return image;
}

function generateOpponent() {
  const randomNum = Math.floor(Math.random() * 3);
  const { player }: player = choices[randomNum];

  const image = getImage(player);

  return {
    player,
    image,
  };
}

function calculateResult(player: string | null, opponent: string | null) {
  let result: IResult = {
    result: null,
  };

  console.log("Player: ", player);
  console.log("Opponent: ", opponent);

  if (player === "rock" && opponent === "scissors") {
    result.result = "win";
  } else if (player === "paper" && opponent === "rock") {
    result.result = "win";
  } else if (player === "scissors" && opponent === "paper") {
    result.result = "win";
  } else if (player === opponent) {
    result.result = "draw";
  } else {
    result.result = "lose";
  }

  return result;
}

export default Match;
