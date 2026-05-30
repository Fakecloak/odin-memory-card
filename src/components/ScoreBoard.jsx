export default function ScoreBoard({ score, highScore }) {

  return (

    <div className="
      flex
      justify-center
      gap-10
      mb-8
      text-xl
    ">

      <div className="
        bg-white/10
        backdrop-blur-md
        px-6
        py-3
        rounded-xl
        border
        border-yellow-400/30
      ">

        Score: {score}

      </div>

      <div className="
        bg-white/10
        backdrop-blur-md
        px-6
        py-3
        rounded-xl
        border
        border-cyan-400/30
      ">

        High Score: {highScore}

      </div>

    </div>

  )
}