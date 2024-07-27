import React from 'react'
import { KEYS } from './Keys'
import KeyboardProps from './KeyboardProps'
import { KeysT } from './KeysType'
import styles from './keyboard.module.css'

const Keyboard: React.FC<KeyboardProps> = (): React.ReactElement  => {
    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(75px, 1fr))',
            gap: '.5rem'
        }}>
            {
                KEYS.map((key): React.ReactElement => {
                    return (
                        <button className={`${styles.btn}`} key={key}>{key}</button>
                    )
                })
            }
        </div>
    )
}

export default Keyboard