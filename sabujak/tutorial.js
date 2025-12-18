// ===============================
// tutorial.js – 자유탐색 맵 + 이미지 팝업 + WASD 이동 + 손전등 
// + 돋보기 마우스오버 + 문 대사 말풍선
// + 오브제 대사 + 특정 조건 충족 시 문 열림
// + ⭐ 이동 가능 구역 디버그 표시 기능 추가
// ===============================

let bgRoom;
let playerImg;

// ===========================
// 이동 가능한 영역(벽 충돌 방지)
// ===========================
let walkableAreas = [
  { x: 300, y: 330, w: 1320, h: 500 }, // 메인 카펫
  { x: 50,  y: 500, w: 600,  h: 300 }, // 책상 아래
  { x: 850, y: 650, w: 700,  h: 300 }, // 소파 앞
  { x: 1400,y: 400, w: 350,  h: 450 }  // 오른쪽
];

// ⭐ 디버그 모드 ON/OFF
let debugWalkable = true;

// 커서 이미지(돋보기)
let magnifierCursor;
let darknessLayer;

let player = { x: 450, y: 330, size: 120 };

// 오브제 리스트
let objects = [];

// 팝업 상태
let popupActive = false;
let popupPages = [];
let popupPageIndex = 0;

// 육아수첩 특별처리
let diaryMode = false;
let diaryPendingDialogue = "";

// 문 대사 팝업
let doorDialogueActive = false;
let speechBubbleImg;

let doorDialogueText =
"아직 나갈 용기가 없어. 또 다시 거부당할까 봐 두려워…\n" +
"아, 길동무 친구에게 연락해볼까?\n" +
"전화번호 뒷자리가 뭐였지… 011-0000-****.";

// ⭐ 오브제 대사
let objectDialogueActive = false;
let objectDialogueText = "";
let pendingObject = null;

// ⭐ 문 이미지
let doorClosedImg, doorOpenImg;
let doorIsOpen = false;

// ⭐ 문 입력창
let codeInputActive = false;
let codeUserInput = "";

// ⭐ 조건 플래그
let clickedMapFrame = false;
let clickedDiary2 = false;


// ===============================
// PRELOAD
// ===============================
function preload_tutorial() {
  bgRoom = loadImage("assets/bg_room.png");
  playerImg = loadImage("assets/player.png");
  customFont = loadFont("assets/DungGeunMo.ttf");

  magnifierCursor = loadImage("assets/cursor_magnifier.png");
  speechBubbleImg = loadImage("assets/speechbubble_yellow1.png");

  doorClosedImg = loadImage("assets/door_closed.png");
  doorOpenImg = loadImage("assets/door_open.png");

  diaryClosed = loadImage("assets/item_diary.png");
  diary2Closed = loadImage("assets/item_diary2.png");

  mapFrame = loadImage("assets/map_frame.png");
  couponImg = loadImage("assets/item_coupon.png");
  letterImg = loadImage("assets/item_letter.png");
  inviteImg = loadImage("assets/item_invite.png");

  diaryPages = [
    loadImage("assets/diary_page1.png"),
    loadImage("assets/diary_page2.png"),
    loadImage("assets/diary_page3.png"),
    loadImage("assets/diary_page4.png")
  ];

  diary2Pages = [
    loadImage("assets/diary2_page1.png"),
    loadImage("assets/diary2_page2.png"),
    loadImage("assets/diary2_page3.png")
  ];

  letterPages = [ loadImage("assets/letter_page.png") ];
  mapPages    = [ loadImage("assets/map_frame.png") ];
  invitePages = [ loadImage("assets/item_invite.png") ];
  couponPages = [ loadImage("assets/item_coupon.png") ];
}



// ===============================
// SETUP
// ===============================
function setup_tutorial() {
  darknessLayer = createGraphics(width, height);
  darknessLayer.pixelDensity(1);

  playBGM("bgm1");

  objects = [
    {
      name: "육아수첩",
      x: 340, y: 450, w: 200, h: 200,
      type: "diarySpecial",
      pages: diaryPages,
      img: diaryClosed,
      dialogue: "마지막 일기장 페이지에 꽂혀 있는 찢어진 번호 메모, “011-0000-… ",
    },
    {
      name: "어머니의 일기장",
      x: 1350, y: 600, w: 100, h: 100,
      type: "popup",
      pages: diary2Pages,
      img: diary2Closed,
      dialogue: "제일 마지막 장에 끼워져 있는 찢어진  “…79” 쪽지",
    },
    {
      name: "크리스마스 편지",
      x: 600, y: 320, w: 150, h: 110,
      type: "popup",
      pages: letterPages,
      img: letterImg,
      dialogue: "“길동무 친구 동글이… 아, 이때 동글이 번호를 잘라서 주머니에 넣고 다녔는데.”",
    },
    {
      name: "마을 지도 액자",
      x: 340, y: 130, w: 150, h: 110,
      type: "popup",
      pages: mapPages,
      img: mapFrame,
      dialogue: "액자 구석 테두리에 꽂혀 있는 찢어진 메모 종이가 있다.",
    },
    {
      name: "옹호가게 쿠폰",
      x: 720, y: 700, w: 120, h: 80,
      type: "popup",
      pages: couponPages,
      img: couponImg,
      dialogue: "옹호가게라고 적힌 쿠폰이다. 주머니에 넣었다.",
    },
    {
      name: "훌라춤 초대장",
      x: 1100, y: 600, w: 150, h: 110,
      type: "popup",
      pages: invitePages,
      img: inviteImg,
      dialogue: "훌라춤 초대장이다. 작년에 받았는데 가보진 못했다.",
    }
  ];
}



// ===============================
// DRAW
// ===============================
function draw_tutorial() {
  background(0);

  drawFlashlight();
  handleMovement();
  checkHoverInteractions();

  // ⭐ 이동 가능 영역 디버그 표시
  drawWalkableDebug();

  if (popupActive) drawPopup();
  if (doorDialogueActive) drawDoorDialogue();
  if (objectDialogueActive) drawObjectDialogue();
  if (codeInputActive) drawCodeInputUI();
}



// ===============================
// 플레이어
// ===============================
function drawPlayer() {
  image(playerImg, player.x - player.size/2, player.y - player.size/2, player.size, player.size);
}



// ===============================
// 오브제 표시
// ===============================
function drawObjects() {
  let radius = 150;

  for (let obj of objects) {
    let d = dist(player.x, player.y, obj.x + obj.w/2, obj.y + obj.h/2);

    if (d < radius) {
      image(obj.img, obj.x, obj.y, obj.w, obj.h);

      if (isMouseOver(obj)) {
        cursor('pointer');
        image(magnifierCursor, mouseX - 16, mouseY - 16, 100, 100);
      }
    }
  }
}



// ===============================
// 손전등 효과
// ===============================
function drawFlashlight() {
  image(bgRoom, 0, 0, width, height);
  image(doorIsOpen ? doorOpenImg : doorClosedImg, 840, 30, 200, 370);

  drawObjects();
  drawPlayer();

  darknessLayer.clear();
  darknessLayer.fill(0, 0, 0, 180);
  darknessLayer.rect(0, 0, width, height);

  darknessLayer.erase();
  darknessLayer.circle(player.x, player.y, 360);
  darknessLayer.noErase();

  image(darknessLayer, 0, 0);
}



// ===============================
// WASD 이동
// ===============================
function handleMovement() {
  if (popupActive || doorDialogueActive || objectDialogueActive || codeInputActive) return;

  let speed = 4;
  let newX = player.x;
  let newY = player.y;

  if (keyIsDown(65)) newX -= speed; // A
  if (keyIsDown(68)) newX += speed; // D
  if (keyIsDown(87)) newY -= speed; // W
  if (keyIsDown(83)) newY += speed; // S

  if (isInsideWalkable(newX, player.y)) player.x = newX;
  if (isInsideWalkable(player.x, newY)) player.y = newY;
}



// ===============================
// Hover 체크
// ===============================
function checkHoverInteractions() {
  cursor('default');
  for (let obj of objects) if (isMouseOver(obj)) cursor('pointer');

  if (mouseX > 760 && mouseX < 960 && mouseY > 140 && mouseY < 500) cursor('pointer');
}

function isMouseOver(obj) {
  return mouseX > obj.x && mouseX < obj.x + obj.w &&
         mouseY > obj.y && mouseY < obj.y + obj.h;
}



// ===============================
// 팝업
// ===============================
function drawPopup() {
  fill(0, 180);
  rect(0, 0, width, height);

  let img = popupPages[popupPageIndex];
  image(img, width/2 - img.width/2, height/2 - img.height/2);
}



// ===============================
// 문 대사
// ===============================
function drawDoorDialogue() {
  let bubbleW = 900;
  let bubbleH = 260;
  let bx = width / 2 - bubbleW / 2;
  let by = height - bubbleH - 80;

  image(speechBubbleImg, bx, by, bubbleW, bubbleH);

  fill(0);
  textFont(customFont);
  textSize(28);
  textLeading(40);
  textAlign(LEFT, TOP);

  text(doorDialogueText, bx + 50, by + 105, bubbleW - 100, bubbleH - 100);
}



// ===============================
// 오브제 대사
// ===============================
function drawObjectDialogue() {
  let bubbleW = 900;
  let bubbleH = 230;
  let bx = width/2 - bubbleW/2;
  let by = height - bubbleH - 80;

  image(speechBubbleImg, bx, by, bubbleW, bubbleH);

  fill(0);
  textFont(customFont);
  textSize(28);
  textLeading(40);
  textAlign(LEFT, TOP);

  text(objectDialogueText, bx + 45, by + 100, bubbleW - 90, bubbleH - 90);
}



// ===============================
// 문 비밀번호 입력 UI
// ===============================
function drawCodeInputUI() {
  fill(0, 200);
  rect(0, 0, width, height);

  fill(255);
  textFont(customFont);
  textSize(40);
  textAlign(CENTER, CENTER);
  text("문 비밀번호를 입력하세요.", width/2, height/2 - 120);

  push();
  rectMode(CENTER);
  stroke(255);
  noFill();
  rect(width/2, height/2, 600, 200);
  pop();

  fill(255);
  textSize(50);
  text(codeUserInput, width/2, height/2);
}



// ===============================
// 마우스 클릭 처리
// ===============================
function mousePressed_tutorial() {

  if (gameState !== "tutorial") return;

  if (doorDialogueActive) {
    doorDialogueActive = false;
    return;
  }

  if (objectDialogueActive) {
    objectDialogueActive = false;

    if (pendingObject !== null) {
      popupPages = pendingObject.pages;
      popupPageIndex = 0;
      popupActive = true;
      pendingObject = null;
    }
    return;
  }

  if (popupActive) {
    if (diaryMode) {
      if (popupPageIndex < popupPages.length - 1) popupPageIndex++;
      else {
        popupActive = false;
        diaryMode = false;
        objectDialogueActive = true;
        objectDialogueText = diaryPendingDialogue;
      }
      return;
    }

    if (popupPageIndex < popupPages.length - 1) popupPageIndex++;
    else popupActive = false;

    return;
  }

  // ===== 문 클릭 =====
  if (mouseX > 760 && mouseX < 960 && mouseY > 140 && mouseY < 500) {

    if (clickedMapFrame && clickedDiary2) {
      codeInputActive = true;
      codeUserInput = "";
      return;
    }

    doorDialogueActive = true;
    return;
  }

  // ===== 오브제 클릭 =====
  for (let obj of objects) {
    if (isMouseOver(obj)) {

      if (obj.name === "마을 지도 액자") clickedMapFrame = true;
      if (obj.name === "어머니의 일기장") clickedDiary2 = true;

      if (obj.type === "diarySpecial" || obj.name === "어머니의 일기장" || obj.name === "크리스마스 편지") {
        diaryMode = true;
        diaryPendingDialogue = obj.dialogue;

        popupPages = obj.pages;
        popupPageIndex = 0;
        popupActive = true;
        return;
      }

      objectDialogueActive = true;
      objectDialogueText = obj.dialogue;
      pendingObject = obj;
      return;
    }
  }
}



// ===============================
// 키 입력 (문 비밀번호)
// ===============================
function keyPressed_tutorial() {

  if (!codeInputActive) return;

  if (key >= '0' && key <= '9' && codeUserInput.length < 4) {
    codeUserInput += key;
  }

  if (keyCode === ENTER) {

    if (codeUserInput === "0179") {

      codeInputActive = false;
      doorIsOpen = true;

      setTimeout(() => openDoorAndGoVillage(), 300);

    } else {
      codeUserInput = "";
    }
  }
}



// ===============================
// 문 열고 다음 씬으로 이동
// ===============================
function openDoorAndGoVillage() {
  codeInputActive = false;
  doorDialogueActive = false;
  objectDialogueActive = false;
  popupActive = false;

  gameState = "map";
}



// ===============================
// 이동 가능 영역 충돌 판정
// ===============================
function isInsideWalkable(x, y) {
  for (let area of walkableAreas) {
    if (
      x > area.x && x < area.x + area.w &&
      y > area.y && y < area.y + area.h
    ) return true;
  }
  return false;
}



// ===============================
// ⭐ 이동 가능 영역 디버그 표시
// ===============================
function drawWalkableDebug() {
  //if (!debugWalkable) return;

  //push();
  //noStroke();
  //fill(255, 0, 0, 70);  // 투명 빨간색

  for (let area of walkableAreas) {
    //rect(area.x, area.y, area.w, area.h);
  }

  //pop();
}
