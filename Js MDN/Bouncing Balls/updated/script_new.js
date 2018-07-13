var canvas = document.querySelector('canvas');
var cx = canvas.getContext("2d");
var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;

function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

class Shape {
    constructor(x, y, velX, velY, exists) {
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;
        this.exists = exists;
    }

    draw() {
        cx.beginPath();
        cx.fillStyle = this.color;
        cx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        cx.fill();
    }

    update() {
        if((this.x - this.size) >= width) {
            this.velX = -(this.velX);
        }

        if((this.x - this.size) <= 0) {
            this.velX = -(this.velY);
        }

        if((this.y + this.size) >= height) {
            this.velY = -(this.velY);
        }

        if((this.y - this.size) <= 0) {
            this.velY = -(this.velY);
        }

        this.x += this.velX;
        this.y += this.velY;
    }
}

class Ball extends Shape{
    constructor() {
        super()
    }
}
var balls = [];

function loop() {
    cx.fillStyle = 'rgba(0, 0, 0, 0.25)';
    cx.fillRect(0, 0, width, height);

    while(balls.length <= 50) {
        let size = random(10, 20);
        let ball = new Ball(
            random(0 + size, width - size),
            random(0 + size, height - size),
            random(-7, 7),
            random(-7, 7),
            size,
            'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) + ')'
        );
        balls.push(ball);
    }

    for(let i = 0; i < balls.length; i++) {
        balls[i].draw();
        balls[i].update();
    }

    requestAnimationFrame(loop);
}

loop();