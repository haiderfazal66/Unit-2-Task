/**
 * ICS3 - Mr. J 🐠
 * RICH SUMMATIVE TASK 2024-25 S1
 *
 * Description:
 * 
 * Author:
 **/ 


'use strict';

// Function to round a number to a specified number of decimals
function round(value, decimals) {
    return Number(value.toFixed(decimals));
}

// Function to get a random integer between min and max (inclusive)
function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to pause execution for a specified number of milliseconds
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Define the theme and their words
const themes = {
    school: ["school", "book", "class", "pencil", "teacher", "student", "desk", "chalk", "board", "notebook", "eraser", "lunch", "recess", "backpack", "homework", "principal", "cafeteria", "gym", "library", "playground"],
    sports: ["soccer", "basketball", "baseball", "tennis", "cricket", "hockey", "football", "volleyball", "golf", "swimming", "running", "cycling", "boxing", "wrestling", "skiing", "surfing", "skating", "gymnastics", "archery", "rowing"],
    computer_science: ["algorithm", "binary", "compiler", "debug", "encryption", "function", "hardware", "internet", "java", "keyboard", "linux", "memory", "network", "python", "software", "variable", "website", "database", "router", "server"],
    halloween: ["pumpkin", "witch", "ghost", "vampire", "zombie", "skeleton", "haunted", "costume", "candy", "monster", "spooky", "goblin", "cauldron", "mummy", "bat", "broom", "lantern", "nightmare", "creepy", "fright"],
    christmas: ["snowman", "reindeer", "santa", "elves", "presents", "tree", "stocking", "ornaments", "chimney", "holiday", "carols", "wreath", "mistletoe", "gingerbread", "northpole", "sleigh", "frosty", "rudolph", "garland", "jingle"]
};

// Function to scramble the letters of a word
function scrambleWord(word) {
    let scrambled = word.split('').sort(() => Math.random() - 0.5).join('');
    while (scrambled === word) {
        scrambled = word.split('').sort(() => Math.random() - 0.5).join('');
    }
    return scrambled;
}

// Function to display scrambled words on the page
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

// Function to check the user's answers
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

// Function to run when the page loads
window.onload = () => {
    const path = window.location.pathname;
    const page = path.split('/').pop().split('.')[0];
    if (themes[page]) {
        displayScrambledWords(page);
    }
};