//variables for game Manage
let currentPage = 'home'; //home, help, enter_confirm, game, result, exit_confirm


//variables for game Field
let fieldWidth;
let fieldHeight;
let mosquito_img;
let mosquito_sound;
let handclap_sounds = [];

//variables for ingame logic
let isMouseNearby = false;
let huntingGauge = 0;
let highScore = 0;
let currentScore = 0;

let mosquitoX;
let mosquitoY;
let amount = 0;
let step = 0.005;
let startPos;
let pathPos;
let targetPos;
let isSongPlaying = false;
let startTime;
let deadMosquitos = [];


function preload() {
  mosquito_sound = loadSound('assets/mosquito.mp3');
  let handclap_sound_1 = loadSound('assets/hand_clap_1.mp3');
  let handclap_sound_2 = loadSound('assets/hand_clap_2.mp3');
  let handclap_sound_3 = loadSound('assets/hand_clap_3.mp3');
  let handclap_sound_4 = loadSound('assets/hand_clap_4.mp3');
  let handclap_sound_5 = loadSound('assets/hand_clap_5.mp3');
  handclap_sounds.push(handclap_sound_1);
  handclap_sounds.push(handclap_sound_2);
  handclap_sounds.push(handclap_sound_3);
  handclap_sounds.push(handclap_sound_4);
  handclap_sounds.push(handclap_sound_5);

  mosquito_img = loadImage('assets/mosquito.PNG');
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(RADIANS);
  rectMode(CENTER);

  //Set Local Storage for High Score
  if (localStorage.getItem('mosquito_highScore') === null) {
    localStorage.setItem('mosquito_highScore', '0');
  } else {
    highScore = Number(localStorage.getItem('mosquito_highScore'));
  }
  ;

  //gameField settings
  fieldWidth = width - 40;
  fieldHeight = height;

  //
  startTime = millis();

  resetMosquitoPos();

}

function draw() {
  if (currentPage !== 'game') {
    mosquito_sound.stop();
    cursor(ARROW);
  }
  switch (currentPage) {
    case 'home':
      background(220);
      textAlign(CENTER, CENTER);
      rectMode(CENTER);
      fill('#000');

      textSize(30);
      text('🦟 모스끼또!! 🦟', width / 2, height / 2 - 60);

      home_isMouseOverPlayButton(mouseX, mouseY) ? fill('#919191') : fill('#000');
      rect(width / 2, height / 2, 100, 50);

      home_isMouseOverHelpButton(mouseX, mouseY) ? fill('#919191') : fill('#000');
      rect(width / 2, height / 2 + 60, 100, 50);

      fill('#fff');
      textSize(20);
      text('PLAY', width / 2, height / 2);
      text('HELP', width / 2, height / 2 + 60);
      break;

    case 'help':
      background(220);
      textAlign(CENTER, CENTER);
      rectMode(CENTER);
      fill('#000');
      textSize(25);
      text(`게임 설명`, width / 2, height / 2 - 140);
      textSize(20);
      text(`제한시간 안에 모기를 최대한 많이 잡으세요!
      사냥을 시도하려면 모기 위에 마우스를 올리고 클릭하세요.
      날아다니는 모기 위에 마우스를 오래 올려둘수록 사냥 성공 확률이 높아집니다.
      확률에 따라 사냥 성공 여부가 결정됩니다.
      사냥을 시도하면 쌓아둔 성공 확률도 초기화돼요.
      확신이 들 때까지 기다리는 참을성을 길러보세요.
      그럼 화이팅~!`,
        width / 2,
        height / 2);

      help_isMouseOverExitButton(mouseX, mouseY) ? fill('#919191') : fill('#000');
      rect(width / 2, height / 2 + 140, 100, 50);

      fill('#fff');
      text('돌아가기', width / 2, height / 2 + 142)
      break;

    case 'enter_confirm':
      background(220);
      textAlign(CENTER, CENTER);
      rectMode(CENTER);

      fill('#000');
      textSize(25);
      text('준비됐나요!?', width / 2, height / 2 - 50);

      enterConfirm_isMouseOverYesButton(mouseX, mouseY) ? fill('#919191') : fill('#000');
      rect(width / 2, height / 2, 100, 50);
      enterConfirm_isMouseOverNoButton(mouseX, mouseY) ? fill('#919191') : fill('#000');
      rect(width / 2, height / 2 + 60, 100, 50);

      fill('#fff');
      textSize(20);
      text('예', width / 2, height / 2);
      text('아니오', width / 2, height / 2 + 60);
      break;

    case 'exit_confirm':
      background(220);
      textAlign(CENTER, CENTER);
      rectMode(CENTER);

      fill('#000');
      textSize(25);
      text('나가시겠습니까?', width / 2, height / 2 - 50);

      rect(width / 2, height / 2, 100, 50);
      rect(width / 2, height / 2 + 60, 100, 50);

      fill('#fff');
      textSize(20);
      text('예', width / 2, height / 2);
      text('아니오', width / 2, height / 2 + 60);
      break;

    case 'game':
      rectMode(CORNER);
      // noLoop();
      background(220);
      if (!mosquito_sound.isPlaying()) {
        mosquito_sound.play();
      }

      //시계
      if (timer() > 0) {
        textAlign(CENTER, CENTER);
        textSize(40);
        text(timer(), width / 2, height / 2);
      } else {
        currentPage = 'result';
      }

      //죽은 모기들
      deadMosquitos.forEach((pos) => {
        console.log(pos);
        deadMosquito(pos.x, pos.y);
      })

      //모기 위치 조정
      pathPos = p5.Vector.lerp(startPos, targetPos, amount).add(p5.Vector.fromAngle(random(0, 360), 2));
      amount += step;
      mosquito(pathPos.x, pathPos.y);
      if (amount >= 1) {
        startPos.set([pathPos.x, pathPos.y]);
        targetPos.set([random(0, fieldWidth), random(0, fieldHeight)]);
        amount = 0;
      }

      //마우스와 모기 사이 거리에 따른 huntingGauge 계산
      let mousePosVector = createVector(mouseX, mouseY);
      if (mousePosVector.dist(pathPos) < 20) {
        isMouseNearby = true;
        if (huntingGauge < 100) {
          huntingGauge += 1;
        } else {
          huntingGauge = 100;
        }
        cursor('grab');
      } else {
        isMouseNearby = false;
        if (huntingGauge > 0) {
          huntingGauge -= 0.2;
        } else {
          huntingGauge = 0;
        }
        cursor('pointer');
      }

      //huntingGuage bar 그리기
      fill('#fff');
      rect(width - 30, height / 4, 20, height / 2);
      let guageHeight = map(huntingGauge, 0, 100, 0, height / 2);
      // console.log(guageHeight);
      fill('#f00');
      noStroke();
      rect(width - 29, height * 3 / 4 - guageHeight, 18, guageHeight);
      stroke('#fff');
      fill('#000');
      let percent_hundred = '100%';
      let percent_fifty = '50%';
      let percent_zero = '0%';
      textSize(10);
      text(percent_hundred, width - 40, height * 1 / 4);
      text(percent_fifty, width - 40, height * 2 / 4);
      text(percent_zero, width - 40, height * 3 / 4);
      fill('#fff');

      //Score
      fill('#000');
      textSize(20);
      text(`Score: ${currentScore}`, 45, 25);

      //ExitButton
      if (game_isMouseOverExitButton(mouseX, mouseY)) {
        fill('#919191');
      } else {
        fill('#fff');
      }
      rect(width - 39, 15, 20);
      fill('#000');
      text('X', width - 29, 28);
      break;

    case 'result':
      background('#d3d3d3');
      textAlign(CENTER, CENTER);
      textSize(100);
      noStroke();

      //Result
      textSize(25);
      fill('#000');
      text("🦟 Result 🦟", width / 2, height / 2 - 140);
      text(`최고 점수: ${highScore}`, width / 2, height / 2 - 100);
      text(`이번판 점수: ${currentScore}`, width / 2, height / 2 - 60);

      fill('#000');
      rectMode(CENTER);
      textSize(20);
      result_isMouseOverAgainButton(mouseX, mouseY) ? fill('#919191') : fill('#000');
      rect(width / 2, height / 2, 100, 50);
      result_isMouseOverExitButton(mouseX, mouseY) ? fill('#919191') : fill('#000');
      rect(width / 2, height / 2 + 60, 100, 50);

      fill('#fff');
      textSize(20);
      text('다시 하기', width / 2, height / 2 + 1);
      text('나가기', width / 2, height / 2 + 61);
      break;

    default:
      console.log('EHH...SOMETHING WENT WRONG...');
  }
}


function mouseClicked() {
  switch (currentPage) {
    case 'home':
      if (home_isPlayButtonPressed(mouseX, mouseY)) {
        currentPage = 'enter_confirm';
      }
      if (home_isHelpButtonPressed(mouseX, mouseY)) {
        currentPage = 'help';
      }
      break;
    case 'help':
      if (help_isExitbuttonPressed(mouseX, mouseY)) {
        currentPage = 'home';
      }
      break;
    case 'enter_confirm':
      if (enterConfirm_isYesbuttonPressed(mouseX, mouseY)) {
        resetgameVariables();
        currentPage = 'game';
      }
      if (enterConfirm_isNobuttonPressed(mouseX, mouseY)) {
        currentPage = 'home';
      }
      break;
    case 'game':
      handclap_sounds[int(random(0, 6))].play();

      if (game_isExitButtonPressed(mouseX, mouseY)) {
        console.log('hello');
        currentPage = 'exit_confirm';
      }

      if (isHuntSuccesful()) {
        currentScore++;
        if (currentScore > highScore) {
          highScore = currentScore;
          localStorage.setItem('mosquito_highScore', highScore);
        }
        deadMosquitos.push(createVector(pathPos.x, pathPos.y));
        resetMosquitoPos();
      }
      huntingGauge = 0;
      break;
    case 'result':
      if (result_isAgainButtonPressed(mouseX, mouseY)) {
        resetgameVariables();
        currentPage = 'game';
      }
      if (result_isExitbuttonPressed(mouseX, mouseY)) {
        currentPage = 'home';
      }
      break;
    case 'exit_confirm':
      if (exitConfirm_isYesButtonPressed(mouseX, mouseY)) {
        currentPage = 'home';
      }
      if (exitConfirm_isNoButtonPressed(mouseX, mouseY)) {
        currentPage = 'game';
      }
      break;
    default:
      console.log("EHH..SOMETHING WENT WRONG...");
  }
}


function mosquito(x, y) {
  this.push();
  fill('#000');
  translate(x, y);
  textAlign(CENTER, CENTER);
  // rotate(random(60,70));
  textSize(21);
  // text('🦟',0,0);

  imageMode(CENTER);
  image(mosquito_img, 0, 0, 25, 25);
  // ellipse(0, 0, 5, 20);
  if (isMouseNearby) {
    noFill();
    stroke(0, 0, 0);
    ellipse(0, 0, 40);
    noStroke();
    fill('#000');
  }
  this.pop();
}

function deadMosquito(x, y) {
  this.push();
  fill('#f00');
  translate(x, y);
  noStroke();
  rotate(45);
  ellipse(0, 0, 10, 20);
  rotate(90);

  ellipse(0, 0, 10, 20);
  this.pop();
}

function isHuntSuccesful() {
  if (!isMouseNearby) {
    return false;
  }
  if (random(0, 100) < huntingGauge) {
    return true;
  } else {
    return false;
  }
}

function resetMosquitoPos() {
  //초기 모기 위치 세팅
  startPos = createVector(random(0, fieldWidth), random(0, fieldHeight));
  //초기 타깃 위치 세팅
  targetPos = createVector(random(0, fieldWidth), random(0, fieldHeight));
}

function resetgameVariables() {
  deadMosquitos = [];
  currentScore = 0;
  startTime = millis();
}

function timer() {
  /* this math takes the current second
  and subtracts our very first second (when the timer started)
  from it in order to keep track of time*/

  let time = 30 - int((millis() - startTime) / 1000);
  if (time < 0) {
    time = "END!!"
  }

  return time; //stop running this function once the timer reaches 30
}

//button clicked 
function game_isMouseOverExitButton(mouseX, mouseY) {
  return (mouseX > width - 39) && (mouseX < width - 19) && (mouseY > 15) && (mouseY < 35);
}

function game_isExitButtonPressed(mouseX, mouseY) {
  if (game_isMouseOverExitButton(mouseX, mouseY)) {
    console.log('exit button pressed!');
    return true;
  }
  return false;
}

function exitConfirm_isYesButtonPressed(mouseX, mouseY) {
  if ((mouseX > width / 2 - 50) && (mouseX < width / 2 + 50) && (mouseY > height / 2 - 25) && (mouseY < height / 2 + 25)) {
    console.log('Yes Button Pressed!');
    return true;
  }
  return false;
}

function exitConfirm_isNoButtonPressed(mouseX, mouseY) {
  if ((mouseX > width / 2 - 50) && (mouseX < width / 2 + 50) && (mouseY > height / 2 + 60 - 25) && (mouseY < height / 2 + 60 + 25)) {
    console.log('No Button Pressed!');
    return true;
  }
  return false;
}

function home_isMouseOverPlayButton(mouseX, mouseY) {
  return (mouseX > width / 2 - 50) && (mouseX < width / 2 + 50) && (mouseY > height / 2 - 25) && (mouseY < height / 2 + 25)
}
function home_isPlayButtonPressed(mouseX, mouseY) {
  if (home_isMouseOverPlayButton(mouseX, mouseY)) {
    console.log('Play Button Pressed!');
    return true;
  }
  return false;
}

function home_isMouseOverHelpButton(mouseX, mouseY) {
  return (mouseX > width / 2 - 50) && (mouseX < width / 2 + 50) && (mouseY > height / 2 + 60 - 25) && (mouseY < height / 2 + 60 + 25);
}
function home_isHelpButtonPressed(mouseX, mouseY) {
  if (home_isMouseOverHelpButton(mouseX, mouseY)) {
    console.log('Help Button Pressed!');
    return true;
  }
  return false;
}

function enterConfirm_isMouseOverYesButton(mouseX, mouseY) {
  return (mouseX > width / 2 - 50) && (mouseX < width / 2 + 50) && (mouseY > height / 2 - 25) && (mouseY < height / 2 + 25);
}
function enterConfirm_isYesbuttonPressed(mouseX, mouseY) {
  if (enterConfirm_isMouseOverYesButton(mouseX, mouseY)) {
    console.log('Yes Button Pressed!');
    return true;
  }
  return false;
}

function enterConfirm_isMouseOverNoButton(mouseX, mouseY) {
  return (mouseX > width / 2 - 50) && (mouseX < width / 2 + 50) && (mouseY > height / 2 + 60 - 25) && (mouseY < height / 2 + 60 + 25);
}
function enterConfirm_isNobuttonPressed(mouseX, mouseY) {
  if (enterConfirm_isMouseOverNoButton(mouseX, mouseY)) {
    console.log('No Button Pressed!');
    return true;
  }
  return false;
}

function result_isMouseOverAgainButton(mouseX, mouseY) {
  return (mouseX > width / 2 - 50) && (mouseX < width / 2 + 50) && (mouseY > height / 2 - 25) && (mouseY < height / 2 + 25);
}
function result_isAgainButtonPressed(mouseX, mouseY) {
  if (result_isMouseOverAgainButton(mouseX, mouseY)) {
    console.log('Again Button Pressed!');
    return true;
  }
  return false;
}

function result_isMouseOverExitButton(mouseX, mouseY) {
  return (mouseX > width / 2 - 50) && (mouseX < width / 2 + 50) && (mouseY > height / 2 + 60 - 25) && (mouseY < height / 2 + 60 + 25);
}
function result_isExitbuttonPressed(mouseX, mouseY) {
  if (result_isMouseOverExitButton(mouseX, mouseY)) {
    console.log('Exit Button Pressed!');
    return true;
  }
  return false;
}

function help_isMouseOverExitButton(mouseX, mouseY) {
  return (mouseX > width / 2 - 50) && (mouseX < width / 2 + 50) && (mouseY > height / 2 + 140 - 25) && (mouseY < height / 2 + 140 + 25);
}

function help_isExitbuttonPressed(mouseX, mouseY) {
  if (help_isMouseOverExitButton(mouseX, mouseY)) {
    console.log('exit button pressed!');
    return true;
  }
  return false;
}