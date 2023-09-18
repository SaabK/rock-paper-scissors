import Score from "./Score"

function Topbar() {
  return (
    <header className="mx-auto w-2/4 flex border-2 border-white/30 rounded-xl justify-between items-center p-4">

      <div className="flex flex-col px-2">
        <span className="text-4xl uppercase leading-7 font-bold tracking-wide">Rock</span>
        <span className="text-4xl uppercase leading-7 font-bold tracking-wide">Paper</span>
        <span className="text-4xl uppercase leading-7 font-bold tracking-wide">Scissors</span>
      </div>

      <Score />

    </header>
  )
}

export default Topbar