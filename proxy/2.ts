// 缓存代理
// 阶乘 用空间换时间


const  factorial=function(num:number):number{
    if(num<=1){
        return 1
    }else{
        return num*factorial(num-1)
    }
}


const proxy=function(fn:Function){
    const cache={}
    return function(num:number){
        if(num in cache){
            return cache[num]
        }else{
            return cache[num]=fn(num)
        }
    }
}



let proxyFactorial=proxy(factorial)
console.log(proxyFactorial(10));
console.log(proxyFactorial(10));
console.log(proxyFactorial(10));
console.log(proxyFactorial(10));
console.log(proxyFactorial(10));
console.log(proxyFactorial(10));
console.log(proxyFactorial(10));
console.log(proxyFactorial(10));
