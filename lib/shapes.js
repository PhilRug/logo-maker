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

class Square extends Shape {
    render() {
        return `<rect x="200" y="200" width="300" height="200"
        fill=${this.color}/>`
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="600" cy="200" r="100" width="300" height="200" fill=${this.color}/>`
    }
}    

module.exports = {Triangle, Square, Circle};