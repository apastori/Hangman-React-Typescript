import React from 'react'
import { HangmanWordProps } from './HangmanWordProps'

const HangmanWord: React.FC<HangmanWordProps> = () => {
    const word: string = 'test'
    const guessedLetter: string[] = ['e', 's']
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
            word.split('').map((letter: string, index: number) => {
                return (
                    <span style={{
                        borderBottom: '.1em solid black'
                    }}
                    key={index}
                    >
                        <span style={{
                            visibility: guessedLetter.includes(letter) ? 'visible' : 'hidden'
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