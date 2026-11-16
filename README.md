# awards-vote

사Sheep 2th 중운위 어워즈의 [사전투표](https://ragspirin.github.io/awards-vote/)와
[결과 발표](https://ragspirin.github.io/awards-vote/reveal.html) 페이지입니다.

## 수정 및 배포

- 모바일 투표 화면은 `index.html`, 노트북·TV 발표 화면은 `reveal.html`에서 직접 수정합니다.
- 공통 설정은 `config.js`에서 관리합니다. 행사 이름은 `title`을 수정합니다.
- 참가자 사진은 `photos/NN.jpg`에 저장하고 `people[].photo`에 경로를 적습니다. 파일명의 숫자는 참가자 ID에 대응합니다.
- GitHub Pages가 `main` 브랜치의 루트에서 배포합니다. 별도 빌드 단계가 없습니다.

## 투표와 개표 운영

- 투표 페이지가 `config.js`의 `endpoint`로 POST하면 Google Sheets의 `votes` 탭에 제출 한 건이 한 행으로 저장됩니다.
- `questions[]`의 순서는 시트의 Q1~Q36 열에 대응합니다. `questionOrder[]`는 화면에 표시할 기존 질문 번호 순서입니다. 투표는 시트 열 순서로 변환해 보내고, 발표는 같은 번호로 집계를 연결합니다. 투표가 시작되면 질문의 의미와 기존 번호, `people[].id`를 보존합니다.
- 발표 페이지에서 **S**를 눌러 설정을 열고 운영자가 관리키를 직접 입력합니다. 발표 페이지는 Apps Script에서 집계를 가져와 브라우저에 저장합니다. 관리키의 보관 위치는 Apps Script이며 공개 저장소에는 올리지 않습니다.
- 서버 코드 `Code.gs`는 Google Sheets의 **확장 프로그램 → Apps Script**에서 수정합니다. 적용하려면 **배포 관리 → 편집 → 새 버전**을 선택합니다.
- 마감 시간을 설정할 때는 `config.js`의 `deadline`과 `Code.gs`의 `DEADLINE`에 같은 값을 넣습니다. `deadline`이 비어 있으면 투표 화면에서 마감 시간을 적용하지 않습니다.
