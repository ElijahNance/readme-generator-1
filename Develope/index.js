const inquirer = require('inquirer');
const fs = require('fs');
const prompt = inquirer.createPromptModule();

const writeToFile = (markdown) => {
    try {
        fs.writeFileSync('README.md', markdown);
        console.log('Success!');
    } catch (err) {
        console.log(err);
    }
}

const generateMarkDown = (answers) => {
   return `# ${answers.title}
   [![License: ${encodeURIComponent(answers.license)}](https://img.shields.io/badge/License-${encodeURIComponent(answers.license)}-yellow.svg)](https://opensource.org/licenses/${encodeURIComponent(answers.license)})
## Description
- ${answers.description}
    
## Table of Contents 
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Question](#questions)
    
## Installation
- ${answers.installation}
    
## Usage
- ${answers.usage}
    
## License
- ${answers.license}
    
## Contributing
- ${answers.contribution}
    
## Tests
- ${answers.test}
    
## Questions
- [${answers.gitHub}](https://www.github.com/${answers.gitHub}). If you have any further questions you can reach me at my email, ${answers.email}.`
};

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
        name: 'test',
    },
    {
        type: 'list',
        name: 'license',
        choices: ['MIT', 'EPL 1.0', 'ODC BY']
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
    .then(generateMarkDown)
    .then(writeToFile);
