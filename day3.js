// Activity 1: If-Else Statements use
// Task 1: Check if a number is positive, negative, or zero
function checkNumber(num) {
    if (num > 0) {
        console.log("It is Positive Number.");
    } else if (num < 0) {
        console.log("It is Negative Number.");
    } else {
        console.log("Zero");
    }
}
// Outputs
checkNumber(10);  // It is Positive Number
checkNumber(-10);  // It is Negative
checkNumber(0);   // Zero

// Task 2: Check if a person is eligible to vote (age >= 18) or not
function checkVotingEligibilityOfPerson(age) {
    if (age >= 18) {
        console.log("Eligible to vote");
    } else {
        console.log("Not eligible to vote");
    }
}
// Outputs
checkVotingEligibilityOfPerson(24);  // Eligible to vote
checkVotingEligibilityOfPerson(16);  // Not eligible to vote

// Activity 2: Nested If-Else Statements
// Task 3: Find the largest of three numbers among three number
function findLargest(a, b, c) {
    if (a >= b && a >= c) {
        console.log(a);
    } else if (b >= a && b >= c) {
        console.log(b);
    } else {
        console.log(c);
    }
}
// Outputs
findLargest(1, 2, 3);  // 3
findLargest(4, 5, 6);  // 6
findLargest(78, 69, 70);  // 78

// Activity 3: Switch Case use
// Task 4: Determine the day of the week 1-Monday 2-Tuesday and so on...
function weekDayName(number) {
    switch (number) {
        case 1:
            console.log("Today is Monday");
            break;
        case 2:
            console.log("Today is Tuesday");
            break;
        case 3:
            console.log("Today is Wednesday");
            break;
        case 4:
            console.log("Today is Thursday");
            break;
        case 5:
            console.log("Today is Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Today is Sunday");
            break;
        default:
            console.log("Invalid day");
            break;
    }
}
// Outputs
weekDayName(7);  // Today is Sunday


// Task 5: Assign a grade ('A', 'B', 'C', 'D', 'F') based on a score 
function assignGradeToStudent(score) {
    switch (true) {
        case (score >= 90):
            console.log('A');
            break;
        case (score >= 80):
            console.log('B');
            break;
        case (score >= 70):
            console.log('C');
            break;
        case (score >= 60):
            console.log('D');
            break;
        case (score < 60):
            console.log('F');
            break;
        default:
            console.log("Invalid score");
            break;
    }
}
// Outputs
assignGradeToStudent(99);  // A


// Activity 4: Conditional (Ternary) Operator
// Task 6: Check if a number is even or odd 
function checkEvenOrOdd(num) {
    console.log(num % 2 === 0 ? "Even" : "Odd");
}
// Outputs
checkEvenOrOdd(10);  // Even


// Activity 5: Combining Conditions
// Task 7: Check if a year is a leap year or not
function checkLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log("It is Leap year");
    } else {
        console.log("Not a leap year");
    }
}
// Outputs
checkLeapYear(2004);  // It is Leap year


