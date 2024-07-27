import { ReactElement } from 'react'
import { HangmanHeadProps } from './HangmanHeadProps'

const HangmanHead: React.FC<HangmanHeadProps> = (): ReactElement => {
    return (
        <div style={{
            width: '50px',
            height: '50px',
            borderRadius: '100%',
            border: '10px solid black',
            position: 'absolute',
            top: '50px',
            right: '-30px'
        }}>
        </div>
    )
}

export { HangmanHead }