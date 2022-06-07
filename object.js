class Human {
    constructor(name,age){
        this.name = name,
        this.age = age
    }
    talk(){
        console.log(this.name + " speaks")
    }
}

class Man extends Human{
    constructor(name,age,color){
        super(name,age)
    }
}

    
 let child = new Man("Kofi",6);
child.talk()

