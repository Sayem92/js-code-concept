function isleapYear(year){
    const reminder = year % 4;
    if(reminder ===  0){
        return true;
    }
    return false;
    // else{
    //     return false;
    // }
}
const myLeapYear=isleapYear(2000);
console.log('my year is leapyear:',myLeapYear);
const herLeapYear=isleapYear(2011);
console.log('her year is leapyer:',herLeapYear);