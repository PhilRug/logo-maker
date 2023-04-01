const inquirer = require("inquirer");
const fs = require("fs");
const Logo = require('./lib/shapes');

inquirer.prompt([
    {
        type: 'input',
        message: 'What 3 characters would you like to use for your logo?',
        name: 'text',
    },
    {
        type: 'input',
        message: 'What color would you like your text?',
        name: 'textcolor',
    },
    {
        type: 'list',
        message: 'What shape would you like to use',
        name: 'shape',
        choices: ['Square', 'Circle', 'Triangle'],
    },
    {
        type: 'input',
        message: 'What color would you like your shape to be?',
        name: 'shapecolor',
    }
]).then(response => {
    console.log(response);
    writeToFile(response);
})

function writeToFile({text, textcolor, shape, shapecolor}) {
    const logo = 
`
`



fs.writeFile('logo.svg', logo, (err) => err ? console.error(error) : console.log("Success!"));
}