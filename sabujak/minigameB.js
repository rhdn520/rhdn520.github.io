// ===============================
// minigameB.js – SCORE 기준 칭찬 메시지 + 위치 조절 기능 포함 완전본
// ===============================

// ==== 글로벌 변수 ====

let minigameB_bgStart, minigameB_bgPlay, minigameB_bgEnd;
let minigameB_playerImg;

let minigameB_trashImages = [];
let minigameB_otherImages = [];

let minigameB_font;
let minigameB_speechBg; // 말풍선 이미지 (칭찬용)

let minigameB_player;
let minigameB_objects = [];

let minigameB_score = 0;
let minigameB_combo = 0;

let minigameB_state = "start";

let minigameB_slowTimer = 0;
let minigameB_scoreFlashTimer = 0;
let minigameB_missTimer = 0;

let minigameB_shakeTimer = 0;

// 대화 시스템
let minigameB_dialogue;       // MISS 메시지
let minigameB_comboDialogue;  // SCORE 칭찬 메시지

// SCORE 칭찬 메시지 표시 위치
let praiseX = 900;   // ← 필요하면 여기 값만 바꾸면 됨
let praiseY = 300;

// 속도 설정
const MINIGAMEB_NORMAL_SPEED = 14;
const MINIGAMEB_SLOW_SPEED = 3;


// =======================================
// preload
// =======================================
function preload_minigameB() {
  minigameB_bgStart = loadImage("assets/bg_start.png");
  minigameB_bgPlay = loadImage("assets/bg_play.png");
  minigameB_bgEnd = loadImage("assets/bg_end.png");

  minigameB_playerImg = loadImage("assets/maincharacter.png");

  minigameB_trashImages = [
    loadImage("assets/trash1.png"),
    loadImage("assets/trash2.png"),
    loadImage("assets/trash3.png")
  ];

  minigameB_otherImages = [
    loadImage("assets/butterfly.png"),
    loadImage("assets/leaf.png"),
    loadImage("assets/flower.png")
  ];

  minigameB_font = loadFont("assets/DungGeunMo.ttf");

  minigameB_speechBg = loadImage("assets/background_speech.png");
}


// =======================================
// setup
// =======================================
function setup_minigameB() {
  imageMode(CENTER);
  textFont(minigameB_font);
  playBGM("bgm4");

  minigameB_player = new MinigameB_Player();

  // MISS = 흰 박스
  minigameB_dialogue = new MinigameB_DialogueSystem(false);

  // SCORE 칭찬 = 말풍선 이미지
  minigameB_comboDialogue = new MinigameB_DialogueSystem(true);
}


// =======================================
// draw
// =======================================
function draw_minigameB() {

  
  if (minigameB_state === "start") {
    drawMinigameB_Start();
    return;
  }

  if (minigameB_state === "end") {
    drawMinigameB_End();
    return;
  }

  // 흔들림
  let shakeX = 0, shakeY = 0;
  if (minigameB_shakeTimer > 0) {
    shakeX = random(-18, 18);
    shakeY = random(-18, 18);
    minigameB_shakeTimer--;
  }

  push();
  translate(shakeX, shakeY);

  image(minigameB_bgPlay, width / 2, height / 2, width, height);

  // 느려짐
  minigameB_player.speed =
    minigameB_slowTimer > 0 ? MINIGAMEB_SLOW_SPEED : MINIGAMEB_NORMAL_SPEED;
  if (minigameB_slowTimer > 0) minigameB_slowTimer--;

  // 플레이어
  minigameB_player.update();
  minigameB_player.draw();

  // 오브젝트 생성
  if (frameCount % 40 === 0) {
    minigameB_objects.push(new MinigameB_FallingObject(random() < 0.5));
  }

  // 오브젝트 처리
  for (let i = minigameB_objects.length - 1; i >= 0; i--) {
    let obj = minigameB_objects[i];
    obj.update();
    obj.draw();

    if (obj.y > height + 100) {
      minigameB_objects.splice(i, 1);
      continue;
    }

    if (dist(obj.x, obj.y, minigameB_player.x, minigameB_player.y) < 120) {

      if (obj.isTrash) {
        // ===== 성공 =====
        minigameB_score++;
        minigameB_combo++;
        minigameB_scoreFlashTimer = 20;

        // SCORE 기준 칭찬 메시지
        let msg = null;
        if (minigameB_score === 5) msg = "같이 하니까 훨씬 빨리 되네요!";
        if (minigameB_score === 10) msg = "역시 잘하시네요!";
        if (minigameB_score === 15) msg = "함께 할 수 있어서 너무 좋아요.";

        if (msg) {
          minigameB_comboDialogue.trigger(
            msg,
            60,     // 유지 시간
            false,  // 바로 사라짐
            praiseX,
            praiseY
          );
        }

      } else {
        // ===== MISS =====
        minigameB_combo = 0;
        minigameB_missTimer = 40;
        minigameB_slowTimer = 90;
        minigameB_shakeTimer = 20;

        minigameB_dialogue.trigger(
          "이건 버리는 거 아닌데…",
          60,
          false,
          width / 2,
          height - 380
        );
      }

      minigameB_objects.splice(i, 1);
    }
  }

  pop();

  drawMinigameB_UI();
  minigameB_dialogue.updateAndDraw();
  minigameB_comboDialogue.updateAndDraw();

  // 클리어 조건
  if (minigameB_score >= 10) {
    minigameB_state = "end";
    minigameB_cleared = true;
    inited.map = false;
  }
}



// =========================================================
// START 화면
// =========================================================
function drawMinigameB_Start() {
  image(minigameB_bgStart, width / 2, height / 2, width, height);
  fill(255);
  textSize(48);
  textAlign(CENTER, CENTER);
  text("PRESS ENTER TO START", width / 2, height - 100);
}



// =========================================================
// END 화면
// =========================================================
function drawMinigameB_End() {
  image(minigameB_bgEnd, width / 2, height / 2, width, height);

  // ===== GAME CLEAR! 중앙 크게 =====
  fill(255);
  textAlign(CENTER, CENTER);

  // GAME CLEAR 텍스트 (크게, 화면 정중앙)
  textSize(120);
  text("GAME CLEAR!", width / 2, height / 2 - 80);

  // ===== 안내 텍스트 =====
  textSize(40);
  text("Press R to Restart", width / 2, height / 2 + 40);
  text("Press ENTER to Continue", width / 2, height / 2 + 110);
}



// =========================================================
// keyPressed
// =========================================================
function keyPressed_minigameB() {

  if (key === "h" || key === "H") {
    minigameB_score = 15;
    minigameB_state = "end";
    minigameB_cleared = true;
    return;
  }

  if (minigameB_state === "start" && keyCode === ENTER) {
    minigameB_score = 0;
    minigameB_combo = 0;
    minigameB_objects = [];
    minigameB_slowTimer = 0;
    minigameB_state = "play";
  }

  else if (minigameB_state === "end" && (key === "r" || key === "R")) {
    minigameB_score = 0;
    minigameB_combo = 0;
    minigameB_objects = [];
    minigameB_slowTimer = 0;
    minigameB_state = "play";
  }

  else if (minigameB_state === "end" && keyCode === ENTER) {
    gameState = "minigameB_end";
  }
}



// =========================================================
// UI
// =========================================================
function drawMinigameB_UI() {
  textAlign(LEFT, TOP);
  textSize(100);
  fill(255);

  if (minigameB_scoreFlashTimer > 0) {
    fill(255, 0, 0);
    minigameB_scoreFlashTimer--;
  }

  text("SCORE: " + minigameB_score, 30, 30);

  if (minigameB_missTimer > 0) {
    fill(255, 50, 50);
    textSize(120);
    textAlign(CENTER, TOP);
    text("MISS!", width / 2, 40);
    minigameB_missTimer--;
  }
}



// =========================================================
// Player
// =========================================================
class MinigameB_Player {
  constructor() {
    this.x = width / 2;
    this.y = height - 120;
    this.speed = MINIGAMEB_NORMAL_SPEED;
    this.size = 240;
  }

  update() {
    if (keyIsDown(65)) this.x -= this.speed;
    if (keyIsDown(68)) this.x += this.speed;
    this.x = constrain(this.x, 100, width - 100);
  }

  draw() {
    image(minigameB_playerImg, this.x, this.y, this.size, this.size);
  }
}



// =========================================================
// Falling object
// =========================================================
class MinigameB_FallingObject {
  constructor(isTrash) {
    this.isTrash = isTrash;
    this.x = random(100, width - 100);
    this.y = -100;
    this.speed = random(6, 10);

    this.img = isTrash
      ? random(minigameB_trashImages)
      : random(minigameB_otherImages);

    this.size = 200;
  }

  update() {
    this.y += this.speed;
  }

  draw() {
    image(this.img, this.x, this.y, this.size, this.size);
  }
}



// =========================================================
// Dialogue System
// =========================================================
class MinigameB_DialogueSystem {
  constructor(useSpeechBg = false) {
    this.useSpeechBg = useSpeechBg;
    this.active = false;
    this.text = "";
    this.alpha = 0;
    this.timer = 0;
    this.fadeOut = true;

    this.x = width / 2;
    this.y = height / 2;
  }

  trigger(text, durationFrames = 120, fadeOut = true, x = width/2, y = height/2) {
    this.active = true;
    this.text = text;
    this.alpha = 0;
    this.timer = durationFrames;
    this.fadeOut = fadeOut;
    this.x = x;
    this.y = y;
  }

  updateAndDraw() {
    if (!this.active) return;

    if (this.alpha < 255) this.alpha += 30;

    if (this.timer > 0) {
      this.timer--;
    } else {
      if (this.fadeOut) {
        this.alpha -= 30;
        if (this.alpha <= 0) {
          this.active = false;
          return;
        }
      } else {
        this.active = false;
        return;
      }
    }

    push();
    tint(255, this.alpha);

    if (!this.useSpeechBg) {
      fill(255, this.alpha);
      rectMode(CENTER);
      rect(this.x, this.y, 500, 120, 20);
    } else {
      image(minigameB_speechBg, this.x, this.y, 360, 140);
    }

    pop();

    push();
    fill(0, this.alpha);
    textSize(22);
    textAlign(CENTER, CENTER);
    text(this.text, this.x+10, this.y-10);
    pop();
  }
}
