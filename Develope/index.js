const inquirer = require('inquirer');
const {generateMarkDown, writeToFile} = require ('./utils/index');
const questions = require ('./questions');
const prompt = inquirer.createPromptModule();



prompt(questions)
    .then(generateMarkDown)
    .then(writeToFile);
