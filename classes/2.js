class Circle{
    constructor(radius){
        this.radius=radius;

    }
    area(){
        return 3.14*this.radius*this.radius;
    }
    perimeter(){
        return 2*3.14*this.radius;
    }
}

const mycircle=new Circle(5);
console.log(mycircle.area());
console.log(mycircle.perimeter());