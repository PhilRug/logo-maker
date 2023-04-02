const inquirer = require("inquirer");
const fs = require("fs");
const {Square, Circle, Triangle} = require('./lib/shapes');

const questions = [
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
];

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

async function init() {
    const input = await inquirer.prompt(questions);
        userText = input['text'];
        userTextColor = input['textcolor'];
        userShape = input['shape'];
        userShapeColor = input['shapecolor'];
        let shapeChoice = '';
            if (userShape === 'Square') {
                shapeChoice = new Square;
            }
            if (userShape === 'Triangle') {
                shapeChoice = new Triangle;
            }
            if (userShape === 'Circle') {
                shapeChoice = new Circle;
            }
    shapeChoice.set(userShapeColor);

    const svg = new Logo();
    svg.shapeEl.set(shapeChoice);
    svg.textEl.set(text, textcolor);
    finalImage = svg.render();
    const svgName = 'logo.svg';

fs.writeFile(svgName, finalImage, (err) => err ? console.error(error) : console.log("Success!"));
}

init();