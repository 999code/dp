// 开放封闭原则 对修改封闭 对拓展开放


class Customer{
    constructor(public rank:string,public discount:number=1){

    }
}

class Product{
    constructor(public name:string,public price:number){
        
    }

    // 不同顾客哟普不一样的折扣
    cost(customer:Customer){
        return this.price*customer.discount
    }

}


let product=new Product('笔记本电脑',1000)
let member=new Customer('member',.8)
let vip=new Customer('vip',.6)
let guest=new Customer('guest')



console.log(product.cost(member));


