import { useState, useEffect } from 'react'
import './styles/App.css'

function App() {
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)
  const [win, setWin] = useState(false)
  const [cards, setCards] = useState([])
  const [clickedCards, setClickedCards] = useState([])
  
  function shuffleCards(cardArray) {
    const shuffledCards = [...cardArray].sort( ()=> Math.random() - 0.5).slice(0,12)
    // const shuffledCards = cardArray.slice(0,12);
    setCards(shuffledCards)
  }

  function handleCardClick(id) {
    if(clickedCards.includes(id)){
      console.log("Card already clicked! Game over.")
      setScore(0) //reset score to 0
      setClickedCards([])  //reset clicked cards

    } else {
    setClickedCards([...clickedCards, id])
    setHighScore( highScore + 1)
    setScore(score + 1)

    console.log(clickedCards)
    }
  }

  const apiUrl = "https://genshin.jmp.blue/"

  useEffect( () => {
    async function fetchCharacters() {
      //fetching all character names from the API
      const names = await fetch(apiUrl + "characters").then((res) => res.json())
      
      const validCards = names.map((characterName, index) => ({
        id: index,
        name: characterName,
        img: `${apiUrl}characters/${characterName}/icon`

      }))
      shuffleCards(validCards) //shuffle the cards before setting state
    }
    fetchCharacters()
  }, [])

  return (
    <div className="App">    
    {cards.map( (card) => (
      <div key={card.id} className="card" onClick={ ()=> handleCardClick(card.id)}>
        <img src={card.img} alt={card.name} loading='lazy' />
      </div>
    ))}
    </div>
  )

}


export default App
