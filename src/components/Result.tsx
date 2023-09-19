import { motion } from "framer-motion";
import { IClassName } from "../types";

function Result({ className }: IClassName) {
  return (
    <motion.div className={`flex flex-col gap-4 ${className}`}>
      <p className="uppercase text-5xl font-bold tracking-wide">You lose</p>
      <motion.button
        className="uppercase tracking-widest px-10 py-2 cursor-pointer bg-white text-rock-gradient-end rounded-md font-bold hover:bg-white/95"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.925 }}
      >
        Play again
      </motion.button>
    </motion.div>
  );
}

export default Result;
