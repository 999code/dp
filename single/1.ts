// 透明单例
// 客户端或者说使用者不需要知道需要按照单例使用

export {}

let Window=(function(){
    let window:Window
    let Window=function(this:Window){
        if(window){
            return window
        }else{

            return (window=this)
        }
    }
})()

let win1=new (Window as any)()

// 简单单例

class Window1{
    private static instance: Window1;
    private constructor(){

    }
    public static getInstance(){
        if(!Window1.instance){
            Window1.instance=new Window1()
        }
        return Window1.instance
    }
}

let w1=Window1.getInstance()
let w2=Window1.getInstance()


