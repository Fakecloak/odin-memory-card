export default function Card({card, handleCardClick}) {
    return (
       <div
        key={card.id}
        className="
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
        "
        onClick={() => handleCardClick(card.id)}
      >

        <img
          src={card.img}
          alt={card.name}
          loading='lazy'
          className="
          w-full
          h-64
          object-cover
          "
        />

        {/* <p>{card.name}</p> */}

      </div>
    )
}