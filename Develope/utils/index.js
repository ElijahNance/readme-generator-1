const fs = require('fs');
module.exports = {

     writeToFile: (markdown) => {
        try {
            fs.writeFileSync('README.md', markdown);
            console.log('Success!');
        } catch (err) {
            console.log(err);
        }
    },
    generateMarkDown: (answers) => {
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
    },
};