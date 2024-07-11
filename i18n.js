const translations = {
  en: {
    uploadImage: "📸 Drag and drop or click to upload the image",
    easy: "easy",
    medium: "medium",
    hard: "hard",
    challange: "challenge",
    completedPuzzle: "Puzzle Completed!",
    difficulty: "Difficulty",
    start: "start",
    restart: "restart",
    mainMenu: "other puzzles"
  },
  ko: {
    uploadImage: "📸 이미지를 드래그 앤드 드롭하거나 클릭해서 업로드해 주세요",
    easy: "쉬움",
    medium: "중간",
    hard: "어려움",
    challange: "도전",
    completedPuzzle: "퍼즐 완성!",
    difficulty: "난이도",
    start: "시작",
    restart: "재시작",
    mainMenu: "메인으로"
  }
};

function changeLanguage(lng) {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(element => {
    const key = element.getAttribute('data-i18n');
    element.innerHTML = translations[lng][key];
  });
}

document.getElementById('languageSelector').addEventListener('change', function () {
  const selectedLanguage = this.value;
  changeLanguage(selectedLanguage);
});

// 페이지 로드 시 기본 언어 설정
document.addEventListener('DOMContentLoaded', function () {
  const defaultLanguage = document.documentElement.lang || 'ko';
  changeLanguage(defaultLanguage);
});
