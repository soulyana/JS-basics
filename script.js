/**
 * Variables and data types
 */
/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 23;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

var _3years = 3;
var johnMark = 'John and Mark';
// reserved keywords can't use in variables
*/

/**
 * Variable mutation and type coercion
 */
/*
 var firstName = 'John';
 var age = 28;

 // Type coercion
 console.log(firstName + ' ' + age); 

 var job, isMarried;
 job = 'teacher';
 isMarried = false;

 console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

 // Variable muation
 age = 'twenty eight';
 job = 'driver';

 alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

 var lastName = prompt('What is his last name?');
 console.log(firstName + ' ' + lastName);
*/


/**
  * Basic operators
  */
/*
 var year, yearJohn, yearMark;
 now = 2020;
 ageJohn = 28;
 ageMark = 33;

  // Math operators
 yearJohn = now - ageJohn;
 yearMark = now - ageMark;

 console.log(yearJohn);

 console.log(now + 2);
 console.log(now * 2);
 console.log(now / 10);

 // Logical operators
 var johnOlder = ageJohn < ageMark;
 console.log(johnOlder);

// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof ' Mark is older than john');
var x;
console.log(typeof x);
*/

/**
 * Operator precedence
 */
/*
 var now = 2018;
 var yearJohn = 1989;
 var fullAge = 18;


// Multiple operators
 var isFullAge = now - yearJohn >= fullAge; //true
 console.log(isFullAge);


// Grouping
 var ageJohn = now - yearJohn;
 var ageMark = 35;
 var average = (ageJohn + ageMark) / 2;
 console.log(average);

 // Multiple assignments
 var x, y;
 x = y = (3 + 5) * 4 - 6; 
 console.log(x);
 console.log(y);
 console.log(x, y);

 // More operators
//  x = x * 2;
 x *= 2;
 console.log(x);
x += 10;
console.log(x);
*/

/**
 * Coding Challenge 1
 */
/*
var weightMark, weightJohn, heightMark, heightJohn, bmiMark, bmiJohn, higherBMI;

weightMark = 300;
heightMark = 50;

weightJohn = 250;
heightJohn = 55;

bmiMark = weightMark / (heightMark * heightMark);
console.log(bmiMark);
bmiJohn = weightJohn / (heightJohn * heightJohn);
console.log(bmiJohn);
higherBMI = bmiMark > bmiJohn;

console.log('Is Mark\'s BMI higher than John\'s? ' + higherBMI);
*/

/**
 * Instructor solution
 */
/*
 var massMark = 78; // kg
 var heightMark = 1.69; // meters

 var massJohn = 92;
 var heightJohn = 1.95;

 var BMIMark = massMark / (heightMark * heightMark);
 var BMIJohn = massJohn / (heightJohn * heightJohn);

 var markHigherBMI = BMIMark > BMIJohn;

console.log('Is Mark\'s BMI higher than John\'s? ' + markHigherBMI);
*/

/**
 * If / else statements
 */
/*

  var firstName = 'John';
  var civilStatus = 'single';

  if (civilStatus === 'married') {
      console.log(firstName + ' is married!');
  } else {
      console.log(firstName + ' your lover is on the way...');
  }

  var isMarried = true;
  if (isMarried) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' your lover is on the way...');
}

var massMark = 78; // kg
var heightMark = 1.69; // meters

var massJohn = 92;
var heightJohn = 1.95;

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);

var markHigherBMI = BMIMark > BMIJohn;

// console.log('Is Mark\'s BMI higher than John\'s? ' + markHigherBMI);

if (BMIMark > BMIJohn) {
    console.log('Mark\'s BMI is higher than John\'s');
} else {
    console.log('John\'sBMI is higher than Mark\'s');
}
*/

/**
 * Boolean logic
 */
/*
 var firstName = 'John';
 var age = 76;

 if (age < 13) {
     console.log(firstName + ' is a boy.');
 } else if (age >= 13 && age < 20) {
    console.log(firstName + ' is a teenager.');
 } else if (age >= 20 && age < 30) { 
    console.log(firstName + ' is a young man.');
 } else if (age >= 30 && age <= 65) {
    console.log(firstName + ' is a man.');
 } else {
    console.log(firstName + ' is an old man.');
 }
 */


/**
 * The Ternary oprator and switch statements
 */
/*
var firstName = 'John';
var age = 34;

// Ternary operator
age >= 18 ? console.log(firstName + ' drinks beer') : console.log(firstName + ' drinks juice');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

// Switch
var job = 'instructor';
switch (job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code');
        break;
    case 'driver':
        console.log(firstName + ' drives Uber in Lisbon');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites');
        break;
    default:
        console.log(firstName + ' does something else');
}


age = 36;

switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man.');
        break;
    case age >= 30 && age <= 65:
        console.log(firstName + ' is a man.');
        break;
    default:
        console.log(firstName + ' is an old man.');
}
*/

/**
 * Truthy and Falsy Values and quality operators
 */
/*

 // falsy values: undefined, null, 0, '', NaN
 // truthy values: NOT falsy values

 var height;
 height = '23';

 if (height || height === 0 ) {
     console.log('Variable is defined');
 } else {
     console.log('Variable is declared but not defined');
 }

 // === strict equality compariosons
 // == type coercison 

 // Equality operators
 if (height == '23') {
     console.log('The == operator does type coercion!');
 }
 console.log(23 == '23');
 console.log(23 === '23'); // best practice to always use
*/


/**
 * Coding Challenge 2
 */
/*

// var johnTeam = 89 + 120 + 103;
// var mikeTeam = 89 + 120 + 13;
// var maryTeam = 97 + 134 + 105;

var johnTeam = 89 + 120 + 129;
var mikeTeam = 89 + 120 + 149;
var maryTeam = 89 + 120 + 169;

avgJohn = johnTeam / 3; // 104
avgMike = mikeTeam / 3; // 74
avgMary = maryTeam / 3; // 112

console.log(avgJohn, avgMike, avgMary);

var winner = avgJohn > avgMike ? console.log('John\'s Team wins in average with an average score of ' + avgJohn) : console.log('Mike\'s Team wins in average with an average score of ' + avgMike);

switch (true) {
    case avgJohn > avgMike && avgJohn > avgMary:
        console.log('John\'s Team wins in average with an average score of ' + avgJohn);
        break;
    case avgMary > avgJohn && avgMary > avgMike:
        console.log('Mary\'s Team wins in average with an average score of ' + avgMary);
        break;
    case avgMike > avgJohn && avgMike > avgMary:
        console.log('Mike\'s Team wins in average with an average score of ' + avgMike);
        break;
    default:
        console.log('Draw!')
}
*/

/**
 * Functions
 */
/*
function calculateAge(birthYear) {
    return 2018 - birthYear;
}

var ageSoul = calculateAge(1988);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageSoul, ageMike, ageJane);

function yearsUntilRetirement(birthYear, firstName) {
    var age = calculateAge(birthYear);
    var retirement = 65 - age;

    if (retirement > 0 ) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
        console.log(firstName + ' is already retired');
    }
    
}

var soulRetirement = yearsUntilRetirement(1988, 'Soul');
var mikeRetirement = yearsUntilRetirement(1948, 'Mike');
console.log(soulRetirement, mikeRetirement);
*/

/**
 * Function Statements and Expressions
 */
/*

 // Function declaration
//  function whatDoYouDo(job, firstName) {}

 // Function expression 
 var whatDoYouDo = function(job, firstName) {
    switch (job) {
        case 'teacher':
            return firstName + ' teaches kids how to code';
        case 'driver':
            return firstName + ' drives a truck in Swiss Alps';
        case 'designer':
            return firstName + ' designs beautiful UI';
        default: 
            return firstName + ' is chilling';
    }
 }

 console.log(whatDoYouDo('teacher', 'John'));
 console.log(whatDoYouDo('designer', 'Fana'));
 console.log(whatDoYouDo('surfer', 'Mack'));
 */

/**
 * Arrays
 */
/*
  // initialize new array
 var names = ['John', 'Soul', 'Mark', 'Jane'];
 var years = new Array(1990, 1969, 19488, 1988);

 console.log(names);
 console.log(names[1]);
 console.log(names.length);

 // Mutate array data
 names[3] = 'Ben';
 console.log(names);

 names[names.length] = 'Mary';
 console.log(names);

 // Different data types
 var john = ['John', 'Smith', 1990, 'designer', false];

 // add elements to an array
 john.push('blue');
 john.unshift('Mr.');
 console.log(john);

 // remove elements from an array
 john.pop();
 john.pop();
 john.shift();
 console.log(john);

 // position in array
 console.log(john.indexOf(1990)); // 2
 console.log(john.indexOf(23)); // -1 element not in array

 var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John is a designer!'
 console.log(isDesigner);
 */

/**
 * Coding Challenge 3
 */
/*

var tips = [];
var bills = [];

// var tipCalculator = function (bill) {
//     var tip;
//     switch (bill) {
//         case bill < 50:
//             console.log(bill + ' 20%');
//             tip = bill * (20 / 100);
//             return tips.push(tip);
//         case bill >= 50 && bill <= 200:
//             console.log(bill + ' 15%');
//             tip = bill * (15 / 100);
//             return tips.push(tip);

//         case bill > 100:
//             console.log(bill + ' 10%');
//             tip = bill * (10 / 100);
//             return tips.push(tip);
//         default:
//             console.log(bill + ' 0%');
//             tip = bill * (0);
//             return tips.push(tip);
//     }
// }

// console.log(tipCalculator(124));
// console.log(tipCalculator(48));
// console.log(tips);

function tipCalculator(bill) {
    var tipPercent;
    var total;
    if (bill < 50) {
        tipPercent = bill * .20;
        total = bill + tipPercent;
        console.log(tipPercent, total);
        return tips.push(tipPercent) && bills.push(total);
    } else if (bill > 50 && bill < 200) {
        tipPercent = bill * .15;
        total = bill + tipPercent;
        console.log(tipPercent, total);
        return tips.push(tipPercent) && bills.push(total);
    } else {
        tipPercent = bill * .10;
        total = bill + tipPercent;
        console.log(tipPercent, total);
        return tips.push(tipPercent) && bills.push(total);
    }
}

var twentyTip = tipCalculator(48);
var fiftenTip = tipCalculator(148);
var tenTip = tipCalculator(250);
console.log(tips);
console.log(bills);
*/

/**
 * Coding Challenge 3 Insturctor solution
 */
/*

function tipCalculator(bill) {
    var percentage;
    if (bill < 50) {
        percentage = .2;
    } else if (bill >= 50 && bill <= 200) {
        percentage = .15;
    } else {
        percentage = .1;
    }
    return percentage * bill;
}

console.log(tipCalculator(10));

var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]),
tipCalculator(bills[1]),
tipCalculator(bills[2])];
console.log(tips);
var finalBill = [tips[0] + bills[0],
                tips[1] + bills[1],
                tips[2] + bills[2]];
console.log(tips, finalBill);
*/


/**
 * Objects and properties
 */
/*
 // Object literal
 var john = {
     firstName: 'John',
     lastName: 'Smith',
     birthYear: 1990,
     family: ['Jane', 'Mark', 'Bob', 'Emily'],
     job: 'teacher',
     isMarried: false
 };

 console.log(john.firstName);
 console.log(john['lastName']);
 var x = 'birthYear';
 console.log(john[x]);

 john.job = 'designer';
 john['isMarried'] = true;
 console.log(john);

 // Object syntax
 var jane = new Object();
 jane.firstName = 'Jane';
 jane.birthYear = 1969;
 jane['lastName'] = 'Smith';
 console.log(jane);
**/

/**
 * Objects and Methods
 */

var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1992,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function(){
        this.age = 2019 - this.birthYear;
    }
};

john.calcAge();
console.log(john);


 