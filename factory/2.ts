export {}
abstract class AmericaCoffee{}
abstract class LatteCoffee{}
abstract class CappuccinoCoffee{}

class StarBuckAmericanCoffee extends AmericanCoffee {}
class LuckinAmericanCoffee extends AmericaCoffee {}
class StarBuckLetteCoffee extends LatteCoffee{}
class LuckinLatteeCoffee extends LatteCoffee{}
class LuckinCappuccinoCoffeeCoffee extends LatteCoffee{}
class StarBuckCappuccinoCoffee extends CappuccinoCoffee{}

// 抽象工厂方法

abstract class CafeFactory{
    abstract createAmericanCoffee():AmericaCoffee
    abstract createLatteeCoffee():LatteCoffee
    abstract createCappuccinoCoffeeCoffee():CappuccinoCoffee
}

class StarBuckCafeFactory extends CafeFactory{
    createAmericanCoffee(): AmericaCoffee {
        return new StarBuckAmericanCoffee("")
    }
    createLatteeCoffee(): LatteCoffee {
        return new StarBuckLetteCoffee()
    }
    createCappuccinoCoffeeCoffee(): CappuccinoCoffee {
        return new StarBuckCappuccinoCoffee()
    }   
}


class LuckinCafeFactory extends CafeFactory{
    createAmericanCoffee(): AmericaCoffee {
        return new LuckinAmericanCoffee()
    }
    createLatteeCoffee(): LatteCoffee {
        return new LuckinLatteeCoffee()
    }
    createCappuccinoCoffeeCoffee(): CappuccinoCoffee {
        return new LuckinCappuccinoCoffeeCoffee()
    }   
}



let luckinCafeFactory=new LuckinCafeFactory()

console.log(luckinCafeFactory.createAmericanCoffee()) // 创建Luckin美式咖啡

