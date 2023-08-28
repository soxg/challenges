const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
let option = args[0];
let file;

if (!option.startsWith('-')) {
    file = path.join(__dirname, option);
    option = 'default';
} else {
    file = args[1] ? path.join(__dirname, args[1]) : null; 
}

function ccwc(text) {
    let lines = text.split('\n').filter((ele) => ele !== '').length;
    let words = text.split(/\s+/).filter(Boolean).length;
    let bytes = Buffer.from(text).length;
    let chars = text.length;

    switch (option) {
        case "-l": 
            console.log(lines);
            break;
        case "-c": 
            console.log(bytes);
            break;
        case "-w": 
            console.log(words);
            break;
        case "-m": 
            console.log(chars);
            break;
        case "default":
        default:
            console.log(lines, words, bytes);
            break;
    }
}

if (!file) {
    let inputData = '';
    process.stdin.on('data', chunk => {
        inputData += chunk;
    });
    process.stdin.on('end', () => {
        ccwc(inputData);
    });
} else {
    try {
        const text = fs.readFileSync(file, 'utf-8');
        ccwc(text);
    } catch (error) {
        console.log('Error reading:', error);
    }
}
