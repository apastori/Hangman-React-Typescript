import React from 'react'
import { HangmanDrawingProps } from './HangmanDrawingProps'
import { HangmanBodyParts } from './BodyParts'
import { HangmanBodyPartType } from './HangmanBodyPartType'

const HangmanDrawing: React.FC<HangmanDrawingProps> = ({ numberOfGuesses }: HangmanDrawingProps) => {
    return (
        <div style={{
            position: 'relative'
        }}>
            {HangmanBodyParts.map((HangmanBodyPart: HangmanBodyPartType, index: number) => {
                if (index < numberOfGuesses) {
                    return <HangmanBodyPart key={index} />
                }
            })}
            <div style={{
                height: '50px',
                width: '10px',
                background: 'black',
                position: 'absolute',
                top: 0,
                right: 0
            }} />
            <div style={{
                height: '10px',
                width: '200px',
                background: 'black',
                marginLeft: '120px'
            }} />
            <div style={{
                height: '400px',
                width: '10px',
                background: 'black',
                marginLeft: '120px'
            }} />
            <div style={{
                height: '10px',
                width: '250px',
                background: 'black'
            }} />
        </div>
    )
}

export { HangmanDrawing }