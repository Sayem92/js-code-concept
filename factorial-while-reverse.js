// reverse way 
function factorial(number){
    let num= number;
    let result = 1;
    while(num >=1){
        console.log(num)
        result= result * num;
        num--;
    }
    return result;
}
const fact=factorial(9);
console.log(fact)


// i use kore
function factorial(number){
    let i= number;
    let result = 1;
    while(i>=1){
        console.log(i)
        result= result * i;
        i--;
    }
    return result;
}
const factall=factorial(18);
console.log(factall)