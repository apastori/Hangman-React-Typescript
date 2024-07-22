import React from 'react'
import { HangmanBodyProps } from './HangmanBodyProps'

const HangmanBody: React.FC<HangmanBodyProps> = () => {
    return (
        <div style={{
            width: '10px',
            height: '100px',
            background: 'black',
            position: 'absolute',
            top: '120px',
            right: 0
        }}>
        </div>
    )
}

export { HangmanBody }
