/*
Exercise 40: Date Formatter
Create a function that formats a date according to a given pattern.
Support patterns like 'YYYY-MM-DD', 'DD/MM/YYYY', 'MMM DD, YYYY', etc.
Example:
Input: new Date(2024, 2, 15), "YYYY-MM-DD"
Output: "2024-03-15"
*/
function formatDate(date, pattern) {
    // implementation here
    let time = new Date (date);   //convertim parametrul introdus in date format
    let day = time.getDate();    //extragem ziua din format
    let month = time.getUTCMonth() + 1; //extragem luna din format
    let year = time.getFullYear();  //extragem anul din format

    let month1 = date.toDateString();   //variabila ajutatoare pentru conversia la cuvinte a lunii
    let monthWord = month1.split(' '); //impartim monthWord astfel incat sa putem extrage luna sub forma de cuvant

    if(pattern.length <= 10) {         //situatia 1, format cu cratima sau slash
        let x = 0;
        while(x < 1) {                  //cream un while cu o singura iteratie
            pattern = pattern.replace('DD', day);   //inlocuim textul cu valoarea extrasa
            if(month >= 10) {
                pattern = pattern.replace('MM', month); //inlocuim textul cu luna care i se atribuie, daca nu avem 2 cifre adaugam un extra 0
            }else{
                pattern = pattern.replace('MM', '0' + month)
            }
            pattern = pattern.replace('YYYY', year)     //inlocuim textul cu anul aferent
            x++                                         //incrementam x si oprim ciclul
        }
    }

    if(pattern.length > 10) {           //situatia 2, format cu spatiu si luna formata din litere
        let x = 0;
        while(x < 1) {
            pattern = pattern.replace('DD', day);       //inlocuim ziua cu valoarea aferenta
            pattern = pattern.replace('YYYY', year);    //inlocuim anul cu valoarea aferenta
            pattern = pattern.replace('MMM', monthWord[1] + '') //inlocuim 'MMM' cu valorea extrasa din monthWord pentru a avea luna non-numerica
            x++
        }
    }

    return pattern;
}
console.log(formatDate(new Date(2024, 9, 15), "YYYY-MM-DD"));     // "2024-03-15"
console.log(formatDate(new Date(2024, 9, 15), "DD/MM/YYYY"));     // "15/03/2024"
console.log(formatDate(new Date(2024, 9, 15), "MMM DD, YYYY"));   // "Mar 15, 2024"
