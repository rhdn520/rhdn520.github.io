// ===========================
// ending.js – 엔딩 영상 + 마무리 페이지(이미지 기반 버튼)
// ===========================
let DEBUG_ENDING_BUTTONS = false; // 🔧 디버깅 끝나면 false

let endingVideo;
let videoEnded = false;

// 최종 페이지 이미지
let finalImg;

// 버튼 클릭 영역
let replayArea = { x: 680, y: 710, w: 300, h: 80 };
let visitArea  = { x: 990, y: 710, w: 300, h: 80 };

function preload_ending() {
  endingVideo = createVideo("assets/outro_video.mp4");
  endingVideo.hide();
  endingVideo.volume(0);
  endingVideo.size(1920, 1080);

  // 엔딩 페이지 이미지 로드
  finalImg = loadImage("assets/ending_final.png"); 
}

function setup_ending() {
  videoEnded = false;

  endingVideo.onended(() => {
    videoEnded = true;
  });

  endingVideo.play();
}

function draw_ending() {
  background(0);

  if (!videoEnded) {
    // 비디오가 전체 화면에 꽉 차도록
    image(endingVideo, 0, 0, width, height);
    return;
  }

  drawFinalPage();
}

// ===========================
// 최종 페이지 그리기
// ===========================
function drawFinalPage() {
  // 이미지 전체 표시
  image(finalImg, 0, 0, width, height);
  // ===========================
  // 🛠 버튼 클릭 영역 디버깅 표시
  // ===========================
  if (DEBUG_ENDING_BUTTONS) {
    push();

    noFill();
    strokeWeight(3);

    // 다시하기 버튼
    stroke(255, 0, 0); // 🔴 빨강
    rect(replayArea.x, replayArea.y, replayArea.w, replayArea.h);

    // 사부작 방문 버튼
    stroke(0, 255, 0); // 🟢 초록
    rect(visitArea.x, visitArea.y, visitArea.w, visitArea.h);

    // 라벨
    noStroke();
    fill(255, 0, 0);
    textSize(18);
    text("REPLAY", replayArea.x, replayArea.y - 8);

    fill(0, 255, 0);
    text("VISIT", visitArea.x, visitArea.y - 8);

    pop();
  }
}

// ===========================
// 마우스 입력 처리
// ===========================
function mousePressed_ending() {
  if (!videoEnded) return;

  // 다시하기
  if (isInside(replayArea)) {
    window.location.reload();
    return;
  }

  // 사부작 방문
  if (isInside(visitArea)) {
    window.open("https://blog.naver.com/sabujak2017", "_blank");
    return;
  }
}

// ===========================
// 버튼 클릭 판정 함수
// ===========================
function isInside(area) {
  return mouseX > area.x &&
         mouseX < area.x + area.w &&
         mouseY > area.y &&
         mouseY < area.y + area.h;
}
