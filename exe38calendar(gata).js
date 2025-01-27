/*
Exercise 38: Calendar Month Generator
Create a function that generates a calendar month array given
a year and month. Include previous/next month's overflow dates.
Example:
Input: 2024, 3 (March)
Output: 6-week array with dates including overflow from Feb/Apr
*/

function generateMonth(year, month) {
    // implementation here
    let row = [];
    let nr = 1; //reprezinta data sau valoarea fiecarei zi a luni
    let date = new Date (year, month, 0);// adaptam parametri introdusi la formatul pentru timp

    let numberOfDaysInCurrentMonth = date.getDate();//aflam numarul total de zile al oricarei luni
    //prev month
    let previousMonth = new Date (year, month - 1, 0);
    let prevMonthDays = previousMonth.getDate(); // obtinem ultimele zile ale lunii anterior suprapuse

    let endOfMonth = date.getDay(); // aflam in ce zi a saptamanii se incheie luna curenta

    //aflam ziua saptamanii in care incepe luna curenta
    date.setDate(1); // setam data curenta la ziua de 1;
    let firstDayOfMonth = date.getDay() // rezultatul este ziua saptamanii in care incepe luna

    //cream 6 arrays cu lungime totala egala numarul total de zile al saptamanii
    let x = 0
    do{
        row.push((new Array(7)).fill(0))
        x++
    }while(x < 6);

    //cazul 1 -> prima zi a lunii se afla in intervalul luni - sambata
    if(firstDayOfMonth >= 1) {
        for(let z = firstDayOfMonth - 2; z > -1; z--) {     //stabilim in ordinere descrescatoare zilele luni anterioare care se suprapun
            row[0][z] = prevMonthDays--
        }
        // dupa stabilirea zilelor din luna anterioara completam primul array cu primele zile ale lunii curente
        for(let i = 0; i < 1; i++) {
            for(let j = firstDayOfMonth - 1; j < 7; j++) {
                row[i][j] = nr++
            }
        }
        //generam restul valorilor incepand cu randul 2.
        for(let i = 1; i < 6; i++) {    
            for(let j = 0; j < 7; j++) {
                row[i][j] = nr++;   
                if(nr > numberOfDaysInCurrentMonth) {   //in momentul generarii ultimei zi a lunii curente resetam data la valorea de 1 si se continua pana la finalul array6
                    nr = 1;
                }
            }
        }

    }

    //cazul 2 -> prima zi a luni este duminica
    if(firstDayOfMonth === 0) {
        for(let z = 5; z > -1; z--) {       //generam in sens invers in functie de ultima zi a lunii precedente
            row[0][z] =prevMonthDays--
        }
        row[0][6] = nr++                    //ziua de duminica va fi data de 1 permanent in aceasta situatie
        for(let i = 1; i < 6; i++) {        //generam restul zilelor pana la sfarsitul array6 alaturi de primele zile suprapuse ale lunii urmatoare
            for(let j = 0; j < 7; j++) {
                row[i][j] = nr++;
                if(nr > numberOfDaysInCurrentMonth) {
                    nr = 1;
                }
            }
        }
    }
    return row;
}



console.log(generateMonth(2024, 3));  // 6-week array for March 2024
console.log(generateMonth(2024, 2));  // 6-week array for February 2024

