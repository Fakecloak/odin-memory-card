export default function WinScreen({ resetGame }) {

  return (

    <div className="
      fixed
      inset-0
      bg-black/70
      flex
      flex-col
      items-center
      justify-center
      z-50
      animate-fadeIn
    ">

      <h1 className="
        text-6xl
        font-bold
        text-yellow-300
        animate-pulse
      ">

        Congratulations! You win! 

      </h1>

      <button
        onClick={resetGame}
        className="
          mt-6
          bg-yellow-400
          text-black
          px-8
          py-4
          rounded-xl
          text-xl
          font-bold
          hover:scale-105
          transition
        "
      >

        Play Again

      </button>

    </div>

  )
}