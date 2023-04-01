const triangle = new Triangle();
shape.setColor("blue");
expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');