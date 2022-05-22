namespace a{
    interface Animal{
        swings:number
        fly():void
    }
    // 如果说装饰器函数是用来修饰类的话 那么target就是类的构造函数本身
    function flyable(target){
        console.log(target);
        target.prototype.swings=2
        target.prototype.fly=function(){
            console.log('我能飞');
            
        }
    }
    @flyable
    class Animal{
        constructor(){}
    }
    let animal:Animal=new Animal
    console.log(animal.swings);
    animal.fly()
}

namespace b{
    // 实例属性的时候target是类的原型对象，key是属性的名字
    function instancePropertyDecorator(target:any,key: any) {
        target.protoName="我是类的原型上的属性"
        console.log('instancePropertyDecorator',target,key);
    }
    function classPropertyDecorator(target:any,key: any) {
        // 类的静态属性的时候target是类的构造函数，key是属性名
        console.log('classPropertyDecorator',target,key);
    }
        
    // 如果是实例的方法的话target是类的原型对象 key是方法名 descriptor属性描述符
    function instanceMethodDecorator(target:any,key: any,descriptor:any) {
        console.log('instanceMethodDecorator',target,key,descriptor);
    }
    // 如果是类的静态方法的话target是类的构造函数  key是方法名 descriptor属性描述符
    function classMethodDecorator(target:any,key: any,descriptor:any) {
        console.log('classMethodDecorator',target,key,descriptor);
    }
    class Person{
        @instancePropertyDecorator
        instanceProperty:string //实例属性
        @classPropertyDecorator
        static classProperty:string //类的静态属性
        @instanceMethodDecorator
        instanceMethod(){} //实例的方法
        @classMethodDecorator
        static classMethod(){

        } //类的静态方法
    }
}


