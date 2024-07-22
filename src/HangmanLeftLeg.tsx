import React from 'react'
import { HangmanLeftLegProps } from './HangmanLeftLegProps'

const HangmanLeftLeg: React.FC<HangmanLeftLegProps> = () => {
    return (
        <div style={{
            width: '100px',
            height: '10px',
            background: 'black',
            position: 'absolute',
            top: '210px',
            right: 0,
            rotate: '-60deg',
            transformOrigin: 'right bottom'
        }}>
        </div>
    )
}

export { HangmanLeftLeg }