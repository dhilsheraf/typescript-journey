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