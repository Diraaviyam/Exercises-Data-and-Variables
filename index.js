// 1. Declare and assign the variables here:
let shuttleName = 'Determination';
let shuttleSpeedmph = '17500';
let distancetoMarskm = '25000000';
let distancetotheMoonkm = '384400';
const milesperKilometer = '0.621';


// 2. Use console.log to print the 'typeof' each variable. Print one item per line.

console.log(typeof shuttleName);
console.log(typeof shuttleSpeedmph);
console.log(typeof distancetoMarskm);
console.log(typeof distancetotheMoonkm);
console.log(typeof milesperKilometer);


// Code your solution to exercises 3 and 4 here:
let milestoMars = distancetoMarskm * milesperKilometer;

let hourstoMars = milestoMars / shuttleSpeedmph;

let daystoMars = hourstoMars / 24;
console.log(shuttleName + "will take" +daystoMars +"days to reach Mars.");


// Code your solution to exercise 5 here:
let milestoMoon = distancetotheMoonkm * milesperKilometer;

let hourstoMoon = milestoMoon / shuttleSpeedmph;

let daystoMoon = hourstoMoon / 24;
console.log (shuttleName + "will take" +daystoMoon +"days to reach Moon");
