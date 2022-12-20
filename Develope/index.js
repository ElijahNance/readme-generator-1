const inquirer = require('inquirer');
const fs = require('fs');
const prompt = inquirer.createPromptModule();


const generateMarkDown = (answers) => {
    `# ${answers.title}

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
    - filler text filler text filler textfiller textfiller text filler text filler text filler text filler text filler text filler text
    
    ## Contributing
    - ${answers.contribution}
    
    ## Tests
    - ${answers.test}
    
    ## Questions
    - ${answers.gitHub}. If you have any further questions you can reach me at my email, ${answers.email}.`
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
        message: "Enter your GitHub Username.",
        name: 'gitHub',
    },
    {
        message: "Enter your email.",
        name: 'email',
    },
]).then(generateMarkDown)