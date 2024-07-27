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
  const [guessedLetters, setGuessedLetters]: [string[], React.Dispatch<React.SetStateAction<string[]>>]  = useState<string[]>([])

  const incorrectLetters = guessedLetters.filter((letter: string) => {
    return !wordToGuess.includes(letter)
  })

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
        <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
        <HangmanWord guessedLetters={guessedLetters} wordToGuess={wordToGuess} />
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
