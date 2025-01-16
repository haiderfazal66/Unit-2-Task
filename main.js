/**
 * ICS3 - Mr. J 🐠
 * RICH SUMMATIVE TASK 2024-25 S1
 *
 * Description:
 * 
 * Author:
 **/ 


'use strict';

// A very accurate rounding function
function round(value, decimals) {
    let multiplier = 10**decimals;
    return Math.round((value + Number.EPSILON) * multiplier) / multiplier;
}

// Get a random number from min to max
function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* 
    Sleep the code for a certain number of ms
    NOTE: Any function that will use this must be declared with async and
    this sleep function called with "await sleep(x)" where x is a number of ms
*/
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const themes = {
    school: ["school", "book", "class", "pencil", "teacher", "student", "desk", "chalk", "board", "notebook", "eraser", "lunch", "recess", "backpack", "homework", "principal", "cafeteria", "gym", "library", "playground"],
    sports: ["soccer", "basketball", "baseball", "tennis", "cricket", "hockey", "football", "volleyball", "golf", "swimming", "running", "cycling", "boxing", "wrestling", "skiing", "surfing", "skating", "gymnastics", "archery", "rowing"],
    computer_science: ["algorithm", "binary", "compiler", "debug", "encryption", "function", "hardware", "internet", "java", "keyboard", "linux", "memory", "network", "python", "software", "variable", "website", "database", "router", "server"],
    halloween: ["pumpkin", "witch", "ghost", "vampire", "zombie", "skeleton", "haunted", "costume", "candy", "monster", "spooky", "goblin", "cauldron", "mummy", "bat", "broom", "lantern", "nightmare", "creepy", "fright"],
    christmas: ["snowman", "reindeer", "santa", "elves", "presents", "tree", "stocking", "ornaments", "chimney", "holiday", "carols", "wreath", "mistletoe", "gingerbread", "northpole", "sleigh", "frosty", "rudolph", "garland", "jingle"]
};

function scrambleWord(word) {
    let scrambled = word.split('').sort(() => 0.5 - Math.random()).join('');
    while (scrambled === word) {
        scrambled = word.split('').sort(() => 0.5 - Math.random()).join('');
    }
    return scrambled;
}

function displayScrambledWords(theme) {
    const tableBody = document.getElementById('words-table');
    tableBody.innerHTML = '';
    themes[theme].forEach((word, index) => {
        const row = document.createElement('tr');
        const scrambledWordCell = document.createElement('td');
        const answerCell = document.createElement('td');
        const input = document.createElement('input');
        input.type = 'text';
        input.id = `${theme}-answer-${index}`;
        scrambledWordCell.textContent = scrambleWord(word);
        answerCell.appendChild(input);
        row.appendChild(scrambledWordCell);
        row.appendChild(answerCell);
        tableBody.appendChild(row);
    });
}

function checkAnswer(theme) {
    const result = document.getElementById('result');
    let correctAnswers = 0;
    themes[theme].forEach((word, index) => {
        const userAnswer = document.getElementById(`${theme}-answer-${index}`).value.toLowerCase();
        if (userAnswer === word) {
            correctAnswers++;
        }
    });
    result.textContent = `You got ${correctAnswers} out of ${themes[theme].length} correct!`;
}

window.onload = () => {
    const path = window.location.pathname;
    const page = path.split('/').pop().split('.')[0];
    if (page in themes) {
        displayScrambledWords(page);
    }
};