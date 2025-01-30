 // OBJECT ORIENTED PROGRAMMING
//
//.Creating objects
//.Factories and Constructors
//.Primitives and Reference Types
//.Working with properties
//.Private properties
//.Getters/Setters

//a style to code. Stands out in front in every interview, essential skill to learn

   // 4 cores concepts
//1.Encapsulation ===> reduce complexity + increase reusability

//example without encapsulation
let baseSalary = 3000;
let overTime = 10;
let rate = 20;

function getWage(baseSalary, overTime, rate) {
    return baseSalary + (overTime * rate);
}

//example with encapsulation
let employee = {
    baseSalary: 3000,
    overtime: 10,
    rate: 20,
    getWage: function() {
        return this.baseSalary + (this.overtime * this.rate);
    }
}
employee.getWage();


//2.Abstraction ---> hide the details, show the essentials (isolate impact of changes)

//3.Inheritance ---> eliminate the redundant code

//4.Polymorphism ---. (translate many forms) + refactor ugly switch/case statements
//example without poly
// switch (...) {
//     case 'select': renderSelect();
//     case 'text': renderTextBox();
//     case
//     case
//     ...
// }

//example with OOP
// element.render();


//Create an object different ways

/*//==========================================================================================
//1.this is OBJECT LITERAL, easy way to define an object 
const circle = {
    radius: 1,               //radius and location are called properties
    location: {             //properties are used to store or define values
        x: 1,               
        y: 1
    },
    draw: function() {      //when we reffer to a function within an object we call it a method
        console.log('draw')    //methods are used to define a logic
    }
};

circle.draw();
*///=============================================================================================


/*================================================================================================
//2.create an object with FACTORY FUNCTION  (FIRST WAY TO CREATE AN OBJECT)
function createCircle(radius) {
    return {
        radius,        //if key and the value are the same this is correct form
        draw: function() {
            console.log('draw');
        }
    };
}

const circle = createCircle(1)  //now we can create another object



//3. Create with CONSTRUCTORS FUNCTION (SECOND WAY TO CREATE AN OBJECT)
function Circle(radius) {   //first letter should be uppercase
    this.radius = radius;  //"this" is reference to object that execute this piece of code
    this.draw = function() {
        console.log('draw');
    }
}
const another =new Circle(1);    //"new" operator will create a new object, we are going to use Circle as the blueprint for the new object


*///====================================================================================================

/*======================================================================================================
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

Circle.call({}, 1, 2, 3)   //pass arguments normally
Circle.apply({}, [1, 2, 3]) //pass array as second argument

const another = new Circle(1);
*///======================================================================================================== 

//In JS we have two categories of types
//1.(primitive) Value types: number,string, boolean, symbol , null , undefined
//2.(objects) Reference types: objects, function , array

////facts
// instead of new String() ==> we use string literal written with '' or ""
//instead of new Boolean() ==> we use true or false
//instead of new Number() ==> we use literal numbers 1, 2 ,3...
//Every object has a constructor function


/*====================================================================
//Example

let x = { value: 10 };
let y = x;

x.value = 20;

//Primitives are copied by value
//Objects are copied by reference

let obj = { value: 10 };

function increase(obj) {
    obj.value++
}

increase(obj);
console.log(obj)
*///=====================================================================

// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw');
//     }
// }

// const circle = new Circle(10);

// circle.location = { x: 1 };    
// circle['location'] = { x: 1 };
// //these are the same but used in different scenarios

// //if
// const propertyName = 'location';
// circle[propertyName] = { x: 1 };

// //if
// const propertyName = 'center-location';
// circle.center-location // cannot access like these, use bracket notation


/*================================================================================================================
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const circle = new Circle(10);


// for (let key in circle) {
//     console.log(key, circle[key]); //with key only you can access properties and methods without value
//                                     // with key and circle[key] you can access both with their values
// }

for (let key in circle) {
    if(typeof circle[key] !== 'function') {  //in this way you can access only properties with value
        console.log(key, circle[key]);
    }
}

const keys = Object.keys(circle); //with these method you can return all the keys in circle as array //with these method you cannot separate properties by objects
console.log(keys)

if ('radius' in circle) {
    console.log('Circle has a radius.')
}
    *///==========================================================================================================================

/*
    
function Circle(radius) {

    this.radius = radius;

    let defaultLocation = { x: 0, y: 0}

    this.getDefaultLocation = function() {
        return defaultLocation;
    }
    this.draw = function() {
        console.log('draw');
    };

    Object.defineProperty(this, 'defaultLocation', {
        get: function() {
            return defaultLocation;
        },
        set: function(value) {
            if (!value.x || !value.y)
                    throw new Error('Invalid location')
            defaultLocation = value;
        }
    });
}

const circle = new Circle(10)


circle.draw();

*/
//Create a StopWatch using objects. Use start, stop and duration methods


//create a stopWatch using a start, stop and reset method

//1. Create an object that contains 3 methods
/*
function StopWatch() {
    let startTime, endTime, running, duration = 0;

    this.start = function() {
        if (running)
            throw new Error('Stopwatch has already started.');
        
        running = true;

        startTime = new Date();
    };

    this.stop = function() {
        if(!running)
            throw new Error('Stopwatch is not started')

        running = false;

        endTime = new Date();

        const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
        duration += seconds;
    }

    this.reset = function() {
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
    }

    Object.defineProperty(this, 'duration', {
        get: function() { return duration; }
    });
}
*/


///Everything in JS is an object. For example: a cas has properties(model,brand, color) and it can do things (drive, reverse, accelerate) => these are methods.
//In both cases we have properties and methods(functions associated with the object)
// Yet not everything in JS is an object. Example: null(cannot call any methods or properties on it). Also, primitive data types are not objects however these still can behave like an object.
// You can create your own object with it s properties and methods you define in order to help you to run a program you build.

//You can create methods or properties within the object 
    //example : user.age = 25 => age added as a property to object
    //          user.log = function(){} => log added as a method

    
