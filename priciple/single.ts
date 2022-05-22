// 单一职责
// 一个类的功能，要可能单一不要太杂
// 如果一个类的代码行数超过100 或者方法超过10个就要拆分了
export {}

// 拆的过细就可能降低内聚性
class Product{
    public name:string
    public price:number
    public category:Category
    public updateName(){

    }

    public updatePrice(){

    }
    public updateCategory(){

    }
}

class Category{
    public name:string
    public icon:string

}




