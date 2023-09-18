import { useState } from "react";
import rules from "../assets/image-rules.svg";
import close from "../assets/icon-close.svg";

function Rules() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((state) => !state);
  };

  return (
    <>
      <button
        className="bg-transparent border-2 border-white/60 text-white/90 uppercase tracking-widest px-8 py-2 rounded-md self-end mx-4 font-thin w-fit"
        onClick={handleClick}
      >
        Rules
      </button>
      {isOpen && (
        <>
          <div className="bg-white flex flex-col gap-4 absolute z-30 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-8 rounded-lg">
            <div className="flex justify-between items-center">
              <p className="text-dark-text uppercase text-3xl font-bold">
                Rules
              </p>
              <button className="cursor-pointer" onClick={handleClick}>
                <img src={close} />
              </button>
            </div>
            <img src={rules} className="w-fit" />
          </div>

          <div className="fixed top-0 h-screen w-full bg-black/40 z-20" />
        </>
      )}
    </>
  );
}

export default Rules;
