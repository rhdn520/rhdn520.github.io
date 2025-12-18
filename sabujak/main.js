// ===============================================
// main.js – 게임 전체 상태 관리 + BGM + 동적 캔버스 크기 (안정화 통합본)
// ===============================================

// 전역 게임 상태
let gameState = "title";
let minigameA_cleared = false;
let minigameB_cleared = false;

// 🔥 미니게임 전부 클리어 후 이벤트 1회만 실행
let returnEventStarted = false;

// 씬별 setup 1회 실행 체크
let inited = {
  start: false,
  intro: false,
  tutorial: false,
  map: false,
  minigameA: false,
  minigameB: false,
  ongho: false,
  ending: false,
};

// ===============================================
// 🔳 동적 캔버스 크기
// ===============================================
let canvasW = 1920;
let canvasH = 1080;

// ===============================================
// 🔊 BGM 관리 변수
// ===============================================
let bgm1, bgm2, bgm3, bgm4;
let currentBGM = null;
let isBGMFading = false;

// ===============================================
// PRELOAD
// ===============================================
function preload() {

  if (typeof preload_start === "function") preload_start();
  if (typeof preload_intro === "function") preload_intro();
  if (typeof preload_tutorial === "function") preload_tutorial();
  if (typeof preload_map === "function") preload_map();
  if (typeof preload_dialogue === "function") preload_dialogue();
  if (typeof preload_minigameA === "function") preload_minigameA();
  if (typeof preload_minigameB === "function") preload_minigameB();
  if (typeof preload_ongho === "function") preload_ongho();
  if (typeof preload_ending === "function") preload_ending();

  // BGM
  bgm1 = loadSound("assets/bgm2.mp3");      // map / 기본
  bgm2 = loadSound("assets/bgm1.mp3");      // ongho
  bgm3 = loadSound("assets/hoola.mp3");     // minigameA
  bgm4 = loadSound("assets/minigameB.mp3"); // minigameB
}

// ===============================================
// SETUP
// ===============================================
function setup() {
  const canvas = createCanvas(canvasW, canvasH);
  canvas.parent("game-container");

  if (!inited.start && typeof setup_start === "function") {
    setup_start();
    inited.start = true;
  }
}

// ===============================================
// DRAW
// ===============================================
function draw() {

  // 캔버스 크기 전환
  let shouldBe1080 = (gameState === "minigameA" || gameState === "minigameB");

  if (shouldBe1080 && (canvasW !== 1080 || canvasH !== 1080)) {
    canvasW = canvasH = 1080;
    resizeCanvas(canvasW, canvasH);
  } else if (!shouldBe1080 && (canvasW !== 1920 || canvasH !== 1080)) {
    canvasW = 1920;
    canvasH = 1080;
    resizeCanvas(canvasW, canvasH);
  }

  // 씬별 setup (1회)
  if (gameState === "intro" && !inited.intro) {
    setup_intro?.(); inited.intro = true;
  }
  if (gameState === "tutorial" && !inited.tutorial) {
    setup_tutorial?.(); inited.tutorial = true;
  }
  if (gameState === "map" && !inited.map) {
    setup_map?.(); inited.map = true;
  }
  if (gameState === "minigameA" && !inited.minigameA) {
    setup_minigameA?.(); inited.minigameA = true;
  }
  if (gameState === "minigameB" && !inited.minigameB) {
    setup_minigameB?.(); inited.minigameB = true;
  }
  if (gameState === "ongho" && !inited.ongho) {
    setup_ongho?.(); inited.ongho = true;
  }
  if (gameState === "ending" && !inited.ending) {
    setup_ending?.(); inited.ending = true;
  }

  // DRAW 분기
  switch (gameState) {
    case "title":
    case "notice": draw_start?.(); break;
    case "intro": draw_intro?.(); break;
    case "tutorial": draw_tutorial?.(); break;
    case "map":
      draw_map?.();
      checkAllMinigamesCleared();
      break;

    case "minigameA_story": draw_minigameA_story(); break;
    case "minigameA": draw_minigameA(); break;
    case "minigameA_end": draw_minigameA_end(); break;

    case "minigameB_story": draw_minigameB_story(); break;
    case "minigameB": draw_minigameB(); break;
    case "minigameB_end": draw_minigameB_end(); break;

    case "ongho": draw_ongho(); break;
    case "ending": draw_ending(); break;
  }
}

// ===============================================
// INPUT — 마우스
// ===============================================
function mousePressed() {

  if (
    gameState === "minigameA_story" ||
    gameState === "minigameA_end" ||
    gameState === "minigameB_story" ||
    gameState === "minigameB_end"
  ) {
    mousePressed_dialogue?.();
    return;
  }

  if (gameState === "title" || gameState === "notice") mousePressed_start?.();
  else if (gameState === "intro") mousePressed_intro?.();
  else if (gameState === "tutorial") mousePressed_tutorial?.();
  else if (gameState === "map") mousePressed_map?.();
  else if (gameState === "minigameA") mousePressed_minigameA?.();
  else if (gameState === "minigameB") mousePressed_minigameB?.();
  else if (gameState === "ongho") mousePressed_ongho?.();
  else if (gameState === "ending") mousePressed_ending?.();
}

// ===============================================
// INPUT — 키보드
// ===============================================
function keyPressed() {

  keyPressed_returnEvent?.();

  if (gameState === "tutorial") return keyPressed_tutorial?.();
  if (gameState === "map") keyPressed_map?.();

  if (gameState === "minigameA_story") return keyPressed_minigameA_story();
  if (gameState === "minigameA_end") return keyPressed_minigameA_end();
  if (gameState === "minigameB_story") return keyPressed_minigameB_story();
  if (gameState === "minigameB_end") return keyPressed_minigameB_end();
  if (gameState === "minigameA") return keyPressed_minigameA();
  if (gameState === "minigameB") return keyPressed_minigameB();

  // 엔딩 복귀 대사 ENTER
  if (gameState === "map" && returnEvent?.active && returnEvent.step === 0 && keyCode === ENTER) {
    advanceReturnDialogue();
  }
}

// ===============================================
// 🔊 BGM 컨트롤 (중복·에코 방지)
// ===============================================
function playBGM(name) {
  let target =
    name === "bgm1" ? bgm1 :
    name === "bgm2" ? bgm2 :
    name === "bgm3" ? bgm3 :
    name === "bgm4" ? bgm4 : null;

  if (!target || currentBGM === target || isBGMFading) return;

  isBGMFading = true;

  if (currentBGM && currentBGM.isPlaying()) {
    fadeOut(currentBGM, () => {
      currentBGM = target;
      fadeIn(currentBGM);
      isBGMFading = false;
    });
  } else {
    currentBGM = target;
    fadeIn(currentBGM);
    isBGMFading = false;
  }
}

// ===============================================
// 미니게임 전부 클리어 체크 (1회만)
// ===============================================
function checkAllMinigamesCleared() {
  if (minigameA_cleared && minigameB_cleared && !returnEventStarted) {
    returnEventStarted = true;
    startReturnToVillage();
  }
}

// ===============================================
// 🔊 페이드 유틸
// ===============================================
let bgmFadeDuration = 800;

function fadeOut(sound, callback) {
  if (!sound || !sound.isPlaying()) {
    callback?.();
    return;
  }

  let startVol = sound.getVolume();
  let startTime = millis();

  function step() {
    let t = (millis() - startTime) / bgmFadeDuration;
    if (t >= 1) {
      sound.setVolume(0);
      sound.stop();
      callback?.();
      return;
    }
    sound.setVolume(lerp(startVol, 0, constrain(t, 0, 1)));
    requestAnimationFrame(step);
  }
  step();
}

function fadeIn(sound) {
  sound.setVolume(0);
  sound.setLoop(true);
  sound.play();

  let startTime = millis();
  function step() {
    let t = (millis() - startTime) / bgmFadeDuration;
    if (t >= 1) {
      sound.setVolume(1);
      return;
    }
    sound.setVolume(lerp(0, 1, constrain(t, 0, 1)));
    requestAnimationFrame(step);
  }
  step();
}
