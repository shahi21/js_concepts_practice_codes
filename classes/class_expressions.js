const Rectangle= class{
    constructor(width, height){
        this.width= width;
        this.height= height;
    }

    getArea(){
        return this.width * this.height;
    }
};
const rect= new Rectangle(100,80);
console.log(rect.getArea());