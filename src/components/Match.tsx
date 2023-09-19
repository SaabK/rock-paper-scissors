import scissorsImage from "../assets/icon-scissors.svg";
import rockImage from "../assets/icon-rock.svg";
import Character from "./Character";
import Result from "./Result";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Match() {
  const choosing = false;
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const t = setTimeout(() => {
      setVisible(true);
    }, 2000);

    return () => clearTimeout(t);
  }, []);

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
          image={scissorsImage}
          name="scissors"
          size="big"
          className="order-1 md:order-2"
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
            image={rockImage}
            name="rock"
            size="big"
            className="order-1 md:order-2"
          />
        )}
      </div>
    </motion.div>
  );
}

export default Match;
