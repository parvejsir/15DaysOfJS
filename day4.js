// Activity 1: Use of for loop
//Task 1--> print no.'s from 1-10 using for loop
for(let i=0;i<10;i++)
    console.log(i+1);

//Task 2--> Table of 5 using for loop
for(let i=0;i<10;i++)
    console.log(`5 X ${i+1} = ${5*i}`);

// Activity 2: Use of while loop
//Task 3--> sum of numbers from 1-10 using while loop
let sum=0,i=1;
while(i<=10)
{
    sum+=i;
    i++;
}
console.log(`Sum of no.'s from 1 to 10 = ${sum}`);

//Task 4--> print 10 to 1 using while loop
let j=10;
while(j>=1)
{
    console.log(j);
    j--;
}

// Activity 3:use of do-while loop
//Task 5--> print 1-5 using do-while loop
let k=1;
do
{
    console.log(k);
    k++;
}while(k<5);

//Task 6--> calculate factorial using do-while loop
let num=7,fact=1,n=1;
do
{
    fact*=n;
    n++;
}while(n<=num);
console.log(`Factorial of ${num} is : ${fact}`);

// Activity 4:Use of nested loop
//Task 7--> pattern printing
//  *
//  * *
//  * * *
//  * * * *
//  * * * * *
for(let i=1;i<=5;i++)
{
    let row="";
    for(let j=1;j<=i;j++)
    {
        row=row+"*"+" ";
    }
    console.log(row);
}

// Activity 5:Loop control statement (use of continue and break statement)
// Task 8--> print 1-10 but skip 5 using continue
for(let i=1;i<=10;i++)
{
    if(i==5)
        continue;
    console.log(i);
}

//Task 9--> print 1-10 but stop loop when number is 7
for(let i=1;i<=10;i++)
{
    if(i==7)
        break;
    console.log(i);
}
    