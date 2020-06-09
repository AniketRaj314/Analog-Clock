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

    drawHand(seconds, 60, 40, [255]);

    mins += map(seconds, 0, 60, 0, 1);
    drawHand(mins, 60, 60, [0, 0, 255]);

    hours += map(mins, 0, 60, 0, 1);
    drawHand(hours, 12, 120, [255, 0, 0]);
}

function drawHand(mapVar, upperLimit, subFactor, colour) {
    let angle = map(mapVar, 0, upperLimit, 0, 2 * PI) - PI / 2;
    stroke(...colour);
    handLength = diameter / 2 - subFactor;
    line(x, y, x + handLength * cos(angle), y + handLength * sin(angle));
}