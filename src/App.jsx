import { useState, useEffect } from 'react'
import './styles/App.css'

function App() {
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)
  const [win, setWin] = useState(false)
  const [characters, setCharacters] = useState([])
  
  function shuffleCards() {
    const shuffledCards = [...cards].sort( ()=> Math.random() - 0.5)
  }

  return (
    <>
    </>
      )
}

export default App
