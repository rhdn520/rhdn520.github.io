// ===========================
// intro.js – 오프닝 비디오 + 페이드 + tutorial 전환
// ===========================

let introVideo;
let fadeAlpha = 255;  // 처음은 검정 → 페이드인
let fadingOut = false;
let introFinished = false;

// ---------------------------
// preload
// ---------------------------
function preload_intro() {
  introVideo = createVideo("assets/intro_video.mp4");
  introVideo.hide(); // 처음에는 숨김
}

// ---------------------------
// setup
// ---------------------------
function setup_intro() {
  // 비디오를 #game-container 안에 넣어 위치 정확히 맞춤
  introVideo.parent("game-container");

  introVideo.onended(() => {
    introFinished = true;
    fadingOut = true; // 페이드아웃 시작
  });

  introVideo.play();
}

// ---------------------------
// draw
// ---------------------------
function draw_intro() {
  // 1) 비디오 렌더링
  image(introVideo, 0, 0, width, height);

  // 2) 페이드인 (검정 → 영상)
  if (!introFinished && fadeAlpha > 0) {
    fadeAlpha -= 6;
    fill(0, fadeAlpha);
    rect(0, 0, width, height);
  }

  // 3) 페이드아웃 (영상 → 검정)
  if (fadingOut) {
    fadeAlpha += 6;
    fill(0, fadeAlpha);
    rect(0, 0, width, height);

    // 완전히 검으면 tutorial로 이동
    if (fadeAlpha >= 255) {
      introVideo.stop();
      introVideo.remove();    // ⭐⭐ 화면에 남아 있는 비디오 DOM 제거!

      gameState = "tutorial";
      inited.tutorial = false;  // 반드시 false로 초기화해야 setup_tutorial 실행됨
    }
  }
}
