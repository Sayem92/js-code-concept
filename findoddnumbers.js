function getsum(numbers){
    let sum =0;
    for(let i=0; i< numbers.length; i++){
     const index = i;
     const element = numbers[index];
      sum =sum + element;
    //  console.log(index, element, sum) ;  
    }
    return sum;
}






//main ok
function getOddNumber(numbers){
    const OddNumbers = []; 
    for( let i=0; i < numbers.length; i++){
        const index= i;
        const element = numbers[index];
        if( element % 2 !== 0){
            console.log(index,element);
            OddNumbers.push(element);
        }   
    }
    return OddNumbers;
}

const myNumbers=[25, 26, 38, 55, 60, 89, 67, 589, 666 ];
const OddNumbers=getOddNumber(myNumbers);
console.log(OddNumbers);

// ai oddd number sum a pataici juk korar jonno.
const OddNumberSum= getsum(OddNumbers);
console.log('odd numbers sum',OddNumberSum);
