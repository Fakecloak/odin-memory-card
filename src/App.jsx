import { useState, useEffect } from 'react'
import './styles/App.css'

function App() {
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)
  const [win, setWin] = useState(false)
  const [cards, setCards] = useState([])
  
  function shuffleCards() {
    const shuffledCards = [...cards].sort( ()=> Math.random() - 0.5).slice(0,12)

    setCards(shuffledCards)
  }

  const apiUrl = "https://genshin.jmp.blue/"

  useEffect( () => {
    async function fetchCharacters() {
      //fetching all character names from the API
      const names = await fetch(apiUrl + "characters").then((res) => res.json())

      const validCards = [] //temp-variable to store valid cards before setting state

      //checking if the character has an image, if it does, we add it to the validCards array
      for(let i=0; i<names.length; i++){
                          
        const characterName = names[i]
        //storing the image url in a var
        const imgURL=  `${apiUrl}characters/${characterName}/icon`
        //checking if the image url is valid 
        const imageCheck = await fetch(imgURL)
        // if success, add to the temp var - ValidCards []
        if(imageCheck.ok){
          validCards.push({id: i, name:characterName, img:imgURL})
        }
      }
      shuffleCards() //shuffle the cards before setting state
  }
    fetchCharacters()
  }, [])

  return (
    <div className="App">    
    {cards.map( (card) => (
      <div key={card.id} className="card">
        <img src={card.img} alt={card.name} />
      </div>
    ))}
    </div>
      )
}

export default App
