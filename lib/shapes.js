class Shape {
    constructor() {
        this.color = ''
    }
    colorChoice(color) {
        this.color = color;
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="100,200 300,200 200,100" fill=${this.color}/>`
    }
}

class Rectangle extends Shape {
    render() {
        return `<rect x="400" y="100" width="300" height="200"
        fill=${this.color}/>`
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="600" cy="200" r="100" width="300" height="200" fill=${this.color}/>`
    }
}    

module.exports = {Triangle, Rectangle, Circle};