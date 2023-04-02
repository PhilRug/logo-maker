const inquirer = require("inquirer");
const fs = require("fs");
const {Square, Circle, Triangle} = require('./lib/shapes');

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

class Logo {
    constructor() {
        this.textEl = '';
        this.shapeEl = '';        
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"></svg>`
    }
    makeTextEl(text, color) {
        this.textEl = `<text x="150" y="125" font-size="60" text-anchor="middle" fill=${color}>${text}</text>`
    }
    makeShapeEl(shape) {
        this.shapeEl = shape.render()
    }
}



fs.writeFile('logo.svg', logo, (err) => err ? console.error(error) : console.log("Success!"));
