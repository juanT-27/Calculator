
const operation= document.getElementById("operation")
const result= document.getElementById("result")

const print = (value) =>{
    operation.textContent+=value
    console.log(operation)
}

const operators = (sign) => {
    
operation.textContent+= sign
   console.log(operation)
}

const equal= document.getElementById( "equal").addEventListener("click", function (){
 var exp= operation.textContent
 result.textContent= eval(exp)
    
})


const clear= document.getElementById( "clear").addEventListener("click", function(){
    const operation= document.getElementById("operation")
    operation.textContent="";
    result.textContent="";
})

const plus= document.getElementById( "plus").addEventListener("click", ()=>{operators("+")})
const substract= document.getElementById( "substract").addEventListener("click", ()=>{operators("-")})
const mult= document.getElementById( "mult").addEventListener("click", ()=>{operators("*")})
const divi= document.getElementById( "divi").addEventListener("click", ()=>{operators("/")})


const button1 = document.getElementById("1").addEventListener("click", ()=>{print (1)})
const button2 = document.getElementById("2").addEventListener("click", ()=>{print (2) })
const button4 = document.getElementById("3").addEventListener("click", ()=>{print (3)})
const button3 = document.getElementById("4").addEventListener("click", ()=>{print (4)})
const button5 = document.getElementById("5").addEventListener("click", ()=>{print (5)})
const button6 = document.getElementById("6").addEventListener("click", ()=>{print (6)})
const button7 = document.getElementById("7").addEventListener("click", ()=>{print (7)})
const button8 = document.getElementById("8").addEventListener("click", ()=>{print (8)})
const button9 = document.getElementById("9").addEventListener("click", ()=>{print (9)})
const button0 = document.getElementById("0").addEventListener("click", ()=>{print (0)})
