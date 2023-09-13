//setting variable equal to my age

var myAge = 52;

//creating a variable with the value of 2 that will change

var earlyYears = 2;

earlyYears = earlyYears *= 10.5;

//creating a variable that will substract 2 years from my age

var laterYears = myAge - 2;

//calculating the number of dog years accounted for by my later years

laterYears = laterYears *= 4;

console.log(earlyYears, laterYears);

//Adding early and later years to establish age in dog years

var myAgeInDogYears = earlyYears + laterYears;

//creating a variable with a lowercase version of my name

var myName = ('Vince'.toLowerCase());

//Used string interpolation to display a conclusions sentence that state my age in dog years

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
