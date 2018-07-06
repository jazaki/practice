var canvas = document.querySelector('canvas'); //reference to the canvas element
var ctx = canvas.getContext('2d'); // context of the canvas on which the drawing should be done

var width = canvas.width = window.innerWidth; //width of the canvas
var height = canvas.height = window.innerHeight; //height of the canvas

// function to generate random number

function random(min,max) {
  var num = Math.floor(Math.random()*(max-min)) + min;
  return num;
}


class Ball {

  constructor(x, y, velX, velY, color, size) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.size = size;
  }

  draw() {
    ctx.beginPath(); // stating that we want to begin drawing
    ctx.fillStyle = this.color; // the color of the shape to be drawn
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI); // tracing the arc shape
    ctx.fill(); // finish drawing the path we started with beginPath(), and fill the area it takes up with the color we specified earlier in fillStyle."
  }

  // the ball is in effect moved each time this method is called.
  update() {
    // Checking to see whether the x coordinate is greater than the width of the canvas (the ball is going off the right hand edge).
    if ((this.x - this.size) >= width) {
      this.velX = -(this.velX);
    }

    // Checking to see whether the x coordinate is smaller than 0(the ball is going off the left hand edge).
    if ((this.x - this.size) <= 0) {
      this.velX = -(this.velX);
    }

    // Checking to see whether the y coordinate is greater than the height of the canvas (the ball is going off the bottom edge).
    if ((this.y + this.size) >= height) {
      this.velY = -(this.velY);
    }

    // Checking to see whether the y coordinate is smaller than 0(the ball is going off the top edge).
    if ((this.y - this.size) <= 0) {
      this.velY = -(this.velY);
    }

    // add the velX value to the x coordinate, and the velY value to the y coordinate 
    this.x += this.velX;
    this.y += this.velY;
  }
  
}

/* 
  function Ball(x, y, velX, velY, color, size) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.size = size;
  }

  Ball.prototype.draw = function() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
  }

  Ball.prototype.update = function() {
    if((this.x - this.y) >= width) {
      this.velX = -(this.velX);
    }
    if ((this.x - this.size) <= 0) {
      this.velX = -(this.velX);
    }

    if ((this.y + this.size) >= height) {
      this.velY = -(this.velY);
    }

    if ((this.y - this.size) <= 0) {
      this.velY = -(this.velY);
    }

    this.x += this.velX;
    this.y += this.velY;
  } 
*/

var balls = [];

function loop() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';  // Sets the canvas fill color to semi-transparent blac
  ctx.fillRect(0, 0, width, height); // draw a rectangle of the color across the whole width and height of the canvas

  while (balls.length < 50) {
    var size = random(10, 20);
    var ball = new Ball(
      // ball position always drawn at least one ball width
      // away from the edge of the canvas, to avoid drawing errors
      random(0 + size, width - size),
      random(0 + size, height - size),
      random(-7, 7),
      random(-7, 7),
      'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) + ')',
      size
    );
    balls.push(ball);
  }

  for (var i = 0; i < balls.length; i++) {
    balls[i].draw();
    balls[i].update();
  }

  requestAnimationFrame(loop);
}

loop();