let width, height, timeArr, hour, min, second, factor;
let diameter, x, y;

function setup() {
    width = innerWidth;
    height = innerHeight - 4;
    timeArr = [];
    factor = 1.2;
    diameter = (width > height ? height : width) / factor;
    x = width / 2;
    y = height / 2;
    createCanvas(width, height);
}

function draw() {
    background(0);
    timeArr = getTime();
    drawClock(...timeArr);
}

function getTime() {
    let now = new Date();
    let time = [];
    time.push(now.getHours());
    time.push(now.getMinutes());
    time.push(now.getSeconds());
    return time;
}

function drawClock(hours, mins, seconds) {
    stroke(255);
    fill(0);
    strokeWeight(4);
    ellipseMode(CENTER);
    ellipse(width / 2, height / 2, diameter);

    let secondsAngle = map(seconds, 0, 60, 0, 2 * PI) - PI / 2;
    secondsLine = diameter / 2 - 40;
    line(x, y, x + secondsLine * cos(secondsAngle), y + secondsLine * sin(secondsAngle));

    mins += map(seconds, 0, 60, 0, 1);
    let minutesAngle = map(mins, 0, 60, 0, 2 * PI) - PI / 2;
    stroke(0, 0, 255);
    minutesLine = diameter / 2 - 60;
    line(x, y, x + minutesLine * cos(minutesAngle), y + minutesLine * sin(minutesAngle));

    hours += map(mins, 0, 60, 0, 1);
    let hoursAngle = map(hours, 0, 12, 0, 2 * PI) - PI / 2;
    stroke(255, 0, 0);
    hoursLine = diameter / 2 - 120;
    line(x, y, x + hoursLine * cos(hoursAngle), y + hoursLine * sin(hoursAngle));
}