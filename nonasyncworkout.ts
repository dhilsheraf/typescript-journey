interface Box<T> {
   name:T 
}

//type assertion example 
const n :any = `Hello word`
const lengh :number = (n as string).length

//typeguard example
function printLength(t:string | number) :void{
    if(typeof t === 'string'){
        console.log(`The length of the string is ${t.length}`)
    }else{
        console.log(`It is not a string`)
    }
}

//abstract

abstract class Animall {
    constructor(public name:string ){
        
    }
    abstract makeSound() :void
    move():void{
        console.log(`${this.name} is moving`)
    }
}

class Dogg extends Animall{
    makeSound(): void {
        console.log(`woof woof`)
    }
}

const lDog = new Dogg('Jinto')
lDog.makeSound()
lDog.move()