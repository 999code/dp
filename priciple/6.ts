// 合成复用原则:分别是关联(聚合和组合)泛化和依赖

export {}
class  Category{
    // 也是关联 双向关联 互相关联
    public products:Array<Product>
} 

class Product{
    // 产品有一个实例属性是分类 那么就认为产品关联了分类
    // 单向关联和双向关联
    public category:Category
}

class Class{
    public students:Array<Student>
}

class Pen{

}

class Student{
    // 如果另外一个类是当前类的方法或属性或者是局部变量就是依赖关系
    read(book:Book){
        let pen=new Pen()
    }
}


class Book{

}

class Heart{

}

class Person{
    public heart:Heart
}


class Cooker{
    cook(){

    }
}


class Person2{
    // 继承耦合性太强所以使用组合
    private cooker:Cooker
    cook(){
        this.cooker.cook()
    }
}

