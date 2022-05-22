abstract class Coffee{
    constructor(public name:string){}
}


class AmericanCoffee extends Coffee{
}


class LatteCoffee extends Coffee{

}

class CappuccinoCoffee extends Coffee{

}

class CofeFactory{
    order(name:string){
        switch(name){
            case "AmericaCoffee":
                return new AmericanCoffee('美式咖啡')
            case "LatteeCoffee":
                return new LatteCoffee('拿铁咖啡')
            case 'CappuccinoCoffee':
                return new CappuccinoCoffee('卡布奇诺咖啡')
            default :
                throw new Error('你点的咖啡我们不支持')
        }
    }
}






