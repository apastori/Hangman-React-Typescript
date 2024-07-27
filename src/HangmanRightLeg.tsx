import React, { ReactElement } from 'react'
import { HangmanRightLegProps } from './HangmanRightLegProps'

const HangmanRightLeg: React.FC<HangmanRightLegProps> = (): ReactElement => {
    return (
        <div style={{
            width: '100px',
            height: '10px',
            background: 'black',
            position: 'absolute',
            top: '210px',
            right: '-90px',
            rotate: '60deg',
            transformOrigin: 'left bottom'
        }}>
        </div>
    )
}

export { HangmanRightLeg }