import fs from 'fs'

fs.appendFile('my-file.txt', 'File created by Node.js', (err) => {
    if (err) throw err
    console.log('File saved!')
})

setTimeout(() => "The end", 10000)