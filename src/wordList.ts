import fs from 'fs'

const wordList: string[] = JSON.parse(fs.readFileSync('wordList.json', 'utf-8'))

export { wordList }

