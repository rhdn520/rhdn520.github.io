// ===============================
// minigameA.js — 통합 완전체 (글리치 제거 안정 버전)
// ===============================

// ========= 공통 유틸: 이미지 비율 유지해서 캔버스에 맞게 그리기 =========
function drawImageFit(img) {
  if (!img) return;

  const imgRatio = img.width / img.height;
  const canvasRatio = width / height;

  let drawW, drawH;

  if (canvasRatio > imgRatio) {
    drawH = height;
    drawW = imgRatio * drawH;
  } else {
    drawW = width;
    drawH = drawW / imgRatio;
  }

  const x = (width - drawW) / 2;
  const y = (height - drawH) / 2;

  push();
  imageMode(CORNER);
  image(img, x, y, drawW, drawH);
  pop();
}



// ===============================
// 전역 상태 — hula 기반 + 기능 통합
// ===============================
let hula_imgBg, hula_imgStand, hula_imgLeft, hula_imgRight, hula_imgEnd, hula_imgEndBg;
let hula_imgLightCircle, hula_imgQuestComplete;

let hula_imgKeyLeft, hula_imgKeyRight, hula_imgKeyUp, hula_imgKeyDown;

// NPC
let hula_npcGreenImg, hula_npcBlueImg, hula_npcOrangeImg;

// 보상/말풍선
let hula_imgRewardBubble;
let hula_itemHulaSkirt, hula_itemHulaFlower, hula_itemHulaGuitar;

let hula_font;

// 플레이어
let hulaPlayer = {
  x: 0, y: 0,
  vx: 0, vy: 0,
  speed: 4,
  state: "stand",
  w: 180, h: 180
};

const hula_sideNpcPos = {
  orange: { x: 260, yOffset: 40 },
  green:  { x: 720, yOffset: 40 },
  blue:   { x: 400, yOffset: -140 }
};

let hula_sideNpcBounceTimer = 0;


// 리듬 스테이지 구성
const hula_stages = [
  ["A", "A", "D", "D"],
  ["W", "A", "S", "D", "A", "D"],
  ["W", "D", "S", "A", "W", "A", "S", "D"]
];

let hula_currentStage = 0;
let hula_stepIndex = 0;

let hulaState = "PLAY"; // PLAY / STAGE_CLEAR / ALL_CLEAR

let hula_beatTimer = 0;
let hula_missionTimer = 0;

const HULA_BEAT_DURATION = 80;
const HULA_HIT_FRACTION = 0.6;
const HULA_PERFECT_WINDOW = 8;
const HULA_GOOD_WINDOW = 18;



// 말풍선 시스템
let hula_bubble = { text: "", who: "main", timer: 0 };

// 엔딩 타이머
let hula_endTimer = 0;
let hula_endPhase = 0;



// =====================================================================
// preload
// =====================================================================
function preload_minigameA() {
  hula_imgBg    = loadImage("assets/hula_bg.png");
  hula_imgStand = loadImage("assets/hoola_main.png");
  hula_imgLeft  = loadImage("assets/character_left.png");
  hula_imgRight = loadImage("assets/character_right.png");
  hula_imgEnd   = loadImage("assets/character_clap.png");

  hula_imgLightCircle   = loadImage("assets/light_circle.png");
  hula_imgQuestComplete = loadImage("assets/text_quest_complete.png");
  hula_imgEndBg = loadImage("assets/hula_end_bg.png");


  hula_imgKeyLeft  = loadImage("assets/left_key.jpg");
  hula_imgKeyRight = loadImage("assets/right_key.jpg");
  hula_imgKeyUp    = loadImage("assets/up_key.png");
  hula_imgKeyDown  = loadImage("assets/down_key.png");

  hula_imgRewardBubble = loadImage("assets/speechbubble_yellow1.png");
  hula_itemHulaSkirt   = loadImage("assets/item_diary.png");
  hula_itemHulaFlower  = loadImage("assets/item_coupon.png");
  hula_itemHulaGuitar  = loadImage("assets/item_invite.png");

  hula_npcGreenImg  = loadImage("assets/npc1.png");
  hula_npcBlueImg   = loadImage("assets/npc2.png");
  hula_npcOrangeImg = loadImage("assets/player.png");

  hula_font = loadFont("assets/DungGeunMo.ttf");
}



// =====================================================================
// setup
// =====================================================================
function setup_minigameA() {
  imageMode(CENTER);
  textAlign(CENTER, CENTER);

  playBGM("bgm3");

  if (hula_font) textFont(hula_font);

  hulaPlayer.x = width / 2;
  hulaPlayer.y = height * 0.65;

  hula_currentStage = 0;
  hula_stepIndex = 0;
  hulaState = "PLAY";
  hula_beatTimer = 0;
  hula_missionTimer = 0;
}



// =====================================================================
// draw (미니게임 루프)
// =====================================================================
function draw_minigameA() {

  // 엔딩 화면
  if (hulaState === "ALL_CLEAR") {
    hula_drawEndingScreen();

    if (millis() - hula_endTimer > 2800) {
      hula_finishGame();
    }
    return;
  }

  // 배경
  hula_drawBackground();

  hula_updateState();

  if (hulaState === "PLAY") {
    hula_beatTimer++;
    if (hula_beatTimer > HULA_BEAT_DURATION) hula_beatTimer = 0;
  }

  // 캐릭터/오브젝트
  hula_updatePlayer();
  hula_drawSideNpcs();
  hula_drawLight();

  // 플레이어 스프라이트
  let sprite = hula_imgStand;
  if (hulaPlayer.state === "left") sprite = hula_imgLeft;
  else if (hulaPlayer.state === "right") sprite = hula_imgRight;

  image(sprite, hulaPlayer.x, hulaPlayer.y, hulaPlayer.w, hulaPlayer.h);

  // UI
  hula_drawStageInfo();
  hula_drawMissionText();
  hula_drawBubble();

  // 안내 문구
  if (hulaState === "PLAY") {
    push();
    fill(255, 220);
    rectMode(CENTER);
    rect(width / 2, height - 60, 650, 38, 18);

    fill(40);
    textSize(18);
    text("WASD로 이동, 커지는 키 아이콘 타이밍에 맞춰 W / A / S / D 입력", width / 2, height - 60);
    pop();
  }
}



// ===============================
// 배경
// ===============================
function hula_drawBackground() {
  if (hula_imgBg) drawImageFit(hula_imgBg);
  else background(250);
}



// ===============================
// 플레이어 이동
// ===============================
function hula_updatePlayer() {
  hulaPlayer.vx = 0;
  hulaPlayer.vy = 0;

  if (keyIsDown(65)) hulaPlayer.vx = -hulaPlayer.speed;
  if (keyIsDown(68)) hulaPlayer.vx =  hulaPlayer.speed;
  if (keyIsDown(87)) hulaPlayer.vy = -hulaPlayer.speed;
  if (keyIsDown(83)) hulaPlayer.vy =  hulaPlayer.speed;

  hulaPlayer.x += hulaPlayer.vx;
  hulaPlayer.y += hulaPlayer.vy;

  hulaPlayer.x = constrain(hulaPlayer.x, 140, width - 140);
  hulaPlayer.y = constrain(hulaPlayer.y, 380, height - 120);
}






// ===============================
// 양옆 NPC
// ===============================
function hula_drawSideNpcs() {
  const bounce =
    hula_sideNpcBounceTimer > 0 ? -5 * Math.sin((hula_sideNpcBounceTimer / 10) * Math.PI) : 0;

  image(hula_npcOrangeImg,
    hula_sideNpcPos.orange.x,
    hulaPlayer.y + hula_sideNpcPos.orange.yOffset + bounce,
    160, 160
  );

  image(hula_npcGreenImg,
    hula_sideNpcPos.green.x,
    hulaPlayer.y + hula_sideNpcPos.green.yOffset + bounce,
    160, 160
  );

  if (hula_sideNpcBounceTimer > 0) hula_sideNpcBounceTimer--;
}



// ===============================
// 발밑 라이트
// ===============================
function hula_drawLight() {
  if (!hula_imgLightCircle) return;

  push();
  tint(255, 210);
  image(hula_imgLightCircle, hulaPlayer.x, hulaPlayer.y + 40, 260, 160);
  pop();
}



// ===============================
// 스테이트 업데이트
// ===============================
function hula_updateState() {
  if (hulaState === "STAGE_CLEAR") {
    hula_missionTimer++;

    if (hula_missionTimer > 120) {
      hula_currentStage++;
      hula_stepIndex = 0;
      hula_missionTimer = 0;

      if (hula_currentStage >= hula_stages.length) {
        hulaState = "ALL_CLEAR";
        hula_endTimer = millis();
      } else {
        hulaState = "PLAY";
      }
    }
  }
}



// ===============================
// 말풍선
// ===============================
function hula_showBubble(text, who) {
  hula_bubble.text = text;
  hula_bubble.who = who;
  hula_bubble.timer = 50;
}

function hula_drawBubble() {
  if (hula_bubble.timer <= 0) return;
  hula_bubble.timer--;

  let x, y;

  if (hula_bubble.who === "orange") {
    x = hula_sideNpcPos.orange.x;
    y = hulaPlayer.y + hula_sideNpcPos.orange.yOffset - 130;
  } else if (hula_bubble.who === "green") {
    x = hula_sideNpcPos.green.x;
    y = hulaPlayer.y + hula_sideNpcPos.green.yOffset - 130;
  } else {
    x = hulaPlayer.x;
    y = hulaPlayer.y - 150;
  }

  push();
  textAlign(CENTER, CENTER);
  textSize(18);

  const tw = textWidth(hula_bubble.text) + 28;
  const th = 34;

  fill(255, 240);
  stroke(180);
  strokeWeight(2);
  rectMode(CENTER);
  rect(x, y, tw, th, 14);

  noStroke();
  fill(50);
  text(hula_bubble.text, x, y);
  pop();
}



// ===============================
// 스테이지 UI
// ===============================
function hula_drawStageInfo() {
  if (hulaState === "ALL_CLEAR") return;

  const seq = hula_stages[hula_currentStage];
  const barW = 760;
  const barH = 120;
  const barX = width / 2 - barW / 2;
  const barY = 80;

  push();
  fill(255, 250);
  rect(barX, barY, barW, barH, 30);

  fill(80);
  textSize(22);
  textStyle(BOLD);
  text(`Stage ${hula_currentStage + 1} / ${hula_stages.length}`, width / 2, barY + 28);

  const spacing = 52;
  const iconY = barY + 78;
  const base = (seq.length - 1) * spacing;
  const firstX = width / 2 - base / 2;

  for (let i = 0; i < seq.length; i++) {
    const key = seq[i];
    let img = null;

    if (key === "W") img = hula_imgKeyUp;
    if (key === "A") img = hula_imgKeyLeft;
    if (key === "S") img = hula_imgKeyDown;
    if (key === "D") img = hula_imgKeyRight;

    let size = 40;
    let alpha = 140;

    if (i === hula_stepIndex && hulaState === "PLAY") {
      const phase = (hula_beatTimer % HULA_BEAT_DURATION) / HULA_BEAT_DURATION;
      size = 40 * (1 + 0.35 * Math.sin(TWO_PI * phase));
      alpha = 255;
    }

    push();
    tint(255, alpha);
    image(img, firstX + i * spacing, iconY, size, size);
    pop();
  }

  pop();
}



// ===============================
// 미션 문구
// ===============================
function hula_drawMissionText() {
  if (hulaState === "STAGE_CLEAR") {
    fill(50);
    textSize(44);
    textStyle(BOLD);
    text("MISSION COMPLETE", width / 2, height / 2);
  }
}



// ===============================
// 엔딩 화면
// ===============================
function hula_drawEndingScreen() {
  drawImageFit(hula_imgEndBg);

  if (hula_imgQuestComplete) {
    push();
    imageMode(CENTER);

    let w = width * 0.6;
    let h = w * (hula_imgQuestComplete.height / hula_imgQuestComplete.width);
    image(hula_imgQuestComplete, width / 2, height / 2, w, h);

    pop();
  }
}



// ===============================
// 키 입력
// ===============================
function keyPressed_minigameA() {
  if (key === "h" || key === "H") {
     gameState = "minigameA_end";
     return;
  }

  if (hulaState !== "PLAY") return;

  let act = null;

  if (key === "w" || key === "W") act = "W";
  if (key === "a" || key === "A") act = "A";
  if (key === "s" || key === "S") act = "S";
  if (key === "d" || key === "D") act = "D";

  if (!act) return;

  if (act === "A") hulaPlayer.state = "left";
  else if (act === "D") hulaPlayer.state = "right";
  else hulaPlayer.state = "stand";

  const expected = hula_stages[hula_currentStage][hula_stepIndex];

  if (act === expected) {
    const ideal = HULA_BEAT_DURATION * HULA_HIT_FRACTION;
    const diff = Math.abs(hula_beatTimer - ideal);

    if (diff <= HULA_PERFECT_WINDOW)
      hula_showBubble(random(["완전 딱 맞아요!", "리듬 최고예요!", "훌라~ 완벽해요!"]), "green");

    else if (diff <= HULA_GOOD_WINDOW)
      hula_showBubble(random(["좋아요!", "잘 맞추고 있어요!", "좋은 흐름이에요!"]), "orange");

    hula_sideNpcBounceTimer = 12;

    hula_stepIndex++;
    hula_beatTimer = 0;

    if (hula_stepIndex >= hula_stages[hula_currentStage].length) {
      hulaState = "STAGE_CLEAR";
      hula_missionTimer = 0;
    }
  } else {
    hula_beatTimer = 0;
    hula_showBubble("괜찮아요, 다시 해볼까요?", "main");
  }
}

function keyReleased_minigameA() {
  hulaPlayer.state = "stand";
}



// ===============================
// 미니게임 종료 후 → 엔딩 대사 이동
// ===============================
function hula_finishGame() {
  questA_cleared = true;
  minigameA_cleared = true;
  inited.map = false;
  gameState = "minigameA_end"; 

}



// ===============================
// 엔딩 대사에서 ENTER → MAP 복귀
// ===============================
function keyPressed_minigameA_end() {
  if (keyCode !== ENTER) return;

  minigameA_endIndex++;

  if (minigameA_endIndex >= minigameA_endLines.length) {
    minigameA_endIndex = 0;

    minigameA_cleared = true;
    checkAllMinigamesCleared();
    cleanupP5State();
    gameState = "map";
  }
}



// ===============================
// cleanupP5State — p5 렌더 상태 완전 안정 초기화
// ===============================
function cleanupP5State() {
  resetMatrix();

  imageMode(CORNER);
  rectMode(CORNER);
  textAlign(LEFT, BASELINE);
  textSize(32);
  textLeading(40);

  fill(255);
  noStroke();
  tint(255);
  

  if (drawingContext) {
    drawingContext.globalCompositeOperation = "source-over";
  }

  // filter 잔여효과 제거용
  push();
  pop();
}
