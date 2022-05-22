function Window1(){
    this.name='xxx'
}


Window1.prototype.hello=function(){
    console.log('hello');
}



// 希望 封装变化 createInstance可以创建任何类型的实例
let createInstance=function(Constructor){
    let instance
    return function(){
        console.log(this);
        if(!instance){
            Constructor.apply(this, arguments)
            console.log(this);
            debugger
            Object.setPrototypeOf(this,Constructor.prototype)
            instance=this
        }
        return instance
    }
}

const createWindow1=createInstance(Window1)
let w1=new (createWindow1)()
let w2=new (createWindow1)()
console.log(w1===w2);



