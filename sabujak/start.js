// ===========================
// start.js – 타이틀 + 공지문 페이드 + intro.js로 전환
// ===========================

// 이미지
let startBgImg;
let customFont;
let cursorHoverImg;

// 조작법 팝업 이미지
let helpPopupImg;
let helpPopupActive = false;

// 버튼 영역
let startBtn = { x: 600,  y: 925, w: 300, h: 100 };
let helpBtn  = { x: 1020, y: 925, w: 300, h: 100 };

// 공지문 문단
let noticeParagraphs = [
  "위 게임은 성인전환기 이후 발달장애인이 겪는 사회적 고립을 주제로,\n그와 관련된 실제 사례들을 수집하여 제작된 작품입니다.",
  
  "발달장애청년 당사자이자 주인공 캐릭터인 ‘모모’는 특정 개인을 \n재현한 것이 아니라 여러 목소리와 경험을 바탕으로 재구성된 인물임을 명시합니다."
];

let noticeIndex = 0;

// 페이드 상태
let fadeState = "fadeIn";
let alphaValue = 0;

let fadeDuration = 1200;  // 페이드인/아웃 시간
let holdDuration = 3000;  // 문단 유지 시간
let phaseStartTime = 0;


// ===========================
// preload
// ===========================
function preload_start() {
  startBgImg = loadImage("assets/start_background.png");
  helpPopupImg = loadImage("assets/help_popup.png");
  customFont = loadFont("assets/DungGeunMo.ttf");
  cursorHoverImg = loadImage("assets/cursor_highlight.png");
}


// ===========================
// setup
// ===========================
function setup_start() {
  textFont(customFont);
  cursor(ARROW);
  playBGM("bgm1");
}


// ===========================
// draw
// ===========================
function draw_start() {

  if (gameState === "title") {
    drawTitleScreen();
  }

  else if (gameState === "notice") {
    drawNoticeSequence();
  }
}


// ===========================
// TITLE 화면
// ===========================
function drawTitleScreen() {
  image(startBgImg, 0, 0, width, height);

  // 팝업 켜져 있으면 팝업만 띄우기
  if (helpPopupActive) {
    fill(0,180); rect(0,0,width,height);
    image(helpPopupImg, width/2-helpPopupImg.width/2, height/2-helpPopupImg.height/2);
    cursor(ARROW);
    return;
  }

  // 버튼 디버그 박스
  //noFill(); stroke(255,0,0);
  //rect(startBtn.x+50, startBtn.y, startBtn.w, startBtn.h);
  //rect(helpBtn.x, helpBtn.y, helpBtn.w, helpBtn.h);

  // 커서 처리
  let onStart = mouseX > startBtn.x && mouseX < startBtn.x + startBtn.w &&
                mouseY > startBtn.y && mouseY < startBtn.y + startBtn.h;

  let onHelp  = mouseX > helpBtn.x && mouseX < helpBtn.x + helpBtn.w &&
                mouseY > helpBtn.y && mouseY < helpBtn.y + helpBtn.h;

  if (onStart || onHelp) {
    cursor(`url(assets/cursor_highlight.png) 0 0, pointer`);
  } else {
    cursor(ARROW);
  }
}


// ===========================
// NOTICE 화면 (페이드인/아웃)
// ===========================
function drawNoticeSequence() {

  background(0);
  fill(255, alphaValue);
  textAlign(CENTER, CENTER);
  textSize(42);

  text(noticeParagraphs[noticeIndex], width * 0.1, height/2 - 80, width * 0.8);

  let now = millis();
  let t = now - phaseStartTime;

  // -------------------------
  // 페이드인
  // -------------------------
  if (fadeState === "fadeIn") {
    alphaValue = map(t, 0, fadeDuration, 0, 255);
    if (t > fadeDuration) {
      fadeState = "hold";
      phaseStartTime = now;
    }
  }

  // -------------------------
  // 유지
  // -------------------------
  else if (fadeState === "hold") {
    alphaValue = 255;
    if (t > holdDuration) {
      fadeState = "fadeOut";
      phaseStartTime = now;
    }
  }

  // -------------------------
  // 페이드아웃
  // -------------------------
  else if (fadeState === "fadeOut") {
    alphaValue = map(t, 0, fadeDuration, 255, 0);
    if (t > fadeDuration) {

      noticeIndex++;

      if (noticeIndex >= noticeParagraphs.length) {
        // 모든 문단 끝 → intro.js 로 이동
        gameState = "intro";
        return;
      }

      fadeState = "fadeIn";
      phaseStartTime = now;
    }
  }
}


// ===========================
// 클릭 처리
// ===========================
function mousePressed_start() {

  if (helpPopupActive) {
    helpPopupActive = false;
    return;
  }

  if (gameState === "title") {
    
    // 시작하기
    if (
      mouseX > startBtn.x && mouseX < startBtn.x + startBtn.w &&
      mouseY > startBtn.y && mouseY < startBtn.y + startBtn.h
    ) {
      gameState = "notice";
      noticeIndex = 0;
      fadeState = "fadeIn";
      alphaValue = 0;
      phaseStartTime = millis();
      return;
    }

    // 조작방법
    if (
      mouseX > helpBtn.x && mouseX < helpBtn.x + helpBtn.w &&
      mouseY > helpBtn.y && mouseY < helpBtn.y + helpBtn.h
    ) {
      helpPopupActive = true;
      return;
    }
  }
}
