import Score from "./Score";

function Topbar() {
  return (
    <div className="container">
      <header className="mx-auto flex border-2 max-w-2xl border-white/30 rounded-xl justify-between items-center p-4 gap-2">
        <div className="flex flex-col px-2">
          <span className="text-xl md:text-4xl uppercase leading-5 md:leading-7 font-bold tracking-wide">
            Rock
          </span>
          <span className="text-xl md:text-4xl uppercase leading-5 md:leading-7 font-bold tracking-wide">
            Paper
          </span>
          <span className="text-xl md:text-4xl uppercase leading-5 md:leading-7 font-bold tracking-wide">
            Scissors
          </span>
        </div>

        <Score />
      </header>
    </div>
  );
}

export default Topbar;
