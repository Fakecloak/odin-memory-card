import { useState, useEffect } from 'react'
import './styles/App.css'
import Card from './components/Card.jsx'
import WinScreen from './components/winScreen.jsx'
import ScoreBoard from './components/scoreBoard.jsx'

function App() {
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)
  const [win, setWin] = useState(false)
  const [cards, setCards] = useState([])
  const [clickedCards, setClickedCards] = useState([])
  
  function shuffleCards(cardArray) {
    const shuffledCards = [...cardArray].sort( ()=> Math.random() - 0.5)
    setCards(shuffledCards)
  }

  function handleCardClick(id) {
    if(clickedCards.includes(id)){

      console.log("Card already clicked! Game over.")
      setScore(0) //reset score to 0
      setClickedCards([])  //reset clicked cards

    } else {

      const newScore = score + 1;

      setClickedCards( (prev) => [...prev, id]) 
      setScore(newScore)
      console.log(clickedCards)

      if(newScore > highScore) {
      setHighScore(newScore)
      } 

      if(newScore === 12) {
        setWin(true)
        console.log("You win!")
      }
      shuffleCards(cards)
    }
    
  }
  function resetGame() {
    setScore(0)
    setClickedCards([])
    setWin(false)
    shuffleCards(cards)
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
      shuffleCards(validCards.slice(0, 12)) //shuffle the cards before setting state
    }
    fetchCharacters()
  }, [])

  return (
     <div className="
      min-h-screen
      bg-gradient-to-b
      from-slate-950
      via-blue-950
      to-slate-900
      text-slate-100
      text-center
      p-6 ">

    <h1 className="
    text-center
    text-5x1
    font-bold
    text-yellow-300
    drop-shadow-lg
    mb-4
    ">Genshin Impact Card Game</h1>

    <h2 className="
    text-center
    ">Score: {score}</h2>

    <h2>High Score: {highScore}</h2>

    {win && //display win screen if player wins
      <WinScreen resetGame={resetGame} />
    }

    {!win && // display cards if player hasn't won yet
    cards.map((card) => (

      <Card 
      key={card.id}
      card={card}
      handleCardClick={handleCardClick}
      />

    ))}

  </div>
  )

}


export default App
