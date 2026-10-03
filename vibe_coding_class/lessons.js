// Korean workshop lessons. PRD: CoverLetterIDE/main/prd.md, 2026-10-03.
const LESSONS = [
  {
    "id": "setup",
    "group": 1,
    "title": "수업 준비하기",
    "en": "PRELIMINARIES",
    "intro": "처음 코딩을 한다면 설치할 프로그램이 왜 이렇게 많은지부터 궁금할 수 있습니다. 각 도구의 역할을 알고, 파일 하나를 만들고 실행할 준비를 해 봅시다.",
    "sections": [
      [
        "first-steps",
        "처음에는 세 개의 창만 기억하세요",
        "<div class=\"scenario\"><span class=\"scenario-label\">상황으로 이해하기</span><h3>웹사이트의 글자를 하나 바꾼다고 생각해 봅시다.</h3><p>먼저 글자가 적힌 파일을 엽니다. 내용을 바꿔 저장한 뒤, 웹사이트를 실행하고 바뀐 글자를 확인합니다. 이 세 일을 맡는 창이 각각 다릅니다.</p></div><div class=\"grid-2\"><div class=\"concept\"><span class=\"overline\">작성하는 곳</span><h3>VS Code · 편집기</h3><p>한글이나 Word에서 문서를 쓰듯이, 개발할 때는 편집기에서 파일을 만듭니다. VS Code는 코드뿐 아니라 기획 문서도 열 수 있는 프로그램입니다.</p></div><div class=\"concept\"><span class=\"overline\">명령을 내리는 곳</span><h3>터미널</h3><p>“필요한 도구를 설치해 줘”, “이 프로젝트를 실행해 줘”를 글자로 입력하는 창입니다. VS Code 안에서 열 수 있으므로 별도 앱을 꼭 켤 필요는 없습니다.</p></div><div class=\"concept\"><span class=\"overline\">결과를 보는 곳</span><h3>브라우저</h3><p>Chrome, Safari, Edge처럼 웹사이트를 여는 프로그램입니다. 학생과 최종 사용자가 실제로 보는 화면이 여기에 나타납니다.</p></div><div class=\"concept\"><span class=\"overline\">파일을 묶는 곳</span><h3>프로젝트 폴더</h3><p>웹사이트 하나에 필요한 코드, 이미지, 설정, 기획 문서를 모아 두는 폴더입니다. 파일 하나만 열기보다 폴더 전체를 VS Code에서 엽니다.</p></div></div><div class=\"callout \"><strong>오늘 모든 코드를 외울 필요는 없습니다</strong><p>에이전트가 코드를 작성해도, 내가 어느 폴더에서 무엇을 실행하고 어떤 결과를 확인하는지는 알아야 합니다. 모르는 용어는 처음 등장할 때 그 역할부터 살펴봅니다.</p></div>"
      ],
      [
        "tools",
        "설치하기: 파일을 작성하고 실행할 준비",
        "<p><strong>Node.js</strong>는 JavaScript를 브라우저 밖, 즉 내 컴퓨터에서도 실행할 수 있게 하는 프로그램입니다. 웹사이트 개발 도구를 실행할 때 사용합니다. <strong>npm</strong>은 다른 개발자가 만든 코드 묶음인 <strong>패키지</strong>를 내려받는 도구이며 Node.js와 함께 설치됩니다.</p><p>예를 들어 직접 모든 화면 기능을 만들기보다 React라는 패키지를 설치해 사용할 수 있습니다. npm은 프로젝트가 요구하는 패키지들을 찾아 설치해 줍니다.</p><div class=\"steps\"><div class=\"step\"><span>1</span><div><h3>Node.js 설치</h3><p>공식 다운로드 페이지에서 LTS라고 표시된 버전을 선택하고 설치 안내를 따릅니다. LTS는 안정적인 장기 지원 버전입니다. <a class=\"inline-link\" href=\"https://nodejs.org/en/download\" target=\"_blank\" rel=\"noopener\">Node.js 다운로드</a> · 참고 프로젝트는 22.13 이상이 필요합니다.</p></div></div><div class=\"step\"><span>2</span><div><h3>VS Code와 Git 설치</h3><p>VS Code는 파일 편집기이고, Git은 수정 이력을 기록하는 도구입니다. 각각 운영체제에 맞게 설치합니다. <a class=\"inline-link\" href=\"https://code.visualstudio.com/\" target=\"_blank\" rel=\"noopener\">VS Code 다운로드</a> · <a class=\"inline-link\" href=\"https://git-scm.com/downloads\" target=\"_blank\" rel=\"noopener\">Git 다운로드</a></p></div></div><div class=\"step\"><span>3</span><div><h3>빈 프로젝트 폴더 열기</h3><p>컴퓨터에 my-coverletter 폴더를 만듭니다. VS Code의 File → Open Folder에서 그 폴더를 선택합니다. 왼쪽 탐색기에 폴더 이름이 보이면 됩니다.</p></div></div><div class=\"step\"><span>4</span><div><h3>터미널 열기</h3><p>VS Code 상단 Terminal → New Terminal을 누릅니다. 창 아래쪽에 글자를 입력할 수 있는 터미널이 나타납니다. 설치 전에 열었던 터미널은 닫고 새로 엽니다.</p></div></div></div><div class=\"code-block\"><div class=\"code-head\"><span>터미널 · 한 줄 입력 후 Enter</span><button class=\"copy\" type=\"button\" aria-label=\"터미널 · 한 줄 입력 후 Enter 내용 복사\">복사</button></div><pre><code>node -v\nnpm -v\ngit --version</code></pre></div><div class=\"table-wrap\"><table><thead><tr><th scope=\"col\">입력한 명령</th><th scope=\"col\">컴퓨터에 요청하는 일</th><th scope=\"col\">성공했을 때</th></tr></thead><tbody><tr><td>node -v</td><td>Node.js 버전을 보여 줘</td><td>v24…처럼 버전 번호 출력</td></tr><tr><td>npm -v</td><td>npm 버전을 보여 줘</td><td>11…처럼 버전 번호 출력</td></tr><tr><td>git --version</td><td>Git 버전을 보여 줘</td><td>git version … 출력</td></tr></tbody></table></div><div class=\"callout \"><strong>명령어를 읽는 방법</strong><p>한 줄씩 입력하고 Enter를 누릅니다. 예시의 “v24…”를 직접 입력하는 것이 아닙니다. 이 값은 실행 결과의 예시입니다. 명령을 찾을 수 없다는 오류가 나오면 설치 여부와 새 터미널을 열었는지 확인하세요.</p></div>"
      ],
      [
        "accounts",
        "가입하기: 우리 앱이 사용할 서비스 준비",
        "<p>내 컴퓨터에 설치하는 프로그램과, 인터넷에서 계정을 만들어 쓰는 서비스는 다릅니다. 아래 서비스는 브라우저로 가입합니다. 먼저 계정을 만들고, 프로젝트 생성이나 키 연결은 해당 실습에서 진행합니다.</p><div class=\"table-wrap\"><table><thead><tr><th scope=\"col\">서비스</th><th scope=\"col\">쉬운 설명</th><th scope=\"col\">지금 할 일</th></tr></thead><tbody><tr><td><a class=\"inline-link\" href=\"https://github.com/signup\" target=\"_blank\" rel=\"noopener\">GitHub</a></td><td>내 코드를 온라인에 보관하는 공간. 나중에 다른 사람과 공유할 수도 있습니다.</td><td>가입하고 이메일 인증</td></tr><tr><td><a class=\"inline-link\" href=\"https://platform.openai.com/\" target=\"_blank\" rel=\"noopener\">OpenAI API</a></td><td>우리 사이트가 요청하면 문장이나 숫자 표현을 만들어 주는 AI 서비스</td><td>가입 후 API 프로젝트와 사용 조건 확인</td></tr><tr><td><a class=\"inline-link\" href=\"https://console.typesafe.ai\" target=\"_blank\" rel=\"noopener\">TypeSafe AI</a></td><td>정한 기준에 따라 점수나 판단을 받는 AI 서비스. Jev를 사용합니다.</td><td>가입하고 API 이용 가능 여부 확인</td></tr><tr><td><a class=\"inline-link\" href=\"https://supabase.com/dashboard\" target=\"_blank\" rel=\"noopener\">Supabase</a></td><td>로그인 확인, 자소서 저장, 파일 보관을 맡길 서비스</td><td>가입 후 대시보드가 열리는지 확인</td></tr><tr><td><a class=\"inline-link\" href=\"https://dash.cloudflare.com/sign-up\" target=\"_blank\" rel=\"noopener\">Cloudflare</a></td><td>만든 웹사이트를 다른 사람도 접속하게 올려 둘 곳</td><td>가입하고 이메일 인증</td></tr></tbody></table></div><p><strong>대시보드</strong>는 서비스 설정과 사용 현황을 보는 관리 화면입니다. <strong>API 키</strong>는 우리 프로그램이 외부 서비스에 요청할 때 쓰는 비밀 열쇠입니다. 키를 발급했다고 화면에 붙여 넣는 것은 아닙니다. 서버에 넣는 방법은 뒤에서 다룹니다.</p><div class=\"callout \"><strong>AI를 만드는 도구와 앱에서 쓰는 AI는 별도입니다</strong><p>Codex·Kiro는 우리가 코드를 만드는 것을 돕습니다. OpenAI API·TypeSafe API는 완성한 자소서 사이트의 기능에 연결합니다. 한쪽에 로그인했다고 다른 쪽도 자동 연결되지는 않습니다.</p></div><p>서비스에 가입했다고 모든 API 호출이 무료인 것은 아닙니다. 실제 AI 연결 전에 각 계정의 이용 가능 모델, 요금, 사용 한도를 확인합니다.</p>"
      ],
      [
        "extensions",
        "Codex, Markdown, 그리고 선택 도구 Kiro",
        "<p><strong>확장 프로그램(Extension)</strong>은 VS Code에 기능을 추가하는 부가 도구입니다. 왼쪽의 네모 네 개 모양 Extensions 아이콘을 눌러 찾습니다.</p><div class=\"steps\"><div class=\"step\"><span>1</span><div><h3>Codex 확장 설치</h3><p>Codex를 검색하고 게시자가 OpenAI인지 확인합니다. 설치 후 안내되는 방식으로 로그인합니다. Codex는 설명을 읽고 프로젝트 파일을 작성·수정하거나 오류를 찾는 코딩 에이전트입니다. <a class=\"inline-link\" href=\"https://developers.openai.com/codex/ide/\" target=\"_blank\" rel=\"noopener\">공식 설치 안내</a></p></div></div><div class=\"step\"><span>2</span><div><h3>Markdown 문서 열어 보기</h3><p>Markdown은 #으로 제목, -로 목록을 표시하는 간단한 문서 작성 형식입니다. 파일 이름은 보통 .md로 끝납니다. 에이전트에게 전달할 PRD도 이 형식으로 작성합니다.</p></div></div><div class=\"step\"><span>3</span><div><h3>필요하면 Markdown 확장 설치</h3><p>Markdown All in One은 문서 작성을 편하게 해 주는 확장입니다. 미리보기는 VS Code 기본 기능이므로 확장 없이도 사용할 수 있습니다. .md 파일을 연 뒤 Open Preview를 실행합니다.</p></div></div></div><div class=\"code-block\"><div class=\"code-head\"><span>practice.md · VS Code 파일에 붙여 넣기</span><button class=\"copy\" type=\"button\" aria-label=\"practice.md · VS Code 파일에 붙여 넣기 내용 복사\">복사</button></div><pre><code># 나의 첫 개발 노트\n\n## 오늘 만들 것\n- 자기소개서를 쓰고 피드백을 받는 웹사이트\n\n## 준비 상태\n- [ ] Node.js 설치 확인\n- [ ] GitHub 가입 완료</code></pre></div><p>왼쪽 탐색기의 새 파일 버튼으로 <code>practice.md</code>를 만들고 위 내용을 붙여 넣으세요. 저장 후 미리보기를 열면 #은 제목으로, -는 목록으로 바뀌어 보입니다. 대괄호 안에 x를 넣으면 완료 표시가 됩니다.</p><h3>선택: Kiro로 개발해도 됩니다</h3><p><a class=\"inline-link\" href=\"https://kiro.dev\" target=\"_blank\" rel=\"noopener\">Kiro</a>는 AI와 함께 코드를 작성하는 개발 도구입니다. 만들 기능을 문서로 구체화하고 작업을 나눠 진행하는 데 도움을 줍니다. 이번 수업은 VS Code와 Codex를 기본으로 설명하지만 Kiro도 선택할 수 있습니다.</p><div class=\"callout \"><strong>서울대학교 학생: 매월 1,000크레딧 무료</strong><p>서울대학교 학생은 Kiro에서 학생 인증을 완료하면 <strong>1년간 매월 1,000크레딧</strong>을 무료로 받을 수 있습니다. 대학 이메일이 연결된 계정으로 로그인한 뒤 계정 사용량 화면의 학생 인증 안내를 따라 SheerID 인증을 완료하세요. <a class=\"inline-link\" href=\"https://kiro.dev/students/\" target=\"_blank\" rel=\"noopener\">Kiro Students 공식 안내</a></p></div><p>크레딧은 Kiro의 AI 작업에 사용하는 이용량입니다. 남은 크레딧은 다음 달로 이월되지 않습니다. 인증과 혜택 조건은 공식 안내에서 확인할 수 있습니다.</p><details class=\"understand\"><summary>이해 확인 · practice.md에 쓰는 내용과 터미널에 넣는 명령은 같은가요?</summary><p>다릅니다. 문서 내용은 편집기의 파일 안에 쓰고 저장합니다. node -v 같은 실행 명령은 아래쪽 터미널에 입력합니다.</p></details>"
      ]
    ],
    "sources": [
      [
        "https://nodejs.org/en/download",
        "Node.js"
      ],
      [
        "https://code.visualstudio.com/docs/languages/markdown",
        "VS Code Markdown"
      ],
      [
        "https://developers.openai.com/codex/ide/",
        "Codex 설치"
      ],
      [
        "https://github.com/rhdn520/CoverLetterIDE/blob/backend/web/package.json",
        "프로젝트 실행 환경"
      ],
      [
        "https://kiro.dev/students/",
        "Kiro 학생 혜택"
      ]
    ]
  },
  {
    "id": "intro",
    "group": 2,
    "title": "우리가 함께 만들 웹사이트",
    "en": "INTRODUCTION",
    "intro": "여러 회사에 지원하는 학생의 하루를 떠올려 봅시다. 회사마다 다른 자소서, 이력 자료, 마감일을 한곳에서 관리하고 AI에게 첨삭도 받을 수 있다면 어떨까요?",
    "sections": [
      [
        "screens",
        "완성된 사이트 먼저 살펴보기",
        "<p>아래는 실제로 완성된 CoverLetterIDE의 캡처입니다. <strong>허브에서 준비하고 → 작업 공간에서 작성하고 → AI 제안을 검토하고 → 전체 분석으로 보완하는</strong> 흐름을 살펴보세요.</p><p class=\"reading-note\">이미지 또는 “원본 크게 보기”를 누르면 새 탭에서 원본 크기로 확인할 수 있습니다.</p><div class=\"screenshot-example\"><h3><span class=\"shot-number\">01</span>프로젝트 허브</h3><p>사이트에 들어오면 먼저 만나는 시작 화면입니다. 위쪽에는 내 프로필과 첨부 자료를 모아 두고, 아래쪽에는 회사별 지원 프로젝트를 카드로 보여 줍니다. 새 프로젝트를 만들면 그 지원을 위한 작성 공간이 생깁니다.</p><figure class=\"product-screenshot\"><a class=\"screenshot-link\" href=\"images/coverletter-hub.png\" target=\"_blank\" rel=\"noopener\" aria-label=\"프로젝트 허브 캡처 원본 크게 보기 · 새 탭\"><img src=\"images/coverletter-hub.png\" width=\"2047\" height=\"1313\" loading=\"eager\" decoding=\"async\" alt=\"CoverLetterIDE 프로젝트 허브. 상단의 내 프로필과 첨부 자료, 하단의 지원 프로젝트 카드와 새 프로젝트 버튼.\"></a><figcaption><span>프로필과 참고 자료를 준비하고, 회사별 프로젝트를 한곳에서 관리합니다.</span><a href=\"images/coverletter-hub.png\" target=\"_blank\" rel=\"noopener\">원본 크게 보기<span class=\"sr-only\"> · 프로젝트 허브 · 새 탭</span></a></figcaption></figure><ul class=\"screenshot-points\"><li>내 프로필 · 첨부 자료: 여러 지원에서 함께 참고할 정보입니다.</li><li>지원 프로젝트: 회사와 직무별 자소서를 구분해 관리하는 단위입니다.</li></ul></div><div class=\"screenshot-example\"><h3><span class=\"shot-number\">02</span>워크스페이스 작성 화면</h3><p>프로젝트를 열면 자소서를 쓰는 작업 공간이 나옵니다. 왼쪽에서 문항과 자료를 선택하고, 가운데에서 질문과 답변을 작성합니다. 오른쪽 AI 코치는 작성 중인 글에 대해 도움을 요청하는 채팅창입니다.</p><figure class=\"product-screenshot\"><a class=\"screenshot-link\" href=\"images/coverletter-workspace.png\" target=\"_blank\" rel=\"noopener\" aria-label=\"워크스페이스 작성 화면 캡처 원본 크게 보기 · 새 탭\"><img src=\"images/coverletter-workspace.png\" width=\"2047\" height=\"1313\" loading=\"lazy\" decoding=\"async\" alt=\"CoverLetterIDE 워크스페이스. 왼쪽 프로젝트 파일, 가운데 자소서 질문과 답변 편집기, 오른쪽 AI 커리어 코치 채팅창.\"></a><figcaption><span>자료 선택, 자소서 작성, AI 대화를 세 영역으로 나눈 화면입니다.</span><a href=\"images/coverletter-workspace.png\" target=\"_blank\" rel=\"noopener\">원본 크게 보기<span class=\"sr-only\"> · 워크스페이스 작성 화면 · 새 탭</span></a></figcaption></figure><ul class=\"screenshot-points\"><li>왼쪽 → 가운데: 문항을 고르면 그 문항의 질문과 답변을 편집합니다.</li><li>오른쪽: AI에게 수정 방향을 요청합니다. 상단의 AI 분석은 전체 피드백을 여는 기능입니다.</li></ul></div><div class=\"screenshot-example\"><h3><span class=\"shot-number\">03</span>AI 첨삭과 수정안 검토</h3><p>AI에게 수정을 요청하면 가운데 편집기에 원래 내용과 수정본이 함께 나타납니다. 학생은 두 문장을 비교하고, 바꾸고 싶은 제안만 Accept로 수락합니다. 원문을 유지하려면 Reject를 누릅니다.</p><figure class=\"product-screenshot\"><a class=\"screenshot-link\" href=\"images/coverletter-feedback.png\" target=\"_blank\" rel=\"noopener\" aria-label=\"AI 첨삭과 수정안 검토 캡처 원본 크게 보기 · 새 탭\"><img src=\"images/coverletter-feedback.png\" width=\"2047\" height=\"1313\" loading=\"lazy\" decoding=\"async\" alt=\"AI 첨삭 화면. 가운데에 원래 내용과 수정본 비교 블록, Accept와 Reject 버튼이 있고 오른쪽에는 코치 답변과 수정 제안 카드가 표시됨.\"></a><figcaption><span>AI는 수정안을 제안하고, 실제로 반영할지는 사용자가 결정합니다.</span><a href=\"images/coverletter-feedback.png\" target=\"_blank\" rel=\"noopener\">원본 크게 보기<span class=\"sr-only\"> · AI 첨삭과 수정안 검토 · 새 탭</span></a></figcaption></figure><ul class=\"screenshot-points\"><li>원래 내용 · 수정본: 무엇이 어떻게 바뀌는지 먼저 비교합니다.</li><li>Accept · Reject: AI가 쓴 내용을 그대로 믿기보다 사실과 의도에 맞는지 읽고 선택합니다.</li></ul></div><div class=\"screenshot-example\"><h3><span class=\"shot-number\">04</span>AI 분석 결과</h3><p>AI 분석을 열면 작성 화면 위에 분석 결과가 나타납니다. 마감까지 남은 시간, 현재 상태, 비교에 사용한 사례 수와 함께 완성도 점수·잘한 점·보완점·다음 수정 제안을 확인할 수 있습니다.</p><figure class=\"product-screenshot\"><a class=\"screenshot-link\" href=\"images/coverletter-analysis.png\" target=\"_blank\" rel=\"noopener\" aria-label=\"AI 분석 결과 캡처 원본 크게 보기 · 새 탭\"><img src=\"images/coverletter-analysis.png\" width=\"2047\" height=\"1313\" loading=\"lazy\" decoding=\"async\" alt=\"AI 분석 창. 마감 D-29, 대기중 상태, 비교 데이터 9건, 40점 게이지와 총평, 잘하고 있는 점, 보완이 필요한 점, 다음 수정 제안.\"></a><figcaption><span>점수뿐 아니라 근거와 구체적인 수정 방향을 함께 살펴보는 화면입니다.</span><a href=\"images/coverletter-analysis.png\" target=\"_blank\" rel=\"noopener\">원본 크게 보기<span class=\"sr-only\"> · AI 분석 결과 · 새 탭</span></a></figcaption></figure><ul class=\"screenshot-points\"><li>비교 데이터: 이번 분석에서 참고한 사례가 몇 건인지 확인합니다.</li><li>피드백: 점수 자체보다 어떤 문장을 왜 고쳐야 하는지 읽습니다. 이 점수를 합격 확률로 해석하지 않습니다.</li></ul></div>"
      ],
      [
        "story",
        "한 학생의 사용 순서로 먼저 보기",
        "<div class=\"steps\"><div class=\"step\"><span>1</span><div><h3>지원 준비하기</h3><p>학생이 로그인해 자기 프로필과 경험 자료를 등록합니다. 매번 같은 이력을 다시 설명하지 않기 위한 준비입니다.</p></div></div><div class=\"step\"><span>2</span><div><h3>회사별 작업 공간 만들기</h3><p>“A회사 데이터 분석 인턴”처럼 회사와 직무를 입력해 새 프로젝트를 만듭니다. 여기서 프로젝트는 한 번의 지원을 묶는 폴더와 비슷합니다.</p></div></div><div class=\"step\"><span>3</span><div><h3>자소서 쓰고 도움 받기</h3><p>왼쪽에서 참고 자료를 고르고, 가운데에서 문항별 답변을 씁니다. 오른쪽 AI 코치에 “이 경험을 직무와 연결해 줘”라고 요청합니다.</p></div></div><div class=\"step\"><span>4</span><div><h3>수정할 내용 직접 판단하기</h3><p>AI가 제안한 문장을 보고 수락하거나 거절합니다. 전체 분석에서 강점과 보완점을 살펴보고 다시 글을 고칩니다.</p></div></div></div><p>IDE는 여러 개발 도구를 모은 작업 환경을 뜻합니다. CoverLetterIDE라는 이름은 자료·작성·AI를 한 화면에 모은 자소서 작업실이라는 아이디어에서 이해하면 됩니다.</p>"
      ],
      [
        "project",
        "CoverLetterIDE 둘러보기",
        "<div class=\"grid-2\"><div class=\"concept\"><span class=\"overline\">01 / HUB</span><h3>지원 프로젝트 관리</h3><p>프로필과 증빙 자료를 모으고 회사·직무별 프로젝트를 만듭니다. 마감일과 지원 결과도 함께 관리합니다.</p></div><div class=\"concept\"><span class=\"overline\">02 / WORKSPACE</span><h3>세 칸으로 나뉜 작업 공간</h3><p>왼쪽에서 자료를 고르고, 가운데에서 자소서를 작성하고, 오른쪽에서 AI 코치와 대화합니다. 수정 제안은 사람이 승인하거나 거절합니다.</p></div><div class=\"concept\"><span class=\"overline\">03 / ANALYSIS</span><h3>근거가 있는 피드백</h3><p>유사 자소서를 찾아 비교하고, 강점·취약점·구체적인 수정 제안을 제공합니다. 화면에는 완성도 점수를 보여줍니다.</p></div><div class=\"concept\"><span class=\"overline\">04 / CONTRIBUTION</span><h3>기여와 크레딧</h3><p>동의한 과거 자소서와 지원 결과를 기여하면 크레딧을 지급합니다. AI 기능을 사용할 때는 서버에서 크레딧을 차감합니다.</p></div></div><div class=\"callout \"><strong>이 수업의 도착점</strong><p>화면을 만드는 것에서 시작해 로그인·저장·AI 호출이 연결되는 과정을 이해합니다. 오늘 보는 수업 사이트 자체가 CoverLetterIDE 서비스는 아닙니다.</p></div>"
      ],
      [
        "architecture",
        "화면 뒤에서는 어떤 일이 일어날까?",
        "<p>학생 눈에는 웹사이트 하나만 보이지만, 실제로는 여러 프로그램이 서로 일을 나눠 합니다. <strong>“사이트 열기”, “자소서 저장하기”, “AI에게 질문하기”</strong>를 따로 따라가 보겠습니다.</p><figure class=\"architecture\"><div class=\"diagram-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"웹사이트 구성도. 작은 화면에서는 좌우로 스크롤할 수 있습니다.\"><svg viewBox=\"0 0 740 490\" role=\"img\" aria-labelledby=\"arch-title arch-desc\" xmlns=\"http://www.w3.org/2000/svg\"><title id=\"arch-title\">CoverLetterIDE의 화면 전달과 데이터 처리 흐름</title><desc id=\"arch-desc\">브라우저는 Cloudflare에서 화면 파일을 받습니다. 로그인, 자소서 저장, 분석 요청은 Supabase로 보냅니다. Supabase의 서버 함수가 OpenAI와 TypeSafe를 호출하고 결과를 브라우저에 돌려줍니다. 브라우저는 비밀 키로 AI 서비스를 직접 호출하지 않습니다.</desc><defs><marker id=\"tip\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#6d8475\"/></marker></defs><g fill=\"#f3f6ef\" stroke=\"#ccd8c9\" stroke-width=\"1.5\"><rect x=\"20\" y=\"35\" width=\"265\" height=\"136\" rx=\"10\"/><rect x=\"455\" y=\"35\" width=\"265\" height=\"136\" rx=\"10\"/><rect x=\"455\" y=\"300\" width=\"265\" height=\"158\" rx=\"10\"/><rect x=\"20\" y=\"300\" width=\"265\" height=\"158\" rx=\"10\"/></g><g font-family=\"Pretendard, sans-serif\" text-anchor=\"middle\" fill=\"#234737\"><text x=\"152\" y=\"74\" font-size=\"22\" font-weight=\"700\">Cloudflare</text><text x=\"152\" y=\"106\" font-size=\"17\">완성한 웹 앱을 올려 두는 곳</text><text x=\"152\" y=\"137\" font-size=\"16\">화면 파일을 방문자에게 전달</text><text x=\"587\" y=\"74\" font-size=\"22\" font-weight=\"700\">브라우저</text><text x=\"587\" y=\"106\" font-size=\"17\">학생이 보는 화면 · 입력창</text><text x=\"587\" y=\"137\" font-size=\"16\">Chrome, Safari 등</text><text x=\"587\" y=\"339\" font-size=\"22\" font-weight=\"700\">Supabase</text><text x=\"587\" y=\"371\" font-size=\"17\">로그인 확인 · 자소서 저장</text><text x=\"587\" y=\"400\" font-size=\"16\">DB · 파일 저장소</text><text x=\"587\" y=\"428\" font-size=\"16\">서버 함수가 AI 호출 담당</text><text x=\"152\" y=\"339\" font-size=\"22\" font-weight=\"700\">AI 서비스</text><text x=\"152\" y=\"371\" font-size=\"17\">OpenAI · TypeSafe Jev</text><text x=\"152\" y=\"400\" font-size=\"16\">문장 생성 · 유사도 검색용 표현</text><text x=\"152\" y=\"428\" font-size=\"16\">기준에 따른 판단</text></g><g stroke=\"#6d8475\" stroke-width=\"1.7\" fill=\"none\" marker-start=\"url(#tip)\" marker-end=\"url(#tip)\"><path d=\"M295 119 H445\"/><path d=\"M588 182 V288\"/><path d=\"M295 388 H445\"/></g><g font-family=\"Pretendard, sans-serif\" font-size=\"15\" text-anchor=\"middle\" fill=\"#5b7060\"><text x=\"370\" y=\"77\">① 화면 파일</text><text x=\"370\" y=\"99\">요청 / 전달</text><text x=\"487\" y=\"224\">② 로그인·저장</text><text x=\"487\" y=\"248\">요청 / 결과</text><text x=\"666\" y=\"224\">③ AI 분석</text><text x=\"666\" y=\"248\">요청 / 결과</text><text x=\"370\" y=\"346\">④ AI 호출</text><text x=\"370\" y=\"370\">요청 / 응답</text></g></svg></div><figcaption>선은 요청과 응답이 오가는 경로입니다.</figcaption></figure><div class=\"steps\"><div class=\"step\"><span>1</span><div><h3>사이트를 열면: Cloudflare → 브라우저</h3><p>브라우저가 화면을 만드는 데 필요한 파일을 요청합니다. Cloudflare가 파일을 전달하면 브라우저가 이를 읽어 버튼과 입력창을 보여 줍니다.</p></div></div><div class=\"step\"><span>2</span><div><h3>자소서를 저장하면: 브라우저 ↔ Supabase</h3><p>브라우저가 입력한 글을 Supabase에 보냅니다. Supabase는 로그인한 사용자를 확인하고 허용된 데이터만 저장합니다. 저장 결과가 돌아오면 화면에 성공이나 실패를 표시합니다.</p></div></div><div class=\"step\"><span>3</span><div><h3>AI에게 질문하면: 브라우저 ↔ Supabase ↔ AI 서비스</h3><p>브라우저가 질문을 Supabase의 서버 함수에 보냅니다. 서버 함수가 필요한 자료를 모아 OpenAI나 TypeSafe를 호출합니다. 결과가 되돌아오면 브라우저가 피드백을 화면에 보여 줍니다.</p></div></div></div><p><strong>서버 함수</strong>란 사용자 컴퓨터가 아니라 서비스 쪽에서 실행되는 작은 프로그램입니다. 우리의 경우 누가 요청했는지 확인하고 AI를 부르는 일을 맡습니다.</p><div class=\"callout \"><strong>각 서비스가 필요한 이유</strong><p>Cloudflare는 사이트에 접속할 수 있게 해 주고, Supabase는 사용자와 데이터를 관리하며, AI 서비스는 요청한 생성·판단을 수행합니다. Cloudflare에 사이트를 올리는 것만으로 DB 저장과 AI 기능까지 자동 완성되지는 않습니다.</p></div><details class=\"understand\"><summary>이해 확인 · AI 코치의 입력창은 어디에 있고, 실제 AI 호출은 어디서 하나요?</summary><p>입력창은 브라우저 화면에 있습니다. 실제 AI 호출은 Supabase의 서버 함수에서 합니다. 이렇게 하면 비밀 API 키를 브라우저에 보내지 않아도 됩니다.</p></details><details><summary>참고 코드에서는 어느 폴더를 보면 되나요?</summary><div class=\"table-wrap\"><table><thead><tr><th scope=\"col\">역할</th><th scope=\"col\">위치</th></tr></thead><tbody><tr><td>웹 화면</td><td>web/</td></tr><tr><td>서버에서 실행하는 기능</td><td>supabase/functions/</td></tr><tr><td>DB 구조와 접근 규칙</td><td>supabase/migrations/</td></tr></tbody></table></div></details>"
      ],
      [
        "approach",
        "AI에게 무엇을 알려 줘야 할까?",
        "<div class=\"scenario\"><span class=\"scenario-label\">상황으로 이해하기</span><h3>친구에게 “발표 자료 좀 만들어 줘”라고만 부탁한다면?</h3><p>주제, 청중, 분량을 모르면 친구는 계속 추측해야 합니다. 코딩 에이전트도 같습니다. “자소서 사이트 만들어 줘”만으로는 누가 쓰고, 어떤 버튼이 필요하고, 언제 완성인지 알 수 없습니다.</p></div><div class=\"steps\"><div class=\"step\"><span>1</span><div><h3>사용자와 문제를 설명합니다</h3><p>“여러 회사에 지원하는 학생이 자소서와 증빙 자료를 한곳에 모으고 싶다”고 적습니다.</p></div></div><div class=\"step\"><span>2</span><div><h3>구체적인 동작을 정합니다</h3><p>“회사명을 입력해 프로젝트를 만들고, 그 안에서 문항별 답변을 작성한다”고 적습니다.</p></div></div><div class=\"step\"><span>3</span><div><h3>완료 확인 방법을 정합니다</h3><p>“회사명이 없으면 생성하지 않는다”, “새로고침해도 저장된 글이 보인다”처럼 직접 확인할 조건을 적습니다.</p></div></div><div class=\"step\"><span>4</span><div><h3>작은 부분부터 만듭니다</h3><p>먼저 화면을 만들고, 잘 쓰이는지 확인한 뒤 로그인과 저장, AI를 연결합니다. 한꺼번에 모든 기능을 요청하지 않아도 됩니다.</p></div></div></div><p>이 내용을 계속 참고할 수 있게 파일로 적어 두는 것이 다음 노트에서 배울 PRD와 스펙입니다.</p><div class=\"callout note\"><strong>참고 저장소를 읽을 때</strong><p>main 브랜치 PRD는 만들고 싶은 제품의 목표를 담고 있습니다. backend 브랜치는 이를 실제로 연결한 구현입니다. 기획과 현재 구현은 다를 수 있어 문서와 실제 동작을 함께 확인합니다.</p></div>"
      ]
    ],
    "sources": [
      [
        "https://github.com/rhdn520/CoverLetterIDE/blob/backend/prd.md",
        "기획 문서"
      ],
      [
        "https://github.com/rhdn520/CoverLetterIDE/blob/backend/SPECIFICATION.md",
        "구현 명세"
      ],
      [
        "https://github.com/rhdn520/CoverLetterIDE/blob/backend/web/OPERATIONS.md",
        "운영 가이드"
      ]
    ]
  },
  {
    "id": "prd",
    "group": 2,
    "title": "PRD와 스펙으로 의도 전달하기",
    "en": "PLAN BEFORE CODE",
    "intro": "말로만 한 요구는 대화가 길어지면 놓치기 쉽습니다. 무엇을 만들지 파일로 적어 두면 사람과 AI가 같은 내용을 보며 작업할 수 있습니다.",
    "sections": [
      [
        "read-first",
        "PRD는 코드를 쓰기 전의 작업 설명서입니다",
        "<p>음식 주문서에 메뉴와 수량이 없으면 원하는 음식을 받기 어렵습니다. PRD도 비슷합니다. <strong>누가, 어떤 문제를 해결하려고, 어떤 기능을 사용할지</strong> 적는 제품 요구사항 문서입니다.</p><p>이 문서는 프로그램이 직접 실행하는 코드가 아닙니다. 사람이 읽고 계획을 이해하고, 코딩 에이전트가 구현할 때 참고하는 문서입니다. <code>prd.md</code>라는 파일에 Markdown 형식으로 저장합니다.</p><div class=\"table-wrap\"><table><thead><tr><th scope=\"col\">새로 만난 말</th><th scope=\"col\">이 수업에서 뜻하는 것</th></tr></thead><tbody><tr><td>요구사항</td><td>제품이 해 주었으면 하는 일. 예: 회사별로 자소서를 따로 보관하기</td></tr><tr><td>수용 기준</td><td>기능이 완성되었다고 판단할 확인 조건. 예: 저장 후 새로고침해도 글이 남기</td></tr><tr><td>명세 / 스펙</td><td>어떤 입력을 받고 어떻게 동작할지 더 자세하게 적은 설명</td></tr><tr><td>SDD</td><td>문서에 정한 동작을 기준으로 구현하고 검증하는 개발 방식</td></tr></tbody></table></div>"
      ],
      [
        "documents",
        "세 문서의 역할",
        "<div class=\"table-wrap\"><table><thead><tr><th scope=\"col\">문서</th><th scope=\"col\">답하는 질문</th><th scope=\"col\">수업에서의 용도</th></tr></thead><tbody><tr><td>prd.md</td><td>누구를 위해, 무엇을, 왜 만드는가?</td><td>문제·목표·범위·사용자 흐름</td></tr><tr><td>SPECIFICATION.md</td><td>정확히 어떤 동작이어야 하는가?</td><td>화면·데이터·API·수용 기준·구현 상태</td></tr><tr><td>new_requests.md</td><td>기존 계획에서 무엇이 바뀌는가?</td><td>신규 기능·버그 재현·기대 결과</td></tr></tbody></table></div><p>PRD는 일반적으로 <strong>Product Requirements Document</strong>, 제품 요구사항 문서를 뜻합니다. 프로젝트 설명에서 출발하되 구현 후 확인할 수 있는 조건까지 적습니다.</p><p><strong>SDD(Spec-Driven Development)</strong>는 스펙을 기준으로 구현하고 검증하는 방식입니다. 특정 파일명이나 도구보다, 요구사항과 코드의 동작을 계속 맞추는 일이 핵심입니다.</p>"
      ],
      [
        "acceptance",
        "수업용 PRD 원문: 그대로 복사해서 시작하기",
        "<p>아래는 <strong>CoverLetterIDE 저장소 main 브랜치의 prd.md 전체 원문</strong>입니다. 요약하거나 예시로 바꾸지 않았습니다. 복사 버튼을 누르면 문서 전체가 복사됩니다.</p><div class=\"steps\"><div class=\"step\"><span>1</span><div><h3>파일 만들기</h3><p>VS Code에서 프로젝트 폴더를 열고 왼쪽 탐색기의 New File을 눌러 prd.md 파일을 만듭니다.</p></div></div><div class=\"step\"><span>2</span><div><h3>원문 붙여 넣기</h3><p>아래 “PRD 전체 복사”를 누른 뒤 prd.md 편집 화면에 붙여 넣습니다. 터미널에 붙여 넣지 않습니다.</p></div></div><div class=\"step\"><span>3</span><div><h3>저장하고 확인하기</h3><p>Windows는 Ctrl+S, macOS는 Command+S로 저장합니다. Markdown 미리보기에서 제목과 목록이 보이는지 확인합니다.</p></div></div><div class=\"step\"><span>4</span><div><h3>첫 구현 범위 알려 주기</h3><p>PRD에는 최종 목표 전체가 담겨 있습니다. 첫 요청에서는 “지금은 프론트엔드 목업만 만든다”고 별도로 범위를 정합니다.</p></div></div></div><p class=\"reading-note\">출처: <a class=\"inline-link\" href=\"https://github.com/rhdn520/CoverLetterIDE/blob/main/prd.md\" target=\"_blank\" rel=\"noopener\">main/prd.md</a> · 2026-10-03 확인 · 파일 버전 c8556b01</p><div class=\"prd-original\"><div class=\"code-block\"><div class=\"code-head\"><span>prd.md · main 브랜치 원문</span><button class=\"copy\" type=\"button\" aria-label=\"prd.md · main 브랜치 원문 내용 복사\">PRD 전체 복사</button></div><pre><code># CoverLetterIDE PRD\n\n## 1. 문제와 목표\n\n* **문제:** 취업을 준비하는 대학(원)생들은 수많은 회사의 자기소개서, 이력, 증빙 서류를 산발적으로 관리하여 효율성이 떨어진다. 또한 자신의 자소서가 시장에서 어느 정도의 경쟁력이 있는지, 어떤 점을 보완해야 하는지 합격/불합격 데이터를 기반으로 객관적인 피드백을 얻기 어렵다.\n* **목표:** 서류 및 이력 관리부터 기업별 자소서 작성, LLM 보조, 그리고 타 사용자 데이터 기반의 AI 피드백까지 한 곳에서 제공하는 IDE 형태의 통합 워크스페이스를 구축하여 취업 준비의 효율과 서류 합격률을 높인다. 유용한 합격/불합격 데이터의 선순환을 위해 크레딧 기반의 보상 체계를 도입한다.\n* **비목표:** 기업 채용 공고를 검색하거나 지원서를 해당 기업 서버로 직접 전송(Submit)하는 채용 포털 기능은 배제한다. 일반적인 코딩용 IDE나 단순 범용 텍스트 에디터를 만드는 것이 아니다.\n\n## 2. 사용자\n\n* **주요 사용자:** 취업 또는 인턴십을 준비하며 다수의 자기소개서를 작성해야 하는 대학생 및 대학원생.\n* **핵심 시나리오:**\n1. 자신의 기본 프로필(이력, 수상 내역)을 업데이트하고, 과거에 발급받은 각종 증빙 서류를 업로드해 허브에 보관한다.\n2. 별도의 &#39;데이터 수집 페이지&#39;를 통해 과거에 작성했던 자소서의 합격/불합격 결과를 업로드하고, **보상으로 AI 기능 사용을 위한 추가 크레딧을 획득한다.**\n3. 새로운 기업에 지원하기 위해 프로젝트를 생성하고, 허브에 보관된 서류 중 필요한 것들만 남기고(opt-out) 마감일을 설정한다.\n4. 3분할 된 워크스페이스에서 자소서를 작성하며 **크레딧을 소모하여 LLM과 채팅하고** 내용을 발전시킨다.\n5. 대시보드를 열어 JEV 모델로 평가된 작성 진척도를 확인하고, 내용 및 프로필 기반으로 선정된 유사 사용자들의 합격/불합격 데이터를 바탕으로 AI 리포트를 확인한다.\n6. 지원 결과가 나오면 워크스페이스 내에서 해당 자소서의 최종 합격/불합격 여부를 체크하여 데이터 풀에 기여하고 **추가 크레딧을 환급받는다.**\n\n\n\n## 3. 기능 요구사항\n\n### 기능 A: 프로젝트 허브 (Project Hub)\n\n* **사용자는** 자신의 프로필(이력, 수상 내역 등)을 수정 및 관리하고, 증빙 자료를 업로드할 수 있다. 하단 목록에서 새 지원 프로젝트를 생성할 수 있다.\n* **시스템은** 화면을 상하단으로 구성하며, 새 프로젝트 생성 시 모달창을 띄워 메타정보를 입력받는다. 첨부 자료는 opt-out 방식으로 제공된다.\n* **수용 기준:**\n* [ ] pdf, jpg, png, docs, hwpx 파일의 정상 업로드 및 다운로드 기능이 동작해야 한다.\n* [ ] 프로젝트 생성 모달에서 필수 정보 입력 유효성 검사가 통과되어야 워크스페이스가 생성된다.\n* [ ] 프로젝트 생성 시 선택 해제한 자료는 해당 프로젝트 워크스페이스에 포함되지 않아야 한다.\n* [ ] 개별 워크스페이스 내부에서 추가로 업로드된 파일도 허브의 증빙 자료 목록에 동기화되어 표시되어야 한다.\n\n\n\n### 기능 B: 3분할 워크스페이스 (3-Pane Workspace)\n\n* **사용자는** 한 화면에서 파일 탐색, 문서 작성, AI 어시스턴트와의 채팅을 동시에 수행하며, 완성된 자소서에 대해 추후 합격/불합격 여부를 기록할 수 있다.\n* **시스템은** 화면을 좌, 중, 우 3분할로 제공한다. (좌측: 파일 열람 및 업로드 / 중앙: 문서 작성 에디터, 합불 결과 체크 UI / 우측: LLM 에이전트 채팅창).\n* **수용 기준:**\n* [ ] 각 패널의 크기를 사용자가 드래그하여 조절할 수 있어야 한다.\n* [ ] 중앙 에디터의 내용이 우측 LLM 에이전트의 컨텍스트로 전달될 수 있어야 한다.\n* [ ] 좌측 Explorer에서 새 파일을 업로드 시 즉시 현재 워크스페이스 및 허브에 반영되어야 한다.\n* [ ] 완성된 자소서의 상태를 &#39;합격&#39;, &#39;불합격&#39;, &#39;대기중&#39; 등으로 체크하고 저장할 수 있는 기능이 제공되어야 한다.\n\n\n\n### 기능 C: AI 기반 대시보드 (Dashboard &amp; AI Analysis)\n\n* **사용자는** 워크스페이스별 대시보드에서 작성 진척도, 마감일까지 남은 시간, AI 기반 취약점/강점 분석 결과를 확인한다.\n* **시스템은** JEV 모델을 통해 진척도를 0~100점 척도로 변환해 보여준다. 자소서 Vector Embedding으로 Top-20을 찾고, JEV 모델로 프로필 기반 Re-ranking을 수행한 뒤 합격 5개, 불합격 5개를 추출하여 분석 리포트를 생성한다.\n* **수용 기준:**\n* [ ] 대시보드에 마감일 D-Day와 JEV 모델 기반의 100점 만점 진척도 게이지가 시각적으로 표시되어야 한다.\n* [ ] Vector Embedding 기반 Top-20 추출 및 JEV 모델 기반 프로필 Re-ranking 로직이 정상 동작해야 한다.\n* [ ] JEV API 호출 시, 동일한 요청 데이터가 들어올 경우 과거 API 응답 결과를 캐싱(Caching)하여 재사용해야 한다.\n* [ ] Re-ranking 된 목록에서 최상위 합격 자소서 5개, 불합격 자소서 5개를 추출하여 프롬프트를 구성해야 한다.\n\n\n\n### 기능 D: 외부 합격/불합격 자소서 수집 페이지 (Data Collection Page)\n\n* **사용자는** 외부 플랫폼 등에서 작성한 과거의 자소서를 플랫폼에 등록하고, 합격/불합격 결과를 기입할 수 있다.\n* **시스템은** 워크스페이스와 독립된 별도의 폼을 제공하여 데이터를 입력받아 DB에 저장한다.\n* **수용 기준:**\n* [ ] 텍스트 붙여넣기 및 결과(합격/불합격) 선택 폼이 정상 동작해야 한다.\n* [ ] 수집된 데이터는 기능 C의 유사 사용자 검색용 Vector DB 및 프로필 매칭용 DB에 올바르게 통합 및 색인되어야 한다.\n\n\n\n### 기능 E: 크레딧 시스템 및 리워드 (Credit System &amp; Rewards)\n\n* **사용자는** 매월 일정량의 기본 크레딧을 부여받으며, LLM을 사용하거나 AI 분석 기능을 호출할 때마다 크레딧을 소모한다. 크레딧이 부족하면 합격/불합격 자소서를 기여하여 추가 크레딧을 얻을 수 있다.\n* **시스템은** 사용자별 크레딧 잔여량을 관리하고 화면에 표시한다. LLM 호출 횟수(또는 토큰) 단위로 크레딧을 차감하며, 데이터 수집 페이지나 워크스페이스를 통해 자소서 합/불 결과를 기여하면 설정된 보상 크레딧을 실시간으로 지급한다.\n* **수용 기준:**\n* [ ] 매월 정해진 일자에 사용자별 기본 크레딧이 갱신(초기화 또는 누적)되어야 한다.\n* [ ] 우측 패널의 LLM 에이전트 채팅 및 대시보드의 AI 분석 기능 실행 시 정해진 크레딧이 차감되어야 한다.\n* [ ] 잔여 크레딧이 부족할 경우 AI 기능 사용이 제한되며, 자소서 데이터 기여를 유도하는 안내 메시지가 노출되어야 한다.\n* [ ] 기능 B(워크스페이스 내 결과 업데이트) 또는 기능 D(수집 페이지 업로드)를 통해 자소서 합/불 데이터를 기여할 경우 즉시 보상 크레딧이 계정에 합산되어야 한다.\n\n\n\n## 4. 사용자 흐름\n\n1. **사용자가** 가입/로그인 시 이번 달 기본 할당 크레딧(예: 1,000 크레딧)을 부여받고 &#39;프로젝트 허브&#39;에서 프로필을 갱신한다.\n2. **사용자가** &#39;새 프로젝트 생성&#39;을 클릭하여 &#39;A기업 하반기 공채&#39; 워크스페이스를 연다.\n3. **사용자가** 중앙 에디터와 우측 LLM 에이전트를 활용해 자소서를 작성해 나간다. 이때 LLM에 질문을 던질 때마다 크레딧이 10씩 차감된다.\n4. **사용자가** &#39;대시보드&#39; 탭을 열어 100 크레딧을 소모해 강점/취약점 분석 리포트(합격 5개, 불합격 5개 기반)를 확인한다.\n5. **사용자가** 모든 크레딧을 소진하여 추가 LLM 호출이 막힌다.\n6. **사용자가** &#39;자소서 수집 페이지(기능 D)&#39;로 이동해 과거 B기업에 합격했던 자소서 원문을 업로드하고 &#39;합격&#39;으로 체크한다.\n7. **시스템이** 해당 데이터를 DB에 색인함과 동시에 사용자에게 보상으로 500 크레딧을 즉시 지급한다.\n8. **사용자가** 확보한 크레딧으로 다시 A기업 워크스페이스에 돌아와 자소서를 마무리한다.\n\n## 5. 제약사항 및 미결 사항\n\n* **제약사항:**\n* **데이터 프라이버시:** 타 사용자의 자소서를 분석에 활용 시, LLM 프롬프트 단에서 철저히 추상화 및 익명화 처리를 해야 한다.\n* **문서 파싱 기술:** 다양한 포맷(hwpx, pdf 등)의 문서 내용을 텍스트로 추출하기 위한 파서 호환성이 요구된다.\n* **캐시 무효화 정책:** JEV API 결과 캐싱으로 성능을 최적화하되, 사용자가 프로필을 수정할 경우 기존 캐시를 적절히 만료시켜야 한다.\n* **초기 합성 데이터 생성:** 콜드 스타트 문제를 해결하고 초기 기능을 테스트하기 위해, 본 웹앱 개발과 별도로 합성 데이터를 대량으로 생성하여 DB에 주입하는 스크립트/코드를 반드시 작성해야 한다.\n\n\n* **미결 사항:**\n* **크레딧 정책 구체화:**\n* LLM 에이전트 1회 호출(또는 토큰 량) 당 차감할 크레딧 비용.\n* AI 분석(대시보드) 1회 호출 당 차감할 크레딧 비용.\n* 합격/불합격 자소서 1건 기여 시 지급할 보상 크레딧 규모.\n\n\n* **어뷰징 방지:** 크레딧 보상을 노리고 의미 없는 텍스트(ex. &quot;아무말 대잔치&quot;)나 거짓 합격 정보를 반복 제출하는 행위를 방지하기 위한 필터링 혹은 검수 로직(예: 최소 글자 수 제한, AI 기반 무의미 데이터 판별 등) 도입 여부.</code></pre></div></div><div class=\"callout \"><strong>원문의 어려운 표현은 이렇게 읽으세요</strong><p>워크스페이스는 작업 공간, 모달은 화면 위에 뜨는 작은 창, 컨텍스트는 AI가 답할 때 참고하는 자료입니다. opt-out은 기본으로 선택된 항목 중 필요 없는 것을 빼는 방식입니다. 나머지 AI 관련 용어는 모델 노트에서 하나씩 설명합니다.</p></div><details class=\"understand\"><summary>이해 확인 · PRD에 적힌 모든 기능을 첫 요청에서 구현해야 하나요?</summary><p>아닙니다. 최종 목표는 문서에 남겨 두고, 이번 단계에서는 화면 목업처럼 작은 범위만 요청합니다. 다음 단계마다 어떤 기능을 연결할지 명확히 알려 줍니다.</p></details>"
      ],
      [
        "tracking",
        "구현 상태와 변경 요청 남기기",
        "<div class=\"code-block\"><div class=\"code-head\"><span>SPECIFICATION.md 예시</span><button class=\"copy\" type=\"button\" aria-label=\"SPECIFICATION.md 예시 내용 복사\">복사</button></div><pre><code># SPECIFICATION\n\n## 자소서 편집\n- [ ] 문항별 제목과 본문을 독립적으로 편집한다.\n- [ ] 저장 상태를 보여 준다.\n- [ ] 서버 저장 실패 시 오류를 표시하고 입력을 보존한다.\n\n## 검증 기록\n- 확인한 동작:\n- 재현 방법:\n- 남은 문제:</code></pre></div><div class=\"code-block\"><div class=\"code-head\"><span>new_requests.md 예시</span><button class=\"copy\" type=\"button\" aria-label=\"new_requests.md 예시 내용 복사\">복사</button></div><pre><code># 요청 001: 한글 입력 중 중복 전송\n\n## 현재 동작\nAI 채팅에서 한글 조합 중 Enter를 누르면 메시지가 전송된다.\n\n## 기대 동작\n한글 조합을 확정하는 Enter는 전송으로 처리하지 않는다.\n\n## 재현\n1. 채팅 입력창에서 한글을 입력한다.\n2. 조합이 끝나기 전에 Enter를 누른다.\n\n## 완료 확인\n- [ ] 조합 확정 시 메시지가 전송되지 않는다.\n- [ ] 조합이 끝난 후 Enter를 누르면 한 번 전송된다.</code></pre></div><div class=\"callout \"><strong>에이전트에게 함께 요청하기</strong><p>“구현을 마치면 바뀐 파일과 검증 방법을 설명하고, 실제 확인한 항목만 SPECIFICATION.md에 완료 표시해 줘.”</p></div>"
      ]
    ],
    "sources": [
      [
        "https://github.com/rhdn520/CoverLetterIDE/blob/main/prd.md",
        "main 브랜치 PRD 원문"
      ],
      [
        "https://github.com/rhdn520/CoverLetterIDE/blob/backend/SPECIFICATION.md",
        "스펙 예시"
      ],
      [
        "https://github.com/rhdn520/CoverLetterIDE/blob/backend/new_requests.md",
        "변경 요청 예시"
      ]
    ]
  },
  {
    "id": "git",
    "group": 3,
    "title": "Git과 GitHub",
    "en": "VERSION CONTROL",
    "intro": "파일 이름을 “최종”, “진짜최종”, “최종수정2”로 저장해 본 적이 있나요? Git은 어떤 내용을 언제, 왜 바꿨는지 기록해 이런 혼란을 줄여 줍니다.",
    "sections": [
      [
        "why",
        "Git과 GitHub는 서로 다른 도구입니다",
        "<div class=\"scenario\"><span class=\"scenario-label\">상황으로 이해하기</span><h3>AI에게 수정을 맡겼는데 잘 되던 화면이 망가졌습니다.</h3><p>수정 전 상태를 기록해 두지 않았다면 어느 파일을 되돌릴지 찾기 어렵습니다. Git으로 변경을 나눠 기록해 두면 “이 변경에서 무엇이 달라졌는지” 비교하고 필요한 수정을 되돌릴 근거를 얻을 수 있습니다.</p></div><div class=\"grid-2\"><div class=\"concept\"><span class=\"overline\">내 컴퓨터의 변경 기록</span><h3>Git</h3><p>프로젝트 파일의 변경을 기록하는 프로그램입니다. 인터넷에 연결하지 않아도 기록할 수 있습니다. 파일을 저장하는 것과는 별도로, 의미 있는 시점에 기록을 남깁니다.</p></div><div class=\"concept\"><span class=\"overline\">인터넷의 저장·협업 공간</span><h3>GitHub</h3><p>Git 저장소를 온라인에 올려 보관하는 서비스입니다. 다른 컴퓨터에서 코드를 받거나, 친구와 변경을 주고받거나, 작업을 검토할 때 사용합니다.</p></div></div><p><strong>저장소(repository)</strong>는 프로젝트 파일과 변경 이력이 담긴 공간입니다. 내 컴퓨터에 있는 것은 <strong>로컬 저장소</strong>, GitHub 같은 다른 곳에 있는 것은 <strong>원격 저장소</strong>라고 부릅니다.</p><details class=\"understand\"><summary>이해 확인 · GitHub에 가입하면 Git도 설치된 건가요?</summary><p>아닙니다. GitHub 가입은 온라인 서비스의 계정을 만드는 일이고, Git 설치는 내 컴퓨터에 변경 이력 관리 프로그램을 설치하는 일입니다. 둘 다 따로 준비합니다.</p></details>"
      ],
      [
        "mental",
        "수정 → 선택 → 기록: 세 공간의 역할",
        "<p>파일을 바꿨다고 모든 변경을 한 번에 기록해야 하는 것은 아닙니다. 예를 들어 “로그인 버튼 수정”과 “문서 오타 수정”은 서로 다른 이유의 작업입니다. Git은 이번 기록에 어떤 변경을 넣을지 먼저 고르게 합니다.</p><div class=\"flow\"><div class=\"\"><b>Working directory</b><small>작업 폴더: 지금 편집하는 파일</small></div><div class=\"\"><b>Staging area</b><small>이번 기록에 넣을 변경을 고르는 곳</small></div><div class=\"\"><b>Local repository</b><small>commit으로 확정한 이력 보관</small></div></div><p class=\"flow-label\">작업 폴더의 변경을 git add로 선택하고, git commit으로 기록합니다.</p><div class=\"scenario\"><span class=\"scenario-label\">상황으로 이해하기</span><h3>prd.md에서 프로젝트 목표를 한 줄 고쳤다면</h3><ol><li><strong>파일 저장:</strong> 편집기에서 Ctrl+S 또는 Command+S를 누릅니다. 작업 폴더의 파일 내용만 바뀐 상태입니다.</li><li><strong>git add prd.md:</strong> 지금의 변경을 이번 기록에 넣겠다고 선택합니다. 이것을 스테이징이라고 합니다.</li><li><strong>git commit:</strong> 선택한 변경에 “왜 바꿨는지” 설명을 붙여 로컬 이력에 남깁니다.</li><li><strong>git push:</strong> 만들어 둔 커밋을 GitHub 원격 저장소에 전송합니다.</li></ol></div><div class=\"callout \"><strong>commit은 “설명이 붙은 저장 지점”</strong><p>커밋은 프로젝트의 한 시점을 기록합니다. 각 커밋에는 구분 가능한 ID와 작성자, 메시지가 있어 나중에 변경 내용을 찾을 수 있습니다. commit만으로 GitHub에 전송되지는 않습니다.</p></div><details class=\"understand\"><summary>이해 확인 · add한 뒤 파일을 다시 고치면, 그 수정도 자동으로 commit되나요?</summary><p>아닙니다. add는 실행한 시점의 내용을 선택합니다. 이후 수정까지 포함하려면 파일을 저장한 뒤 다시 add해야 합니다. git diff --staged로 실제 커밋될 내용을 확인할 수 있습니다.</p></details>"
      ],
      [
        "first",
        "실습 1: 내 컴퓨터에 첫 커밋 남기기",
        "<p><strong>실행 위치:</strong> VS Code에서 새로 만든 <code>my-coverletter</code> 폴더를 연 뒤 Terminal → New Terminal을 누릅니다. 아래 명령은 터미널에 한 줄씩 입력합니다.</p><p>먼저 <code>prd.md</code>를 만들고 내용을 저장하세요. 이어서 같은 폴더에 <code>.gitignore</code>라는 파일을 만들고 아래 내용을 넣습니다. 파일 이름 맨 앞의 점도 포함합니다.</p><div class=\"code-block\"><div class=\"code-head\"><span>.gitignore · 파일에 저장</span><button class=\"copy\" type=\"button\" aria-label=\".gitignore · 파일에 저장 내용 복사\">복사</button></div><pre><code>node_modules/\ndist/\n.env\n.env.*\n!.env.example</code></pre></div><p><code>.gitignore</code>는 기록에서 제외할 파일을 적는 목록입니다. 내려받은 패키지 폴더나 비밀 키가 든 환경 설정 파일을 실수로 GitHub에 올리지 않게 돕습니다. 이미 Git이 추적하는 파일은 이 목록에 적는 것만으로 기록에서 사라지지 않습니다.</p><div class=\"code-block\"><div class=\"code-head\"><span>1단계 · 저장소 시작</span><button class=\"copy\" type=\"button\" aria-label=\"1단계 · 저장소 시작 내용 복사\">복사</button></div><pre><code>git init\ngit branch -M main\ngit status</code></pre></div><div class=\"table-wrap\"><table><thead><tr><th scope=\"col\">명령</th><th scope=\"col\">무엇을 하는가</th><th scope=\"col\">확인할 것</th></tr></thead><tbody><tr><td>git init</td><td>현재 폴더에서 Git 기록을 시작합니다.</td><td>Initialized … 메시지와 .git 내부 폴더가 생깁니다.</td></tr><tr><td>git branch -M main</td><td>현재 작업 흐름의 이름을 main으로 정합니다.</td><td>main이라는 기본 브랜치 이름을 사용하게 됩니다.</td></tr><tr><td>git status</td><td>아직 기록하지 않은 변경을 보여 줍니다.</td><td>prd.md와 .gitignore가 추적하지 않는 파일로 보입니다.</td></tr></tbody></table></div><div class=\"code-block\"><div class=\"code-head\"><span>2단계 · 변경 선택 후 기록</span><button class=\"copy\" type=\"button\" aria-label=\"2단계 · 변경 선택 후 기록 내용 복사\">복사</button></div><pre><code>git add prd.md .gitignore\ngit status\ngit diff --staged\ngit commit -m &quot;docs: add initial PRD&quot;\ngit log --oneline</code></pre></div><p><code>add</code> 다음의 <code>status</code>에는 “Changes to be committed”가 보여야 합니다. <code>diff --staged</code>는 선택한 내용을 비교해 보여 줍니다. <code>commit -m</code> 뒤의 따옴표 안 문장은 기록 설명입니다. 마지막 <code>log --oneline</code>에는 짧은 ID와 커밋 메시지가 한 줄로 나타납니다.</p><div class=\"callout \"><strong>작성자 정보가 없다는 오류가 나면</strong><p>Git이 이 기록의 작성자를 몰라서 멈춘 것입니다. 아래의 이름과 이메일을 본인 정보로 바꿔 설정하고 commit 명령을 다시 실행합니다. GitHub에서 제공하는 비공개용 noreply 이메일도 사용할 수 있습니다.</p></div><div class=\"code-block\"><div class=\"code-head\"><span>현재 저장소의 작성자 설정</span><button class=\"copy\" type=\"button\" aria-label=\"현재 저장소의 작성자 설정 내용 복사\">복사</button></div><pre><code>git config user.name &quot;내 이름&quot;\ngit config user.email &quot;내 이메일&quot;</code></pre></div><details><summary>긴 변경 목록 화면에서 입력이 안 되는 것 같아요.</summary><p>Git이 긴 출력을 페이지 단위로 보여 주는 화면일 수 있습니다. q 키로 나와 원래 터미널 입력 화면으로 돌아갈 수 있습니다.</p></details>"
      ],
      [
        "remote",
        "실습 2: GitHub에 전송하기",
        "<p>지금까지의 커밋은 내 컴퓨터에만 있습니다. 이제 GitHub에도 같은 기록을 올려 보겠습니다. 이것을 <strong>push</strong>라고 합니다.</p><div class=\"steps\"><div class=\"step\"><span>1</span><div><h3>GitHub에서 빈 저장소 만들기</h3><p>로그인 후 New repository를 선택합니다. 이름은 my-coverletter처럼 정합니다. 이미 로컬에 prd.md가 있으므로 README 자동 생성은 선택하지 않습니다.</p></div></div><div class=\"step\"><span>2</span><div><h3>내 저장소 주소 복사</h3><p>생성한 저장소 페이지에서 HTTPS 주소를 복사합니다. 주소의 사용자 이름이 내 계정인지 확인합니다.</p></div></div><div class=\"step\"><span>3</span><div><h3>로컬과 원격 연결</h3><p>아래 MY_USERNAME이 포함된 주소 전체를 방금 복사한 내 저장소 주소로 바꿉니다. origin은 그 주소를 짧게 부르기 위한 별명입니다.</p></div></div><div class=\"step\"><span>4</span><div><h3>커밋 보내기</h3><p>push를 실행합니다. 인증 화면이 나타나면 안내에 따라 로그인합니다. 인증 방식에 따라 브라우저 인증이나 토큰을 사용하며 GitHub 계정 비밀번호를 Git 명령에 넣지 않습니다.</p></div></div></div><div class=\"code-block\"><div class=\"code-head\"><span>터미널 · 같은 프로젝트 폴더</span><button class=\"copy\" type=\"button\" aria-label=\"터미널 · 같은 프로젝트 폴더 내용 복사\">복사</button></div><pre><code>git remote add origin https://github.com/MY_USERNAME/my-coverletter.git\ngit push -u origin main</code></pre></div><p><code>git push -u origin main</code>은 “내 main 브랜치의 기록을 origin에 보내고, 다음부터 연결할 기본 대상을 기억해 줘”라는 뜻입니다. 이후 같은 브랜치에서는 보통 <code>git push</code>만 입력합니다.</p><div class=\"callout \"><strong>성공 확인</strong><p>GitHub 저장소 페이지를 새로고침합니다. prd.md와 첫 커밋 메시지가 보이면 성공입니다. 비밀 키가 든 .env 파일이 올라가지 않았는지도 확인합니다.</p></div><h3>친구의 변경을 가져올 때는 pull</h3><p>팀원이 GitHub에 새로운 커밋을 올렸다고 내 컴퓨터의 파일이 자동으로 바뀌지는 않습니다. <code>git pull</code>은 원격 변경을 가져와 현재 브랜치에 통합합니다. 먼저 <code>git status</code>로 내가 수정 중인 파일이 있는지 확인합니다.</p><div class=\"code-block\"><div class=\"code-head\"><span>원격 변경 가져오기</span><button class=\"copy\" type=\"button\" aria-label=\"원격 변경 가져오기 내용 복사\">복사</button></div><pre><code>git status\ngit pull</code></pre></div><details class=\"understand\"><summary>이해 확인 · 커밋 메시지는 보이는데 GitHub에는 새 파일이 없어요. 무엇을 확인하나요?</summary><p>push를 했는지, 올린 원격 주소가 내 저장소인지, GitHub에서 보고 있는 브랜치가 같은지 확인합니다. 로컬 commit과 원격 push는 별개입니다.</p></details>"
      ],
      [
        "fork",
        "Clone, Fork, Branch는 각각 언제 쓸까?",
        "<div class=\"table-wrap\"><table><thead><tr><th scope=\"col\">도구</th><th scope=\"col\">하고 싶은 일</th><th scope=\"col\">예시</th></tr></thead><tbody><tr><td>Clone</td><td>이미 있는 저장소를 내 컴퓨터로 받기</td><td>강사의 프로젝트를 내려받아 실행한다.</td></tr><tr><td>Fork</td><td>GitHub에서 원본을 내 계정 아래 별도로 복사하기</td><td>강사의 저장소를 내 소유 복사본으로 만들어 수정한다.</td></tr><tr><td>Branch</td><td>한 저장소 안에서 작업 흐름을 나누기</td><td>기본 화면을 유지하면서 로그인 기능을 실험한다.</td></tr></tbody></table></div><p>Fork와 Clone은 대체 관계가 아닙니다. 보통 <strong>GitHub에서 Fork한 다음, 내 Fork를 컴퓨터로 Clone</strong>합니다. 이렇게 하면 내 수정은 내 저장소로 push할 수 있습니다.</p><p>참고 구현을 실행하려면 GitHub의 Fork 화면에서 기본 브랜치만 복사하는 옵션을 확인하세요. <strong>backend 브랜치까지 포함</strong>되어 있어야 아래 명령으로 받을 수 있습니다.</p><div class=\"code-block\"><div class=\"code-head\"><span>내 Fork 주소로 바꾼 뒤 실행</span><button class=\"copy\" type=\"button\" aria-label=\"내 Fork 주소로 바꾼 뒤 실행 내용 복사\">복사</button></div><pre><code>git clone --branch backend https://github.com/MY_USERNAME/CoverLetterIDE.git\ncd CoverLetterIDE\ngit branch --show-current</code></pre></div><p><code>clone</code>은 CoverLetterIDE 폴더를 새로 만듭니다. <code>cd CoverLetterIDE</code>는 터미널의 작업 위치를 그 폴더 안으로 이동합니다. 마지막 명령이 backend를 출력하면 원하는 브랜치를 받은 것입니다.</p><h3>브랜치: 기존 작업에서 갈라져 실험하기</h3><p>브랜치는 프로젝트 폴더를 통째로 하나 더 만드는 것과는 다릅니다. Git 안에서 이어지는 기록의 흐름을 나눕니다. 예를 들어 main은 안정된 상태로 두고 feature/login에서 로그인 기능을 작업할 수 있습니다.</p><div class=\"code-block\"><div class=\"code-head\"><span>작업 브랜치 만들기와 이동</span><button class=\"copy\" type=\"button\" aria-label=\"작업 브랜치 만들기와 이동 내용 복사\">복사</button></div><pre><code>git switch -c feature/login\n# 로그인 기능을 수정하고 commit한 다음\ngit switch main</code></pre></div><p>전환하기 전에 수정한 파일을 확인하고 필요한 변경을 커밋하세요. 다른 브랜치의 작업을 합치는 것을 <strong>merge</strong>라고 합니다. 같은 부분을 다르게 수정했다면 Git이 어느 쪽을 남길지 정할 수 없어 <strong>충돌(conflict)</strong>이 발생합니다.</p><div class=\"callout note\"><strong>충돌은 파일이 고장 났다는 뜻이 아닙니다</strong><p>두 변경 중 어떤 내용을 남길지 사람이 결정해야 한다는 뜻입니다. 변경 내용을 비교해 의도에 맞게 정리하고 저장한 뒤 add·commit합니다. 이유를 모르고 강제로 덮어쓰는 명령을 실행하지 않습니다.</p></div>"
      ],
      [
        "cheatsheet",
        "지금은 이 다섯 가지 흐름만 기억하세요",
        "<p>실제 명령어를 하나하나 외우지 않아도 괜찮습니다. <strong>Git에 어떤 기능이 있는지 알고 있다면, 필요한 작업을 AI에게 요청할 수 있습니다.</strong> 예를 들어 “지금까지 바꾼 내용을 확인하고 커밋해 줘” 또는 “새 브랜치를 만들어서 이 기능을 작업해 줘”라고 말할 수 있습니다. 중요한 것은 명령어 암기보다, 지금 어떤 작업을 하려는지 이해하는 것입니다.</p><div class=\"table-wrap\"><table><thead><tr><th scope=\"col\">질문</th><th scope=\"col\">명령</th><th scope=\"col\">의미</th></tr></thead><tbody><tr><td>무엇을 수정했지?</td><td>git status / git diff</td><td>현재 상태와 바뀐 내용 확인</td></tr><tr><td>이번 기록에 무엇을 넣지?</td><td>git add 파일명</td><td>변경 선택</td></tr><tr><td>왜 바꿨는지 남겼나?</td><td>git commit -m \"설명\"</td><td>내 컴퓨터에 이력 기록</td></tr><tr><td>온라인에도 올렸나?</td><td>git push</td><td>원격으로 내 커밋 전송</td></tr><tr><td>다른 사람은 무엇을 바꿨지?</td><td>git pull</td><td>원격 변경을 가져와 통합</td></tr></tbody></table></div><details class=\"understand\"><summary>이해 확인 · add → commit → push를 내 말로 설명해 보세요.</summary><p>add는 이번 기록에 넣을 변경을 고르는 일, commit은 그 변경에 설명을 붙여 로컬에 확정하는 일, push는 완성된 커밋을 원격 저장소에 보내는 일입니다.</p></details>"
      ]
    ],
    "sources": [
      [
        "https://git-scm.com/book/en/v2",
        "Pro Git"
      ],
      [
        "https://docs.github.com/en/get-started/using-git/about-git",
        "GitHub의 Git 안내"
      ]
    ]
  },
  {
    "id": "web",
    "group": 3,
    "title": "웹사이트는 어떻게 움직일까?",
    "en": "WEB FUNDAMENTALS",
    "intro": "자소서를 입력하는 화면은 어디서 만들어지고, 저장한 글은 어디에 남을까요? 버튼 한 번을 누른 뒤 일어나는 일을 차례대로 따라가 봅시다.",
    "sections": [
      [
        "request",
        "브라우저와 서버: 부탁하는 쪽, 처리하는 쪽",
        "<div class=\"scenario\"><span class=\"scenario-label\">상황으로 이해하기</span><h3>자소서 사이트에서 “내 프로젝트 목록”을 열었습니다.</h3><p>브라우저는 “이 학생의 프로젝트 목록을 보내 주세요”라고 요청합니다. 서비스 쪽 프로그램은 누가 요청했는지 확인하고 저장된 목록을 찾아 응답합니다. 브라우저는 응답을 받아 카드 모양으로 보여 줍니다.</p></div><p>사용자 쪽에서 요청을 보내는 프로그램을 <strong>클라이언트(client)</strong>라고 합니다. 웹사이트에서는 브라우저가 대표적인 클라이언트입니다. 요청을 받아 처리하고 응답하는 프로그램이나 컴퓨터는 <strong>서버(server)</strong>라고 합니다.</p><div class=\"steps\"><div class=\"step\"><span>1</span><div><h3>요청 보내기</h3><p>버튼 클릭 같은 행동을 계기로 필요한 데이터를 달라고 요청합니다.</p></div></div><div class=\"step\"><span>2</span><div><h3>처리하기</h3><p>서버가 로그인과 권한을 확인하고, 데이터를 찾거나 저장하거나 AI에 요청합니다.</p></div></div><div class=\"step\"><span>3</span><div><h3>응답 보여 주기</h3><p>성공·실패 결과가 돌아옵니다. 브라우저는 결과를 화면에 표시합니다.</p></div></div></div><div class=\"callout \"><strong>서버는 특별한 모양의 컴퓨터라는 뜻만은 아닙니다</strong><p>요청을 받아 처리하는 역할에 붙인 이름이기도 합니다. 개발 중 내 노트북에서 실행한 프로그램도 개발 서버가 될 수 있습니다.</p></div>"
      ],
      [
        "frontback",
        "프론트엔드와 백엔드: 화면과 처리의 역할 나누기",
        "<div class=\"grid-2\"><div class=\"concept\"><span class=\"overline\">FRONT-END</span><h3>사용자와 만나는 부분</h3><p>회사명을 적는 입력창, 저장 버튼, 자소서 편집기, 저장 중 표시를 만듭니다. 사용자가 무엇을 입력했고 화면을 어떻게 바꿔 보여 줄지 담당합니다.</p></div><div class=\"concept\"><span class=\"overline\">BACK-END</span><h3>화면 뒤에서 처리하는 부분</h3><p>누가 저장을 요청했는지 확인하고, 그 사람의 글이 맞는지 검사하고, DB에 보관한 뒤 결과를 돌려줍니다. 비밀 API 키로 AI를 부르는 일도 맡습니다.</p></div></div><div class=\"scenario\"><span class=\"scenario-label\">상황으로 이해하기</span><h3>“자소서 저장” 버튼을 눌렀을 때</h3><ol><li>프론트엔드는 입력창의 글을 읽고 “저장 중…”을 보여 줍니다.</li><li>백엔드는 로그인한 사용자에게 이 자소서를 바꿀 권한이 있는지 확인합니다.</li><li>백엔드가 글을 저장하고 성공 또는 오류를 응답합니다.</li><li>프론트엔드는 성공이면 “저장됨”, 실패면 “저장하지 못했습니다”를 보여 줍니다.</li></ol></div><h3>HTML, CSS, JavaScript는 화면에서 무엇을 할까?</h3><div class=\"table-wrap\"><table><thead><tr><th scope=\"col\">이름</th><th scope=\"col\">맡는 일</th><th scope=\"col\">자소서 사이트 예시</th></tr></thead><tbody><tr><td>HTML</td><td>화면의 내용과 구조</td><td>제목, 입력창, 버튼이 있다.</td></tr><tr><td>CSS</td><td>화면의 모양과 배치</td><td>버튼은 녹색, 편집기는 가운데, 모바일에서는 세로로 배치한다.</td></tr><tr><td>JavaScript</td><td>행동에 따른 동작</td><td>버튼을 누르면 입력값을 읽고 서버에 저장을 요청한다.</td></tr><tr><td>React</td><td>화면을 작은 부품으로 만들고 갱신하는 도구</td><td>프로젝트 카드나 AI 채팅창을 여러 곳에서 같은 규칙으로 사용한다.</td></tr></tbody></table></div><p><strong>컴포넌트(component)</strong>는 재사용할 수 있게 나눈 화면 부품입니다. 프로젝트 카드 하나를 컴포넌트로 만들면 회사명과 마감일만 바꿔 여러 카드를 표시할 수 있습니다.</p><div class=\"callout \"><strong>버튼을 숨기는 것만으로 권한을 막을 수 있을까요?</strong><p>아닙니다. 사용자는 화면을 거치지 않고 요청을 보낼 수도 있습니다. 남의 자소서를 바꾸지 못하게 하려면 서버나 DB에서도 요청자의 권한을 확인해야 합니다.</p></div><h3>목업부터 만드는 이유</h3><p><strong>목업(mockup)</strong>은 실제 저장이나 AI가 연결되기 전에 화면과 사용 흐름을 확인하는 시제품입니다. 처음에는 가짜 프로젝트 목록과 미리 정한 AI 응답을 사용해도 됩니다. “어디에 입력하고 어떤 결과가 보여야 하는지”부터 확인하면 뒤에 연결할 기능이 명확해집니다.</p>"
      ],
      [
        "hosting",
        "호스팅: 내 컴퓨터의 화면을 인터넷에 올리기",
        "<p>개발 중 <code>http://localhost:5173</code> 같은 주소를 보게 됩니다. <strong>localhost는 지금 브라우저를 쓰는 내 컴퓨터</strong>를 뜻합니다. 5173은 여러 프로그램 중 이 개발 서버를 구분하는 번호인 <strong>포트(port)</strong>입니다.</p><p>이 주소를 친구에게 보내면 친구는 내 컴퓨터가 아니라 친구 자신의 컴퓨터에 접속하려 합니다. 다른 사람도 보게 하려면 인터넷에서 접속 가능한 곳에 앱을 올려야 합니다.</p><div class=\"steps\"><div class=\"step\"><span>1</span><div><h3>개발 서버에서 확인</h3><p>내 컴퓨터에서 프로그램을 실행하고 화면이 제대로 동작하는지 봅니다. 파일을 고치면 빠르게 결과를 확인하기 위한 환경입니다.</p></div></div><div class=\"step\"><span>2</span><div><h3>빌드하기</h3><p>개발할 때 쓰던 파일을 배포에 맞게 정리하고 변환합니다. 이 작업을 build라고 합니다. 결과물이 들어가는 폴더는 도구에 따라 다릅니다.</p></div></div><div class=\"step\"><span>3</span><div><h3>배포하기</h3><p>빌드 결과를 Cloudflare 같은 서비스에 올려 실행 가능하게 합니다. 이 작업을 deploy라고 합니다.</p></div></div><div class=\"step\"><span>4</span><div><h3>배포 주소로 접속</h3><p>서비스가 제공한 인터넷 주소를 브라우저에서 열어 봅니다. 다른 컴퓨터에서도 같은 주소로 접근할 수 있습니다.</p></div></div></div><p><strong>호스팅(hosting)</strong>은 접속한 사람에게 웹사이트를 제공할 수 있도록 앱을 보관하고 실행하는 일입니다. <strong>Cloudflare Workers</strong>는 이 수업에서 웹 앱을 올릴 환경입니다. 화면 파일 전달뿐 아니라 필요한 서버 코드도 실행할 수 있습니다.</p><div class=\"table-wrap\"><table><thead><tr><th scope=\"col\">새로 만난 말</th><th scope=\"col\">이 수업에서 뜻하는 것</th></tr></thead><tbody><tr><td>도메인</td><td>사람이 기억하기 쉬운 사이트 이름. 예: example.com</td></tr><tr><td>DNS</td><td>그 이름으로 어느 인터넷 서비스를 찾아갈지 연결하는 체계</td></tr><tr><td>정적 파일</td><td>요청마다 새로 만들지 않고 전달하는 HTML, CSS, JavaScript, 이미지 등의 파일</td></tr></tbody></table></div><details class=\"understand\"><summary>이해 확인 · npm run dev로 화면이 보이면 배포가 끝난 건가요?</summary><p>아닙니다. 내 컴퓨터의 개발 서버에서 확인한 것입니다. 배포 명령을 실행하고 인터넷 주소에서 열리는지 따로 확인해야 합니다.</p></details>"
      ],
      [
        "database",
        "DB: 새로고침해도 글이 남아 있는 이유",
        "<div class=\"scenario\"><span class=\"scenario-label\">상황으로 이해하기</span><h3>입력창에 자소서를 썼는데 새로고침하니 사라졌습니다.</h3><p>화면의 임시 기억에만 글을 담아 뒀다면 다시 열 때 사라질 수 있습니다. 나중에 다른 기기에서도 이어 쓰려면 사용자의 글을 서비스 쪽에 저장해야 합니다. 이런 데이터를 체계적으로 보관하고 찾는 시스템이 데이터베이스, 줄여서 DB입니다.</p></div><p>처음에는 DB를 여러 개의 표로 생각하면 이해하기 쉽습니다. 하나의 표를 <strong>테이블(table)</strong>, 한 건의 기록을 <strong>행(row)</strong>, 회사명·직무 같은 항목을 <strong>열(column)</strong>이라고 부릅니다.</p><div class=\"table-wrap\"><table><thead><tr><th scope=\"col\">프로젝트 ID</th><th scope=\"col\">소유자 ID</th><th scope=\"col\">회사</th><th scope=\"col\">직무</th></tr></thead><tbody><tr><td>p-01</td><td>student-A</td><td>A회사</td><td>데이터 분석 인턴</td></tr><tr><td>p-02</td><td>student-A</td><td>B회사</td><td>서비스 기획</td></tr><tr><td>p-03</td><td>student-B</td><td>C회사</td><td>웹 개발</td></tr></tbody></table></div><p>이 표에서 학생 A가 로그인하면 p-01과 p-02만 보여 줘야 합니다. <strong>ID</strong>는 항목을 구분하는 고유 이름표입니다. 같은 이름의 사용자가 있어도 ID로 구별할 수 있습니다.</p><h3>프로젝트 표와 자소서 표를 연결하기</h3><p>회사 하나에 자소서 문항이 여러 개일 수 있습니다. 각 자소서 행에 프로젝트 ID를 함께 저장하면 어떤 프로젝트에 속하는지 알 수 있습니다.</p><div class=\"table-wrap\"><table><thead><tr><th scope=\"col\">자소서 ID</th><th scope=\"col\">프로젝트 ID</th><th scope=\"col\">문항</th><th scope=\"col\">답변</th></tr></thead><tbody><tr><td>e-01</td><td>p-01</td><td>지원 동기</td><td>제가 이 직무에 관심을 가진 계기는…</td></tr><tr><td>e-02</td><td>p-01</td><td>협업 경험</td><td>팀 프로젝트에서 저는…</td></tr></tbody></table></div><h3>Supabase는 DB뿐 아니라 이런 기능도 제공합니다</h3><div class=\"table-wrap\"><table><thead><tr><th scope=\"col\">기능 이름</th><th scope=\"col\">맡기는 일</th><th scope=\"col\">우리 앱에서</th></tr></thead><tbody><tr><td>PostgreSQL DB</td><td>구조화된 데이터를 저장하고 조회</td><td>회사명, 자소서 본문, 크레딧 잔액 보관</td></tr><tr><td>Auth</td><td>로그인한 사용자를 확인하고 세션 관리</td><td>Google 로그인 후 누구인지 확인</td></tr><tr><td>Storage</td><td>PDF나 이미지 같은 파일 원본 보관</td><td>증빙 서류 업로드와 다운로드</td></tr><tr><td>Edge Functions</td><td>서비스 쪽에서 작은 프로그램 실행</td><td>권한 확인 후 AI 요청 보내기</td></tr></tbody></table></div><p><strong>SQL</strong>은 “이 사용자의 프로젝트를 찾아 줘”처럼 DB에 요청하는 언어입니다. <strong>RLS</strong>는 표 전체가 아니라 행마다 누가 읽고 바꿀 수 있는지 정하는 규칙입니다. 예를 들어 “행의 소유자 ID가 로그인한 사용자와 같을 때만 허용”하도록 설정합니다.</p><p><strong>Migration</strong>은 테이블이나 접근 규칙을 만드는 변경을 파일로 남긴 것입니다. 다른 실습 환경에도 같은 구조를 순서대로 적용할 수 있게 해 줍니다.</p><div class=\"callout \"><strong>파일 원본과 파일 정보는 구분합니다</strong><p>수료증 PDF 자체는 Storage에 넣고, “누가 올린 어떤 파일이며 어디에 있는지”는 DB 표에 적을 수 있습니다. DB와 파일 저장소가 서로 다른 역할을 맡는 예입니다.</p></div>"
      ],
      [
        "api",
        "API: 프로그램끼리 주고받는 주문서",
        "<div class=\"scenario\"><span class=\"scenario-label\">상황으로 이해하기</span><h3>식당에서 음식을 주문하는 과정을 떠올려 봅시다.</h3><p>손님은 주방 설비를 직접 조작하지 않습니다. 정해진 메뉴와 주문 방식에 따라 요청하고 결과를 받습니다. API도 프로그램끼리 무엇을 어떻게 요청할 수 있는지 정한 약속입니다.</p></div><p>우리 앱의 브라우저가 “이 프로젝트의 자소서를 분석해 줘”라고 요청할 때는, 정해진 주소에 필요한 정보를 보내야 합니다. 이런 요청을 인터넷에서 주고받는 대표적인 약속이 <strong>HTTP</strong>입니다.</p><div class=\"table-wrap\"><table><thead><tr><th scope=\"col\">요청의 부분</th><th scope=\"col\">쉽게 읽으면</th><th scope=\"col\">예시</th></tr></thead><tbody><tr><td>Endpoint · 주소</td><td>어느 기능에 부탁하는가?</td><td>/functions/v1/analyze-project</td></tr><tr><td>Method · 요청 종류</td><td>무슨 종류의 일을 하는가?</td><td>GET은 조회, POST는 데이터 전달·처리 요청 등에 사용</td></tr><tr><td>Headers · 부가 정보</td><td>누구의 요청이고 어떤 형식인가?</td><td>로그인 토큰, JSON 형식 안내</td></tr><tr><td>Body · 본문</td><td>일을 하는 데 어떤 정보가 필요한가?</td><td>projectId, requestId</td></tr><tr><td>Response · 응답</td><td>잘 처리했는가? 결과는 무엇인가?</td><td>성공 여부 또는 오류 정보</td></tr></tbody></table></div><p><strong>JSON</strong>은 항목 이름과 값을 짝지어 전달하는 데이터 형식입니다. 아래는 실제 실행 명령이 아니라 서버에 보내는 요청의 모습을 이해하기 위한 예시입니다.</p><div class=\"code-block\"><div class=\"code-head\"><span>요청 구조 · 설명용</span><button class=\"copy\" type=\"button\" aria-label=\"요청 구조 · 설명용 내용 복사\">복사</button></div><pre><code>POST /functions/v1/analyze-project\nAuthorization: Bearer &lt;로그인한 사용자의 토큰&gt;\nContent-Type: application/json\n\n{\n  &quot;projectId&quot;: &quot;p-01&quot;,\n  &quot;requestId&quot;: &quot;이번-요청의-고유-ID&quot;\n}</code></pre></div><p><code>projectId</code>는 어느 프로젝트인지, <code>requestId</code>는 어느 요청인지 구분합니다. 같은 버튼이 두 번 눌려도 동일한 요청을 중복 처리하지 않게 할 때 requestId가 도움이 됩니다.</p><p>응답에는 처리 결과를 나타내는 <strong>상태 코드</strong>도 있습니다. 200대는 대체로 성공, 400대는 요청·인증·권한 등 확인이 필요한 경우, 500대는 서버 쪽 처리 실패를 나타냅니다. 오류가 났다면 숫자와 응답 메시지를 함께 봅니다.</p><details class=\"understand\"><summary>이해 확인 · API를 연결한다는 말은 무슨 뜻인가요?</summary><p>우리 프로그램이 다른 프로그램의 약속에 맞춰 요청을 보내고, 응답을 읽어 실제 기능에 사용하는 코드를 작성한다는 뜻입니다. 계정 가입이나 키 발급만으로 연결이 끝나지는 않습니다.</p></details><p><a class=\"inline-link\" href=\"https://slides.hwpark.net/backend-dev/1\" target=\"_blank\" rel=\"noopener\">강사가 추천한 백엔드 개발 슬라이드</a></p>"
      ]
    ],
    "sources": [
      [
        "https://developer.mozilla.org/en-US/docs/Learn_web_development",
        "MDN 웹 기초"
      ],
      [
        "https://developers.cloudflare.com/workers/static-assets/",
        "Workers 정적 파일"
      ],
      [
        "https://supabase.com/docs/guides/database/postgres/row-level-security",
        "Supabase RLS"
      ],
      [
        "https://github.com/rhdn520/CoverLetterIDE/blob/backend/supabase/functions/analyze-project/index.ts",
        "분석 API 구현"
      ],
      [
        "https://slides.hwpark.net/backend-dev/1",
        "강사 추천: 웹과 백엔드"
      ]
    ]
  },
  {
    "id": "ai",
    "group": 3,
    "title": "세 가지 AI, 서로 다른 역할",
    "en": "MODELS & RETRIEVAL",
    "intro": "“AI를 연결한다”는 말 안에는 서로 다른 작업이 들어 있습니다. 답변을 쓰는 일, 비슷한 글을 찾는 일, 기준에 따라 점수를 매기는 일을 나눠 봅시다.",
    "sections": [
      [
        "model",
        "모델은 무엇이고, 우리는 무엇을 맡길까?",
        "<p><strong>AI 모델</strong>은 많은 예시를 학습한 뒤 새로운 입력에서 결과를 계산하는 프로그램입니다. 이 수업에서는 모델을 처음부터 훈련하지 않고, 이미 만들어진 모델에 API로 요청합니다.</p><div class=\"scenario\"><span class=\"scenario-label\">상황으로 이해하기</span><h3>“이 자기소개서를 개선해 줘”를 세 가지 일로 나누면</h3><ol><li><strong>찾기:</strong> 비교할 만한 자소서는 어떤 글일까?</li><li><strong>판단하기:</strong> 이 경험이 지원 직무와 얼마나 관련 있을까?</li><li><strong>쓰기:</strong> 어떤 부분을 왜 고쳐야 하는지 어떻게 설명할까?</li></ol><p>한 모델에게 모두 요청할 수도 있지만, 각 일에 맞는 도구로 나누면 결과와 실패 원인을 확인하기 쉬워집니다.</p></div><p>이 모델들이 웹사이트 전체를 대신 만드는 것은 아닙니다. 어떤 내용을 보내고 결과를 어디에 저장하며 화면에 어떻게 보여 줄지는 우리가 만든 프로그램이 정합니다.</p>"
      ],
      [
        "architectures",
        "Encoder와 Decoder: 표현하기와 이어 쓰기",
        "<p>사람이 문장을 읽고 답을 쓸 때도 “내용 파악”과 “말로 표현”은 구분할 수 있습니다. 언어 모델의 구조를 설명할 때 등장하는 Encoder와 Decoder도 우선 어떤 계산을 맡는지부터 이해해 봅시다.</p><div class=\"grid-2\"><div class=\"concept\"><span class=\"overline\">ENCODER</span><h3>입력을 읽어 숫자 표현 만들기</h3><p>문장 안의 여러 단어 관계를 살펴, 입력의 특징을 숫자로 표현합니다. 예를 들어 “고객의 불편을 해결했다”라는 문장이 어떤 의미를 가지는지 후속 계산에서 사용할 수 있게 나타냅니다.</p></div><div class=\"concept\"><span class=\"overline\">DECODER</span><h3>앞선 내용에 이어 다음 조각 만들기</h3><p>지금까지 주어진 내용을 바탕으로 다음에 올 텍스트 조각을 예측합니다. 만들어진 조각을 다시 맥락에 넣어 다음 조각을 생성하는 과정을 반복해 답변을 만듭니다.</p></div></div><p><strong>토큰(token)</strong>은 모델이 텍스트를 나누어 처리하는 조각입니다. 단어 하나일 수도 있고 단어의 일부일 수도 있습니다. “다음 토큰 생성”은 답을 한꺼번에 완성하는 대신 조각을 이어 만들어 간다는 뜻으로 이해하면 됩니다.</p><h3>대표적인 사용 예를 연결해 보세요</h3><p>Encoder 계열의 대표 예인 BERT는 입력의 표현을 이용하는 분류 같은 작업에 활용됩니다. GPT처럼 많은 생성형 언어 모델은 Decoder 기반으로 답변을 만듭니다. <strong>LLM</strong>은 Large Language Model, 즉 큰 규모의 언어 모델을 뜻합니다.</p><p>다만 “Encoder는 임베딩, Decoder는 채팅”이라고 완전히 일대일로 외우지는 마세요. 두 구조를 함께 사용하는 모델도 있고, 임베딩을 만드는 방법도 여러 가지입니다. 구조와 서비스에서 맡기는 역할은 구분합니다.</p><a class=\"video-link\" href=\"https://www.youtube.com/watch?v=MTsx4XDPMNg\" target=\"_blank\" rel=\"noopener\"><span class=\"play\">▶</span><div><strong>Encoder / Decoder 이해를 위한 참고 영상</strong><small>강사 추천 · 입력을 어떻게 읽고 출력을 어떻게 만드는지 생각하며 보기</small></div></a><details class=\"understand\"><summary>이해 확인 · Decoder가 문장을 자연스럽게 만들면 사실도 항상 맞나요?</summary><p>아닙니다. 자연스럽게 이어지는 텍스트를 만드는 능력과 사실을 정확히 확인하는 것은 다릅니다. 자소서에 없던 경험이나 수치를 만들어 넣지 않았는지 사람이 검토해야 합니다.</p></details>"
      ],
      [
        "roles",
        "문장 생성, 의미 검색, 기준에 따른 판단",
        "<div class=\"table-wrap\"><table><thead><tr><th scope=\"col\">맡기는 일</th><th scope=\"col\">받는 결과</th><th scope=\"col\">우리 사이트의 예</th></tr></thead><tbody><tr><td>생성형 LLM에 문장 요청</td><td>사람이 읽을 텍스트</td><td>“어떤 부분을 고치면 좋을지 설명해 줘.”</td></tr><tr><td>임베딩 모델에 표현 요청</td><td>텍스트를 나타내는 숫자 목록</td><td>“비교할 만한 경험을 다룬 글을 찾아 줘.”</td></tr><tr><td>Jev에 기준에 따른 판단 요청</td><td>정해진 형태의 점수·선택 등</td><td>“경험의 구체성을 이 기준으로 평가해 줘.”</td></tr></tbody></table></div><h3>임베딩은 “의미를 비교할 수 있게 만든 좌표”로 생각하세요</h3><p>지도에서는 위치를 좌표로 나타내고 가까운 곳을 찾습니다. 텍스트도 모델이 여러 숫자로 나타내면 비슷한 표현을 비교할 수 있습니다. 이 숫자 표현이 <strong>임베딩(embedding)</strong>이고, 숫자가 나열된 형태를 <strong>벡터(vector)</strong>라고 부릅니다.</p><p>예를 들어 “매장에서 고객 불만을 해결했다”와 “상담 업무에서 이용자 불편을 개선했다”는 단어가 같지 않아도 의미가 가까울 수 있습니다. 임베딩을 비교하면 단순히 같은 단어를 찾는 검색보다 이런 관계를 포착하는 데 도움이 됩니다.</p><p>실제 벡터는 종이에 그릴 수 있는 두세 개 좌표보다 훨씬 많은 숫자로 구성될 수 있습니다. 숫자 하나하나가 “친절함”, “개발 능력” 같은 사람이 붙인 항목을 그대로 뜻하지는 않습니다. 같은 모델과 설정으로 만든 벡터끼리 비교합니다.</p><div class=\"callout \"><strong>직접 둘러보기: TensorFlow Embedding Projector</strong><p><a class=\"inline-link\" href=\"https://projector.tensorflow.org/\" target=\"_blank\" rel=\"noopener\">Embedding Projector 열기</a>에서 예제 데이터를 선택하고 점 하나를 클릭해 보세요. 이웃으로 모인 항목들이 어떤 관계가 있는지 관찰합니다. 표시된 데이터가 단어인지 이미지인지도 먼저 확인하세요.</p></div><p>Projector는 고차원 숫자를 2D·3D로 줄여 보여 주는 시각화 도구입니다. 화면에서의 거리는 원래 공간의 관계를 단순화한 것이므로 완벽한 의미 지도로 보지는 않습니다.</p><div class=\"callout \"><strong>비슷한 글 ≠ 좋은 글</strong><p>유사 검색은 비교 후보를 찾는 일입니다. 그 글이 좋은 자소서인지, 내 직무에 적합한지, 근거로 사용해도 되는지는 별도로 판단해야 합니다.</p></div>"
      ],
      [
        "pipeline",
        "우리 자소서는 어떤 순서로 분석될까?",
        "<div class=\"steps\"><div class=\"step\"><span>1</span><div><h3>비교 후보를 찾습니다</h3><p>지원 직무, 프로필, 자소서의 숫자 표현을 만듭니다. 저장된 사례들의 표현과 비교해 비슷한 후보를 최대 20개 찾습니다. 이를 Top-20 검색이라고 합니다. pgvector는 이런 벡터 비교를 PostgreSQL DB에서 하도록 도와주는 확장 기능입니다.</p></div></div><div class=\"step\"><span>2</span><div><h3>내 상황에 더 맞는 순서로 다시 고릅니다</h3><p>글의 표현이 비슷해도 지원 직무나 경험 수준은 다를 수 있습니다. 후보가 내 프로필에 얼마나 관련 있는지 판단해 순서를 바꾸는 것을 재정렬, re-ranking이라고 합니다.</p></div></div><div class=\"step\"><span>3</span><div><h3>비교에 쓸 사례를 나눕니다</h3><p>후보 중 합격·불합격 사례를 각각 최대 5개 골라 봅니다. 사례가 5개보다 적으면 부족하다는 사실도 결과에 드러나야 합니다.</p></div></div><div class=\"step\"><span>4</span><div><h3>공통 특징을 보고 내 글에 연결합니다</h3><p>LLM이 비교 사례의 특징을 요약하고, 내 자소서의 어느 부분이 강점인지, 어디에 근거가 부족한지 설명하게 합니다. 남의 문장을 그대로 복사하는 기능을 만들려는 것이 아닙니다.</p></div></div></div><p>같은 입력을 다시 분석할 때 이전 결과를 재사용하면 시간과 비용을 줄일 수 있습니다. 이것을 <strong>캐시(cache)</strong>라고 합니다. 자소서나 프로필이 바뀌었다면 과거 결과를 그대로 쓰면 안 됩니다.</p><div class=\"callout \"><strong>점수가 보인다고 모델 호출이 성공한 것은 아닙니다</strong><p>참고 구현은 Jev 호출에 실패하면 글의 분량 등을 이용한 대체 점수를 계산합니다. 이런 단순 규칙 기반 처리를 휴리스틱이라고 합니다. 사용자가 실제 AI 평가와 대체 점수를 구분할 수 있게 표시해야 합니다.</p></div><details><summary>구현할 때 확인할 것: Jev API 형식</summary><p>backend 코드에는 ranking 타입을 보내는 구현이 있습니다. 확인한 TypeSafe 공식 문서는 Choice·Score·Noul을 안내하므로, 실제 연결 시 현재 지원 형식을 확인해야 합니다. 후보별 관련성을 Score로 얻어 코드에서 정렬하는 방식도 검토할 수 있습니다. 처음 배우는 단계에서는 이 요청 형식을 외울 필요는 없습니다.</p></details>"
      ],
      [
        "judgment",
        "Jev가 판단하려면 기준이 필요합니다",
        "<p>TypeSafe의 Jev는 자연어 상태를 읽고 정해진 형태의 판단을 반환하는 System One 모델입니다. 예를 들어 “직무 경험의 근거가 구체적인가?”를 별도 항목으로 평가하고, 결과를 코드에서 조합할 수 있습니다.</p><div class=\"table-wrap\"><table><thead><tr><th scope=\"col\">수업용 평가 항목</th><th scope=\"col\">관찰할 근거</th></tr></thead><tbody><tr><td>경험의 구체성</td><td>무엇을 했는지 행동과 결과가 있는가</td></tr><tr><td>직무 관련성</td><td>그 경험이 지원 직무에 어떻게 연결되는가</td></tr><tr><td>주장의 일관성</td><td>서로 모순되거나 근거 없는 주장이 없는가</td></tr></tbody></table></div><p>이 표는 수업용 평가 기준 예시입니다. 점수는 기준에 따른 모델 판단이며, 실제 합격 확률이나 객관적인 능력 측정값이 아닙니다.</p><a class=\"video-link\" href=\"https://youtu.be/YGgNBcIgI4s?si=4rHF32zZp7FhEq6w\" target=\"_blank\" rel=\"noopener\"><span class=\"play\">▶</span><div><strong>강사가 제시한 참고 영상 보기</strong><small>YouTube · AI 모델 이야기</small></div></a>"
      ]
    ],
    "sources": [
      [
        "https://arxiv.org/abs/1706.03762",
        "Transformer 원 논문"
      ],
      [
        "https://arxiv.org/abs/1810.04805",
        "BERT 원 논문"
      ],
      [
        "https://platform.openai.com/docs/guides/embeddings",
        "OpenAI 임베딩"
      ],
      [
        "https://docs.typesafe.ai/introduction",
        "TypeSafe 공식 문서"
      ],
      [
        "https://github.com/rhdn520/CoverLetterIDE/blob/backend/supabase/functions/analyze-project/index.ts",
        "실제 분석 파이프라인"
      ],
      [
        "https://projector.tensorflow.org/",
        "Embedding Projector"
      ],
      [
        "https://www.youtube.com/watch?v=MTsx4XDPMNg",
        "강사 추천: Encoder / Decoder 영상"
      ]
    ]
  },
  {
    "id": "auth",
    "group": 3,
    "title": "OAuth, JWT, 그리고 권한",
    "en": "AUTHENTICATION",
    "intro": "Google로 로그인한 뒤에는 우리 앱이 어떻게 나를 알아볼까요? 비밀번호를 누가 확인하는지, 로그인 상태를 어떻게 이어 가는지부터 살펴봅니다.",
    "sections": [
      [
        "why",
        "Google로 로그인하면 우리 앱은 비밀번호를 받지 않습니다",
        "<div class=\"scenario\"><span class=\"scenario-label\">상황으로 이해하기</span><h3>처음 방문한 자소서 사이트에서 Google 로그인을 누릅니다.</h3><p>사용자는 Google 화면에서 로그인합니다. 우리 사이트에 Google 비밀번호를 직접 알려 주지 않아도 됩니다. 로그인 결과를 전달받은 우리 서비스는 “이 Google 계정에 연결된 우리 앱 사용자는 누구인가?”를 확인합니다.</p></div><p>이 과정에서 필요한 것이 <strong>인증</strong>과 <strong>세션</strong>입니다. 인증은 “누구인지 확인하기”, 세션은 “그 사람이 로그인한 상태를 다음 요청에서도 이어 가기”라고 생각하면 됩니다.</p><p>로그인 후 자소서를 저장할 때마다 비밀번호를 다시 입력하지 않는 이유는 세션을 통해 이전에 확인한 로그인 상태를 이어 가기 때문입니다. 다만 세션이나 토큰에는 유효 기간과 검증 규칙이 있습니다.</p>"
      ],
      [
        "terms",
        "OAuth, 인증, 권한을 나눠 읽기",
        "<div class=\"table-wrap\"><table><thead><tr><th scope=\"col\">질문</th><th scope=\"col\">용어</th><th scope=\"col\">우리 사이트 예시</th></tr></thead><tbody><tr><td>누구인가요?</td><td>인증 · Authentication</td><td>학생 A가 로그인했다는 것을 확인</td></tr><tr><td>이 일을 해도 되나요?</td><td>인가 · Authorization</td><td>A가 자기 자소서는 고칠 수 있지만 B의 글은 못 고치게 제한</td></tr><tr><td>어떤 정보를 맡겨도 되나요?</td><td>권한 위임 · OAuth 2.0</td><td>Google과 우리 서비스 사이에 정해진 접근 권한을 주고받음</td></tr></tbody></table></div><p><strong>OAuth 2.0</strong>은 한 서비스의 권한을 다른 서비스에 위임하는 약속입니다. Google 로그인에서 신원 정보를 확인하는 데는 그 위에 구축된 <strong>OpenID Connect</strong>도 사용됩니다. 지금은 이 규격을 직접 구현하기보다 Supabase가 제공하는 로그인 기능을 연결합니다.</p><div class=\"callout \"><strong>로그인 성공과 데이터 접근 허용은 다른 확인입니다</strong><p>학교 정문에서 학생증을 확인했다고 모든 연구실에 들어갈 수 있는 것은 아닙니다. 로그인한 사용자라도 다른 사람의 데이터에 접근할 권한이 생기는 것은 아닙니다.</p></div>"
      ],
      [
        "journey",
        "로그인 후 우리 사이트로 돌아오는 길",
        "<p><strong>콜백(callback) 주소</strong>는 외부 서비스가 일을 마친 뒤 되돌아올 주소입니다. 로그인에서는 Google에 갔다가 Supabase를 거쳐 우리 웹사이트로 돌아옵니다.</p><div class=\"steps\"><div class=\"step\"><span>1</span><div><h3>브라우저: Google 로그인 버튼 누르기</h3><p>우리 화면이 Supabase에 Google 로그인을 시작해 달라고 요청합니다.</p></div></div><div class=\"step\"><span>2</span><div><h3>Google: 사용자 확인</h3><p>Google 화면에서 사용자가 로그인하고 필요한 동의 과정을 진행합니다.</p></div></div><div class=\"step\"><span>3</span><div><h3>Supabase: Google의 확인 결과 받기</h3><p>Google은 미리 등록된 Supabase 콜백으로 결과를 돌려줍니다. Supabase가 이 결과를 처리해 우리 앱의 사용자와 연결합니다.</p></div></div><div class=\"step\"><span>4</span><div><h3>우리 앱: 앱 콜백에서 로그인 상태 복원</h3><p>Supabase가 우리 앱의 /auth/callback으로 돌려보냅니다. 참고 앱은 잠시 쓰는 코드를 교환해 세션을 만듭니다.</p></div></div><div class=\"step\"><span>5</span><div><h3>다음 요청: 로그인 정보 함께 보내기</h3><p>자소서를 읽거나 저장할 때 로그인 정보를 담은 토큰을 함께 보냅니다. 서버는 유효성을 확인하고 접근 권한도 검사합니다.</p></div></div></div><div class=\"callout \"><strong>돌아오는 주소를 두 번 설정하는 이유</strong><p>Google → Supabase, Supabase → 우리 웹사이트라는 두 번의 이동이 있기 때문입니다. Google 설정에는 Supabase 콜백을, Supabase 설정에는 우리 앱 복귀 주소를 넣습니다.</p></div><details><summary>PKCE는 무엇인가요?</summary><p>로그인을 시작한 앱이 나중에 받은 코드를 교환하는 당사자인지 확인하도록 돕는 방식입니다. 로그인 시작 때 만든 확인용 값을 콜백에서 사용합니다. 처음에는 암호 기술을 직접 구현하지 말고 사용하는 SDK의 안내대로 연결하세요. SDK는 이런 기능을 코드에서 쉽게 쓰도록 제공하는 도구 모음입니다.</p></details>"
      ],
      [
        "jwt",
        "JWT: 요청에 함께 보내는 서명된 확인 정보",
        "<p><strong>토큰(token)</strong>은 로그인한 요청임을 확인하는 데 쓰는 데이터입니다. 이 문맥의 토큰은 AI가 텍스트를 나누는 토큰과 다른 뜻입니다. <strong>JWT</strong>는 이런 정보를 담아 전달하는 형식 중 하나입니다.</p><p>일반적인 서명된 JWT는 점으로 구분된 세 부분을 가집니다. 형태는 <code>header.payload.signature</code>입니다.</p><div class=\"table-wrap\"><table><thead><tr><th scope=\"col\">부분</th><th scope=\"col\">쉬운 설명</th><th scope=\"col\">예</th></tr></thead><tbody><tr><td>Header</td><td>어떤 방식으로 서명을 확인할지 알려 주는 표지</td><td>서명 알고리즘 등</td></tr><tr><td>Payload</td><td>토큰이 전달하는 내용</td><td>사용자 ID, 만료 시각, 발급자 등</td></tr><tr><td>Signature</td><td>발급자가 서명한 정보인지 확인할 부분</td><td>중간에 내용이 바뀌었는지 검증</td></tr></tbody></table></div><p>서명은 암호화와 다릅니다. 일반적인 서명된 JWT의 내용은 읽을 수 있으므로 비밀번호나 비밀 API 키를 넣는 곳이 아닙니다. 내용을 읽었다고 믿어서도 안 됩니다. 서버는 서명, 만료, 올바른 발급자와 대상인지 등을 검증해야 합니다.</p><div class=\"scenario\"><span class=\"scenario-label\">상황으로 이해하기</span><h3>토큰의 사용자 ID를 B로 바꾸면 B가 될 수 있을까요?</h3><p>정상적인 서버는 바뀐 내용을 서명 검증에서 걸러냅니다. 그 뒤에도 요청한 자소서의 소유자가 누구인지 검사합니다. “내용 읽기”, “토큰 검증”, “접근 권한 검사”는 각각 다른 단계입니다.</p></div><details class=\"understand\"><summary>이해 확인 · Google 로그인만 붙이면 남의 자소서 접근도 자동으로 막히나요?</summary><p>아닙니다. 로그인은 누구인지 알려 줍니다. 그 사용자가 어떤 데이터를 읽고 바꿀 수 있는지는 서버 검사와 DB의 RLS 규칙으로 따로 제한합니다.</p></details>"
      ]
    ],
    "sources": [
      [
        "https://openid.net/developers/how-connect-works/",
        "OpenID Connect"
      ],
      [
        "https://supabase.com/docs/guides/auth/social-login/auth-google",
        "Supabase Google 로그인"
      ],
      [
        "https://supabase.com/docs/guides/auth/jwts",
        "Supabase JWT"
      ]
    ]
  },
  {
    "id": "practice",
    "group": 4,
    "title": "PRD에서 프론트엔드 목업까지",
    "en": "BUILD / 01",
    "intro": "지금까지 읽은 내용을 실제 파일과 화면으로 바꿔 봅니다. 명령은 터미널에, 기획 내용은 문서에, 구현 요청은 에이전트 채팅에 넣는다는 점부터 구분하세요.",
    "sections": [
      [
        "where",
        "무엇을 어느 창에 넣어야 할까요?",
        "<div class=\"table-wrap\"><table><thead><tr><th scope=\"col\">할 일</th><th scope=\"col\">사용할 곳</th><th scope=\"col\">예</th></tr></thead><tbody><tr><td>기획 문서 작성</td><td>VS Code 편집기</td><td>prd.md에 복사한 PRD 원문 붙여 넣기</td></tr><tr><td>프로그램 실행</td><td>VS Code 터미널</td><td>npm run dev 입력 후 Enter</td></tr><tr><td>AI에게 구현 요청</td><td>Codex 또는 Kiro 채팅</td><td>“prd.md를 읽고 목업을 만들어 줘”</td></tr><tr><td>화면 확인</td><td>브라우저</td><td>터미널에 나온 localhost 주소 열기</td></tr></tbody></table></div><p>코드 블록 위의 설명을 먼저 읽으세요. <strong>prd.md</strong>라고 적혀 있으면 파일 내용이고, <strong>터미널</strong>이라고 적혀 있으면 실행할 명령입니다. <strong>프롬프트</strong>는 에이전트에게 보내는 요청 문장입니다.</p>"
      ],
      [
        "workspace",
        "폴더를 열고 main 브랜치 PRD 복사하기",
        "<div class=\"steps\"><div class=\"step\"><span>1</span><div><h3>프로젝트 폴더 열기</h3><p>my-coverletter라는 빈 폴더를 만들고 VS Code의 File → Open Folder로 엽니다. 왼쪽 탐색기에 폴더 이름이 보이는지 확인합니다.</p></div></div><div class=\"step\"><span>2</span><div><h3>PRD 원문 넣기</h3><p>PRD 노트의 main 브랜치 원문을 전체 복사해 prd.md 파일에 붙여 넣고 저장합니다. <a class=\"inline-link\" href=\"#prd/acceptance\">PRD 원문 복사 위치</a></p></div></div><div class=\"step\"><span>3</span><div><h3>기록할 문서 만들기</h3><p>SPECIFICATION.md와 new_requests.md라는 빈 문서를 만듭니다. 첫 문서는 동작과 구현 상태, 두 번째는 새 요청과 문제를 기록할 곳입니다.</p></div></div><div class=\"step\"><span>4</span><div><h3>첫 Git 기록 만들기</h3><p>Git 노트의 실습 순서대로 .gitignore를 만들고 init → add → commit을 수행합니다. 필요하면 GitHub 저장소에 push합니다.</p></div></div></div><div class=\"file-tree\">my-coverletter/\n  prd.md                 ← 만들 제품의 요구사항\n  SPECIFICATION.md       ← 구체적인 동작과 완료 상태\n  new_requests.md        ← 추가 요청과 수정할 문제\n  .gitignore             ← Git 기록에서 제외할 목록\n  web/                   ← 에이전트가 만들 웹 앱</div><div class=\"callout note\"><strong>참고 저장소를 clone한 경우</strong><p>위 순서는 빈 폴더에서 시작하는 경로입니다. 기존 저장소를 clone했다면 이미 파일과 Git 기록이 있으므로 다시 init하거나 새 프로젝트를 덮어 만들지 않습니다.</p></div>"
      ],
      [
        "prompt",
        "에이전트에게 목업 요청하기",
        "<div class=\"code-block\"><div class=\"code-head\"><span>에이전트에게 전달할 프롬프트</span><button class=\"copy\" type=\"button\" aria-label=\"에이전트에게 전달할 프롬프트 내용 복사\">복사</button></div><pre><code>prd.md를 읽고 이번 단계의 범위를 정리해 줘.\n\n먼저 SPECIFICATION.md에 화면과 수용 기준을 작성한 뒤,\nweb 폴더에 프론트엔드 목업을 구현해 줘.\n\n- React 기반으로 만들고 Cloudflare 배포 경로를 설명해 줘.\n- 프로젝트 허브와 파일 / 편집기 / AI 코치 3분할 화면을 만들어 줘.\n- 실제 로그인과 AI 호출은 아직 연결하지 마.\n- 데모 데이터와 데모 AI 응답임을 화면에 명시해 줘.\n- 제안을 수락하기 전에는 자소서 원문을 변경하지 마.\n- 모바일에서도 주요 기능을 사용할 수 있게 해 줘.\n- 설치·실행 명령과 확인할 동작을 알려 줘.\n- 직접 검증한 항목만 명세에 완료 표시해 줘.</code></pre></div><div class=\"callout \"><strong>에이전트가 작업하는 동안</strong><p>프론트엔드·백엔드 설명을 마친 뒤, 호스팅과 Cloudflare, DB와 Supabase로 이동합니다. 계정을 준비하고 어떤 값이 브라우저에 노출될 수 있는지도 정리해 보세요.</p></div>"
      ],
      [
        "run",
        "패키지 설치, 개발 서버 실행, 화면 확인",
        "<p>에이전트가 파일을 만들었다면 곧바로 끝난 것이 아닙니다. 실제로 실행해서 사용해 봐야 합니다. 먼저 에이전트에게 <strong>“어느 폴더에서 어떤 명령을 실행해야 하는지”</strong> 물어보세요.</p><div class=\"table-wrap\"><table><thead><tr><th scope=\"col\">새로 만난 말</th><th scope=\"col\">이 수업에서 뜻하는 것</th></tr></thead><tbody><tr><td>package.json</td><td>프로젝트가 사용하는 패키지와 실행 명령을 적은 파일</td></tr><tr><td>package-lock.json</td><td>설치할 패키지 버전을 고정한 기록. 같은 환경을 맞추는 데 사용</td></tr><tr><td>node_modules</td><td>실제로 내려받은 패키지 파일들이 모인 폴더</td></tr><tr><td>npm run dev</td><td>package.json의 dev 항목에 정해 둔 개발 실행 명령 호출</td></tr></tbody></table></div><p>다음 명령은 <strong>CoverLetterIDE 참고 저장소</strong>의 실행 예입니다. 터미널이 저장소의 맨 위 폴더에 있을 때 시작합니다. 처음부터 만든 프로젝트는 생성된 설정과 명령을 확인하세요.</p><div class=\"code-block\"><div class=\"code-head\"><span>참고 저장소 루트의 터미널에서 시작</span><button class=\"copy\" type=\"button\" aria-label=\"참고 저장소 루트의 터미널에서 시작 내용 복사\">복사</button></div><pre><code>cd web\nnpm ci\nnpm run dev</code></pre></div><div class=\"table-wrap\"><table><thead><tr><th scope=\"col\">명령</th><th scope=\"col\">무엇이 일어나나요?</th><th scope=\"col\">다음으로 넘어갈 기준</th></tr></thead><tbody><tr><td>cd web</td><td>작업 위치를 web 폴더로 옮깁니다.</td><td>그 폴더에 package.json이 있습니다.</td></tr><tr><td>npm ci</td><td>lock 파일에 기록된 버전대로 패키지를 설치합니다.</td><td>오류 없이 설치가 끝나 입력 줄로 돌아옵니다.</td></tr><tr><td>npm run dev</td><td>개발 서버가 실행됩니다.</td><td>접속할 localhost 주소가 출력됩니다.</td></tr></tbody></table></div><p><code>npm ci</code>는 lock 파일이 있는 프로젝트에서 사용합니다. 새 프로젝트가 이를 아직 만들지 않았다면 에이전트가 안내하는 설치 방법을 따릅니다. <code>package.json을 찾을 수 없다</code>는 오류는 대개 실행 위치가 잘못된 경우입니다.</p><p>서버가 출력한 주소를 브라우저에서 엽니다. 참고 프로젝트의 기본 주소는 <code>http://localhost:5173</code>입니다. 서버가 실행된 터미널은 켜 두세요. 입력 줄이 돌아오지 않아도 서버가 계속 실행 중인 정상 상태일 수 있습니다. 종료는 <code>Ctrl+C</code>입니다.</p><div class=\"callout note\"><strong>backend 브랜치는 실제 서비스 연결이 필요합니다</strong><p>이 브랜치는 초기 가짜 데이터 목업이 아니라 Supabase 연결을 전제로 합니다. .env.example과 운영 안내를 따라 준비해야 합니다. 로그인 화면이 나타났다는 것만으로 DB와 AI 연결까지 성공한 것은 아닙니다.</p></div><h3>직접 눌러 확인하기</h3><ul class=\"check-list\"><li>회사명 없이 생성하면 무엇을 입력해야 하는지 알려 주나요?</li><li>문항을 바꾸면 그 문항에 쓴 글이 나타나나요?</li><li>AI 수정안을 거절하면 원래 글이 유지되나요?</li><li>창을 좁혀도 편집기와 코치에 접근할 수 있나요?</li></ul>"
      ],
      [
        "iterate",
        "수정 요청과 작은 커밋 반복하기",
        "<div class=\"steps\"><div class=\"step\"><span>1</span><div><h3>문제를 구체적으로 기록</h3><p>new_requests.md에 현재 동작, 기대 동작, 재현 순서, 완료 기준을 적습니다.</p></div></div><div class=\"step\"><span>2</span><div><h3>한 번에 한 범위 수정</h3><p>“모든 UI 개선”보다 “모바일에서 코치 탭 전환이 안 되는 문제”처럼 경계를 좁힙니다.</p></div></div><div class=\"step\"><span>3</span><div><h3>차이를 검토하고 커밋</h3><p>실행 화면과 git diff를 확인한 다음 관련 파일만 add하고 commit합니다.</p></div></div></div><div class=\"code-block\"><div class=\"code-head\"><span>TERMINAL</span><button class=\"copy\" type=\"button\" aria-label=\"TERMINAL 내용 복사\">복사</button></div><pre><code>git status\ngit diff\ngit add SPECIFICATION.md new_requests.md web\ngit diff --staged\ngit commit -m &quot;feat: add cover letter mockup&quot;\ngit push</code></pre></div><details><summary>에러가 나면 무엇을 에이전트에게 보내나요?</summary><p>실행한 명령, 현재 폴더, 오류 메시지, 기대한 결과, 직전에 바꾼 내용을 전달합니다. API 키나 로그인 토큰은 지우고 공유합니다. 에이전트에게 원인 설명과 수정 후 검증 방법도 요청하세요.</p></details>"
      ]
    ],
    "sources": [
      [
        "https://github.com/rhdn520/CoverLetterIDE/blob/backend/WORKSHOP_SETUP.md",
        "초기 실습 안내"
      ],
      [
        "https://github.com/rhdn520/CoverLetterIDE/blob/backend/web/package.json",
        "실행 명령 확인"
      ],
      [
        "https://github.com/rhdn520/CoverLetterIDE/blob/backend/web/OPERATIONS.md",
        "현재 연결 설정"
      ]
    ]
  },
  {
    "id": "deploy",
    "group": 4,
    "title": "Cloudflare에 배포하기",
    "en": "BUILD / 02",
    "intro": "내 컴퓨터에서 열어 보던 사이트를 인터넷에 올려 봅시다. “빌드”는 올릴 준비, “배포”는 실제로 올리는 작업입니다.",
    "sections": [
      [
        "before-deploy",
        "배포 전에 지금 상태부터 확인하기",
        "<p>먼저 개발 서버에서 화면이 열리고 주요 버튼이 동작하는지 확인합니다. 그다음 Cloudflare 계정으로 로그인할 준비를 합니다. 계정 비밀번호나 토큰을 에이전트 채팅에 전달할 필요는 없습니다.</p><p><strong>Wrangler</strong>는 터미널에서 Cloudflare에 로그인하고 파일을 배포하게 해 주는 도구입니다. <code>npx wrangler …</code>는 npm 도구를 통해 Wrangler 명령을 실행하는 방식입니다. <strong>설정 파일</strong>은 앱 이름과 어떤 폴더의 파일을 올릴지 도구에 알려 줍니다.</p><div class=\"table-wrap\"><table><thead><tr><th scope=\"col\">배포 단계</th><th scope=\"col\">이유</th><th scope=\"col\">확인</th></tr></thead><tbody><tr><td>로그인</td><td>어느 Cloudflare 계정에 올릴지 확인</td><td>브라우저 인증 완료</td></tr><tr><td>빌드</td><td>배포할 결과물 만들기</td><td>빌드가 오류 없이 끝남</td></tr><tr><td>배포</td><td>결과물을 호스팅 서비스로 보내기</td><td>인터넷 주소가 출력됨</td></tr><tr><td>접속 확인</td><td>사용자와 같은 방법으로 결과 보기</td><td>배포 주소를 새 창에서 열어 봄</td></tr></tbody></table></div>"
      ],
      [
        "paths",
        "목업과 참고 앱의 배포 방식",
        "<p><strong>정적 목업</strong>은 미리 만들어 둔 화면 파일을 브라우저로 보내서 보여 주는 앱입니다. 반면 방문 요청을 받을 때 서버에서 실행할 코드가 포함된 앱은 그 서버 코드도 함께 배포해야 합니다. 따라서 React를 썼다는 이유만으로 배포 방식이 모두 같지는 않습니다.</p><p>같은 React 화면이라도 빌드 도구와 서버 코드 유무에 따라 배포 명령이 달라집니다. 아래 두 경로 중 <strong>현재 프로젝트 구조와 일치하는 경로</strong>를 선택합니다.</p><div class=\"grid-2\"><div class=\"concept\"><span class=\"overline\">STATIC MOCKUP</span><h3>Vite 등으로 만든 정적 목업</h3><p>npm run build가 HTML·JS·CSS만 생성한다면 Cloudflare Workers Static Assets로 배포할 수 있습니다. 출력 폴더를 실제 빌드 설정에서 확인하세요.</p></div><div class=\"concept\"><span class=\"overline\">REFERENCE APP</span><h3>CoverLetterIDE backend 브랜치</h3><p>vinext가 Worker 서버 파일과 클라이언트 파일을 함께 만듭니다. 저장소의 OPERATIONS.md에서 생성된 Worker 설정 파일을 사용하는 배포 명령을 확인합니다.</p></div></div>"
      ],
      [
        "static",
        "경로 A: 정적 목업 배포",
        "<p>다음은 정적 빌드 결과가 <code>dist/</code>에 생기는 앱을 위한 설정 예시입니다. 앱의 <code>package.json</code>이 있는 폴더에서 진행합니다.</p><div class=\"code-block\"><div class=\"code-head\"><span>wrangler.jsonc · 정적 SPA 전용</span><button class=\"copy\" type=\"button\" aria-label=\"wrangler.jsonc · 정적 SPA 전용 내용 복사\">복사</button></div><pre><code>{\n  &quot;name&quot;: &quot;my-coverletter-mockup&quot;,\n  &quot;compatibility_date&quot;: &quot;2026-10-03&quot;,\n  &quot;assets&quot;: {\n    &quot;directory&quot;: &quot;./dist&quot;,\n    &quot;not_found_handling&quot;: &quot;single-page-application&quot;\n  }\n}</code></pre></div><div class=\"code-block\"><div class=\"code-head\"><span>TERMINAL</span><button class=\"copy\" type=\"button\" aria-label=\"TERMINAL 내용 복사\">복사</button></div><pre><code>npx wrangler login\nnpm run build\nnpx wrangler deploy</code></pre></div><p>로그인 명령은 브라우저를 엽니다. 배포가 성공하면 터미널에 표시되는 <code>workers.dev</code> 주소를 기록합니다. 서버 렌더링이 필요한 앱에는 이 정적 설정을 그대로 사용하지 않습니다.</p><p>설정의 <code>name</code>은 Cloudflare에서 구분할 앱 이름입니다. <code>directory</code>는 올릴 파일이 든 폴더입니다. <code>single-page-application</code>은 브라우저가 여러 화면을 처리하는 앱에서 내부 주소를 새로고침해도 기본 화면 파일을 제공하도록 지정합니다. 코드를 이해하지 못한 채 모든 앱에 같은 설정을 붙이지 말고, 현재 앱이 정적 배포인지 먼저 확인하세요.</p>"
      ],
      [
        "reference",
        "경로 B: 참고 저장소 배포",
        "<p>CoverLetterIDE 저장소의 <code>web</code> 폴더에서 실행합니다. 환경 변수는 <code>.env.example</code>과 운영 가이드에 맞춰 준비합니다.</p><div class=\"code-block\"><div class=\"code-head\"><span>TERMINAL</span><button class=\"copy\" type=\"button\" aria-label=\"TERMINAL 내용 복사\">복사</button></div><pre><code>npx wrangler login\nnpm run build\nnpx wrangler deploy --config dist/server/wrangler.json</code></pre></div><div class=\"callout warning\"><strong>공개 설정과 비밀값을 구분하기</strong><p>NEXT_PUBLIC_SUPABASE_URL과 공개용 anon/publishable 키는 웹 앱 설정에 사용합니다. OpenAI·TypeSafe·service role 키는 Supabase Edge Function secrets에 둡니다. 공개 변수는 빌드에 포함될 수 있으므로 값을 바꿨다면 다시 빌드·배포하고 실제 요청 대상을 확인합니다.</p></div>"
      ],
      [
        "verify",
        "배포 후 확인할 것",
        "<ul class=\"check-list\"><li>배포 주소를 새 창에서 열었을 때 화면이 보이는가?</li><li>프로젝트 내부 경로로 이동한 뒤 새로고침해도 열리는가?</li><li>브라우저 개발자 도구에 파일 로딩 오류가 없는가?</li><li>모바일 폭에서 입력창과 버튼을 사용할 수 있는가?</li><li>공유한 주소가 localhost가 아닌 배포 주소인가?</li></ul><div class=\"callout \"><strong>배포와 DB 연결은 별개입니다</strong><p>화면이 인터넷에 올라갔다고 로그인과 저장까지 완성된 것은 아닙니다. 다음 단계에서 Supabase와 Google 로그인을 연결합니다.</p></div><details><summary>목업이 올라갔는데 새로고침하면 데이터가 사라져요.</summary><p>서버 저장을 구현하지 않은 목업이라면 예상된 동작일 수 있습니다. 메모리·브라우저 저장·DB 중 어디에 저장하는지 명세를 확인하세요. 배포 자체는 저장 방식을 바꾸지 않습니다.</p></details>"
      ]
    ],
    "sources": [
      [
        "https://developers.cloudflare.com/workers/static-assets/get-started/",
        "Cloudflare 정적 사이트 배포"
      ],
      [
        "https://github.com/rhdn520/CoverLetterIDE/blob/backend/web/OPERATIONS.md",
        "참고 앱 배포 가이드"
      ]
    ]
  },
  {
    "id": "login",
    "group": 4,
    "title": "Supabase와 Google 로그인 연결",
    "en": "BUILD / 03",
    "intro": "사이트가 올라갈 주소를 확보했다면 이제 “누구의 글인가”를 구분할 차례입니다. Google은 사용자를 확인하고, Supabase는 우리 앱의 로그인과 저장을 연결합니다.",
    "sections": [
      [
        "map",
        "세 관리 화면이 각각 무엇을 설정하나요?",
        "<div class=\"table-wrap\"><table><thead><tr><th scope=\"col\">화면</th><th scope=\"col\">무엇을 정하는가</th><th scope=\"col\">완료 후 얻는 것</th></tr></thead><tbody><tr><td>Cloudflare</td><td>우리 사이트를 어느 주소에서 제공할까?</td><td>앱의 운영 주소</td></tr><tr><td>Supabase</td><td>사용자와 글을 어디에 저장하고 로그인 결과를 어디로 돌려줄까?</td><td>프로젝트 URL, 공개 키, 앱 복귀 주소 설정</td></tr><tr><td>Google Cloud</td><td>어느 앱이 Google 로그인을 요청하며 결과를 어디로 보낼까?</td><td>Client ID, Client secret, Google 콜백 설정</td></tr></tbody></table></div><p><strong>Client ID</strong>는 Google이 이 로그인 요청을 어느 앱의 것으로 볼지 구분하는 이름표입니다. <strong>Client secret</strong>은 앱 인증에 쓰이는 비밀값입니다. 학생 개인의 Google 비밀번호가 아닙니다.</p><p>설정 화면의 이름이나 위치는 바뀔 수 있습니다. 메뉴 이름만 외우기보다 “지금 어떤 주소를 어떤 서비스에 알려 주는지”를 이해하며 따라가세요. 아래 예시의 MY_APP과 PROJECT_REF는 내 값으로 바꿔야 합니다.</p>"
      ],
      [
        "database",
        "Supabase 프로젝트와 DB 준비",
        "<p>Supabase Dashboard에서 수업용 프로젝트를 만들고 Project URL과 공개용 키를 확인합니다. 참고 저장소를 사용한다면 DB 스키마와 RLS가 <code>supabase/migrations</code>에 들어 있습니다.</p><p><strong>참고 저장소 루트</strong>에서 다음을 실행합니다. PROJECT_REF는 내 Supabase 프로젝트의 식별자로 바꿉니다.</p><div class=\"code-block\"><div class=\"code-head\"><span>TERMINAL</span><button class=\"copy\" type=\"button\" aria-label=\"TERMINAL 내용 복사\">복사</button></div><pre><code>npx supabase login\nnpx supabase link --project-ref PROJECT_REF\nnpx supabase db push</code></pre></div><div class=\"callout note\"><strong>대상 프로젝트를 확인하세요</strong><p>db push는 연결된 원격 DB에 변경을 적용합니다. 기존 운영 서비스 대신 수업용 프로젝트를 연결하고, 적용되는 migration 내용을 확인합니다.</p></div><p>처음부터 만든 앱은 스키마가 없을 수 있습니다. 에이전트에게 users와 projects의 관계, 소유자 필드, RLS 정책을 포함한 migration을 먼저 작성하도록 요청하세요.</p><h3>방금 실행한 명령은 각각 무엇을 했나요?</h3><ul><li><code>supabase login</code>: 터미널 도구가 내 Supabase 계정으로 작업하도록 인증합니다.</li><li><code>supabase link</code>: 지금의 로컬 프로젝트를 어느 원격 Supabase 프로젝트와 연결할지 정합니다.</li><li><code>supabase db push</code>: 저장소에 있는 DB 구조 변경 파일을 연결한 원격 DB에 적용합니다. Git의 push와는 다른 작업입니다.</li></ul><p>PROJECT_REF는 Project URL의 프로젝트 식별 부분입니다. 예를 들어 <code>https://abcdefgh.supabase.co</code>라면 <code>abcdefgh</code>입니다. 꺾쇠 괄호나 예시 문구까지 그대로 넣는 것이 아닙니다.</p>"
      ],
      [
        "app-settings",
        "웹 앱에 “어느 Supabase인지” 알려 주기",
        "<p>Google과 Supabase의 설정을 마쳐도 웹 앱은 어느 프로젝트에 접속할지 모릅니다. 참고 저장소에서는 <code>web/.env.local</code>이라는 설정 파일에 Supabase 주소와 공개용 키를 적습니다.</p><p><strong>환경 변수</strong>는 코드에 직접 고정하지 않고 실행 환경에 따라 전달하는 설정값입니다. 개발용과 실제 배포용을 다르게 쓸 수 있습니다. <code>.env.local</code>은 내 컴퓨터에서 사용할 값을 적는 파일이며 Git에 커밋하지 않습니다.</p><div class=\"code-block\"><div class=\"code-head\"><span>web/.env.local · 실제 값으로 교체</span><button class=\"copy\" type=\"button\" aria-label=\"환경 변수 예시 복사\">복사</button></div><pre><code>NEXT_PUBLIC_SUPABASE_URL=https://PROJECT_REF.supabase.co\nNEXT_PUBLIC_SUPABASE_ANON_KEY=내-프로젝트의-공개용-키</code></pre></div><p>Supabase의 프로젝트 설정에서 URL과 공개용 키를 복사합니다. <strong>service role이나 secret 키를 이 자리에 넣지 않습니다.</strong> 위 이름은 참고 저장소가 읽도록 만든 변수 이름이므로 임의로 바꾸면 코드가 찾지 못합니다.</p><p>설정 후 개발 서버를 껐다가 다시 실행합니다. 배포된 앱에도 해당 공개 설정을 적용하고 필요한 경우 다시 빌드·배포합니다. <code>NEXT_PUBLIC_</code>이 붙은 값은 브라우저에 포함될 수 있으므로 비밀 API 키를 넣으면 안 됩니다. OpenAI·TypeSafe 키는 뒤에서 Supabase 서버 함수의 secrets에 등록합니다.</p>"
      ],
      [
        "google",
        "Google Cloud에서 인증 클라이언트 만들기",
        "<ol><li><a class=\"inline-link\" href=\"https://console.cloud.google.com/\" target=\"_blank\" rel=\"noopener\">Google Cloud Console</a>에서 프로젝트를 선택합니다.</li><li>Google Auth Platform에서 앱 정보·대상 사용자·필요한 범위를 설정합니다. 테스트 상태라면 필요한 테스트 사용자를 추가합니다.</li><li>OAuth Client를 만들고 앱 유형은 <strong>Web application</strong>으로 선택합니다.</li><li>승인된 JavaScript origins에는 앱의 출처(프로토콜+호스트+포트)를 넣습니다.</li><li>승인된 redirect URI에는 Supabase Google provider 화면의 콜백 주소를 넣습니다.</li></ol><div class=\"table-wrap\"><table><thead><tr><th scope=\"col\">Google 설정</th><th scope=\"col\">넣을 값의 예시</th></tr></thead><tbody><tr><td>JavaScript origins</td><td>https://MY_APP.workers.dev<br>http://localhost:5173</td></tr><tr><td>Redirect URI</td><td>https://PROJECT_REF.supabase.co/auth/v1/callback</td></tr></tbody></table></div><p>Client ID와 Client secret을 Supabase의 Google provider 설정에 입력합니다. Google Client secret은 브라우저 코드에 넣지 않습니다.</p>"
      ],
      [
        "urls",
        "Supabase의 앱 복귀 주소 설정",
        "<div class=\"table-wrap\"><table><thead><tr><th scope=\"col\">Supabase 설정</th><th scope=\"col\">넣을 값의 예시</th></tr></thead><tbody><tr><td>Authentication → Providers → Google</td><td>Google Client ID · Client secret</td></tr><tr><td>URL Configuration → Site URL</td><td>https://MY_APP.workers.dev</td></tr><tr><td>허용 Redirect URLs</td><td>https://MY_APP.workers.dev/auth/callback<br>http://localhost:5173/auth/callback</td></tr></tbody></table></div><p>위의 MY_APP, PROJECT_REF는 실제 값으로 교체합니다. 로컬과 운영 주소를 각각 등록하고 프로토콜, 포트, 경로가 정확히 일치하는지 확인합니다.</p><div class=\"code-block\"><div class=\"code-head\"><span>로그인 시작 · JavaScript</span><button class=\"copy\" type=\"button\" aria-label=\"로그인 시작 · JavaScript 내용 복사\">복사</button></div><pre><code>// supabase 클라이언트가 준비된 앱 내부 코드 예시\nawait supabase.auth.signInWithOAuth({\n  provider: &quot;google&quot;,\n  options: {\n    redirectTo: `${window.location.origin}/auth/callback`\n  }\n});</code></pre></div><div class=\"callout \"><strong>콜백 처리도 구현해야 합니다</strong><p>로그인 버튼만으로 완료되지 않습니다. 앱의 /auth/callback에서 SDK의 흐름에 맞게 코드를 세션으로 교환하고, 오류·취소·복귀 후 이동을 처리합니다. PKCE라면 로그인 시작 때 생성된 verifier가 복귀 시에도 유지되어야 합니다.</p></div>"
      ],
      [
        "test",
        "두 계정으로 권한 확인하기",
        "<div class=\"steps\"><div class=\"step\"><span>1</span><div><h3>계정 A로 저장</h3><p>프로젝트와 자소서를 만들고 새로고침 후 유지되는지 확인합니다.</p></div></div><div class=\"step\"><span>2</span><div><h3>로그아웃 후 접근</h3><p>인증이 필요한 화면과 API에서 데이터가 노출되지 않는지 확인합니다.</p></div></div><div class=\"step\"><span>3</span><div><h3>계정 B로 접근</h3><p>A의 프로젝트 ID를 알더라도 읽기·수정이 거절되는지 확인합니다.</p></div></div><div class=\"step\"><span>4</span><div><h3>로컬과 운영에서 반복</h3><p>로컬 로그인만 확인하고 끝내지 말고 배포 주소에서도 로그인·복귀·로그아웃을 점검합니다.</p></div></div></div><details><summary>redirect_uri_mismatch가 나요.</summary><p>Google에 등록한 URI가 Supabase의 callback인지 확인합니다. 앱의 /auth/callback을 Google의 redirect URI로 넣지 않았는지, 프로젝트 식별자나 슬래시가 다른지 비교하세요.</p></details><details><summary>로그인은 되는데 데이터가 안 보여요.</summary><p>프로젝트 URL과 공개 키가 같은 프로젝트의 것인지, DB migration이 적용됐는지, RLS 정책과 user_id가 올바른지 확인합니다. 해결을 위해 RLS를 끄는 대신 거절 원인을 찾으세요.</p></details>"
      ]
    ],
    "sources": [
      [
        "https://supabase.com/docs/guides/auth/social-login/auth-google",
        "Google 로그인 공식 가이드"
      ],
      [
        "https://supabase.com/docs/guides/auth/redirect-urls",
        "Redirect URLs"
      ],
      [
        "https://github.com/rhdn520/CoverLetterIDE/blob/backend/web/OPERATIONS.md",
        "프로젝트 설정 가이드"
      ]
    ]
  },
  {
    "id": "agent",
    "group": 4,
    "title": "AI 기능을 하나의 시스템으로",
    "en": "BUILD / 04",
    "intro": "AI API에서 답변 하나를 받아 오는 것과, 사용자가 믿고 쓸 서비스를 만드는 것은 범위가 다릅니다. 요청 전 확인부터 응답 후 검토까지 연결해 봅시다.",
    "sections": [
      [
        "one-request",
        "AI 코치에게 질문 한 번을 보냈을 때",
        "<div class=\"scenario\"><span class=\"scenario-label\">상황으로 이해하기</span><h3>“지원 동기를 더 구체적으로 고쳐 줘”라고 요청했습니다.</h3><p>AI는 우리 화면을 자동으로 들여다보지 않습니다. 프로그램이 선택한 자소서와 참고 자료를 요청에 함께 넣어야 합니다. AI가 받은 뒤 참고하는 정보 묶음을 <strong>컨텍스트(context)</strong>라고 부릅니다.</p></div><p>필요한 자료를 보내지 않으면 일반적인 조언만 돌아올 수 있습니다. 반대로 모든 파일을 무조건 보내면 불필요한 개인정보가 포함되고 비용도 커질 수 있습니다. 지금 질문에 필요한 자료를 선택해 보내는 일을 프로그램에서 설계합니다.</p><div class=\"table-wrap\"><table><thead><tr><th scope=\"col\">새로 만난 말</th><th scope=\"col\">이 수업에서 뜻하는 것</th></tr></thead><tbody><tr><td>도구 호출</td><td>모델이나 프로그램이 검색·조회·저장 같은 기능을 실행하는 것</td></tr><tr><td>Workflow</td><td>미리 정한 순서대로 단계를 수행하는 작업 흐름</td></tr><tr><td>Agent</td><td>상태에 따라 다음 행동이나 도구를 선택하며 일하는 프로그램</td></tr><tr><td>응답 검증</td><td>모델 결과에 필요한 항목이 있고 값이 올바른지 확인하는 일</td></tr><tr><td>재시도</td><td>실패한 요청을 조건에 따라 다시 보내는 것</td></tr></tbody></table></div>"
      ],
      [
        "workflow",
        "Workflow와 Agent 구분하기",
        "<div class=\"grid-2\"><div class=\"concept\"><span class=\"overline\">WORKFLOW</span><h3>정해진 순서를 실행</h3><p>검색 → 평가 → 요약처럼 개발자가 미리 정한 단계를 따릅니다. CoverLetterIDE의 분석 파이프라인은 주로 이 방식입니다.</p></div><div class=\"concept\"><span class=\"overline\">AGENT</span><h3>다음 행동을 선택</h3><p>모델이 상태를 보고 필요한 도구와 다음 단계를 선택합니다. 도구의 권한, 실행 횟수, 중단 조건을 함께 설계해야 합니다.</p></div></div><p>모든 AI 기능을 자율 에이전트로 만들 필요는 없습니다. 먼저 동작을 예측하고 검증하기 쉬운 흐름을 만들고, 필요한 부분에만 도구 선택을 맡깁니다.</p>"
      ],
      [
        "connect",
        "서버에서 해야 할 일을 한 단계씩 연결하기",
        "<div class=\"steps\"><div class=\"step\"><span>1</span><div><h3>누구의 요청인지 확인</h3><p>학생 A가 p-01 자소서 첨삭을 요청했다면, 로그인한 사람이 A이고 p-01도 A의 것인지 확인합니다.</p></div></div><div class=\"step\"><span>2</span><div><h3>실행할 수 있는지 확인</h3><p>크레딧이 충분한지 서버에서 확인합니다. 차감할 양을 우선 잡아 두는 예약 방식을 쓰면 실패 시 돌려줄 수 있습니다.</p></div></div><div class=\"step\"><span>3</span><div><h3>같은 요청을 중복 처리하지 않기</h3><p>버튼을 두 번 누르거나 통신 문제로 다시 보내도 동일 요청은 한 번만 차감해야 합니다. 요청마다 붙인 ID로 구분합니다. 이를 멱등 처리라고 부릅니다.</p></div></div><div class=\"step\"><span>4</span><div><h3>필요한 맥락과 함께 모델 호출</h3><p>질문, 선택한 문항, 필요한 자료를 모아 서버의 비밀 키로 AI에 요청합니다. 키를 브라우저로 보내지 않습니다.</p></div></div><div class=\"step\"><span>5</span><div><h3>응답을 검사하고 사용자에게 보여 주기</h3><p>수정 대상이 실제 문항인지, 필요한 항목이 있는지 확인합니다. 원문과 제안을 보여 주고 사용자가 수락한 부분만 반영합니다.</p></div></div><div class=\"step\"><span>6</span><div><h3>실패했을 때 마무리</h3><p>응답이 너무 오래 걸리면 타임아웃으로 처리합니다. 오류를 알리고, 실행되지 않은 작업의 크레딧을 환불하고, 재시도 여부를 정합니다.</p></div></div></div><h3>참고 저장소의 함수 이름 읽기</h3><div class=\"table-wrap\"><table><thead><tr><th scope=\"col\">이름</th><th scope=\"col\">맡는 일</th></tr></thead><tbody><tr><td>ai-chat</td><td>학생의 질문과 자소서를 받아 AI 코치 답변을 만듭니다.</td></tr><tr><td>analyze-project</td><td>유사 사례 검색과 평가를 거쳐 분석 리포트를 만듭니다.</td></tr><tr><td>index-contribution</td><td>기여된 자소서를 나중에 검색할 수 있도록 정리·색인합니다.</td></tr><tr><td>process-evidence</td><td>업로드한 증빙 파일을 검사하고 내용을 추출합니다.</td></tr></tbody></table></div><p>Supabase의 <strong>secrets</strong>는 서버 함수가 사용할 비밀값을 보관하는 설정입니다. OpenAI와 TypeSafe 키는 이곳에 등록합니다. 함수 코드 안이나 공개 문서에 실제 키를 적지 않습니다.</p><p>참고 저장소의 DB 설정과 함수 비밀값을 준비했다면, 저장소 맨 위 폴더에서 아래 명령으로 서버 함수를 배포합니다. 명령 끝의 이름은 배포할 함수입니다.</p><div class=\"code-block\"><div class=\"code-head\"><span>참고 저장소 루트에서 실행</span><button class=\"copy\" type=\"button\" aria-label=\"참고 저장소 루트에서 실행 내용 복사\">복사</button></div><pre><code>npx supabase functions deploy ai-chat\nnpx supabase functions deploy analyze-project\nnpx supabase functions deploy index-contribution\nnpx supabase functions deploy process-evidence</code></pre></div><p>한꺼번에 모든 AI 기능을 확인하기보다 ai-chat에 짧은 질문을 보내고 응답이 오는 것부터 확인합니다. 이후 검색과 분석을 연결하면 어느 단계에서 문제가 생겼는지 찾기 쉽습니다.</p>"
      ],
      [
        "prompt",
        "에이전트에게 줄 구현 요청",
        "<div class=\"code-block\"><div class=\"code-head\"><span>구현 프롬프트</span><button class=\"copy\" type=\"button\" aria-label=\"구현 프롬프트 내용 복사\">복사</button></div><pre><code>SPECIFICATION.md를 기준으로 ai-chat 연결부터 구현해 줘.\n\n입력: projectId, 선택한 문항, 사용자 메시지, requestId\n출력: 피드백과 수정 제안. 원문은 자동으로 바꾸지 않는다.\n\n반드시 서버에서:\n1. 사용자 인증과 프로젝트 소유권을 확인한다.\n2. 같은 requestId의 중복 차감을 막는다.\n3. 비밀 API 키를 사용해 모델을 호출한다.\n4. 반환 형식과 수정 대상 문항을 검증한다.\n5. 실패 시 오류를 표시하고 크레딧 예약을 환불한다.\n\n클라이언트에는 대기·성공·실패 상태를 제공해 줘.\n작은 테스트 입력으로 동작을 확인하고 검증 기록을 남겨 줘.</code></pre></div>"
      ],
      [
        "cold-start",
        "콜드스타트 문제 해결을 위한 합성 데이터 생성",
        "<div class=\"scenario\"><span class=\"scenario-label\">상황으로 이해하기</span><h3>첫 사용자의 자소서는 무엇과 비교할까요?</h3><p>사이트는 완성됐지만, 아직 아무도 과거 자소서를 기여하지 않았다고 생각해 봅시다. “비슷한 자소서를 찾아 비교해 줘”라고 요청해도 DB에 비교할 글이 없으니 검색 결과는 0건입니다. 버튼과 AI 호출이 동작해도 사례에 근거한 분석은 할 수 없습니다.</p></div>\n<p>이처럼 서비스를 막 시작해 필요한 데이터가 충분하지 않은 상황을 <strong>콜드스타트(cold start) 문제</strong>라고 합니다. 여기서는 서버를 처음 켤 때의 지연이 아니라, <strong>비교할 자소서가 없는 문제</strong>를 뜻합니다.</p>\n<h3>합성 데이터: 연습용 사례를 먼저 만들어 두기</h3>\n<p><strong>합성 데이터(synthetic data)</strong>는 실제 사용자가 제출한 기록이 아니라, 우리가 정한 조건에 맞춰 인위적으로 만든 데이터입니다. 가상의 지원자, 직무, 경험, 문항과 답변을 만들어 DB에 미리 넣으면 검색부터 분석까지 이어지는 흐름을 시험할 수 있습니다.</p>\n<p>빈 DB에 처음 넣는 이런 연습용 데이터를 <strong>시드 데이터(seed data)</strong>, 넣는 작업을 <strong>시딩(seeding)</strong>이라고 부릅니다. 여기서 하는 일은 모델을 새로 학습시키는 것이 아니라, <strong>우리 서비스가 검색할 사례 목록을 채우는 것</strong>입니다.</p>\n<div class=\"table-wrap\"><table><thead><tr><th scope=\"col\">없을 때</th><th scope=\"col\">합성 사례를 넣은 뒤 확인할 수 있는 것</th></tr></thead><tbody><tr><td>유사 사례가 0건</td><td>입력과 관련 있는 자소서가 검색되는가?</td></tr><tr><td>재정렬할 후보가 없음</td><td>직무와 경험에 맞는 후보가 앞에 오는가?</td></tr><tr><td>비교 그룹을 만들 수 없음</td><td>가상 합격·불합격 사례를 구분해 선택하는가?</td></tr><tr><td>사례를 이용한 분석을 확인하기 어려움</td><td>선택한 사례를 바탕으로 피드백을 만들고 화면에 표시하는가?</td></tr></tbody></table></div>\n<h3>어떤 데이터를 만들어야 할까요?</h3>\n<p>“자소서 100개 만들어 줘”만으로는 비슷한 문장이 반복될 수 있습니다. 먼저 <strong>무엇이 다른 사례들을 비교하고 싶은지</strong> 정합니다. 수업에서는 개발·데이터 분석·기획처럼 직무를 나누고, 경험이 구체적인 글과 근거가 부족한 글을 섞어 작은 묶음부터 만들어 봅니다.</p>\n<div class=\"steps\"><div class=\"step\"><span>1</span><div><h3>조건을 정합니다</h3><p>지원 직무, 경험 종류, 문항, 답변 길이와 구체성을 나눕니다. 특정 학교나 성별을 글의 품질 또는 합격 여부의 대리 기준으로 삼지 않습니다.</p></div></div><div class=\"step\"><span>2</span><div><h3>소량 생성하고 사람이 읽습니다</h3><p>처음에는 몇 건만 만들어 직무·문항·답변이 서로 맞는지, 같은 문장을 반복하지 않는지 확인합니다. 가상의 합불 결과는 테스트용 표식으로만 붙입니다.</p></div></div><div class=\"step\"><span>3</span><div><h3>저장하고 검색 가능하게 만듭니다</h3><p>검토한 사례를 테스트 DB에 저장합니다. 본문의 임베딩도 만들어 저장해야 의미가 비슷한 글을 찾을 수 있습니다. 글만 저장하고 임베딩을 빠뜨리면 벡터 검색에는 나타나지 않을 수 있습니다.</p></div></div><div class=\"step\"><span>4</span><div><h3>새 자소서로 전체 흐름을 확인합니다</h3><p>생성한 답변을 그대로 검색하는 데서 끝내지 말고, 따로 쓴 자소서를 입력합니다. 관련 후보가 나오고 분석 결과에 실제 비교 건수가 표시되는지 봅니다.</p></div></div></div>\n<h3>에이전트에게 이렇게 요청해 보세요</h3><p>채팅 답변으로 사례 몇 개를 받는 데서 끝내지 않고, <strong>합성 데이터를 반복해서 생성할 수 있는 코드</strong>를 요청합니다. 생성 조건과 건수를 바꿔 실행하고 결과를 파일로 검토할 수 있게 만드는 것입니다.</p><div class=\"code-block\"><div class=\"code-head\"><span>합성 데이터 생성 코드 작성 요청 · 에이전트 채팅</span><button type=\"button\" class=\"copy\" aria-label=\"합성 데이터 생성 코드 작성 요청 복사\">복사</button></div><pre><code>우리 자소서 분석 서비스는 아직 비교할 사례가 없는 콜드스타트 상태야.\n검색과 분석 흐름을 시험할 합성 데이터를 생성하는 코드를 작성해 줘.\n\n1. 먼저 기존 데이터 구조를 읽고, 생성 코드의 입력·출력과 실행 방식을 설명해 줘.\n2. 개발·데이터 분석·기획 직무, 경험의 구체성, 답변 길이 등 생성 조건과\n   생성 건수를 설정할 수 있는 스크립트를 만들어 줘.\n3. 코드가 LLM API를 호출해 가상의 문항·답변을 생성하도록 해 줘.\n   API 키는 환경 변수로 읽고 코드에 직접 넣지 마.\n   실제 사람의 자소서나 개인정보를 가져오지 마.\n4. 합격/불합격 표식은 가상 시나리오이며 실제 채용 결과가 아님을 명시해 줘.\n5. 생성 결과를 JSON 파일로 저장하고, 각 사례에 is_synthetic: true와\n   생성 배치 ID를 기록해 줘. 필수 항목 누락과 중복도 검사해 줘.\n6. 파일 생성 단계와 테스트 DB에 넣는 단계를 분리해 줘.\n   기본 실행은 JSON 파일 저장까지만 하고, DB 입력은 별도 명령으로 실행하게 해 줘.\n7. DB 입력 단계에는 임베딩 생성·저장도 포함해 줘.\n   필요한 DB 필드가 없다면 변경안을 먼저 설명하고,\n   재실행 시 중복 입력을 막고 해당 배치만 식별·정리할 수 있게 해 줘.\n8. 설치 방법, 환경 변수 이름, 먼저 2건만 생성해 확인하는 실행 명령,\n   오류가 났을 때 확인할 사항을 README에 적어 줘.\n\n지금은 코드를 작성하는 단계야. 실제 API 호출과 DB 입력은 아직 실행하지 마.\n코드를 검토한 뒤 소량 생성 → 파일 확인 → 테스트 DB 입력 순서로 진행하자.\n합성 데이터로 기능이 작동하는 것과 실제 피드백이 유용한 것은 구분해 줘.</code></pre></div>\n<h3>참고 저장소에 있는 생성 도구 사용하기</h3>\n<p>CoverLetterIDE의 <code>backend</code> 브랜치에는 <code>seed/seed_contributions.py</code>가 있습니다. 이 도구는 OpenAI로 가상 답변을 만들고, 임베딩과 함께 Supabase에 저장합니다. 여러 합성 사례를 하나의 합성 계정 아래 모으므로 실제 사용자 기여와 구분해 관리할 수 있습니다.</p>\n<p>이 스크립트는 JavaScript가 아니라 <strong>Python</strong>으로 작성되어 Python 3.10 이상이 별도로 필요합니다. Supabase의 테이블과 규칙도 먼저 준비되어 있어야 합니다. 처음 만든 프로젝트에 이 파일이 자동으로 생기는 것은 아닙니다.</p>\n<details><summary>따라 하기: 참고 저장소에서 2건으로 먼저 확인하기</summary><p><strong>실행 위치:</strong> 참고 저장소 맨 위 폴더에서 시작합니다. 아래는 macOS/Linux 예시입니다. Python 실행 명령이 python인 환경에서는 python3 대신 python을 사용합니다.</p>\n<div class=\"code-block\"><div class=\"code-head\"><span>macOS / Linux · 터미널</span><button type=\"button\" class=\"copy\" aria-label=\"macOS / Linux · 터미널 복사\">복사</button></div><pre><code>cd seed\npython3 -m venv .venv\nsource .venv/bin/activate\npython -m pip install -r requirements.txt</code></pre></div>\n<p><code>venv</code>는 이 도구에 필요한 Python 패키지를 다른 프로젝트와 분리해 설치할 작은 실행 환경입니다. <code>pip install</code>은 requirements.txt에 적힌 패키지를 설치합니다. Windows PowerShell에서는 다음을 사용합니다.</p>\n<div class=\"code-block\"><div class=\"code-head\"><span>Windows PowerShell · 터미널</span><button type=\"button\" class=\"copy\" aria-label=\"Windows PowerShell · 터미널 복사\">복사</button></div><pre><code>cd seed\npy -m venv .venv\n.\\.venv\\Scripts\\python.exe -m pip install -r requirements.txt</code></pre></div>\n<p>스크립트는 기본적으로 <code>web/.env.local</code>에서 Supabase URL, <code>SUPABASE_SERVICE_ROLE_KEY</code>, <code>OPENAI_API_KEY</code>를 읽습니다. 이 실행에는 DB에 직접 저장할 서버 권한이 필요합니다. 실제 값을 Git이나 에이전트 채팅에 올리지 않고, <code>NEXT_PUBLIC_</code>이 붙은 공개 변수에 넣지 않습니다.</p>\n<p><strong>연결된 주소가 수업용 테스트 DB인지 확인한 뒤</strong> 아래 명령을 실행합니다. 실행하면 실제 AI 호출 비용이 발생하고 연결된 DB에 데이터가 추가됩니다.</p>\n<div class=\"code-block\"><div class=\"code-head\"><span>macOS / Linux · 위 환경을 활성화한 터미널</span><button type=\"button\" class=\"copy\" aria-label=\"macOS / Linux · 위 환경을 활성화한 터미널 복사\">복사</button></div><pre><code>python seed_contributions.py --count 2</code></pre></div>\n<div class=\"code-block\"><div class=\"code-head\"><span>Windows PowerShell · seed 폴더</span><button type=\"button\" class=\"copy\" aria-label=\"Windows PowerShell · seed 폴더 복사\">복사</button></div><pre><code>.\\.venv\\Scripts\\python.exe seed_contributions.py --count 2</code></pre></div>\n<p><code>--count 2</code>는 생성할 사례 수를 2건으로 정합니다. 생성된 글과 저장·검색 결과를 확인한 다음 필요할 때 건수를 늘립니다. 재실행하면 데이터가 더 추가될 수 있으므로 같은 명령을 반복하기 전에 기존 결과를 확인하세요. 세부 설정은 <a class=\"inline-link\" href=\"https://github.com/rhdn520/CoverLetterIDE/blob/backend/seed/README.md\" target=\"_blank\" rel=\"noopener\">seed 실행 안내</a>를 따릅니다.</p></details>\n<h3>생성 후 무엇을 확인할까요?</h3>\n<ul class=\"check-list\"><li>생성된 직무, 문항, 답변이 서로 맞고 사례들이 충분히 다른가?</li><li>DB에 자소서뿐 아니라 대응하는 임베딩도 저장되었는가?</li><li>분석 화면의 비교 건수가 늘고, 선택된 사례가 입력한 직무와 관련 있는가?</li><li>가상 합격·불합격 사례 중 한쪽이 부족할 때 실제 개수를 표시하는가?</li><li>이번에 넣은 합성 사례를 구분하고, 테스트 후 해당 데이터만 정리할 수 있는가?</li></ul>\n<div class=\"callout\"><strong>합성 데이터가 해결하는 범위</strong><p>합성 데이터는 비교 자료가 전혀 없어 기능을 시험하지 못하는 문제를 줄여 줍니다. <strong>가상의 합격·불합격은 실제 채용 결과가 아니므로, 합격 요인이나 합격 확률을 검증하는 근거로 쓸 수는 없습니다.</strong> 화면에는 합성 사례를 사용한 실습임을 표시하고, 실제 서비스 품질은 별도로 준비한 평가 사례와 사람의 검토로 확인합니다.</p></div>\n<p>실제 운영에서는 사용자가 동의해 제공한 자료를 필요한 범위에서 수집하고 품질을 점검해 비교 데이터의 비중을 늘립니다. 합성 사례가 많이 생겼다는 이유만으로 초기 데이터의 편향이나 실제 피드백 품질까지 해결됐다고 보지는 않습니다.</p>"
      ],
      [
        "eval",
        "성공하는 경우 외에도 확인하기",
        "<p>정상 입력만 시험하면 중요한 문제를 놓칠 수 있습니다. 아래처럼 일부러 실패하는 상황도 만들어 보고, 사용자가 상황을 이해하고 다시 시도할 수 있는지 확인합니다. AI 결과를 쓰는 기준과 오류 처리 규칙을 정하는 일도 개발의 일부입니다.</p><div class=\"table-wrap\"><table><thead><tr><th scope=\"col\">확인할 상황</th><th scope=\"col\">기대 동작</th></tr></thead><tbody><tr><td>API 키 누락 / AI 호출 실패</td><td>성공한 척하지 않고 오류와 복구 방법 안내</td></tr><tr><td>같은 요청을 두 번 전송</td><td>크레딧을 중복 차감하지 않음</td></tr><tr><td>유사 사례 0개</td><td>비교 근거가 없음을 표시하고 비교 판단을 제한</td></tr><tr><td>Jev 실패 후 대체 점수</td><td>대체 방식임을 표시하고 객관적 평가로 오해시키지 않음</td></tr><tr><td>자료 안에 “지시를 무시하라” 문장</td><td>사용자 자료를 시스템 명령으로 취급하지 않음</td></tr><tr><td>제안에 없는 사실이나 숫자 포함</td><td>사람이 원문 근거와 대조하고 수락 여부 판단</td></tr></tbody></table></div><div class=\"callout \"><strong>정확한 수치만큼 중요한 것</strong><p>어떤 자료로, 어떤 기준과 모델로 결과를 만들었는지 추적할 수 있어야 합니다. 민감한 원문과 API 키를 로그에 남기는 것과는 다릅니다.</p></div>"
      ]
    ],
    "sources": [
      [
        "https://github.com/rhdn520/CoverLetterIDE/blob/backend/supabase/functions/ai-chat/index.ts",
        "AI 코치 구현"
      ],
      [
        "https://github.com/rhdn520/CoverLetterIDE/blob/backend/supabase/functions/analyze-project/index.ts",
        "분석 구현"
      ],
      [
        "https://docs.typesafe.ai/concepts/system-one",
        "TypeSafe 판단 모델"
      ],
      [
        "https://github.com/rhdn520/CoverLetterIDE/blob/backend/seed/README.md",
        "합성 데이터 생성 도구"
      ]
    ]
  },
  {
    "id": "reflection",
    "group": 5,
    "title": "판단은 결국 우리의 몫",
    "en": "BEYOND THE DEMO",
    "intro": "화면이 열리고 AI가 답했다고 성공이라고 할 수 있을까요? 마지막에는 기능이 돌아가는지보다, 사용자의 문제를 실제로 해결하는지 묻습니다.",
    "sections": [
      [
        "two-checks",
        "“작동한다”와 “도움이 된다”는 다른 확인입니다",
        "<div class=\"grid-2\"><div class=\"concept\"><span class=\"overline\">기능 확인</span><h3>답변이 돌아왔나요?</h3><p>버튼을 누르면 서버가 응답하고 화면에 글이 표시되는지 확인합니다. 이 단계가 실패하면 먼저 프로그램 연결을 고쳐야 합니다.</p></div><div class=\"concept\"><span class=\"overline\">품질 확인</span><h3>실제로 고칠 방향을 알게 됐나요?</h3><p>피드백이 내 본문에 근거하며 실행 가능한지 봅니다. 답변이 길고 자연스럽다는 이유만으로 좋은 결과는 아닙니다.</p></div></div><p>예를 들어 자소서에 없는 “매출 30% 증가”를 AI가 추가했다면, 화면 기능은 성공했어도 사용자에게는 해로운 제안입니다. 사람이 확인할 기준을 먼저 만들고 모델의 결과를 그 기준에 비춰 봐야 합니다.</p>"
      ],
      [
        "meaning",
        "의미 있는 피드백이란 무엇일까?",
        "<div class=\"question\">우리 시스템은 자소서를 더 좋게 만들고 있나요,<br>그럴듯한 말만 더하고 있나요?</div><p>AI가 코드와 피드백을 만들 수 있어도 “무엇을 좋은 결과로 볼 것인가”는 우리가 정해야 합니다. 평가 기준까지 무비판적으로 AI에 맡기면 틀린 기준을 빠르게 자동화할 수 있습니다.</p><div class=\"grid-2\"><div class=\"concept\"><span class=\"overline\">WEAK FEEDBACK</span><h3>“구체적으로 작성하세요”</h3><p>어디가 부족한지, 무엇을 더해야 하는지 알기 어렵습니다. 글의 내용과 무관하게 반복되는 문장일 수 있습니다.</p></div><div class=\"concept\"><span class=\"overline\">ACTIONABLE FEEDBACK</span><h3>본문 근거와 다음 행동 연결</h3><p>“고객 불편을 개선했다고 썼지만 본인의 행동이 빠져 있습니다. 실제로 바꾼 절차와 확인할 수 있는 결과를 덧붙여 보세요.”처럼 근거에 연결합니다.</p></div></div>"
      ],
      [
        "bias",
        "데이터와 점수가 숨기는 것",
        "<p><strong>편향</strong>은 모인 데이터나 판단 기준이 특정 집단·상황에 치우친 것입니다. <strong>재식별</strong>은 이름을 지웠더라도 여러 정보를 조합해 누구인지 다시 알아낼 수 있는 문제입니다. 아래 질문에서 어려운 용어보다 실제 사용자가 어떤 영향을 받을지 생각해 보세요.</p><div class=\"table-wrap\"><table><thead><tr><th scope=\"col\">질문</th><th scope=\"col\">왜 중요한가</th></tr></thead><tbody><tr><td>합격한 자소서라서 좋은 글인가?</td><td>결과에는 회사·직무·시기·경험 등 다른 요인이 섞입니다.</td></tr><tr><td>우리 비교 데이터는 누구를 대표하는가?</td><td>자발적으로 기여한 사람만 모으면 선택 편향이 생깁니다.</td></tr><tr><td>점수가 올라가면 실제로 나아졌는가?</td><td>분량만 늘려 휴리스틱 점수가 상승할 수도 있습니다.</td></tr><tr><td>개인정보는 충분히 보호되는가?</td><td>전화번호를 지워도 학교·경력 조합으로 재식별될 수 있습니다.</td></tr><tr><td>어떤 경우에 판단을 보류해야 하는가?</td><td>근거가 부족하면 확신하는 답보다 한계를 밝히는 것이 낫습니다.</td></tr></tbody></table></div><div class=\"callout warning\"><strong>0~100 점수 ≠ 합격 확률</strong><p>점수의 척도·기준·근거를 설명하지 못한다면 사용자는 숫자를 과신할 수 있습니다. 모델의 confidence도 실제 채용 합격 가능성을 뜻하지 않습니다.</p></div>"
      ],
      [
        "human",
        "사람이 확인하는 작은 평가 세트",
        "<div class=\"steps\"><div class=\"step\"><span>1</span><div><h3>평가할 예시를 정하기</h3><p>좋은 글·부족한 글·짧은 글·직무와 무관한 글을 섞어 익명 또는 합성 예시를 준비합니다.</p></div></div><div class=\"step\"><span>2</span><div><h3>기대하는 피드백을 먼저 적기</h3><p>AI 응답을 보기 전에 사람이 문장 근거와 개선 방향을 기록합니다.</p></div></div><div class=\"step\"><span>3</span><div><h3>기준으로 비교하기</h3><p>사실성, 본문 근거, 실행 가능성, 과도한 확신 여부를 같은 기준으로 확인합니다.</p></div></div><div class=\"step\"><span>4</span><div><h3>실패 사례를 다시 설계에 반영</h3><p>프롬프트뿐 아니라 검색 데이터, 평가 기준, UI 표시와 비즈니스 규칙도 함께 수정합니다.</p></div></div></div><p>피드백 검토에는 AI를 보조 도구로 활용할 수 있지만, 최종 기준과 중요한 판단은 사람이 책임지고 검토합니다.</p>"
      ],
      [
        "takeaway",
        "수업을 마치며 스스로 설명하기",
        "<ul class=\"check-list\"><li>내가 바꾼 파일이 사용자 경험에 어떤 영향을 주는지 설명할 수 있다.</li><li>화면, 서버, DB, AI 호출의 역할을 구분할 수 있다.</li><li>API 키가 어디에 있고, 다른 사용자의 데이터 접근을 어떻게 막는지 안다.</li><li>코드를 커밋하고, 실행 결과를 요구사항과 비교할 수 있다.</li><li>AI의 결과가 틀렸거나 근거가 부족한 경우를 찾아낼 수 있다.</li></ul><div class=\"callout \"><strong>오늘 배운 것을 다음 프로젝트에</strong><p>문제로 시작하고 → 문서로 구체화하고 → 작은 단위로 만들고 → 직접 검증합니다. 이 반복을 이해하는 것이 바이브코딩의 가장 오래 남는 도구입니다.</p></div>"
      ]
    ],
    "sources": [
      [
        "https://github.com/rhdn520/CoverLetterIDE/blob/backend/prd.md",
        "제품 목표와 제약"
      ],
      [
        "https://github.com/rhdn520/CoverLetterIDE/blob/backend/supabase/functions/analyze-project/index.ts",
        "점수의 실제 계산 방식"
      ]
    ]
  }
];
