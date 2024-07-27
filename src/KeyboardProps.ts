export default interface KeyboardProps {
    disabled?: boolean,
    activeLetters: string[],
    inactiveLetters: string[],
    addGuessedLetter: (letter: string) => void
}