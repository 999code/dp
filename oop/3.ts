// 封装 可以把内部属性隐藏起来 不让外部直接访问可以提供类的易用性
// 1 可以提供类易用性
// 2 可以保护类的隐私
export {

}

class Animal{
    // public共有属性此属性可以在本类子类其他类访问
    public name:string
    // 受保护属性 可以在本类子类中访问 
    protected age:number
    // 私有属性 只能在本类中访问
    private weight:number
    constructor(name: string,age: number,weight: number){
        this.name=name
        this.age=age
        this.weight=weight
    }

}

class Person extends Animal {
    // 这是我的个人账户余额
    private balance:number;
    constructor(name:string,age:number,weight:number,balance:number){
        super(name,age,weight)
        this.balance=balance
    }
}



let p1=new Person('zhufeng',10,100,1000)
p1.name
p1.age
p1.weight

