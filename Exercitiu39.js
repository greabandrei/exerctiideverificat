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
