// ===============================================
// dialogue_minigame.js – 미니게임 A/B 스토리 & 엔딩 통합 안정 버전
// ===============================================

// 문자열을 개별 줄로 분리
function splitDialogueIntoScenes(textBlock) {
  return textBlock.split("\n").filter(line => line.trim() !== "");
}

// 컷신 배경
let orangeSceneImg;
let blueSceneImg;

function preload_dialogue() {
  orangeSceneImg = loadImage("assets/orange_scene.png");
  blueSceneImg = loadImage("assets/blue_scene.png");
}

// =============================================================
// 공용 대화박스 UI
// =============================================================
function drawDialogueBox(textStr, speaker, choiceText = null, bgImg = null) {
  push();

  const lineHeight = 58;
  const textY = 820;

  // 배경
  if (bgImg) {
    imageMode(CORNER);
    image(bgImg, 0, 0, width, height);
  }

  // 스피커 이름
  noStroke();
  fill(0);
  textSize(50);
  textAlign(LEFT, CENTER);
  text(speaker, 400, textY - 100);

  // 본문 텍스트
  fill(20);
  textAlign(LEFT, TOP);
  textSize(38);

  const textX = width / 2 - 620;
  const wrapped = wrapText(textStr, 1150);

  for (let i = 0; i < wrapped.length; i++) {
    text(wrapped[i], textX, textY + i * lineHeight);
  }

  // 선택지 버튼
  if (choiceText) {
    fill(255);
    stroke(80);
    strokeWeight(3);
    rect(width / 2 - 200, textY - 300, 400, 80, 12);

    noStroke();
    fill(0);
    textAlign(CENTER, CENTER);
    textSize(32);
    text(choiceText, width / 2, textY - 280);

    fill(80);
    textSize(22);
    text("(Enter 또는 클릭)", width / 2, textY - 250);
  }
    // ==========================
  // ▶ press enter 안내 (우측 하단)
  // ==========================
  if (!choiceText) {
    fill(0);          // 검은색 + 살짝 투명
    noStroke();
    textSize(40);
    textAlign(RIGHT, BOTTOM);
    text("press enter", width - 400, textY + 140);
  }


  pop();
}

// 자동 줄바꿈
function wrapText(txt, maxWidth) {
  textSize(38);
  let words = txt.split(" ");
  let lines = [];
  let current = "";

  for (let w of words) {
    let test = current + w + " ";
    if (textWidth(test) > maxWidth) {
      lines.push(current.trim());
      current = w + " ";
    } else {
      current = test;
    }
  }

  lines.push(current.trim());
  return lines;
}

// =============================================================
// 공용 스토리/엔딩 엔진
// =============================================================
function drawStoryEngine(lines, index, speaker, bgImg, choiceLabel) {
  drawDialogueBox(
    lines[index],
    speaker,
    index === lines.length - 1 ? choiceLabel : null,
    bgImg
  );
}

function nextStoryIndex(lines, index, nextState) {
  let last = lines.length - 1;

  if (index < last) {
    return { index: index + 1, nextState: null };
  }

  return { index: 0, nextState: nextState };
}

// =============================================================
// ======================= ★ 미니게임 A ★ ======================
// =============================================================

// 스토리
let minigameA_storyIndex = 0;
const minigameA_storyLines = [
  "반가워, 잘 왔어.",
  "사부작에서 활동하다 보면 자연스럽게 깨닫는 게 하나 있었어…",
  "말이 늘 모두에게 가장 쉬운 소통법은 아니라는 거야.",
  "발달장애인은 언어 중심의 대화에서 불안이나 부담을 느낄 때가 많아.",
  "그리고 그걸 잘 모르는 사람들은 그 어려움을 이해하지 못해서, 오해가 생기기도 하지.",
  "그래서 우리는 새로운 대안 소통법을 찾기 시작했어.",
  "말 대신 서로를 이해하고 친밀해질 수 있는, 활동 중심의 소통을 만드는 거야!",
  "그중 하나가 바로 이 훌라춤이야.",
  "너도 함께 해볼래? 지금부터 너와 나의 몸짓이, 우리 사이를 가로지르는 또 다른 언어가 될 거야.",
];

function draw_minigameA_story() {
  drawStoryEngine(minigameA_storyLines, minigameA_storyIndex, "길동무", orangeSceneImg, "훌라춤 시작하기");
}

function keyPressed_minigameA_story(force = false) {
  if (!force && keyCode !== ENTER) return;

  let res = nextStoryIndex(minigameA_storyLines, minigameA_storyIndex, "minigameA");
  minigameA_storyIndex = res.index;

  if (res.nextState) {
    gameState = res.nextState;
  }
}

// ★ A 엔딩
let minigameA_endIndex = 0;

const minigameA_endLines = [
  "훌라춤은 처음엔 서로 즐기고 소통하기 위한 교류 방식이었지만,",
  "시간이 지나며 훨씬 더 넓은 의미를 갖게 되었어.",
  "발달장애청년에게는 언어보다 더 안전하고 편안한 소통법이 되었고,",
  "광장과 거리로 나아갈 때면 이 몸짓은 연대의 표현으로도 확장됐지.",
  "지금의 훌라춤은 단순한 놀이가 아니야.",
  "사부작 청년들이 주체로 만들어가는 새로운 자기표현의 수단이야.",
  "우리의 소통은 또 새로운 형태로 변화하며 계속 이어질 거야.",
  "이제는 너도 그 한 부분이 된 거야.",
  "오늘 함께해줘서 고마웠어! 또 보자."
];

function draw_minigameA_end() {
  drawStoryEngine(minigameA_endLines, minigameA_endIndex, "길동무", orangeSceneImg, null);
}

function keyPressed_minigameA_end(force = false) {
  if (!force && keyCode !== ENTER) return;

  let res = nextStoryIndex(minigameA_endLines, minigameA_endIndex, "map");
  minigameA_endIndex = res.index;

  if (res.nextState) {
    gameState = res.nextState;
  }
}

// =============================================================
// ======================= ★ 미니게임 B ★ ======================
// =============================================================

let minigameB_storyIndex = 0;
const minigameB_storyLines = [
  "안녕? 나는 사부작 발달장애청년 네모야.",
  "내 친구들은 저마다 다양한 시민노동을 하고 있어.",
  "그중에서도 나는 마을의 재활용 종이팩을 모아서,",
  "주민센터에서 휴지로 교환하는 일을 맡고 있지.",
  "오늘은 나랑 같이 해볼래?",
];

function draw_minigameB_story() {
  drawStoryEngine(minigameB_storyLines, minigameB_storyIndex, "네모", blueSceneImg, "종이팩 줍기 시작하기");
}

function keyPressed_minigameB_story(force = false) {
  if (!force && keyCode !== ENTER) return;

  let res = nextStoryIndex(minigameB_storyLines, minigameB_storyIndex, "minigameB");
  minigameB_storyIndex = res.index;

  if (res.nextState) {
    gameState = res.nextState;
  }
}

// ★ B 엔딩
let minigameB_endIndex = 0;

const minigameB_endLines = [
  "고생 많았어! 오늘 네가 모은 종이팩은 주민센터에서 휴지로 교환할 거야.",
  "그리고 우리의 마을공공시민노동 프로젝트에는,",
  "꼭 노동이 아니어도 응원금의 형태로도 참여할 수 있어.",
  "관심이 있다면 사부작에 연락해줘.",
  "오늘 정말 즐거운 시간이었어. 또 보자!"
];

function draw_minigameB_end() {
  drawStoryEngine(minigameB_endLines, minigameB_endIndex, "네모", blueSceneImg, null);
}

function keyPressed_minigameB_end(force = false) {
  if (!force && keyCode !== ENTER) return;

  let res = nextStoryIndex(minigameB_endLines, minigameB_endIndex, "map");
  minigameB_endIndex = res.index;

  if (res.nextState) {
    gameState = res.nextState;
  }
}

// =============================================================
// 마우스 클릭 → 대사 넘김 지원 (ENTER와 동일하게 작동)
// =============================================================
function mousePressed_dialogue() {
  triggerNextDialogue();
}

function triggerNextDialogue() {
  if (gameState === "minigameA_story") return keyPressed_minigameA_story(true);
  if (gameState === "minigameA_end") return keyPressed_minigameA_end(true);

  if (gameState === "minigameB_story") return keyPressed_minigameB_story(true);
  if (gameState === "minigameB_end") return keyPressed_minigameB_end(true);
}
