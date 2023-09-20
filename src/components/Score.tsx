import { useSelector } from "react-redux";
import { RootState } from "../store";

function Score() {
  const {
    score: { score },
  } = useSelector((state: RootState) => state);

  console.log(score);

  return (
    <div className="h-full flex flex-col items-center bg-white py-2 md:py-2.5 px-5 md:px-10 rounded-md">
      <p className="text-score-text font-bold uppercase tracking-widest text-xs md:text-base">
        Score
      </p>
      <span className="text-dark-text text-4xl md:text-6xl font-bold">
        {score}
      </span>
    </div>
  );
}

export default Score;
