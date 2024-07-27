import React from 'react'
import { HangmanWordProps } from './HangmanWordProps'

const HangmanWord: React.FC<HangmanWordProps> = ({guessedLetters, wordToGuess}: HangmanWordProps) => {
    return (
        <div style={{
            display: 'flex',
            gap: '.25em',
            fontSize: '6rem',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            fontFamily: 'monospace'
        }}>
        {
            wordToGuess.split('').map((letter: string, index: number) => {
                return (
                    <span style={{
                        borderBottom: '.1em solid black'
                    }}
                    key={index}
                    >
                        <span style={{
                            visibility: guessedLetters.includes(letter) ? 'visible' : 'hidden'
                        }}>
                        {letter}
                        </span>
                    </span>
                )
            })    
        }
        </div>
    )
}

export { HangmanWord }