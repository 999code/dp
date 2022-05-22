export {}

interface Star{
    answerPhone():void
}

class AngelaBaby implements Star{
    // 是否有空的意思 
    available:boolean=true
    answerPhone():void{
        console.log('你好我是angelababy');
        
    }
}


class AngelaBabyAgent implements Star{
    angelababy: AngelaBaby;
    // 让经纪人保持一个对angelababy的引用 
    constructor(){
        this.angelababy=new AngelaBaby()
    }
    answerPhone(): void {
        console.log('你好，我是angelababy的经纪人');
        if(this.angelababy.available){
            this.angelababy.answerPhone()
        }else{
            console.log('很抱歉没空');
        }
    }

}



let angelaBabyAgent=new AngelaBabyAgent()
angelaBabyAgent.answerPhone()


