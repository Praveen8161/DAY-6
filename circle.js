class Circle{
    constructor(radius,color){
        this._radius = radius.toFixed(1);
        this._color = color;
    }
    get radius(){
        return this._radius;
    }
    set radius(newRadius){
        if(newRadius < 0){
            console.log("Error:value have to be positive");
        }else{
            this._radius = newRadius;
        }
    }
    get color(){
        return this._color;
    }
    set color(newColor){
        if(newColor !== this._color){
            this._color = newColor;
        }else{
            console.log(`Error:${this._color} already exist please enter another color`);
        }
    }
    getArea(){
        console.log(`
        The Area of the given radius is ${(Math.PI * this._radius * this._radius).toFixed(1)}
        `);
    }
    getCircumference(){
        console.log(`
        The circumference of the given radius is ${(2 * Math.PI * this._radius).toFixed(1)}
        `);
    }
}

const circle = new Circle(2,"blue");
circle.getArea();
circle.getCircumference();

