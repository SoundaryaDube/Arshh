const SHEET_ID = "1tEFe6kZZ0-Kgx-2eNuruDHDe2Vk0Rx7G6pN9uVNMshw";
const SHEET_NAME = "Enquiries";

function doPost(e) {
  const sheet = getEnquirySheet_();
  const data = e.parameter || {};

  sheet.appendRow([
    data.submittedAt || new Date().toISOString(),
    data.name || "",
    data.email || "",
    data.city || "",
    data.state || "",
    data.lampType || "",
    data.service || ""
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}

function getEnquirySheet_() {
  const spreadsheet = SpreadsheetApp.openById(SHEET_ID);
  const sheet = spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.insertSheet(SHEET_NAME);

  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      "submittedAt",
      "name",
      "email",
      "city",
      "state",
      "lampType",
      "service"
    ]);
  }

  return sheet;
}
