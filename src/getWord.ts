import wordList from './wordList.json'

function getWord(): string {
    return wordList[Math.floor(Math.random() * wordList.length)]
}

export { getWord }