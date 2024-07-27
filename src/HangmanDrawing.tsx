import React from 'react'
import { HangmanDrawingProps } from './HangmanDrawingProps'
import { HangmanHead } from './HangmanHead'
import { HangmanBody } from './HangmanBody'
import { HangmanRightArm } from './HangmanRightArm'
import { HangmanLeftArm } from './HangmanLeftArm'
import { HangmanRightLeg } from './HangmanRightLeg'
import { HangmanLeftLeg } from './HangmanLeftLeg'

const HangmanDrawing: React.FC<HangmanDrawingProps> = ({ numberOfGuesses }: HangmanDrawingProps) => {
    return (
        <div style={{
            position: 'relative'
        }}>
            <HangmanHead />
            <HangmanBody />
            <HangmanRightArm />
            <HangmanLeftArm />
            <HangmanRightLeg />
            <HangmanLeftLeg />
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