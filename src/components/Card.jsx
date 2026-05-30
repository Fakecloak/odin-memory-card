export default function Card({card, handleCardClick}) {
    return (
       <div
        key={card.id}
        className="
        mx-auto
        w-full
        max-w-xs
        bg-white/10
        backdrop-blur-lg
        rounded-2x1
        overflow-hidden
        border
        border-white/20
        cursor-pointer
        transition
        duration-300
        hover:scale-105
        hover:shadow-[0_0_25px_rgba(250,204,21,0.5)]
        "
        onClick={() => handleCardClick(card.id)}
      >

        <div className="
            w-full
            h-50
            flex
            justify-center
            items-center
            overflow-hidden
            ">

            <img
                src={card.img}
                alt={card.name}
                loading="lazy"
                className="
                max-h-full
                w-auto
                object-contain
                scale-125
                "
            />

        </div>

        {/* <p>{card.name}</p> */}

      </div>
    )
}