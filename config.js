/* =========================================================
   우리끼리 어워즈 — 공통 설정
   투표 페이지(index.html)와 발표 페이지(reveal.html)가 같이 읽습니다.
   이 파일만 고치면 양쪽에 동시에 반영됩니다.
   ========================================================= */
window.AWARDS_CONFIG = {
  // 행사 이름 (투표 페이지 상단, 발표 페이지 타이틀)
  title: '우리끼리 어워즈',

  // Apps Script "웹 앱" 배포 URL. 비워두면 투표 페이지는 미리보기 모드(저장 안 함).
  endpoint: 'https://script.google.com/macros/s/AKfycby_MY2nwja0UO2VnbuuD2a8hC4E9t5GcFLLMOLOrgnKu07Gy_20taJYGPSjDChxWpVl/exec',

  // 투표 마감 일시. 예: '2026-11-01T23:59:00+09:00'  비워두면 마감 없음.
  // Code.gs의 DEADLINE에도 같은 값을 넣어야 서버에서도 막힙니다.
  deadline: '',

  // 참가자 20명. 사진은 photos/ 폴더에 id 번호로 넣습니다. 예: id 16 → 'photos/16.jpg'
  // 비워두면 번호가 적힌 색 아바타로 표시됩니다. id는 바꾸지 마세요(시트 기록의 기준).
  // gender는 기록용이며 화면에는 쓰지 않습니다.
  people: [
    { id: 1,  name: '이선용', gender: '남', photo: 'photos/01.jpg' },
    { id: 2,  name: '김신우', gender: '남', photo: 'photos/02.jpg' },
    { id: 3,  name: '길인호', gender: '남', photo: 'photos/03.jpg' },
    { id: 4,  name: '김다윤', gender: '여', photo: 'photos/04.jpg' },
    { id: 5,  name: '박인영', gender: '남', photo: 'photos/05.jpg' },
    { id: 6,  name: '양다원', gender: '여', photo: 'photos/06.jpg' },
    { id: 7,  name: '김태현', gender: '남', photo: 'photos/07.jpg' },
    { id: 8,  name: '안준혁', gender: '남', photo: 'photos/08.jpg' },
    { id: 9,  name: '김보경', gender: '여', photo: 'photos/09.jpg' },
    { id: 10, name: '양지윤', gender: '여', photo: 'photos/10.jpg' },
    { id: 11, name: '이다빈', gender: '남', photo: 'photos/11.jpg' },
    { id: 12, name: '유영우', gender: '남', photo: 'photos/12.jpg' },
    { id: 13, name: '김하선', gender: '여', photo: 'photos/13.jpg' },
    { id: 14, name: '김진희', gender: '여', photo: 'photos/14.jpg' },
    { id: 15, name: '최지호', gender: '남', photo: 'photos/15.jpg' },
    { id: 16, name: '조현진', gender: '남', photo: '' },
    { id: 17, name: '최준희', gender: '남', photo: 'photos/17.jpg' },
    { id: 18, name: '안수빈', gender: '여', photo: 'photos/18.jpg' },
    { id: 19, name: '김우진', gender: '남', photo: 'photos/19.jpg' },
    { id: 20, name: '주형락', gender: '남', photo: 'photos/20.jpg' }
  ],

  // 질문 목록. 순서가 시트의 Q1, Q2… 열과 그대로 대응하니 투표 시작 후에는 순서를 바꾸지 마세요.
  questions: [
    '가장 먼저 이혼할 것 같은 사람은?',
    '무인도에 떨어지면 제일 먼저 탈출할 것 같은 사람은?',
    '10년 뒤 가장 부자가 되어 있을 것 같은 사람은?',
    '사실 비밀이 가장 많을 것 같은 사람은?'
  ]
};
