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

  // 참가자 18명. 사진은 photos/ 폴더에 넣고 경로를 적습니다. 예: 'photos/01.jpg'
  // 비워두면 번호가 적힌 색 아바타로 표시됩니다. id는 바꾸지 마세요(시트 기록의 기준).
  people: [
    { id: 1,  name: '참가자 01', photo: '' },
    { id: 2,  name: '참가자 02', photo: '' },
    { id: 3,  name: '참가자 03', photo: '' },
    { id: 4,  name: '참가자 04', photo: '' },
    { id: 5,  name: '참가자 05', photo: '' },
    { id: 6,  name: '참가자 06', photo: '' },
    { id: 7,  name: '참가자 07', photo: '' },
    { id: 8,  name: '참가자 08', photo: '' },
    { id: 9,  name: '참가자 09', photo: '' },
    { id: 10, name: '참가자 10', photo: '' },
    { id: 11, name: '참가자 11', photo: '' },
    { id: 12, name: '참가자 12', photo: '' },
    { id: 13, name: '참가자 13', photo: '' },
    { id: 14, name: '참가자 14', photo: '' },
    { id: 15, name: '참가자 15', photo: '' },
    { id: 16, name: '참가자 16', photo: '' },
    { id: 17, name: '참가자 17', photo: '' },
    { id: 18, name: '참가자 18', photo: '' }
  ],

  // 질문 목록. 순서가 시트의 Q1, Q2… 열과 그대로 대응하니 투표 시작 후에는 순서를 바꾸지 마세요.
  questions: [
    '가장 먼저 이혼할 것 같은 사람은?',
    '무인도에 떨어지면 제일 먼저 탈출할 것 같은 사람은?',
    '10년 뒤 가장 부자가 되어 있을 것 같은 사람은?',
    '사실 비밀이 가장 많을 것 같은 사람은?'
  ]
};
