import React from 'react'
import { HangmanRightArmProps } from './HangmanRightArmProps'

const HangmanRightArm: React.FC<HangmanRightArmProps> = () => {
    return (
        <div style={{
            width: '100px',
            height: '10px',
            background: 'black',
            position: 'absolute',
            top: '150px',
            right: '-100px',
            rotate: '-30deg',
            transformOrigin: 'left bottom'
        }}>
        </div>
    )
}

export { HangmanRightArm }