import React, { useState } from 'react'
import wordList from './wordList.json'
import { UpperCaseChar } from './UpperCaseChar'
import { HangmanDrawing } from './HangmanDrawing'
import { HangmanWord } from './HangmanWord'
import Keyboard from './Keyboard'

function App() {
  const [wordToGuess, setWordToGuess]: [string, React.Dispatch<React.SetStateAction<string>>] = useState<string>(() => {
    return wordList[Math.floor(Math.random() * wordList.length)]
  })
  const [guessedLetters, setGuessedLetters]: [UpperCaseChar[], React.Dispatch<React.SetStateAction<UpperCaseChar[]>>]  = useState<UpperCaseChar[]>([])
  return (
    <React.Fragment>
      <div style={{
        maxWidth: '800px',
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        margin: 'auto',
        alignItems: 'center' 
      }}>
        <div style={{
          fontSize: '2rem',
          alignItems: 'center'  
        }}>
          Lose Win
        </div>
        <HangmanDrawing />
        <HangmanWord />
        <div style={{
          alignSelf: 'stretch'  
        }}>
          <Keyboard />            
        </div>
      </div>
    </React.Fragment>
  )
}

export default App
