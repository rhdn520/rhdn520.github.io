// ======================================================
// ending_return.js  — 안정화 버전 + H키 스킵 기능 포함
// ======================================================

// 이벤트 상태
let returnEvent = {
  active: false,
  step: 0,
  dialogIndex: 0,
  finished: false,
  bubbleReady: false,
  couponImg: null,
  hellYeah: false,
};

let returnBubbleImg;

// 대사 목록
const returnDialogues = [
  "즐거운 외출이었다! 오늘 정말 많은 사람들과 웃고, 알아보고, 또 이어졌어.",
  "나를 도와준 사람들, 내가 도왔던 순간들, 그리고 서로 이어졌던 작은 관계들이 나를 밖으로 부르는 것 같아.",
  "내가 외로웠던 시간 동안, 이 마을은 나를 위한 손길을 뻗으려고 많은 시도를 지나왔구나…",
  "…어? (주머니를 더듬어 작은 종이를 발견한다.)",
  "이건…",
  "(쿠폰 등장)",
  "그래, 집 안 어딘가에서 우연히 발견했던 그 쿠폰…",
  "…오늘은 마지막으로 이곳에 들러볼까?"
];

// 옹호가게 위치
let onghoShop = {
  x: 1550,
  y: 400,
  radius: 160,
  glow: false,
  unlocked: false
};


// ============================================================
// 엔딩 후 마을 진입
// ============================================================
function startReturnToVillage() {
  playBGM("bgm2"); 
  if(returnEvent.hellYeah == true){
    return;
  }
  console.log("🔥 엔딩 복귀 이벤트 시작!");

  returnEvent.active = true;
  returnEvent.step = 0;
  returnEvent.dialogIndex = 0;
  returnEvent.finished = false;
  returnEvent.bubbleReady = false;

  returnEvent.couponImg = loadImage("assets/item_coupon.png");

  // 말풍선 이미지 로딩
  returnBubbleImg = loadImage("assets/speechbubble_single1.png", () => {
    returnEvent.bubbleReady = true;
  });

  gameState = "map";
  returnEvent.hellYeah = true;
}


// ============================================================
// draw_map에서 호출됨
// ============================================================
function updateReturnEvent() {
  if (!returnEvent.active) return;
  if (!returnEvent.bubbleReady) return;

  switch (returnEvent.step) {
    case 0:
      drawReturnDialogue();
      break;

    case 1:
      drawCouponPopup();
      break;

    case 2:
      drawShopGlow();
      tryEnterOngho();   // 🔥 매 프레임 위치 체크
      break;
  }
}


// ============================================================
// 대사 그리기
// ============================================================
function drawReturnDialogue() {
  push();

  const line = returnDialogues[returnEvent.dialogIndex];

  const bubbleW = 1200;
  const bubbleH = 240;
  const bx = (width - bubbleW) / 2;
  const by = height - bubbleH - 80;

  imageMode(CORNER);
  image(returnBubbleImg, bx, by, bubbleW, bubbleH);

  fill(0);
  textSize(34);
  textAlign(LEFT, TOP);
  textLeading(42);

  const margin = 60;

  text(
    line,
    bx + margin,
    by + margin - 10,
    bubbleW - margin * 2,
    bubbleH - margin * 2
  );

  pop();

  if (line === "(쿠폰 등장)") {
    returnEvent.step = 1;
  }
}


// ============================================================
// 쿠폰 팝업
// ============================================================
function drawCouponPopup() {
  push();
  noStroke();
  fill(0, 180);
  rect(0, 0, width, height);

  imageMode(CENTER);
  image(returnEvent.couponImg, width / 2, height / 2, 480, 480);

  fill(255);
  textSize(30);
  textAlign(CENTER, TOP);
  text("클릭하여 닫기", width / 2, height / 2 + 270);
  pop();
}

function clickCouponPopup() {
  if (!returnEvent.active) return;
  if (returnEvent.step !== 1) return;

  onghoShop.unlocked = true;
  onghoShop.glow = true;

  returnEvent.step = 2;
}


// ============================================================
// 옹호가게 하이라이트
// ============================================================
function drawShopGlow() {
  push();
  noFill();
  stroke(255, 220, 100, 200 + sin(frameCount * 0.1) * 55);
  strokeWeight(12);

  ellipse(onghoShop.x, onghoShop.y, onghoShop.radius * 2);

  pop();
}



// ============================================================
// 옹호가게 입장
// ============================================================
function tryEnterOngho() {
  if (!onghoShop.unlocked) return;

  // mapPlayer 기준으로 체크
  if (dist(mapPlayer.x, mapPlayer.y, onghoShop.x, onghoShop.y) < onghoShop.radius) {
    console.log("옹호가게로 이동!");
    gameState = "ongho";
  }
}
function advanceReturnDialogue() {
  if (!returnEvent.active) return;
  if (returnEvent.step !== 0) return;

  // 다음 대사로
  if (returnEvent.dialogIndex < returnDialogues.length - 1) {
    returnEvent.dialogIndex++;
  }

  // 쿠폰 등장 트리거
  if (returnDialogues[returnEvent.dialogIndex] === "(쿠폰 등장)") {
    returnEvent.step = 1;
  }
}
// =======================================
// 안전용 더미 (main.js 에러 방지)
// =======================================
function keyPressed_returnEvent() {
  // intentionally empty
}
