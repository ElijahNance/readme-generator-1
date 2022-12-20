const inquirer = require('inquirer');
const prompt = inquirer.createPromptModule();

prompt([
    {
        message: "Enter the title of your project.",
        name: 'title',
    },
    {
        message: "Create a description of your project.",
        name: 'description',
    },
    {
        message: "Enter installation instructions.",
        name: 'installation',
    },
    {
        message: "Enter usage information.",
        name: 'usage',
    },
    {
        message: "Enter contribution guidelines.",
        name: 'contribution',
    },
    {
        message: "Enter test instructions.",
        name: 'title',
    },
    {
        message: "Enter your GitHub Username.",
        name: 'gitHub',
    },
    {
        message: "Enter your email.",
        name: 'email',
    },
])