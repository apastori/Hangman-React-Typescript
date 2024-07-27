import React from 'react'

// Hangman Parts
import { HangmanHead } from './HangmanHead'
import { HangmanBody } from './HangmanBody'
import { HangmanRightArm } from './HangmanRightArm'
import { HangmanLeftArm } from './HangmanLeftArm'
import { HangmanRightLeg } from './HangmanRightLeg'
import { HangmanLeftLeg } from './HangmanLeftLeg'

//Hangman Parts Props

import { HangmanHeadProps } from './HangmanHeadProps'
import { HangmanBodyProps } from './HangmanBodyProps'
import { HangmanRightArmProps } from './HangmanRightArmProps'
import { HangmanLeftArmProps } from './HangmanLeftArmProps'
import { HangmanRightLegProps } from './HangmanRightLegProps'
import { HangmanLeftLegProps } from './HangmanLeftLegProps'

const HangmanBodyParts: 
[
    React.FC<HangmanHeadProps>, 
    React.FC<HangmanBodyProps>,
    React.FC<HangmanRightArmProps>,
    React.FC<HangmanLeftArmProps>,
    React.FC<HangmanRightLegProps>,
    React.FC<HangmanLeftLegProps>
] = [
    HangmanHead,
    HangmanBody,
    HangmanRightArm,
    HangmanLeftArm,
    HangmanRightLeg,
    HangmanLeftLeg
]

export { HangmanBodyParts }