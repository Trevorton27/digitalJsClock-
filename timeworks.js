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



const twelveHourTime = false;

function displayTime() {
    const theTime = new Date();
    const hour = theTime.getHours();
    const minute = theTime.getMinutes();
    const second = theTime.getSeconds();
    const currentTime = `${hour}:${minute}:${second}`;
    document.getElementsByClassName("clock")[0].innerHTML = currentTime;
    
};

function displayDate(){
    const theDate = new Date();
    const month = theMonth[theDate.getMonth()];
    const date = theDate.getDate();
    const day = theDay[theDate.getDay()];
    const todayIs = `Today is ${day} ${month} ${date}`;
/*
    if(date == 1) {
        return date + "st";
    } else if (date == 2) {
        return date + "nd";
    } */

    document.getElementsByClassName("date")[0].innerHTML = todayIs;
}

displayDate();
displayTime();
setInterval(displayTime, 1000);

console.log(displayTime());

