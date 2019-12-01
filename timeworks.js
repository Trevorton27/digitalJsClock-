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
    const currentTime = `${hour}:${minute}:${second}`;
    document.getElementsByClassName("clock")[0].innerHTML = currentTime;
    
};

displayTime();
setInterval(displayTime, 1000);

console.log(displayTime());

