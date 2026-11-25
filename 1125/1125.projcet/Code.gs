const CONFIG = {
  SPREADSHEET_ID: '1v-L0-JKpiTEp3QqcQTCr5M069AUQZ5qt0VXFb6zECYo',
  SHEET_NAME: '시트1'
};


// 웹앱 실행
function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('11월 25일 저녁 신청 받기');
}


// 신청 내용 저장
function saveData(name, food, message) {

  // 스프레드시트 열기
  const spreadsheet =
    SpreadsheetApp.openById(CONFIG.SPREADSHEET_ID);

  // 시트 가져오기
  const sheet =
    spreadsheet.getSheetByName(CONFIG.SHEET_NAME);

  // 입력값 저장
  sheet.appendRow([
    name,
    food,
    message
  ]);

  // 저장 완료 후 메시지 전달
  return '답장 감사합니다.';
}
