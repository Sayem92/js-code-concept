// //even number
// console.log(4/2)
// console.log(26/2)
// console.log(24/2)
// console.log(400/2)

// //odd number
// console.log(41/2)
// console.log(261/2)
// console.log(27/2)
// console.log(61/2)

// bag ses 000000
// console.log(4%2)
// console.log(26%2)
// console.log(24%2)
// console.log(400%2)

//bag ses ace mane bejur
// console.log(41%2)
// console.log(261%2)
// console.log(27%2)
// console.log(61%2)

function isEven(number){
    const reminder = number % 2;
    if(reminder === 0){
        return true;
    }
    else{
        return false;
    }

}
const myNumberIsEven= isEven(300);
console.log(myNumberIsEven)
const herNumberIsEven =isEven(455);
console.log(herNumberIsEven);