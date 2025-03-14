// let count : number ;
// count = "hello" ;
// console.log(count)

let greetion : (a:string) => string

//generic
function identity<T>(value : T): T {
    return value
}
console.log(identity<number>(10))

function add(a:number,b:number):number{
    return a+b
}

//optional parameter
function multiply(a:number,b:number,c?: number) :number{
    if(c !== undefined){
        return a*b*c;
    }
    return a*b;
}

let value : string | number

// type Dog = { bark : ()=> void };

//type 
type userType = {
    name:string
    age:number
}

interface userIType  {
    name:string
    age:number
}

// animal interface interface inheritance called extends the interface

interface Animal {
    name:string
}

interface Dog extends Animal {

    bark(): void;
}

// const myDog: Dog = {
//     name:"Tomy",
//     bark: ()=>{
//        return console.log("bow bow bowww")
//     }
// }

// doing it on the type
type Bird = {
    name:string
}

type Hen =  Bird & {
    bark: ()=> void
}

const myHen : Hen ={
    name:"Naadan",
    bark:()=> console.log('kokara ko ko')
}

// immutable array
const numbers : readonly number[] = [1,2,3,4,5,6]

//promise that resolve string
function getMessage():Promise<string>{
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve("Hello typescript")
        }, 
    2000);
    })
}

getMessage().then((message)=>console.log(message));

async function message(): Promise<string> {
    return 'hello from message';
}

async function vamessage() {
    const  messages = await message()
    console.log(messages)
}
vamessage();

//creating a person class from an interface
interface person{
    name:string
    age:number
    great():string
}

class Employee implements person{
    constructor(public name:string,public age:number){

    }
    great(): string {
        return `i am ${this.name} and am ${this.age} years old`
    }
}