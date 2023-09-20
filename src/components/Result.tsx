import { motion } from "framer-motion";
import { IClassName } from "../types";
import { useSelector } from "react-redux";
import { RootState } from "../store";

function Result({ className }: IClassName) {
  const {
    result: { result },
  } = useSelector((state: RootState) => state);

  return (
    <motion.div className={`flex flex-col gap-4 ${className}`}>
      <p className="uppercase text-5xl font-bold tracking-wide">You {result}</p>
      <motion.button
        className="uppercase tracking-widest px-10 py-2 cursor-pointer bg-white text-rock-gradient-end rounded-md font-bold"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.925 }}
      >
        Play again
      </motion.button>
    </motion.div>
  );
}

export default Result;
