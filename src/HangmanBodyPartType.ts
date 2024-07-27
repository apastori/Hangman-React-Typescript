import React from 'react'

//Hangman Parts Props

import { HangmanHeadProps } from './HangmanHeadProps'
import { HangmanBodyProps } from './HangmanBodyProps'
import { HangmanRightArmProps } from './HangmanRightArmProps'
import { HangmanLeftArmProps } from './HangmanLeftArmProps'
import { HangmanRightLegProps } from './HangmanRightLegProps'
import { HangmanLeftLegProps } from './HangmanLeftLegProps'

export  type HangmanBodyPartType =
    React.FC<HangmanHeadProps> |
    React.FC<HangmanBodyProps> |
    React.FC<HangmanRightArmProps> |
    React.FC<HangmanLeftArmProps> |
    React.FC<HangmanRightLegProps> |
    React.FC<HangmanLeftLegProps>
