import React, { useCallback, useEffect, useState } from 'react'
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

  const incorrectLetters: string[] = guessedLetters.filter((letter: string) => {
    return !wordToGuess.includes(letter)
  })

  const isLoser: boolean = incorrectLetters.length >= 6
  const isWinner: boolean = wordToGuess.split('').every((letter: string) => {
    return guessedLetters.includes(letter)
  })

  const addGuessedLetter = useCallback((letter: string) => {
    if (guessedLetters.includes(letter) || isLoser || isWinner) return
    setGuessedLetters((currentLetters: string[]) => {
      return [
        ...currentLetters,
        letter
      ]
    })
  }, [guessedLetters, isLoser, isWinner])

  useEffect(() => {
    const handler = (e: KeyboardEvent): void => {
      const key: string = e.key
      const alphabeticCharacter: RegExp = /^[a-z]$/
      if (key.match(alphabeticCharacter)) return
      e.preventDefault()
      addGuessedLetter(key)
    }
    document.addEventListener('keypress', handler)
    return () => {
      document.removeEventListener('keypress', handler)
    }
  }, [guessedLetters])

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
          {
            isWinner && 'Winner! - Refresh to try again'
          }
          {
            isLoser && 'Nice Try - Refresh to try again'
          }
        </div>
        <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
        <HangmanWord guessedLetters={guessedLetters} wordToGuess={wordToGuess} />
        <div style={{
          alignSelf: 'stretch'  
        }}>
          <Keyboard
            disabled={isWinner || isLoser}
            activeLetters={guessedLetters.filter((letter: string) => {
                return wordToGuess.includes(letter)
              }
            )}
            inactiveLetters={incorrectLetters}
            addGuessedLetter={addGuessedLetter}
          />            
        </div>
      </div>
    </React.Fragment>
  )
}

export default App
