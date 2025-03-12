type nums = {
    [key:string] : number
}

const ab :nums[] = [{a:3},{a:3},{a:3},{a:3},{a:3}]

let sum : number = ab.reduce((sum,num)=>sum+=num.a,0)
console.log(sum)


function promiseSandB():Promise<string|boolean> {
    return new Promise((resolve,reject)=>{
        const success = Math.random() >0.5 ;
        if(success){
            return resolve(`The promise is succesfull`)
        }else{
            return reject(false)
        }
    })
}
promiseSandB().then((result)=>{
console.log(result)
})
.catch((error)=>{
    console.log(error)
})

function getdata(success:boolean):Promise<string>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(success){
                resolve('The promise is sucessfull')
            }else{
                reject(false)
            }
        })
    })
}
getdata(true).then((result)=>{
    console.log(result)
})
.catch((error)=>{
    console.log(error)
})


function tosee<T>(value:T):T{
    return value
}

console.log(tosee<number>(10))