/*************************************************
 * sketch_map.js — NPC 대사 + 목적지 이동 
 * 재대화 제어 + 엔터 진행 + UI 정렬 + 오버레이 안정화 통합본
 *************************************************/

// ============================
// 전역 변수
// ============================
let mapImg, mapImg_after, mainCharImg;
let npcBlueImg, npcOrangeImg;

let bubbleBlueImg, bubbleOrangeImg;
let dungFont;

// 플레이어
let mapPlayer = { x: 480, y: 200, speed: 4 };

// NPC 리스트
let npcs = [];

// 대화 상태
let mapDialogue = null;
let mapDialogueIndex = 0;
let mapLineIndex = 0;

// 재대화 제어
let npcTalked = {
  orange: false,
  blue: false
};

// 목적지 하이라이트
let targetHighlight = false;
let highlightX = 0;
let highlightY = 0;
let highlightR = 80;
let sceneToGo = "";

// 바쁠 때 메시지
let busyDialogue = null;


// ============================
// PRELOAD
// ============================
function preload_map() {
  mapImg = loadImage("assets/map_full.png");
  mapImg_after = loadImage("assets/map_full_after.png");

  mainCharImg = loadImage("assets/maincharacter.png");
  npcBlueImg = loadImage("assets/npc_blue.png");
  npcOrangeImg = loadImage("assets/npc_orange.png");

  bubbleBlueImg = loadImage("assets/speechbubble_blue.png");
  bubbleOrangeImg = loadImage("assets/speechbubble_orange.png");

  dungFont = loadFont("assets/DungGeunMo.ttf");
}


// ============================
// SETUP
// ============================
function setup_map() {
  textFont(dungFont);
  imageMode(CENTER);
  playBGM("bgm1");

  npcs = [
    {
      id: "orange",
      img: npcOrangeImg,
      x: 1500,
      y: 390,
      size: 150,
      name: "사부작 활동가",
      dialogue: createOrangeDialogue()
    },
    {
      id: "blue",
      img: npcBlueImg,
      x: 300,
      y: 640,
      size: 100,
      name: "마을 주민",
      dialogue: createBlueDialogue()
    }
  ];
}


// ============================
// ORANGE DIALOGUE
// ============================
function createOrangeDialogue() {
  return [
    { speaker: "npcO", text: ["안녕.", "혹시 ‘사부작’을 찾아왔나요?"] },
    {
      speaker: "npcO",
      text: [
        "‘사부작’은 발달장애청년들이 경계 없이 일상을 누리고,",
        "서로의 관계를 자연스럽게 확장해나가는 공동체예요."
      ]
    },
    {
      speaker: "npcO",
      text: [
        "여긴 발달장애청년들이 보호받기만 하는 곳이 아니라,",
        "마을 사람들과 동등하게 관계를 만들어가는 곳이죠."
      ]
    },
    {
      speaker: "npcO",
      text: [
        "오늘은 선샤인아놀드훌라가 열리는 날이에요.",
        "마을회관으로 가보세요. 길동무 친구들이 기다리고 있어요!"
      ],
      endEvent: "goHall"
    }
  ];
}


// ============================
// BLUE DIALOGUE
// ============================
function createBlueDialogue() {
  return [
    {
      speaker: "npcB",
      text: ["혹시 생각해본 적 있나요?", "우리가 ‘노동’이라고 부르는 것들의 기준에 대해요."]
    },
    {
      speaker: "npcB",
      text: [
        "집을 돌보는 가사노동, 중증장애인의 자기 돌봄 노동…",
        "그런 일들은 오랫동안 ‘노동’으로 인정받지 못했어요."
      ]
    },
    {
      speaker: "npcB",
      text: ["마을 광장의 분수대로 가보세요.", "사부작 청년이 시민노동을 진행 중일 거예요."],
      endEvent: "goFountain"
    }
  ];
}


// ============================
// DRAW MAP
// ============================
function draw_map() {
  playBGM("bgm1");
  background(255);
  imageMode(CORNER);

  // 배경
  if (minigameA_cleared && minigameB_cleared)
    image(mapImg_after, 0, 0, width, height);
  else
    image(mapImg, 0, 0, width, height);

  imageMode(CENTER);

  // 플레이어 이동
  updateMapPlayer();


  // NPC 표시
  if (!(minigameA_cleared && minigameB_cleared)) {
    for (let n of npcs) {
      image(n.img, n.x, n.y, n.size, n.size);

      if (dist(mapPlayer.x, mapPlayer.y, n.x, n.y) < 180) {
        fill(255, 255, 0);
        textSize(40);
        text("!", n.x, n.y - n.size / 1.5);
      }
    }
  }

  // 플레이어
  image(mainCharImg, mapPlayer.x, mapPlayer.y, 200, 200);

  // 목적지 원형 하이라이트
  if (targetHighlight) {
    noFill();
    stroke(255, 255, 0, 200);
    strokeWeight(8);
    ellipse(highlightX, highlightY, highlightR);
  }

  // 힌트
  drawHint();

  // 대사창 및 busy 메시지는 화면 위에 "오버레이"로 렌더
  if (mapDialogue) drawDialogueUI();
  if (busyDialogue) drawBusyDialogue();

  // 변경_추가: ending_return 이벤트 업데이트
  if (typeof updateReturnEvent === "function") updateReturnEvent();
}


// ============================
// PLAYER MOVE
// ============================
function updateMapPlayer() {
  if (keyIsDown(87)) mapPlayer.y -= mapPlayer.speed;
  if (keyIsDown(83)) mapPlayer.y += mapPlayer.speed;
  if (keyIsDown(65)) mapPlayer.x -= mapPlayer.speed;
  if (keyIsDown(68)) mapPlayer.x += mapPlayer.speed;

  if (targetHighlight && dist(mapPlayer.x, mapPlayer.y, highlightX, highlightY) < highlightR) {
    if (sceneToGo === "hall") gameState = "minigameA_story";
    else if (sceneToGo === "fountain") gameState = "minigameB_story";
    resetHighlight();
  }
}

function resetHighlight() {
  targetHighlight = false;
  sceneToGo = "";
}


// ============================
// HINT
// ============================
function drawHint() {
  fill(0, 160);
  noStroke();
  rect(25, 25, 540, 55, 12);

  fill(255);
  textSize(26);
  textAlign(LEFT, CENTER);
  text("NPC에 가까이 가서 클릭하면 대화", 45, 52);
}


// ============================
// CLICK HANDLING
// ============================
function mousePressed_map() {
  // 변경_추가: ending_return 쿠폰 팝업 클릭
  if (typeof clickCouponPopup === "function") clickCouponPopup();

  // 변경_추가: ending_return 옹호가게 입장
  if (typeof tryEnterOngho === "function") tryEnterOngho();

  // busy 메시지 클릭 → 종료
  if (busyDialogue) {
    busyDialogue = null;
    return;
  }

  // 변경_추가: returnEvent 대사 진행
  if (typeof returnEvent !== "undefined" && returnEvent.active && returnEvent.step === 0) {
    returnEvent.dialogIndex++;
    if (returnEvent.dialogIndex >= returnDialogues.length) {
      returnEvent.active = false;
    }
    return;
  }

  // 대사 진행 → 클릭으로 넘기기
  if (mapDialogue) {
    advanceMapDialogue();
    return;
  }

  // NPC 클릭 검사
  for (let n of npcs) {
    if (dist(mouseX, mouseY, n.x, n.y) < n.size / 2) {

      // 이미 하이라이트 이동 중인데 다른 NPC 클릭 → 바쁨 메시지
      if (targetHighlight && sceneToGo !== "" && !npcTalked[n.id]) {
        busyDialogue = { speaker: n.name, text: "지금 바빠 보이는데 이따가 다시 만날까?" };
        return;
      }

      // 처음 대화가 이미 끝난 NPC → 마지막 문장만 출력
      if (npcTalked[n.id]) {
        let lastBlock = n.dialogue[n.dialogue.length - 1];
        busyDialogue = { speaker: n.name, text: lastBlock.text[lastBlock.text.length - 1] };
        return;
      }

      // 정상 첫 대화 시작
      mapDialogue = n.dialogue;
      mapDialogueIndex = 0;
      mapLineIndex = 0;
      return;
    }
  }
}


// ============================
// ENTER 지원
// ============================
function keyPressed_map() {
  if (keyCode !== ENTER) return;

  if (busyDialogue) {
    busyDialogue = null;
    return;
  }

  if (mapDialogue) {
    advanceMapDialogue();
    return;
  }
}


// ============================
// TALK PROGRESSION
// ============================
function advanceMapDialogue() {
  const block = mapDialogue[mapDialogueIndex];
  if (!block) {
    mapDialogue = null;
    return;
  }

  mapLineIndex++;

  if (mapLineIndex >= block.text.length) {
    mapLineIndex = 0;
    mapDialogueIndex++;

    // 대사 블록 종료
    if (mapDialogueIndex >= mapDialogue.length) {

      // 어떤 NPC인지 찾기
      let npc = npcs.find(n => n.dialogue === mapDialogue);
      if (npc) npcTalked[npc.id] = true;

      // endEvent 수행
      if (block.endEvent) runDialogueEndEvent(block);

      mapDialogue = null;
    }
  }
}


// ============================
// END EVENT
// ============================
function runDialogueEndEvent(block) {
  if (block.endEvent === "goHall") {
    targetHighlight = true;
    highlightX = 1390;
    highlightY = 160;
    highlightR = 200;
    sceneToGo = "hall";
  }

  if (block.endEvent === "goFountain") {
    targetHighlight = true;
    highlightX = 1070;
    highlightY = 590;
    highlightR = 180;
    sceneToGo = "fountain";
  }
}


// ============================
// Dialogue UI — 이름 / 대사 모두 y축 아래로 조정
// ============================
function drawDialogueUI() {
  const block = mapDialogue[mapDialogueIndex];

  const uiW = 1200;
  const uiH = 200;
  const bx = 390;
  const by = height - 260;  // ↓ 살짝 아래로

  let bubble = bubbleOrangeImg;
  let speakerName = "";

  if (block.speaker === "npcO") {
    bubble = bubbleOrangeImg;
    speakerName = "사부작 활동가";
  }
  if (block.speaker === "npcB") {
    bubble = bubbleBlueImg;
    speakerName = "마을 주민";
  }

  imageMode(CORNER);
  image(bubble, bx, by, uiW, uiH);

  fill(50);
  textSize(40);
  text(speakerName, bx + 100, by + 35);  // ↓ 조금 더 아래

  fill(0);
  textSize(35);
  text(block.text[mapLineIndex], bx + 35, by + 105); // ↓ 아래로 정렬
}


// ============================
// Busy Dialogue UI (스피커에 따라 버블 색 변경)
// ============================
function drawBusyDialogue() {
  const uiW = 1200;
  const uiH = 200;
  const bx = 390;
  const by = height - 260;

  // 스피커별 버블 선택
  let bubble = bubbleOrangeImg;
  if (busyDialogue.speaker.includes("마을 주민")) {
    bubble = bubbleBlueImg;
  }

  imageMode(CORNER);
  image(bubble, bx, by, uiW, uiH);

  fill(50);
  textSize(40);
  text(busyDialogue.speaker, bx + 100, by + 35);

  fill(0);
  textSize(35);
  text(busyDialogue.text, bx + 35, by + 105);
}

