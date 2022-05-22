// 尽可能使用父类或者抽象类
// 任何在能使用父类的地方都可以使用子类 多态有关

abstract class Drink{
    abstract getPrice():number
}
class cocaCola extends Drink{
    getPrice(): number {
        return 3
    }
}
class Fanta extends Drink{
    getPrice(): number {
        return 4
    }
}


class Customer1{
    drink(abstractDink: Drink){
        console.log('花费'+abstractDink.getPrice())    
    }
}
// 里氏置换 可以替换 任何可以传父类的地方都可以把子类传进去
// 里氏置换是一个原则要求子类不能违反父类的功能和规定
let c1=new Customer1()
c1.drink(new Fanta())