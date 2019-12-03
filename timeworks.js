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

const todaysDate = [
    '1st',
    '2nd',
    '3rd',
    '4th',
    '5th',
    '6th',
    '7th',
    '8th',
    '9th',
    '10th',
    '11th',
    '12th',
    '13th',
    '14th',
    '15th',
    '16th',
    '17th',
    '18th',
    '19th',
    '20th',
    '21st',
    '22nd',
    '23rd',
    '24th',
    '25th',
    '26th',
    '27th',
    '28th',
    '29th',
    '30th',
    '31st'
];



const twelveHourTime = false;

function displayTime() {
    const theTime = new Date();
    const hour = theTime.getHours();
    const minute = theTime.getMinutes();
    const second = theTime.getSeconds();
    const twoDigitMinutes = minute < 10 ? minute.innerText = "0" + minute : theTime.getMinutes();
    const twoDigitSeconds = second < 10 ? second.innerText = "0" + second : theTime.getSeconds();
    const currentTime = `${hour}:${twoDigitMinutes}:${twoDigitSeconds}`;
    document.getElementsByClassName("clock")[0].innerHTML = currentTime;
    
};

function displayDate(){
    const theDate = new Date();
    const month = theMonth[theDate.getMonth()];
    const date = todaysDate[theDate.getDate() - 1];
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

console.log(displayTime);

