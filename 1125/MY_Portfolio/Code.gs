function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('dev.jaehyuk | 포트폴리오')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
