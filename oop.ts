//inheritance example 
class Animal{
    name:string
    constructor(name:string){
        this.name = name
    }
    makeSound() :void{
        console.log('Some generic animal sound')
    }
}
class Dog extends Animal{
    bread:string;

    constructor(bread:string,name:string){
        super(name)
        this.bread = bread
    }
    makeSound(): void {
        console.log('Woof woof')
    }
}
const myDog =  new Dog('German',"Tommy") ;
myDog.makeSound()
console.log(myDog.name);
console.log(myDog.bread);



