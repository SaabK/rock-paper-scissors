import { ICharacter, IClassName } from "../types";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { setPlayer } from "../features/player/playerSlice";
import { useEffect, useState } from "react";

let calculateStyles: string;

function Character({
  image,
  name,
  className,
  size = "small",
  result,
}: ICharacter & IClassName) {
  const dispatch = useDispatch();
  const [winningEffect, setWinningEffect] = useState(false);

  if (name === "paper") {
    calculateStyles = "from-paper-gradient-start to-paper-gradient-end";
  } else if (name === "scissors") {
    calculateStyles = "from-scissors-gradient-start to-scissors-gradient-end";
  } else if (name === "rock") {
    calculateStyles = "from-rock-gradient-start to-rock-gradient-end";
  }

  const chooseCharacter = () => {
    dispatch(setPlayer({ player: name }));
  };

  useEffect(() => {
    const t = setTimeout(() => {
      if (result === "win") {
        setWinningEffect(true);
      }
    }, 2000);

    return () => clearTimeout(t);
  }, [result]);

  return (
    <motion.div
      className={`relative bg-gradient-to-t z-20 ${calculateStyles} w-fit ${
        size === "big" ? " p-[18px] md:p-6" : "p-3.5 md:p-5"
      } rounded-full cursor-pointer ${className}`}
      whileHover={size === "small" ? { scale: 1.1 } : { scale: 1.0 }}
      whileTap={size === "small" ? { scale: 0.925 } : { scale: 1.0 }}
      onClick={size === "small" ? chooseCharacter : () => {}}
    >
      <div
        className={`bg-white ${
          size === "big"
            ? "w-28 h-28 md:w-48 md:h-48"
            : "w-24 h-24 md:w-32 md:h-32"
        } rounded-full flex items-center justify-center shadow-[inset_0_6px_0px_2px_rgb(0,0,0,0.1)]`}
      >
        <img src={image} className=" w-1/2 h-fit" />
      </div>
      {result === "win" && winningEffect && (
        <>
          <div className="overflow-hidden absolute w-full h-full bg-white/[5%] rounded-full top-0 left-0 scale-[1.35]" />
          <div className="overflow-hidden absolute w-full h-full bg-white/[4.5%] rounded-full top-0 left-0 scale-[1.7]" />
          <div className="overflow-hidden absolute w-full h-full bg-white/[4%] rounded-full top-0 left-0 scale-[2.1]" />
        </>
      )}
    </motion.div>
  );
}

export default Character;
