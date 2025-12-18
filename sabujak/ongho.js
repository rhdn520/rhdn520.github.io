// ===============================
// ongho.js – 옹호가게 스토리 컷신 전체 (비주얼 노벨 스타일)
// ===============================

// ===============================
// 🔹 줄 단위 대사 출력 기능 변수
// ===============================
let onghoLineIndex = 0;   // 현재 대사의 줄 번호
let bubbleYellowImg;
let bubbleBlackImg;
let bgCafeNoise;
const cafeNPCPositions = {
  "손님 A": { x: 520, y: 430 },
  "손님 B": { x: 700, y: 420 }
};



let onghoLines = [];      // 현재 씬의 분리된 줄 리스트

// ===============================
// 🔹 진행 상태
// ===============================
let onghoSceneIndex = 0;
let onghoFadeAlpha = 0;
let cafeNoiseTimer = 0;
let onghoChoice = -1;
let onghoEnterWasDown = false;

// ===============================
// 🔹 이미지 리소스
// ===============================
let bgMart, bgCafe, bgOnghoFront;

let bubbleBgImg;
let bubbleSingleImg;
let bubbleGreenImg;

let imgThankyouCard;
let imgOnghoEmblem;
let cafeNoise1, cafeNoise2;
let imgQuestion;


// ===============================
// 🎬 컷신 데이터
// ===============================
const onghoScenes = [
  { type: "dialogue", bg: "mart", bubble: "bg", speaker: "어머니",
    text: "아이가 민폐를 끼쳤다고 들었어요. 죄송합니다. 정말 죄송해요.\n제가 잘 책임졌어야 하는데…" },

  { type: "dialogue", bg: "mart", bubble: "bg", speaker: "마트 사장님",
    text: "처음에는 실수가 있었죠. 그런데 아이가 사과하고,\n자신의 잘못을 알고 고칠 수 있도록 돕고 기다려준 모두들 덕분에\n오늘은 인사도 잘하고, 아주 예의 바르게 마트를 이용하고 갔답니다.\n아이가 배워나갈 수 있도록 충분한 시간을 준 당신께 감사해요." },

  { type: "dialogue", bg: "mart", bubble: "bg", speaker: "어머니",
    text: "늘… 참 어렵더라고요. 항상 집에서만, 보호자인 나만이 책임져야 하는 일이라고 생각했어요.\n누군가에게 피해가 될까 언제나 전전긍긍하는 것이 일상이었죠." },

  { type: "dialogue", bg: "mart", bubble: "bg", speaker: "마트 사장님",
    text: "배우는 순간은 마을 모두의 몫이죠. 그리고 그 과정은 상호적인 배움의 기회가 되어요.\n나도 모모씨 덕분에 내 안의 부끄러운 편견들을 고쳐나갈 수 있었답니다.\n제게도 정말 큰 배움의 기회였어요." },

  { type: "dialogue", bg: "mart", bubble: "single", popup: "card", speaker: "나",
    text: "고맙습니다." },

  { type: "dialogue", bg: "mart", bubble: "bg", speaker: "마트 사장님",
    text: "나야말로 고마워요. 우리는 똑같이 다 실수하는 사람이에요. 나도 다를 바 없죠.\n그렇기에 실수를 바로잡고 배워나갈 수 있는 공간도 모두에게 평등하게 제공되어야 해요.\n저희가 먼저, 그런 공간의 역할을 하고 싶어요." },


  // ====== 카페 ======
  { type: "dialogue", bg: "cafe", bubble: "single", speaker: "나",
    text: "오늘따라 마음이 너무 불안해.\n어떻게 해야 할지 모르겠어!" },

  { type: "dialogue", bg: "cafe", bubble: "bg", speaker: "손님 A",
    noiseLoop: true, showQuestions: true,
    text: "“무슨 일이지?”" },

  { type: "dialogue", bg: "cafe", bubble: "bg", speaker: "손님 B",
    noiseLoop: true,
    text: "“신고해야 하는 거 아니에요?”" },

  { type: "dialogue", bg: "cafe", bubble: "bg", speaker: "사장님",
    text: "괜찮아요. 제가 아는 친구예요. 여기 단골이랍니다.\n오다가 무슨 일이 있었나 봐요.\n조금 있으면 진정할 거예요." },

  { type: "choice", bg: "cafe", choices: ["숨을 천천히 고른다.", "잠시 눈을 감고 시간을 가진다."] },

  { type: "dialogue", bg: "cafe", bubble: "single", speaker: "나", text: "…" },
  { type: "dialogue", bg: "cafe", bubble: "single", speaker: "나", text: "…" },
  { type: "imageOnly", bg: "cafe" },

  { type: "dialogue", bg: "cafe", bubble: "green", speaker: "사장님",
    text: "좀 진정이 됐어요?\n어제 막 모모씨가 좋아할 것 같은 디저트를 개발했는데, 어떻게 알고 왔어요?\n오늘도 편하게 즐기다 가요." },

  { type: "dialogue", bg: "cafe", bubble: "bg", speaker: "사장님",
    text: "낯설어서 두려운 것뿐이에요.\n자주 보고, 자주 만나고, 서로를 알아가면 그 낯선 간극은 관계로 채워지죠." },


  // ====== 옹호가게 앞 ======
  { type: "dialogue", bg: "front", bubble: "bg", speaker: "마트 사장님",
    text: "우리는 모두 실수할 수 있는 존재라는 점에서 닮았어요.\n‘실수하지 않는 이’만을 사회의 구성원으로 인정하는 것은 참 불공평하죠.\n누구든 잘못을 저지르고, 반성하고, 배울 수 있는 기회가 있어야 해요.\n그런 기회는 언제나 공평해야 해요." },

  { type: "dialogue", bg: "front", bubble: "bg", speaker: "사장님",
    text: "맞아요. 모를 땐 물어보면 되고,\n실수를 했다면 사과하고, 반성하고, 고쳐가면 되니까요." },

  { type: "dialogue", bg: "front", bubble: "bg", speaker: "사부작 관계자",
    text: "그리고 이 과정은 개인의 몫이 아니라, 공동체 모두의 몫이죠.\n우리 마을이 먼저, 돌봄을 함께 나누어 가집시다!" },

  { type: "dialogue", bg: "front", bubble: "bg", speaker: "어머니",
    text: "이전까지는 모모도, 나도 늘 혼자 감당해야 하는 처지였어요.\n환경도, 구조도, 환대의 분위기도 모두 부족했으니까요…" },

  { type: "dialogue", bg: "front", bubble: "bg", speaker: "마트 사장님",
    text: "그래서 우리는 서로를 더 많이 마주쳐야 해요.\n마을에서 발달장애청년들이 안전하고 편안하게 지내려면\n이웃들이 청년들을 많이 보고, 교류하고, 알아야 하죠.\n익숙함이 안전을 만들어요." },

  { type: "dialogue", bg: "front", bubble: "bg", speaker: "노동운동가",
    text: "맞아요. 오늘도 봐요.\n모모씨는 우리 마을을 돌보던 소중한 구성원이었죠.\n마주침이 쌓여야 관계가 생기고, 관계가 있어야 서로를 지켜요.\n편하게 드나들고, 관계망을 넓혀갈 수 있는 공간들을 늘려나가요." },

  { type: "narration_popup", popup: "emblem",
    text: "편견은 서로를 모르기 때문에 태어나지만,\n배움은 함께하는 자리에서 다시 자란다.\n시행착오의 기회는 모두에게 동등해야 한다.\n사부작은 ‘옹호가게’의 이름으로 이러한 공간들을 늘려가고자 한다." },

  { type: "choice", bg: "front", choices: ["또 올게요.", "감사합니다."] },

  { type: "dialogue", bg: "front", bubble: "green", speaker: "사장님", text: "언제든 편안하게 와요." },
  { type: "dialogue", bg: "front", bubble: "green", speaker: "마트 사장님", text: "여기는 그런 곳이어야 하니까요." },

  { type: "imageOnly", bg: "front" },
  { type: "fadeout", bg: "front" }
];


// ===============================
// p5 preload
// ===============================
function preload_ongho() {
  bgMart = loadImage("assets/bg_mart.png");
  bgCafe = loadImage("assets/bg_cafe.png");
  bgOnghoFront = loadImage("assets/bg_ongho_front.png");
  bubbleBlackImg = loadImage("assets/speechbubble_black.png");


  bubbleYellowImg = loadImage("assets/speechbubble_yellow.png");
  bubbleBgImg     = loadImage("assets/background_speech.png");
  bubbleSingleImg = loadImage("assets/speechbubble_single1.png");
  bubbleGreenImg  = loadImage("assets/speechbubble_green.png");

  // 🔵🟠 노동운동가 / 사부작 관계자 전용 말풍선
  bubbleBlueImg   = loadImage("assets/speechbubble_blue.png");
  bubbleOrangeImg = loadImage("assets/speechbubble_orange.png");

  imgThankyouCard = loadImage("assets/card_thankyou_store.png");
  imgOnghoEmblem  = loadImage("assets/item_coupon.png");

  cafeNoise1 = loadImage("assets/cafe_noise1.png");
  cafeNoise2 = loadImage("assets/cafe_noise2.png");
  bgCafeNoise = loadImage("assets/bg_cafe_1.png");

  imgQuestion = loadImage("assets/question.png");
}


// ===============================
// setup
// ===============================
function setup_ongho() {
  playBGM("bgm2");
  onghoSceneIndex = 0;
  onghoFadeAlpha = 0;
  onghoChoice = -1;
  onghoEnterWasDown = false;
  onghoLines = [];
  onghoLineIndex = 0;
}


// ===============================
// 메인 draw
// ===============================
function draw_ongho() {

  const scene = onghoScenes[onghoSceneIndex];
  if (!scene) { gameState = "ending"; return; }

  background(0);

  // ENTER 입력
  if (keyIsPressed && keyCode === ENTER) {
    if (!onghoEnterWasDown) {
      advanceOnghoSceneByInput();
      onghoEnterWasDown = true;
    }
  } else onghoEnterWasDown = false;

  drawOnghoBackground(scene);

  if (scene.type === "dialogue")       drawOnghoDialogueScene(scene);
  else if (scene.type === "choice")   drawOnghoChoiceScene(scene);
  else if (scene.type === "narration_popup") drawOnghoNarrationPopup(scene);
  else if (scene.type === "fadeout")  drawOnghoFadeOutScene(scene);
}


// ===============================
// mouse
// ===============================
function mousePressed_ongho() {
  advanceOnghoSceneByInput(true);
}


// ===============================
// 씬 진행 로직 (+ 줄 단위 대사 처리)
// ===============================
function advanceOnghoSceneByInput(fromMouse = false) {
  const scene = onghoScenes[onghoSceneIndex];
  if (!scene) return;

  // 줄 단위 대사
  if (scene.type === "dialogue") {
    if (onghoLineIndex < onghoLines.length - 1) {
      onghoLineIndex++;
      return;
    }
  }

  if (scene.type === "choice") {
    handleOnghoChoice(scene, fromMouse);
    return;
  }

  if (scene.type === "fadeout") return;

  // 다음 씬
  onghoSceneIndex++;

  cafeNoiseTimer = 0;
  onghoLines = [];
  onghoLineIndex = 0;
}


// ===============================
// 배경 렌더
// ===============================
function drawOnghoBackground(scene) {
  let bgImg = null;
  // 🔥 cafenoise 구간 전용 배경
  if (scene.bg === "cafe" && scene.noiseLoop) {
    bgImg = bgCafeNoise;
  } 
  else if (scene.bg === "mart") {
    bgImg = bgMart;
  }
  else if (scene.bg === "cafe") {
    bgImg = bgCafe;
  }
  else if (scene.bg === "front") {
    bgImg = bgOnghoFront;
  }


  if (bgImg) {
    imageMode(CORNER);
    image(bgImg, 0, 0, width, height);
  }
}


// ===============================
// 대사 씬 렌더 (줄단위 처리 포함)
// ===============================
function drawOnghoDialogueScene(scene) {

    // 🔊 카페 noise 연출 — 중앙, 작은 정사각형
  if (scene.noiseLoop) {
    cafeNoiseTimer++;
    let noiseImg = (cafeNoiseTimer % 120 < 60 ? cafeNoise1 : cafeNoise2);

    // ✅ 정사각형 크기 (화면 기준 비율)
    const noiseSize = min(width, height) * 0.28; // ← 크기 조절 포인트

    // ✅ 화면 정확히 중앙
    const nx = width / 2 - noiseSize / 2;
    const ny = height / 2 - noiseSize / 2 - 60; // 말풍선과 살짝 분리

    image(noiseImg, nx, ny, noiseSize, noiseSize);

    // ❓ 물음표 아이콘도 중앙 기준으로 소형 배치
    const qSize = noiseSize * 0.22;
    const qOffsetX = noiseSize * 0.35;
    const qY = ny - qSize * 0.6;

    image(imgQuestion, width / 2 - qOffsetX - qSize / 2, qY, qSize, qSize);
    image(imgQuestion, width / 2 + qOffsetX - qSize / 2, qY, qSize, qSize);
  }


  if (scene.popup === "card") drawOnghoCardPopup();

  // 줄 단위 대사 준비
  if (!scene._linesPrepared) {
    onghoLines = scene.text.split("\n");
    onghoLineIndex = 0;
    scene._linesPrepared = true;
  }

  let currentLine = onghoLines[onghoLineIndex];

  let bubbleImg =
    scene.bubble === "bg"     ? bubbleBgImg :
    scene.bubble === "single" ? bubbleSingleImg :
    scene.bubble === "green"  ? bubbleGreenImg : bubbleBgImg;

  drawOnghoSpeechBubble(bubbleImg, scene.speaker, currentLine);
}


// ===============================================
// 🎯 말풍선 + 텍스트 (VN 통합 UI)
// ===============================================
function drawOnghoSpeechBubble(bubbleImg, speaker, textContent) {

  // ================================
  // 📐 공통 하단 대사창 레이아웃
  // ================================
  const bubbleW = 1200;
  const bubbleH = 230;

  const x = width / 2 - bubbleW / 2;
  const y = height - bubbleH - 40;

  // ================================
  // 🎨 화자별 말풍선 이미지 결정
  // ================================
  let finalBubbleImg = bubbleBgImg;

  // 🔴 나 (내적 독백 / 선택 유도)
  if (speaker === "나") {
    finalBubbleImg = bubbleBlackImg;
  }

  // 🟡 어머니
  else if (speaker === "어머니") {
    finalBubbleImg = bubbleYellowImg;
  }

  // 🟢 사장님 계열 (마트 / 카페)
  else if (speaker === "마트 사장님" || speaker === "사장님") {
    finalBubbleImg = bubbleGreenImg;
  }

  // 🔵 노동운동가
  else if (speaker === "노동운동가") {
    finalBubbleImg = bubbleBlueImg;
  }

  // 🟠 사부작 관계자
  else if (speaker === "사부작 관계자") {
    finalBubbleImg = bubbleOrangeImg;
  }
  // ================================
  // ☕ 카페 손님 말풍선 (NPC 머리 위)
  // ================================
  if (speaker === "손님 A" || speaker === "손님 B") {

    const npc = cafeNPCPositions[speaker];
    if (!npc) return;

    const bubbleW = 420;
    const bubbleH = 140;

    const x = npc.x - bubbleW / 2;
    const y = npc.y - bubbleH - 40;

    image(bubbleBgImg, x, y, bubbleW, bubbleH);

    // 이름
    fill(40);
    textSize(22);
    textAlign(LEFT, TOP);
    text(speaker, x + 24, y + 18);

    // 본문
    fill(0);
    textSize(22);
    textLeading(30);
    text(
      textContent,
      x + 24,
      y + 52,
      bubbleW - 48,
      bubbleH - 70
    );

    return; // 🔥 하단 VN 말풍선 렌더링 막기
  }


  // ================================
  // 🖼 말풍선 렌더
  // ================================
  image(finalBubbleImg, x, y, bubbleW, bubbleH);

 // ================================
// 🏷 화자 이름
// ================================
fill(40);
textSize(35);
textAlign(LEFT, TOP);

// 🔴 "나" 화자 — 이름 위치 따로 조절
if (speaker === "나") {
  text(
    speaker,
    x + 200,   // ← 이름 X (조절 가능)
    y + 50     // ← 이름 Y (조절 가능)
  );
}
// 🔵 그 외 화자
else {
  text(
    speaker,
    x + 160,
    y + 28
  );
}

  // ================================
  // 💬 본문 텍스트
  // ================================
  fill(0);
  textSize(32);
  textLeading(40);

  // 🔴 "나" 화자 — 텍스트를 살짝 위/안쪽으로
  if (speaker === "나") {
    text(
      textContent,
      x + 90,          // 좌측 여백 조금 더
      y + 120,          // 🔼 위로 당김
      bubbleW - 140,
      bubbleH - 110
    );
  }
  // 🔵 그 외 화자
  else {
    text(
      textContent,
      x + 70,
      y + 95,
      bubbleW - 100,
      bubbleH - 120
    );
  }

}



// ===============================
// 카드 팝업
// ===============================
function drawOnghoCardPopup() {
  fill(0, 150);
  rect(0, 0, width, height);

  const pw = width * 0.38;
  const ph = pw * (imgThankyouCard.height / imgThankyouCard.width);

  imageMode(CENTER);
  image(imgThankyouCard, width / 2, height / 2, pw, ph);
  imageMode(CORNER);
}


// ===============================
// 선택지 UI
// ===============================
function drawOnghoChoiceScene(scene) {
  drawOnghoSpeechBubble(bubbleBgImg, "나", "어떻게 해볼까?");

  const w = 520, h = 70, gap = 26;
  const x = width/2 - w/2;
  const yMid = height/2 + 40;

  const btns = [
    { x, y: yMid - h - gap/2, w, h },
    { x, y: yMid + gap/2, w, h }
  ];

  scene._btns = btns;

  for (let i = 0; i < btns.length; i++) {
    let b = btns[i];
    let hover = mouseX > b.x && mouseX < b.x+b.w && mouseY > b.y && mouseY < b.y+b.h;

    fill(hover ? 255 : 245);
    stroke(50);
    rect(b.x, b.y, b.w, b.h, 18);

    noStroke();
    fill(0);
    textAlign(CENTER, CENTER);
    text(scene.choices[i], b.x + b.w/2, b.y + b.h/2);
  }
}


function handleOnghoChoice(scene, fromMouse) {
  const btns = scene._btns;
  if (!btns) {
    onghoChoice = 0;
    onghoSceneIndex++;
    onghoLines = [];
    onghoLineIndex = 0;
    return;
  }

  if (fromMouse) {
    for (let i = 0; i < btns.length; i++) {
      let b = btns[i];
      if (mouseX > b.x && mouseX < b.x+b.w && mouseY > b.y && mouseY < b.y+b.h) {
        onghoChoice = i;
        onghoSceneIndex++;
        onghoLines = [];
        onghoLineIndex = 0;
        return;
      }
    }
    return;
  }

  // 엔터 → 0번 선택
  onghoChoice = 0;
  onghoSceneIndex++;
  onghoLines = [];
  onghoLineIndex = 0;
}


// ===============================
// 엠블럼 + 내레이션 팝업
// ===============================
function drawOnghoNarrationPopup(scene) {
  // 배경 암전
  fill(0, 200);
  rect(0, 0, width, height);

  // ===============================
  // 1️⃣ 옹호가게 엠블럼 (더 위로)
  // ===============================
  const emblemW = width * 0.30;
  const emblemH = emblemW * (imgOnghoEmblem.height / imgOnghoEmblem.width);

  image(
    imgOnghoEmblem,
    width / 2 - emblemW / 2,
    120,                 // 🔼 기존보다 위로 이동
    emblemW,
    emblemH
  );

  // ===============================
  // 2️⃣ 내레이션 박스 (더 아래 + 여백 제거)
  // ===============================
  const boxW = width * 0.78;

  // 텍스트 기준으로 높이 산정 (불필요한 하단 여백 제거)
  const paddingX = 50;
  const paddingY = 40;

  textSize(26);
  textLeading(40);

  const textBoxHeight = textAscent() * 4 + textDescent() * 4 + 120;
  const boxH = textBoxHeight;

  const boxX = width / 2 - boxW / 2;
  const boxY = height - boxH - 120; // 🔽 화면 하단 쪽으로 이동

  // 박스
  fill(255);
  noStroke();
  rect(boxX, boxY, boxW, boxH, 24);

  // 텍스트
  fill(0);
  textAlign(LEFT, TOP);
  text(
    scene.text,
    boxX + paddingX,
    boxY + paddingY,
    boxW - paddingX * 2,
    boxH - paddingY * 2
  );
}



// ===============================
// 페이드아웃
// ===============================
function drawOnghoFadeOutScene(scene) {
  drawOnghoBackground(scene);

  onghoFadeAlpha += 4;
  if (onghoFadeAlpha > 255) onghoFadeAlpha = 255;

  fill(0, onghoFadeAlpha);
  rect(0, 0, width, height);

  if (onghoFadeAlpha >= 255) gameState = "ending";
}
