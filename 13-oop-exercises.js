/*
Exercise 1: Create an empty object called 'person'
Requirements:
- Create an empty object using object literal notation
Test cases:
console.log(typeof person === 'object');  // true
console.log(Object.keys(person).length === 0);  // true
*/

// const person = {
// };
// console.log(Object.keys(person).length === 0);
// console.log(typeof person === 'object');


/*
Exercise 2: Add a property 'name' with your name to the person object
Requirements:
- Add property after object creation
- Name should be a string
Test cases:
console.log(person.name.length > 0);  // true
console.log(typeof person.name === 'string');  // true
*/

// const person = {
// };
// person.name = 'Andrei';

// console.log(person.name.length > 0);
// console.log(typeof person.name === 'string');



/*
Exercise 3: Add an 'age' property to the person object
Requirements:
- Age should be a number
- Age should be positive
Test cases:
console.log(typeof person.age === 'number');  // true
console.log(person.age > 0);  // true
*/
// const person = {
//     name: 'Andrei'
// };
// person.age = 22;

// console.log(typeof person.age === 'number');
// console.log(person.age > 0);




/*
Exercise 4: Create an object 'car' with properties: brand, model, and year
Requirements:
- All properties should be initialized during object creation
- Year should be a number
Test cases:
console.log(car.brand && car.model && car.year);  // true
console.log(typeof car.year === 'number');  // true
*/
// const car = {
//     brand: 'Dacia',
//     model: 'Sandero',
//     year: 2022
// }

// console.log(car.brand && car.model && car.year);
// console.log(typeof car.year === 'number');




/*
Exercise 5: Create a method 'start' in the car object
Requirements:
- Method should return a string "The [brand] [model] is starting!"
Test cases:
console.log(car.start() === `The ${car.brand} ${car.model} is starting!`);  // true
*/
// const car = {
//     brand: 'Dacia',
//     model: 'Sandero',
//     year: 2022,
//     start: function() {
//         return `The ${car.brand} ${car.model} is starting`
//     }
// }

// console.log(car.start())
// console.log(car.start() === `The ${car.brand} ${car.model} is starting`)



/*
Exercise 6: Create an object 'calculator' with methods: add and subtract
Requirements:
- add(a, b) should return sum of two numbers
- subtract(a, b) should return difference of two numbers
- Both methods should handle invalid inputs
Test cases:
console.log(calculator.add(5, 3) === 8);  // true
console.log(calculator.subtract(5, 3) === 2);  // true
console.log(calculator.add('5', '3') === 8);  // true (bonus: type coercion)
*/
// const calculator = {
//     add: function(a, b) {
//         if(typeof a !== 'number') {
//             a = Number(a)
//         };
//         if(typeof b !== 'number') {
//             b = Number(b)
//         }
//         return a + b
//     },
//     subtract: function(a, b) {
//         if(typeof a !== 'number') {
//             a = Number(a)
//         };
//         if(typeof b !== 'number') {
//             b = Number(b)
//         }
//         return a - b
//     }
// }

// console.log(calculator.add(5, 3) === 8);
// console.log(calculator.subtract(5, 3) === 2);
// console.log(calculator.add('5', '3') === 8);





/*
Exercise 7: Create an object 'book' with properties: title, author, and pages
Requirements:
- All properties should be strings (except pages which is number)
- Pages should be positive number
Test cases:
console.log(typeof book.title === 'string');  // true
console.log(typeof book.pages === 'number');  // true
console.log(book.pages > 0);  // true
*/
// const book = {
//     title: 'Big Bang',
//     author: 'John Stewart',
//     pages: 900
// }

// console.log(typeof book.title === 'string');
// console.log(typeof book.pages === 'number');
// console.log(book.pages > 0);



/*
Exercise 8: Add a method 'info' to the book object
Requirements:
- Should return string in format "Title by Author, Pages pages"
- Should use template literals
Test cases:
console.log(book.info() === `${book.title} by ${book.author}, ${book.pages} pages`);  // true
*/
// const book = {
//     title: 'Big Bang',
//     author: 'John Stewart',
//     pages: 900
// };

// book.info = function() {
//     return `${book.title} by ${book.author}, ${book.pages} pages`
// }

// console.log(book.info() === `${book.title} by ${book.author}, ${book.pages} pages`)




/*
Exercise 9: Create an object 'temperature' with conversion methods
Requirements:
- celsiusToFahrenheit(c) should convert Celsius to Fahrenheit
- fahrenheitToCelsius(f) should convert Fahrenheit to Celsius
- Both methods should return rounded numbers
Test cases:
console.log(temperature.celsiusToFahrenheit(0) === 32);  // true
console.log(temperature.fahrenheitToCelsius(32) === 0);  // true
*/
// const temperature = {
//     celsiusToFahrenheit: function(c) {
//         return Math.round((c * 9/5) + 32)
//     },
//     fahrenheitToCelsius: function(f) {
//         return Math.round((f - 32) * 5/9)
//     }
// }

// console.log(temperature.celsiusToFahrenheit(0) === 32);
// console.log(temperature.fahrenheitToCelsius(32) === 0);
 



/*
Exercise 10: Create an object 'counter' with methods
Requirements:
- getValue() returns current count
- increment() increases count by 1
- decrement() decreases count by 1
- Count should not go below 0
Test cases:
counter.increment();
console.log(counter.getValue() === 1);  // true
counter.decrement();
console.log(counter.getValue() === 0);  // true
counter.decrement();
console.log(counter.getValue() === 0);  // true (doesn't go below 0)
*/
// let number = 0;
// const counter = {
//     getValue: function() {
//         return number
//     },
//     increment: function() {
//         return number++
//     },
//     decrement: function() {
//         if(number > 0)
//         return number--
//     }
    
// }


// counter.increment();
// console.log(counter.getValue() === 1);  // true
// counter.decrement();
// console.log(counter.getValue() === 0);  // true
// counter.decrement();
// console.log(counter.getValue() === 0);  // true (doesn't go below 0)





/*
Exercise 11: Create an object 'rectangle' with area calculation
Requirements:
- Properties: width and height (numbers)
- Method: getArea() returns width * height
- Method: getPerimeter() returns 2 * (width + height)
Test cases:
const rect = rectangle(5, 3);
console.log(rect.getArea() === 15);  // true
console.log(rect.getPerimeter() === 16);  // true
*/
// function rectangle(width, height) {
//     return {
//         width,
//         height,
//         getArea() {
//             return width * height
//         },
//         getPerimeter() {
//             return 2 * (width + height)
//         }
//     }
// }

// const rect = rectangle(5, 3)
// console.log(rect.getArea() === 15);
// console.log(rect.getPerimeter() === 16);




/*
Exercise 12: Create an object 'pet' with speak method
Requirements:
- Properties: type (string), name (string)
- speak() returns different sounds based on type
- Supported types: 'dog', 'cat', 'bird'
Test cases:
const dog = pet('dog', 'Rex');
console.log(dog.speak() === 'Woof!');  // true
const cat = pet('cat', 'Whiskers');
console.log(cat.speak() === 'Meow!');  // true
*/
// function pet(type, name) {
//     if(type === 'dog') {
//         return {
//             speak() {
//                 return 'Woof!'
//             }
//         }
//     }
//     if(type === 'cat') {
//         return {
//             speak() {
//                 return 'Meow!'
//             }
//         }
//     }
//     if(type === 'bird') {
//         return {
//             speak() {
//                 return 'CraCra!'
//             }
//         }
//     }
// }



// const dog = pet('dog', 'Rex');
// console.log(dog.speak() === 'Woof!');  // true
// const cat = pet('cat', 'Whiskers');
// console.log(cat.speak() === 'Meow!');  // true





/*
Exercise 13: Create an object 'bankAccount' with transaction methods
Requirements:
- Property: balance (number, starts at 0)
- deposit(amount) adds to balance
- withdraw(amount) subtracts from balance if sufficient funds
- getBalance() returns current balance
Test cases:
bankAccount.deposit(100);
console.log(bankAccount.getBalance() === 100);  // true
console.log(bankAccount.withdraw(50) === true);  // true
console.log(bankAccount.withdraw(100) === false);  // true (insufficient funds)
*/
// let number = 0;
// const bankAccount = {
//     balance: number,
//     deposit: function(amount) {
//         return this.balance += amount
//     },
//     withdraw: function(amount) {
//         if(amount > this.balance){
//             return ' Insufficient funds'
//         }
//         else{
//             return this.balance -= amount
//         }    
//     },
//     getBalance: function() {
//         return this.balance
//     }
// };





/*
Exercise 14: Create an object 'clock' with time methods
Requirements:
- Methods: setTime(hours, minutes), getTime24(), getTime12()
- Handle invalid hours/minutes
- Return formatted strings (HH:MM)
Test cases:
clock.setTime(13, 30);
console.log(clock.getTime24() === '13:30');  // true
console.log(clock.getTime12() === '1:30 PM');  // true
*/
// const clock = {
//     setTime: function(hour, minutes) {
//         this.hour = hour,
//         this.minutes = minutes
//     },
//     getTime24: function() {
//         return `${this.hour}:${this.minutes}`
//     },
//     getTime12: function() {
//         if(this.hour > 12) {
//             return this.hour - 12 + ':' + this.minutes + ' PM'
//         }
//         else{
//             return this.hour + ':' + this.minutes + ' AM'
//         }
//     }
// }

// clock.setTime(13, 30);
// console.log(clock.getTime24() === '13:30');  // true
// console.log(clock.getTime12() === '1:30 PM');  // true





/*
Exercise 15: Create an object 'playlist' with song management
Requirements:
- Property: songs (array)
- addSong(title, artist) adds song object to array
- removeSong(title) removes song by title
- listSongs() returns array of formatted strings
Test cases:
playlist.addSong('Yesterday', 'Beatles');
console.log(playlist.songs.length === 1);  // true
playlist.removeSong('Yesterday');
console.log(playlist.songs.length === 0);  // true
*/
// const playlist = {
//     songs: [],
//     addSong: function(title, artist) {
//         this.title = title,
//         this.artist = artist,
//         this.songs.push([title, artist])
//     },
//     removeSong: function(){
//         this.songs.pop([this.title])
//     },
//     listSongs: function() {
//         return this.songs
//     }
// }

// playlist.addSong('Yesterday', 'Beatles');
// console.log(playlist.songs.length === 1);  // true
// playlist.removeSong('Yesterday');
// console.log(playlist.songs.length === 0);  // true





/*
Exercise 16: Create an object 'dice' with rolling methods
Requirements:
- Method: roll() returns random number 1-6
- Method: rollMany(times) returns array of rolls
- Method: getLastRoll() returns most recent roll
Test cases:
console.log(dice.roll() >= 1 && dice.roll() <= 6);  // true
console.log(dice.rollMany(3).length === 3);  // true
console.log(dice.getLastRoll() === dice.rollMany(1)[0]);  // true
*/
// const dice = {
//     array:[],
//     roll: function() {
//         return Math.floor(Math.random() * 6) + 1;
//     },
//     rollMany: function(times) {
//         let x = 0;
//         while(x<times){
//         dice.array.push(dice.roll());
//         x++
//     }
//     return this.array
//     },
//     getLastRoll: function() {
//         return this.array[this.array.length -1]
//     }
// }

// console.log(dice.roll() >= 1 && dice.roll() <= 6);  // true
// console.log(dice.rollMany(3).length === 3);  // true
// console.log(dice.getLastRoll() === dice.rollMany(1)[0]);  // true





/*
Exercise 17: Create an object 'student' with grade management
Requirements:
- Property: grades (array of numbers)
- addGrade(grade) adds new grade (0-100 only)
- getAverage() returns average grade
- getHighest() returns highest grade
Test cases:
student.addGrade(85);
student.addGrade(90);
console.log(student.getAverage() === 87.5);  // true
console.log(student.getHighest() === 90);  // true
*/
// let total = 0;

// const student = {
//     grades: [],
//     addGrade: function(grade) {
//         this.grade = grade;
//         this.grades.push(this.grade);
//         return this.grades
//     },
//     getAverage: function() {
//         for(let i = 0; i < this.grades.length; i++) {
//         total += this.grades[i]
//         }
//         total = total / this.grades.length
//         return total
//     },
//     getHighest: function() {
//         let max = student.grades[0];
//         for(let i = 0; this.grades.length;i++) {
//             if(max < this.grades[i]) {
//                 return this.grades[i]
//             }
//         }
//     }
// }

// student.addGrade(85);
// student.addGrade(90);
// console.log(student.getAverage() === 87.5);  // true
// console.log(student.getHighest() === 90);  // true





/*
Exercise 19: Create an object 'timer' with time tracking
Requirements:
- Methods: start(), stop(), reset(), getElapsed()
- Track elapsed time in seconds
- Handle multiple start/stop cycles
Test cases:
timer.start();
// wait 1 second
timer.stop();
console.log(timer.getElapsed() >= 1);  // true
timer.reset();
console.log(timer.getElapsed() === 0);  // true
*/
// const timer = {
//     start: null,
//     end: null,
//     start: function(){
//         this.start = (new Date()).getTime();
//     },
//     stop: function(){
//         this.end = (new Date()).getTime();
//     },
//     reset: function(){
//         this.start = null;
//         this.end = null;
//     },
//     getElapsed: function(){
//         const final = this.end - this.start;
//         return Math.round(final / 1000);
//     }
// }


// timer.start();
// const result = await wait(1);
// timer.stop();
// console.log(timer.getElapsed())

// function wait(seconds){
//     const executor = (resolve,reject) => {
//         setTimeout(() => {
//             resolve("Waited");
//         }, seconds * 1000);
//     }
//     return new Promise(executor)
// } 




/*
Exercise 20: Create an object 'calendar' with event management
Requirements:
- Method: addEvent(date, title, duration)
- Method: getEvents(date) returns array of events
- Method: removeEvent(date, title)
Test cases:
calendar.addEvent('2024-03-20', 'Meeting', 60);
console.log(calendar.getEvents('2024-03-20').length === 1);  // true
calendar.removeEvent('2024-03-20', 'Meeting');
console.log(calendar.getEvents('2024-03-20').length === 0);  // true
*/
// const calendar = {
//     arr: [],
//     addEvent: function(date, title, duration){
//         this.arr.push({date, title, duration})
//     },
//     getEvents: function(date){
//         let newArr = []
//         for(let i = 0; i < this.arr.length;i++) {
//             if(this.arr[i].date === date) {
//                 newArr.push(this.arr[i])
//             }
//         }
//         return newArr
//     },
//     removeEvent: function(date, title){
//         let newArr = [];
//         for(let i = 0; i < this.arr.length; i++) {
//             if(this.arr[i].date !== date && this.arr[i].title !== title) {
//                 newArr.push(this.arr[i])
//             }
//         }
//         this.arr = newArr
//     }   
// }


// calendar.addEvent('2024-03-20', 'Meeting', 60);
// console.log(calendar.getEvents('2024-03-20').length === 1);  // true
// calendar.removeEvent('2024-03-20', 'Meeting');
// console.log(calendar.getEvents('2024-03-20').length === 0);  // true






/*
Exercise 21: Create a constructor function 'Person'
Requirements:
- Properties: name, age, country
- Method: introduce() returns formatted introduction
- Method: canVote() checks if age >= 18
Test cases:
const person = new Person('John', 25, 'USA');
console.log(person.introduce().includes('John'));  // true
console.log(person.canVote() === true);  // true
*/

// function Person(name, age, country) {
//     this.name = name;
//     this.age = age;
//     this.country = country;
//     this.introduce = function() {
//         return `Hi, my name is ${this.name}, i am from ${this.country} and i am ${this.age} years old`
//     };
//     this.canVote = function() {
//         if(this.age >= 18) {
//             return true
//         }
//         else{
//             return false
//         }
//     }
// };

// const person = new Person('John', 25, 'USA');
// console.log(person.introduce().includes('John'));
// console.log(person.canVote() === true)





/*
Exercise 22: Create a constructor function 'Circle'
Requirements:
- Property: radius
- Methods: getArea(), getCircumference()
- Use Math.PI for calculations
Test cases:
const circle = new Circle(5);
console.log(Math.round(circle.getArea()) === 79);  // true
console.log(Math.round(circle.getCircumference()) === 31);  // true
*/
// function Circle(radius) {
//     this.radius = radius;
//     this.getArea = function(){
//         return Math.PI * (this.radius * this.radius) 
//     };
//     this.getCircumference = function(){
//         return 2 * Math.PI * this.radius
//     }
// }

// const circle = new Circle(5);
// console.log(Math.round(circle.getArea()) === 79);
// console.log(Math.round(circle.getCircumference()) === 31)





/*
Exercise 23: Create a constructor function 'Product'
Requirements:
- Properties: name, price, quantity
- Method: getTotalValue() returns price * quantity
- Method: restock(amount) adds to quantity
Test cases:
const product = new Product('Phone', 500, 3);
console.log(product.getTotalValue() === 1500);  // true
product.restock(2);
console.log(product.quantity === 5);  // true
*/

// function Product(name, price, quantity) {
//     this.name = name;
//     this.price = price;
//     this.quantity = quantity;
    
//     this.getTotalValue = function(){
//         return this.price * this.quantity
//     };
//     this.restock = function(amount){
//         this.quantity += amount
//     }
// }

// const product = new Product('Phone', 500, 3);
// console.log(product.getTotalValue() === 1500);
// product.restock(2)
// console.log(product.quantity === 5);




/*
Exercise 24: Create a constructor function 'Library'
Requirements:
- Property: books (array)
- Method: addBook(title, author, isbn)
- Method: removeBook(isbn)
- Method: findBook(isbn) returns book object
Test cases:
const library = new Library();
library.addBook('1984', 'Orwell', '123');
console.log(library.findBook('123').title === '1984');  // true
library.removeBook('123');
console.log(library.findBook('123') === null);  // true
*/

function Library() {
    this.books = [];
    this.addBook = function(title, author, isbn){
        this.books.push({title, author, isbn})
    };
    this.removeBook = function(isbn){
        let newBooks = []
        for(let i = 0; i < this.books.length; i++){
            if(this.books[i].isbn !== isbn){
                newBooks.push(this.books[i])
            }
        }
        this.books = newBooks
    };
    this.findBook = function(isbn){
        for(let i = 0; i < this.books.length; i++) {
            if(this.books[i].isbn === isbn){
                return this.books[i]
            }
        }
        return null
    }
    
};



const library = new Library();
library.addBook('1984', 'Orwell', '123');
let result = library.findBook('123')
console.log(result.title === '1984');  // true
library.removeBook('123');
result = library.findBook('123') 
console.log(result === null);  // true



/*
Exercise 25: Create a constructor function 'TodoList'
Requirements:
- Property: tasks (array of objects)
- Method: addTask(title, priority)
- Method: toggleTask(title)
- Method: getIncomplete() returns incomplete tasks
Test cases:
const todo = new TodoList();
todo.addTask('Learn JS', 'high');
console.log(todo.getIncomplete().length === 1);  // true
todo.toggleTask('Learn JS');
console.log(todo.getIncomplete().length === 0);  // true
*/

// function Task(title, priority){
//     this.title = title;
//     this.priority = priority;
//     this.isDone = false;

//     this.markCompleted = function() {
//         this.isDone = true;
//     }
// }

// function TodoList() {
//     this.tasks = [];
//     this.addTask = function(title, priority) {
//         const task = new Task(title, priority)
//         this.tasks.push(task)
//     };
//     this.toggleTask = function(title) {
//         for(let i = 0; i < this.tasks.length; i++) {
//             if(this.tasks[i].title === title) {
//                 this.tasks[i].markCompleted()
//             }
//         }
//     };
//     this.getIncomplete = function() {
//         let incomplete = [];
//         for(let i = 0; i < this.tasks.length; i++) {
//             if(!this.tasks[i].isDone) {
//                 incomplete.push(this.tasks[i])
//             }
//         }
//         return incomplete
//     }
// }

// const todo = new TodoList();
// todo.addTask('Learn JS', 'high');
// todo.addTask('Learn Python', 'medium');
// todo.addTask('Learn CSS', 'low');
// todo.addTask('Learn HTML', 'low');
// console.log(todo.getIncomplete().length === 4);  // true
// todo.toggleTask('Learn JS');
// todo.toggleTask('Learn Python');
// console.log(todo.getIncomplete().length === 2);  // true


/*
Exercise 26: Create a constructor function 'Email'
Requirements:
- Properties: sender, recipient, subject, body
- Method: send() marks email as sent
- Method: isValid() checks if all fields are filled
Test cases:
const email = new Email('a@b.com', 'b@c.com', 'Hi', 'Hello');
console.log(email.isValid() === true);  // true
email.send();
console.log(email.sent === true);  // true
*/
// function Email(sender, recipient, subject, body) {
//     this.sent = false;
//     this.sender = sender;
//     this.recipient = recipient;
//     this.subject = subject;
//     this.body = body;
//     this.send = function() {
//         this.sent = true
//     };
//     this.isValid = function() {
//         if(this.sender !== undefined && this.recipient 
//             !== undefined && this.subject 
//             !== undefined && this.body !== undefined) {
//             return true
//         }
//     }
// }

// const email = new Email('a@b.com', 'b@c.com', 'Hi', 'Hello');
// console.log(email.isValid() === true);  // true
// email.send();
// console.log(email.sent === true);  // true





/*
Exercise 27: Create a constructor function 'Restaurant'
Requirements:
- Properties: name, menu (array)
- Method: addMenuItem(name, price, category)
- Method: removeMenuItem(name)
- Method: getMenuByCategory(category)
Test cases:
const restaurant = new Restaurant('Tasty');
restaurant.addMenuItem('Pizza', 10, 'main');
console.log(restaurant.getMenuByCategory('main').length === 1);  // true
*/

// function Restaurant(name) {
//     this.name = name;
//     this.menu = [];
//     this.addMenuItem = function(name, price, category) {
//         this.menu.push({name, price, category})
//     };
//     this.removeMenuItem = function(name) {
//         let newArr = []
//         for(let i = 0; i < this.menu.length; i++) {
//             if(this.menu[i].name !== name) {
//                 newArr.push(this.menu[i])
//             }
//         }
//         this.menu = newArr
//     };
//     this.getMenuByCategory = function(category) {
//        let arr = []
//         for(let i = 0; i < this.menu.length; i++) {
//             if(this.menu[i].category === category) {
//                 arr.push(this.menu[i])
//             }
//         }
//         return arr
//     }
// }

// const restaurant = new Restaurant('Tasty');
// restaurant.addMenuItem('Pizza', 10, 'main');
// restaurant.addMenuItem('Pasta', 12, 'main');
// restaurant.addMenuItem('Fries', 5, 'side');
// console.log(restaurant.menu)

// console.log(restaurant.getMenuByCategory('main'));  // true





/*
Exercise 28: Create a constructor function 'Game'
Requirements:
- Properties: player1Score, player2Score
- Method: addScore(player, points)
- Method: getWinner() returns leading player
- Method: resetScores()
Test cases:
const game = new Game();
game.addScore(1, 10);
console.log(game.getWinner() === 'Player 1');  // true
game.resetScores();
console.log(game.player1Score === 0);  // true
*/

// function Game() {
//     this.player1Score = 0;
//     this.player2Score = 0;
//     this.addScore = function(player, points) {
//         if(player === 1) {
//             this.player1Score += points
//         };
//         if(player === 2) {
//             this.player2Score += points
//         }
//     };
//     this.getWinner = function() {
//         if(this.player1Score > this.player2Score) {
//             return 'Player 1'
//         }
//         else{
//             return 'Player 2'
//         }
//     };
//     this.resetScores = function() {
//         this.player1Score = 0;
//         this.player2Score = 0;
//     }
// }
// const game = new Game();
// game.addScore(1, 10);
// console.log(game.player2Score)
// console.log(game.getWinner());  // true
// game.resetScores();
// console.log(game.player1Score);  // true





/*
Exercise 29: Create a constructor function 'User'
Requirements:
- Properties: username, password (private)
- Method: changePassword(oldPass, newPass)
- Method: authenticate(pass) returns boolean
Test cases:
const user = new User('john', 'secret');
console.log(user.authenticate('secret') === true);  // true
console.log(user.changePassword('secret', 'new') === true);  // true
*/
//function User(username, password) {
    //     this.username = username;
    //     this.changePassword = function(oldPass, newPass) {
    //         let isChanged = false
    //         let password;
    //         oldPass = newPass;
    //         password = newPass;
    //         if(password === newPass) {
    //             isChanged = true
    //         }
    //         return isChanged
    //     };
    //     this.authenticate = function(pass) {
    //         if(pass === password) {
    //             return true
    //         }
    //     };
    // }
    
    // const user = new User('john', 'secret');
    // console.log(user.authenticate('secret') === true);  // true
    // console.log(user.changePassword('secret', 'new') === true);  // true
    






/*
Exercise 30: Create a constructor function 'Quiz'
Requirements:
- Properties: questions (array), score
- Method: addQuestion(question, answer)
- Method: checkAnswer(index, answer)
- Method: getScore() returns percentage
Test cases:
const quiz = new Quiz();
quiz.addQuestion('2+2?', '4');
console.log(quiz.checkAnswer(0, '4') === true);  // true
console.log(quiz.getScore() === 100);  // true
*/

// function Quiz() {
//     this.questions = [];
//     this.score = 0;
//     this.isCorrect = false
//     this.addQuestion = function(question, answer) {
//         this.questions.push({question, answer})
//     };
//     this.checkAnswer = function(index, answer) {
//         let isGood;
//         if(this.questions[index].answer === answer) {
//             isGood = true;
//             this.isCorrect = isGood;
//             return true
//         }
//         else{
//             return false
//         }
        
//     };
//     this.getScore = function() {
//         if(this.isCorrect === true) {
//            return this.score = 100;     
//         }
//     }
// }

// const quiz = new Quiz();
// quiz.addQuestion('2+2?', '4');
// console.log(quiz.checkAnswer(0, '4') === true);  // true
// console.log(quiz.getScore() === 100);  // true
// console.log(quiz.checkAnswer(0, '4'));
// quiz.addQuestion('3+3?','6');
// console.log(quiz.checkAnswer(1, '4'))





/*
Exercise 31: Create a class 'Vehicle' with inheritance
Requirements:
- Base class Vehicle with properties: make, model, year
- Child class Car extends Vehicle, adds property: doors
- Both classes should have toString() method
Test cases:
const car = new Car('Toyota', 'Camry', 2020, 4);
console.log(car.toString().includes('Toyota'));  // true
console.log(car instanceof Vehicle);  // true
*/

// class Vehicle {
//     constructor(make, model, year) {
//         this.make = make;
//         this.model = model;
//         this.year = year
//     }
//     toString() {
//         return `My car is a ${this.make} ${this.model} from ${this.year}`
//     }
// }

// class Car extends Vehicle {
//     constructor(make, model, year, doors) {
//         super(make, model, year);
//         this.doors = doors
//     }
//     toString() {
//         return `My car is a ${this.make} ${this.model} from ${this.year} and is having ${this.doors} doors`
//     }
// }

// const car = new Car('Toyota', 'Camry', 2020, 4);
// console.log(car.toString().includes('Toyota'));
// console.log(car.toString())

// const otherCar = new Vehicle('Dacia', 'Duster', 2022, 4);
// console.log(otherCar.toString().includes('Duster'))
// console.log(otherCar.toString())





/*
Exercise 32: Create a class hierarchy for Shapes
Requirements:
- Base class Shape with method getArea()
- Child classes: Circle, Square, Triangle
- Each child implements getArea() differently
Test cases:
const circle = new Circle(5);
const square = new Square(5);
console.log(circle.getArea() > square.getArea());  // true
console.log(circle instanceof Shape);  // true
*/

// class Shapes {
//     constructor() {
//         //console.log('Shape constructor');
//     }
//     getArea(){
//         console.log('Not implemented')
//     }
// }

// class Circle extends Shapes {
//     constructor(radius) {
//         super();
//         this.radius = radius;
//     }
//     getArea(){
//         return Math.PI * this.radius * this.radius
//     }
// }

// class Square extends Shapes {
//     constructor(side){
//         super();
//         this.side = side
//     }
//     getArea(){
//         return this.side * this.side
//     }
// }

// class Triangle extends Shapes {
//     constructor(base, height){
//         super();
//         this.base = base;
//         this.height = height
//     }
//     getArea(){
//         return (this.base * this.height) / 2
//     }
// }

// const circle = new Circle(5);
// console.log(circle.getArea())
// const square = new Square(10);
// console.log(square.getArea())
// console.log(square.getArea() > circle.getArea());
// console.log(circle instanceof Shapes);

// const triangle = new Triangle(10, 4);
// console.log(triangle.getArea())





/*
Exercise 33: Create a class 'BankAccount' with privacy
Requirements:
- Private balance property using closure
- Methods: deposit(), withdraw(), getBalance()
- Prevent direct access to balance
Test cases:
const account = new BankAccount(100);
console.log(account.balance === undefined);  // true
console.log(account.getBalance() === 100);  // true
*/

// class BankAccount {
//     #balance = 0
//     constructor(balance){
//         this.#balance = balance
//     };
//     deposit(amount) {
//         this.#balance += amount
//     };
//     withdraw(amount) {
//         if(this.#balance >= amount){
//             this.#balance -= amount
//         }
//         else{
//             console.log('Insufficient funds')
//         }
//     };
//     getBalance() {
//         return this.#balance
//     }
// }

// const account = new BankAccount(100);
// console.log(account.getBalance())
// account.deposit(100);
// account.withdraw(50);
// console.log(account.getBalance())
// console.log(account.balance)





/*
Exercise 34: Create a class 'Stack'
Requirements:
- Methods: push(), pop(), peek(), isEmpty(), size()
- Use private array for storage
- Implement LIFO (Last In, First Out)
Test cases:
const stack = new Stack();
stack.push(1);
console.log(stack.peek() === 1);  // true
console.log(stack.pop() === 1);  // true
console.log(stack.isEmpty());  // true
*/

// class Stack {
//     #arr = [];
//     constructor() {
//         this.#arr = []
//     };

//     push(x){
//         this.#arr.push(x)
//     };
//     pop(x){
//        return this.#arr.pop(x)
//     };
//     peek(x){
//         return this.#arr[this.#arr.length - 1]
//     };
//     isEmpty(){
//         if(this.#arr.length === 0) {
//             return true
//         }
//         else{
//             return false
//         }
//     };
//     size(){
//         return this.#arr.length
//     }

// }

// const stack = new Stack();
// stack.push(1);
// //console.log(stack.peek() === 1);  // true
// //console.log(stack.pop() === 1);  // true
// //console.log(stack.isEmpty());  // true

// stack.push(2);
// console.log(stack.size());
// console.log(stack.pop())




/*
Exercise 35: Create a class 'Queue'
Requirements:
- Methods: enqueue(), dequeue(), front(), isEmpty(), size()
- Use private array for storage
- Implement FIFO (First In, First Out)
Test cases:
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue() === 1);  // true
console.log(queue.front() === 2);  // true
*/
//class Queue {
    //     #arr = [];
    //     constructor(){
    //         this.#arr = []
    //     };
    
    //     enqueue(x) {
    //         this.#arr.push(x)
    //     };
    
    //     dequeue() {
    //         return this.#arr.shift()
    //     };
    
    //     front() {
    //         return this.#arr[0]
    //     };
    
    //     size() {
    //         return this.#arr.length
    //     }
    // };
    
    // const queue = new Queue();
    // queue.enqueue(1);
    // queue.enqueue(2);
    // console.log(queue.dequeue() === 1);  // true
    // console.log(queue.front() === 2);  // true
    
    // queue.enqueue(1);
    // queue.enqueue(2);
    // console.log(queue.size());
    // console.log(queue.front());
    // queue.dequeue();
    // console.log(queue.front())




/*
Exercise 36: Create a class 'Person' with validation
Requirements:
- Properties: name, age with getters/setters
- Validate age is between 0 and 120
- Validate name is non-empty string
Test cases:
const person = new Person();
console.log(person.setAge(150) === false);  // true
console.log(person.setName('') === false);  // true
*/
//class Person {
    //     #name;
    //     #age;
    //     constructor(name, age) {
    //         this.#name = name;
    //         this.#age = age;
    //     };
    
    //     getName(){
    //         return this.#name
    //     };
    //     setName(newName){
    //         if(newName !== '') {
    //             this.#name = newName
    //         }
    //         else{
    //             return false
    //         }
    //     };
    
    //     getAge(){
    //         return this.#age;
    //     };
    
    //     setAge(newAge) {
    //         if(newAge >= 0 && newAge < 120){
    //             this.#age = newAge;
    //             return true;
    //         }
    //         else{
    //             return false
    //         }
    //     }
    // }
    
    // const person = new Person();
    // console.log(person.setAge(150) === false);  // true
    // console.log(person.setName('') === false);  // true
    // console.log(person.setAge(12) === true);
    // console.log(person.getAge())





/*
Exercise 37: Create a class 'Calculator' with history
Requirements:
- Methods: add(), subtract(), multiply(), divide()
- Method: getHistory() returns last 5 operations
- Method: clearHistory()
Test cases:
const calc = new Calculator();
calc.add(5, 3);
console.log(calc.getHistory().length === 1);  // true
calc.clearHistory();
console.log(calc.getHistory().length === 0);  // true
*/

// class Calculator {
//     arr;
//     constructor(){
//         this.arr = []
//     }

//     add(a, b){
//         this.arr.unshift([a,'+',b,'=', a + b])
//         return a + b
//     };
//     subtract(a, b){
//         this.arr.unshift([a,'-',b,'=',a - b])
//         return a - b
//     };
//     multiply(a, b){
//         this.arr.unshift([a,'*',b,'=',a * b])
//         return a * b
//     };
//     divide(a, b){
//         this.arr.unshift([a,'/', b,'=',a / b])
//         return a / b
//     };

//     getHistory() {
//         let newArr = [];
//         if(this.arr.length > 5){
//             for(let i = 0; i < 5; i++){
//                 newArr.push(this.arr[i])
//             };
//             return newArr
//         }
//         else{
//             return this.arr
//         }
//     };

//     clearHistory() {
//         this.arr = [];
//     }
// }

// const calc = new Calculator();

// // calc.add(2, 2);
// // calc.divide(4, 2);
// calc.multiply(3, 3);
// calc.subtract(4, 2);
// calc.add(5, 4);
// calc.divide(4, 4);
// calc.add(5, 6);
// calc.add(19, 9)
// // console.log(calc.getHistory());
// //calc.clearHistory();
// console.log(calc.getHistory())





/*
Exercise 38: Create a class 'Playlist' with sorting
Requirements:
- Methods: addSong(), removeSong(), shuffle()
- Method: sortBy(criteria) - 'title' or 'artist'
- Method: getCurrentSong()
Test cases:
const playlist = new Playlist();
playlist.addSong('Yesterday', 'Beatles');
playlist.addSong('Hey Jude', 'Beatles');
playlist.sortBy('title');
console.log(playlist.getCurrentSong().title === 'Hey Jude');  // true
*/

/*
Exercise 39: Create a class 'TodoList' with filters
Requirements:
- Methods: addTask(), removeTask(), toggleTask()
- Method: filterBy(status) - 'all', 'active', 'completed'
- Method: getStats() returns count of all/active/completed
Test cases:
const todo = new TodoList();
todo.addTask('Learn JS');
todo.toggleTask('Learn JS');
console.log(todo.filterBy('completed').length === 1);  // true
*/

// class TodoList {
//     arr = [];
//     activeArr = [];
//     completed = [];

//     constructor(){
//         this.arr = [];
//         this.activeArr = [];
       
//     ;}

//     addTask(task) {
//         this.arr.push(task)
//     };
//     removeTask = function(task) {
//         let activeArr = [];
//         for(let i = 0; i < this.arr.length; i++) {
//             if(this.arr[i] !== task) {
//                 activeArr.push(this.arr[i])
//             }
//         }
//         this.activeArr = activeArr
//     };
//     toggleTask(task) {
//         let completedTask = [];
//         for(let i = 0 ; i < this.arr.length; i++) {
//             if(this.arr[i] === task) {
//                 completedTask.push(this.arr[i])
//             }
//         }
//         this.completed = completedTask
//     };
    
//     //key can be : 'all','active','completed'
//     filterBy(key) {
//         if(key === 'all') {
//             return this.arr;
//         };
//         if(key === 'active') {
//             return this.activeArr
//         };
//         if(key === 'completed') {
//             return this.completed
//         }

//     };

//     //key can be all/active/completed
//     getStats(key) {
//         if(key === 'all') {
//             return this.arr.length
//         };
//         if(key === 'active') {
//             return this.activeArr.length
//         };
//         if(key === 'completed') {
//             return this.completed.length
//         }
//     }

// }

// // const todo = new TodoList();
// // todo.addTask('Learn js');

// // todo.toggleTask('Learn js')
// // console.log(todo.filterBy('completed'));
// // console.log(todo.filterBy('active'))
// // console.log(todo.getStats('all'))

// const todo = new TodoList();
// todo.addTask('Learn JS');
// todo.toggleTask('Learn JS');
// console.log(todo.filterBy('completed').length === 1);  // true





/*
Exercise 40: Create a class 'Store' with inventory
Requirements:
- Methods: addProduct(), removeProduct(), updateStock()
- Method: getInventoryValue() returns total value
- Method: getLowStock(threshold) returns products below threshold
Test cases:
const store = new Store();
store.addProduct('Apple', 0.5, 100);
console.log(store.getInventoryValue() === 50);  // true
console.log(store.getLowStock(10).length === 0);  // true
*/
/////class Store {
    //     arr = []
    
    //     constructor(){
    //         this.arr = []
    //     }
    
    //     addProduct(name, price, amount){
    //         this.arr.push({name, price, amount})
    //     };
    
    //     removeProduct(name) {
    //         let newArr = [];
    //         for(let i = 0; i < this.arr.length; i++) {
    //             if(this.arr[i].name !== name) {
    //                 newArr.push(this.arr[i])
    //             }
    //         }
    //         this.arr = newArr;
    //     };
    
    //     updateStock(name, add) {
    //         for(let i = 0; i < this.arr.length; i++) {
    //             if(this.arr[i].name === name) {
    //                 this.arr[i].amount += add
    //             }
    //         }
    //     };
    
    //     getInventoryValue(article){
    //         let inventoryValue = 0;
    //         if(article === 'all'){
    //             for(let i = 0; i < this.arr.length; i++) {
    //                 inventoryValue += this.arr[i].price * this.arr[i].amount
    //             }
    //             return inventoryValue
    //         };
    //         for(let i = 0; i < this.arr.length; i++){
    //             if(article === this.arr[i].name){
    //                 inventoryValue = this.arr[i].price * this.arr[i].amount
    //             }
    //         }
    //         return inventoryValue
    //     };
    
    //     getLowStock(quantity){
    //         let lowArr = [];
    //         for(let i = 0; i < this.arr.length; i++){
    //             if(this.arr[i].amount <= quantity) {
    //                 lowArr.push(this.arr[i])
    //             }
    //         }
    //         this.arr = lowArr;
    //         return this.arr
    //     }
    // }
    
    // const store = new Store();
    // store.addProduct('Apple', 0.5, 100);
    // store.addProduct('Banana', 1.2, 300);
    // store.addProduct('Mango', 5, 60);
    // console.log(store.arr);
    // console.log(store.getInventoryValue('all'))
    // store.updateStock('Banana', 50);
    // store.updateStock('Apple', 30)
    // console.log(store.arr);
    // console.log(store.getInventoryValue('Apple'));
    // console.log(store.getLowStock(130))




/*
Exercise 41: Create a class 'Database' with CRUD
Requirements:
- Methods: create(), read(), update(), delete()
- Method: query() for searching records
- Maintain unique IDs for records
Test cases:
const db = new Database();
const id = db.create({name: 'John'});
console.log(db.read(id).name === 'John');  // true
console.log(db.update(id, {name: 'Jane'}) === true);  // true
*/

/*
Exercise 42: Create a class 'ChatRoom'
Requirements:
- Methods: addUser(), removeUser(), sendMessage()
- Method: getMessageHistory(user)
- Handle private and group messages
Test cases:
const chat = new ChatRoom();
chat.addUser('Alice');
chat.sendMessage('Alice', 'Hello');
console.log(chat.getMessageHistory('Alice').length === 1);  // true
*/

// class ChatRoom {
//     constructor(){
//         this.userArr = [];
//         this.messages = [];
//     }

//     addUser(name){
//         this.userArr.push(name)
//     };

//     removeUser(name){
//         let newArr = []
//         for(let i = 0; i < this.userArr.length; i++) {
//             if(this.userArr[i] !== name) {
//                 newArr.push(this.userArr[i])
//             }
//         }
//         this.userArr = newArr
//     };

//     sendMessage(name, message){
//         for(let i = 0; i < this.userArr.length; i++){
//             if(this.userArr[i] === name) {
//                 this.messages.push([name, message])
//              }
//         }
//     };

//     getMessageHistory(name){
//         let messageHistory = [];
//         for(let i = 0; i < this.messages.length; i++) {
//             if(name === this.messages[i][0]) {
//                 messageHistory.push(this.messages[i])
//             }
//         };
//         return messageHistory;
//     }
// }

// const chat = new ChatRoom();
// chat.addUser('Alice');
// chat.addUser('Aaron')
// chat.sendMessage('Alice', 'Hello');
// chat.sendMessage('Alice', 'Hi there');
// chat.sendMessage('Aaron', 'I m good')
// console.log(chat.getMessageHistory('Alice').length === 2)
// console.log(chat.getMessageHistory('Aaron').length === 1)





/*
Exercise 43: Create a class 'FileSystem'
Requirements:
- Methods: createFile(), deleteFile(), renameFile()
- Method: getFilesByType(extension)
- Track file creation/modification dates
Test cases:
const fs = new FileSystem();
fs.createFile('test.txt', 'content');
console.log(fs.getFilesByType('txt').length === 1);  // true
console.log(fs.renameFile('test.txt', 'new.txt') === true);  // true
*/

class FileSystem {
    
    constructor(){
        this.files = [];
        this.type = [];
    }
    
    
    createFile(name, content){
        let time = new Date();
        let hour = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();
        let creation = `${hour}:${minutes}:${seconds}`
        this.files.push([name, content, creation])
    };

    deleteFile(name) {
        let newFile
        for(let i = 0; i < this.files.length; i++) {
            if(this.files[i][0] !== name) {
                newFile.push(this.files[i])
            }
        }
        this.files = newFile
    };

    renameFile(name, newName) {
        for(let i = 0; i < this.files.length; i++) {
            if(this.files[i][0] === name) {
                this.files[i][0] = newName
            }
        }
        return true
    };

    getFilesByType(extension) {
        let byType = [];
        for(let i = 0; i < this.files.length; i++){
            if(this.files[i][0].includes(extension) === true) {
                byType.push(this.files[i])
            }
        }
        return this.files = byType
    }
}

const fs = new FileSystem;
fs.createFile('text.txt', 'content');
fs.createFile('text.jss', 'app')
console.log(fs.files)
console.log(fs.getFilesByType('txt').length === 1)
console.log(fs.renameFile('text.txt', 'newText.js') === true);




/*
Exercise 44: Create a class 'Calendar'
Requirements:
- Methods: addEvent(), removeEvent(), updateEvent()
- Method: getEvents(date) returns events for specific date
- Detect scheduling conflicts
Test cases:
const calendar = new Calendar();
calendar.addEvent('2024-03-20', '10:00', '11:00', 'Meeting');
console.log(calendar.hasConflict('2024-03-20', '10:30', '11:30') === true);  // true
*/

/*
Exercise 45: Create a class 'Game' with inheritance
Requirements:
- Base class Character with health/damage properties
- Child classes: Warrior, Mage, Archer
    - Methods: attack(), defend(), useSpecialAbility()
Test cases:
const warrior = new Warrior('Conan');
warrior.attack(new Mage('Merlin'));
console.log(warrior.health > 0);  // true
console.log(warrior.useSpecialAbility() !== undefined);  // true
*/
