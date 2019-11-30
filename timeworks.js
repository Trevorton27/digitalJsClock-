const theMonth = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

const theDay = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
];



const todayIs = document.querySelector('date');
const militaryTime = false;

function displayTime() {
    const theTime = new Date();
    const hour = theTime.getHours();
    const minute = theTime.getMinutes();
    const second = theTime.getSeconds();
    const theClock = document.querySelector('clock');

    
}

displayTime();

console.log(displayTime());

