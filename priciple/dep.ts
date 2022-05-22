// 依赖倒置原则:依赖抽象而不依赖具体的实现


interface GirlFriend {
    age:number;
    height:number;
    cook():void
}


class LinZhiLing implements GirlFriend{
    age:number=35
    height: number=178;
    cook(): void {
        console.log('泡面');
        
    }
}


class HanMeimei implements GirlFriend{
    age:number=35
    height: number=178;
    cook(): void {
        throw new Error("泡面");
    }
}

class SingleDog{
    constructor(public girlFriend:GirlFriend){

    }
}


const dog1=new SingleDog(new LinZhiLing())
const dog2=new SingleDog(new HanMeimei())


