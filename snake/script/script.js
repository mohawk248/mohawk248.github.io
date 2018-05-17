var c = document.getElementById("SnakeGamePad");
var ctx = c.getContext("2d");
var left = 10, up = 10, right = 0, down = 0;
var hor = 10, ver = 10;
var hori, vert;
var stop = 0;
var score = 0;
var start = 0;
var big = 0;
var big1 = 1;

GridS();
//settings//

  //size of moving//
    var size = 10;
  //how fast the snake moves in millseconds//
    var speed = 250;

  //How big each box of the snake is//
    var rectsize = 10;

  //Snake color//
    var food_color = "green";

  //Canvas settings//
    var w = 300;
    var h = 200;
    document.getElementById("SnakeGamePad").style.width = w;
    document.getElementById("SnakeGamePad").style.height = h;

//Grid System//
  var HS = h + 10;
  var WS = w +10;
  function GridS() {
    for (var wi = 0.5; wi < 300; wi += 10) {
      ctx.moveTo(wi, 0);
      ctx.lineTo(wi, 200);
    }
    for (var he = 0.5; he < 200; he += 10) {
      ctx.moveTo(0, he);
      ctx.lineTo(300, he);
    }
    ctx.strokeStyle = "#000";
    ctx.stroke();
  }

//controls function//
  function controls(event) {
    var key = event.keyCode;
    switch(key) {
      case 80://Key P//
        clearInterval(a);
        break;
      case 85://Key U//
        Food();
        break;
      case 82://Key R//
        ReStart();
        break;
      case 32://SpaceBar//
        if(start == 0) {
          start = 1;
          a = setInterval(AllMovement, speed);
          Food();
        }
        break;
      case 38://Left Arrow//
        if(left == 0) {
          left = 1;
          stop = "left";
        }
        break;
      case 37://Up Arrow//
        if(up == 0) {
          up = 1;
          stop = "up";
        }
        break;
      case 40://Right Arrow//
        if(right == 0) {
          right = 1;
          stop = "right";
        }
        break;
      case 39://Down Arrow//
        if(down == 0) {
          down = 1;
          stop = "down";
        }
        break;
    }
  }
  function AllMovement() {
    switch(stop) {
      case "left":
        hor = hor - size;
        up = 0; right = 0; down = 0;
        if(hor == 0) {
          ReStart();
        }
        break;
      case "up":
        ver = ver - size;
        left = 0; right = 0; down = 0;
        if(ver == 0) {
          ReStart();
        }
        break;
      case "right":
        hor = hor + size;
        left = 0; up = 0; down = 0;
        if(hor == HS) {
          ReStart();
        }
        break;
      case "down":
        ver = ver + size;
        left = 0; up = 0; right = 0;
        if(ver == WS) {
          ReStart();
        }
        break;
     }
    if(big == big1) {ctx.fillStyle = "#ffffff"; ctx.fillRect(0, 0, w, h); big = 0;}
    else { big = big + 1;}
    ctx.fillStyle ="#ff0000";
    GridS();
    ctx.fillRect(ver - rectsize, hor - rectsize, rectsize, rectsize);
    ctx.fillStyle = food_color;
    ctx.fillRect(x - rectsize, y - rectsize, rectsize, rectsize);
    if(ver == x && hor == y) {
      Food();
      big1 = big1 + 1;
      score = score + 1;
      document.getElementById("ScoreText").innerHTML = score;
      speed = speed - 5;
      clearInterval(a);
      a = setInterval(AllMovement, speed);   
    }
  }

//ReStart//
  function ReStart() {
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, w, h);
    hor = 10;
    ver = 10;
    speed = 250;
    stop = "down";
    score = 0;
    big1 = 1;
    big = 0;
    document.getElementById("ScoreText").innerHTML = score;
    start = 0;
    clearInterval(a);
    on();
  }
  function on() {
    document.getElementById("overlay").style.display = "block";
  }

  function off() {
    document.getElementById("overlay").style.display = "none";
  }

//food//
  var fw, fh, FoW, FoH;
  var x, y;
  function Food() {
    fw = w/10;
    fh = h/10;
    FoW = Math.floor(Math.random() * fw) + 1;
    FoH = Math.floor(Math.random() * fh) + 1;
    x = FoW*10;
    y = FoH*10;
    ctx.fillStyle = food_color;
    ctx.fillRect(x - rectsize, y - rectsize, rectsize, rectsize);
  }
