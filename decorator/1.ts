abstract class Shape{
    abstract draw():void
}

class Circle extends Shape{
    draw(): void {
        console.log('绘制圆形');
    }
}
    
class Rectangle extends Shape{
    draw(): void {
        console.log('绘制矩形');
        
    }
}

// 装饰器模式的


abstract class ColorfulShape extends Shape{
    constructor(public shape:Shape){
        super()
    }
    abstract draw(): void;
}

class RedColorfulShape extends ColorfulShape{
    draw(): void {
        this.shape.draw()
        console.log('把边框涂成红色');
    }
    
}

class GreenColorfulShape extends ColorfulShape{
    draw(): void {
        this.shape.draw()
        console.log('把边框涂成绿色');
    }
    
}
// 画一个红色的圆形

let redColorfulShape=new RedColorfulShape(new Circle())
redColorfulShape.draw()

