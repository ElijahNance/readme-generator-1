module.exports = [
    
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
            choices: ['MIT', 'Zlib', 'PDDL']
        },
        {
            message: "Enter your GitHub Username.",
            name: 'gitHub',
        },
        {
            message: "Enter your email.",
            name: 'email',
        },
    ];
