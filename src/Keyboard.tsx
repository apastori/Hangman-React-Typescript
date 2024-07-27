import React from 'react'
import { KEYS } from './Keys'
import KeyboardProps from './KeyboardProps'
import styles from './keyboard.module.css'

const Keyboard: React.FC<KeyboardProps> = ({ activeLetters, disabled = false, inactiveLetters, addGuessedLetter}): React.ReactElement  => {
    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(75px, 1fr))',
            gap: '.5rem'
        }}>
            {
                KEYS.map((key): React.ReactElement => {
                    const isActive: boolean = activeLetters.includes(key)
                    const isInactive: boolean = inactiveLetters.includes(key)
                    return (
                        <button
                        onClick={() =>
                            addGuessedLetter(key)
                        }
                        className={`${styles.btn}
                        ${isActive ? styles.active : ''}
                        ${isInactive ? styles.inactive : ''}
                        `}
                        disabled={
                            isInactive || isActive || disabled
                        }
                        key={key}>{key}
                        </button>
                    )
                })
            }
        </div>
    )
}

export default Keyboard