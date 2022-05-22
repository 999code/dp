class Water{
}

class Animal{
    public age:number
    public name:string
    public water:Water
    constructor(age: number,name: string,water:Water){
        this.age=age
        this.name=name
        this.water=water
    }

    public eat(){
    }
    public drink(){
    }
}


// 接口是行为的抽象

interface Eggs{
    giveEggs():number;
}

class Bird extends Animal{
    public swing!: number
    public fly(){
    }
    giveEggs(){
        return 2
    }
}

class TangFater {}

class TangFriend {}
class TangWife {}
class TangChild {}
class TangHouse {}
class TanggDuck extends Bird{
    public father!:TangFater
    public friends!:Array<TangFriend>
    public wife!:TangWife
    public children!:Array<TangChild>
    public house!:Array<TangHouse>
}

class BidBird extends Bird{
    public kidney!:Array<BidBird>
}

class BidBirdGroup{
    public birds!:Array<BidBird>
}