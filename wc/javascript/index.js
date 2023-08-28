const fs = require('fs')
const path = require('path')

const args = process.argv.slice(2);

let option = args[0]
let file;

if (!option.startsWith('-')) {
    file = (__dirname, option)
    option = 'default'
} else {
    file = path.join(__dirname, args[1]) 
}


async function ccwc(){
    try{
        const text = fs.readFileSync(file, 'utf-8');
        let lines = text.split('\n').filter((ele) => ele !== '').length
        let words = text.split(/\s+/).filter(Boolean).length
        let bytes = Buffer.from(text).length
        let chars = text.length

        console.log(option);
        switch (option) {
            case "-l": // number of lines
                // console.log('yes')
                console.log(lines)
                break;
            case "-c": //number of bytes
                console.log(bytes)
                break;
            case "-w": // number of words
                console.log(words)
                break;
            case " -m": // number of characters
                console.log(chars)
                break;
            case "default":
                console.log(lines, words, bytes)
                break;
        }

    } catch (error) {
        console.log('Error reading:', error)
    }
    
}
ccwc()