import React, { ReactElement } from 'react'
import { HangmanLeftArmProps } from './HangmanLeftArmProps'

const HangmanLeftArm: React.FC<HangmanLeftArmProps> = (): ReactElement => {
    return (
        <div style={{
            width: '100px',
            height: '10px',
            background: 'black',
            position: 'absolute',
            top: '150px',
            right: '10px',
            rotate: '30deg',
            transformOrigin: 'right bottom'
        }}>
        </div>
    )
}

export { HangmanLeftArm }