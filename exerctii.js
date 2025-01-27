/*

Exercise 38: Calendar Month Generator
Create a function that generates a calendar month array given
a year and month. Include previous/next month's overflow dates.
Example:
Input: 2024, 3 (March)
Output: 6-week array with dates including overflow from Feb/Apr
*/


let date = new Date (2024, 10, 0);
let numberOfDaysInMonth = date.getDate(); //aflam numarul de zile dintr o luna
//console.log(numberOfDaysInMonth)


let endOfMonth = date.getDay(); // aflam in ce zi a saptamanii se incheie luna
//console.log(endOfMonth)       //
 

//find out the day month begins
date.setDate(1); //setam data curenta a lunii la data de 1
let newMonth = date.getDay(); //aflam in ce zi a saptamanii incepe luna
//console.log(newMonth)


let x = 1;
do{
    row.push((new Array(7)).fill(0)); //generam 6 arrays a cate 7 elemente(pentru fiecare zi a saptamanii)
    x++
}while(x < 7)

let i = 0; // indexul array
let j = 0; //index pentru elementele fiecarui array
let nr = 0; //valoarea zilei 



for(let i = 0; i < 7; i++) {
    for(let j = 0; j < 7; j++) {
        if(counter < numberOfDaysInMonth) {     //counter sau numarul de zile nu trebuie sa depaseasca dimensiunile lunii
            if(newMonth === 1) {        //caz 1 : luna incepe intr o zi de luni
                row[i][j] = counter++             
            }
            if(newMonth === 2 ) {
                row[i][j] = counter++
                
            }
        }   
    }
}
console.log(row)

/*
Exercise 39: String Multiplication
Implement multiplication of two large numbers represented as strings.
Don't convert to numbers (numbers might be too large).
Example:
Input: "123", "456"
Output: "56088"
*/
function multiplyStrings(num1, num2) {
    // implementation here
    let num3;
    num3 = (num1 * num2);
    return num3;
}
console.log(multiplyStrings("123", "456"));     // "56088"
console.log(multiplyStrings("999", "999"));     // "998001"
console.log(multiplyStrings("0", "52"));        // "0"
//nu vad o modalitate mai simpla. Care e defapt perspectiva?
