import { ICharacter } from "../types";
import { motion } from "framer-motion";
import { useRef, useEffect } from 'react';

let calculateStyles: string;

function Character({ image, name, className, size = 'small' }: ICharacter) {

  const characterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log(characterRef.current?.getBoundingClientRect());
  }, [])

  if(name === 'paper') {
    calculateStyles = 'from-paper-gradient-start to-paper-gradient-end';
  } else if(name === 'scissors') {
    calculateStyles = 'from-scissors-gradient-start to-scissors-gradient-end';
  } else if(name==='rock') {
    calculateStyles = 'from-rock-gradient-start to-rock-gradient-end';
  }

  return (
    <motion.div ref={characterRef} className={`relative bg-gradient-to-t z-20 ${calculateStyles} w-fit ${size === 'big' ? 'p-6' : 'p-4'} rounded-full cursor-pointer ${className}`} whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.925 }}>
      <div className={`bg-white ${size === 'big' ? 'w-48 h-48' : 'w-32 h-32'} rounded-full flex items-center justify-center shadow-[inset_0_6px_0px_2px_rgb(0,0,0,0.1)]`}>
        <img src={image} className=" w-1/2 h-fit"/>
      </div>
    </motion.div>
  )
}

export default Character;