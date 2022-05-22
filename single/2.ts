// 封装变化
export {}
interface Window{
    hello:any
}
function Window(){

}


Window.prototype.hello=function(){
    console.log('hello');
}



// 希望 封装变化 createInstance可以创建任何类型的实例
let createInstance=function(Constructor:any){
    let instance:Window
    return function(this:any){
        if(!instance){
            Constructor.apply(this, arguments)
            Object.setPrototypeOf(this,Constructor.prototype)
            instance=this
        }
        return instance
    }
}

const createWindow=createInstance(Window)
let w1=new (createWindow as any)()
let w2=new (createWindow as any)()
console.log(w1===w2);



