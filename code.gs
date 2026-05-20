const SHEET_ID = '1Dw0aYZScnw10iP1JYTRr-AeTSJfhUHbuu2ABUzhMXr8';
const MAIN_FOLDER_ID = '151LYAW4aDLzHugDc753j97QnGeH8iM9u';

const NOTIFICATION_EMAILS = [
  'eslamnowar110@gmail.com',
  'nawareslam330@gmail.com'
];

function processSubmission(data) {
  try {
    const { name, id: studentId, dept, year, images } = data;

    const mainFolder = DriveApp.getFolderById(MAIN_FOLDER_ID);
    const timestamp = Utilities.formatDate(new Date(), Session.getScriptTimeZone(), "yyyyMMdd_HHmmss");
    const folderName = name + '_' + studentId + '_' + timestamp;
    const studentFolder = mainFolder.createFolder(folderName);

    images.forEach(function(img, i) {
      var base64 = img.dataUrl.replace(/^data:image\/\w+;base64,/, "");
      var blob = Utilities.newBlob(Utilities.base64Decode(base64), "image/jpeg", "doc_" + (i + 1) + ".jpg");
      studentFolder.createFile(blob);
    });

    var trackerId = 'ALEX-POW-' + studentId + '-' + timestamp;

    var ss = SpreadsheetApp.openById(SHEET_ID);
    var sheet = ss.getSheets()[0];
    sheet.appendRow([
      new Date(),
      trackerId,
      name,
      studentId,
      dept,
      year,
      images.length,
      studentFolder.getUrl(),
      studentFolder.getId()
    ]);

    try {
      var emailBody = '<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">' +
        '<div style="background: #003366; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">' +
        '<h2 style="color: #ffffff; margin: 0;">Alexandria University</h2>' +
        '<p style="color: #c5a028; margin: 4px 0 0; font-size: 14px;">Faculty of Engineering — Mechatronics Course</p>' +
        '</div>' +
        '<div style="padding: 24px; background: #f8fafc; border-radius: 0 0 8px 8px;">' +
        '<h3 style="color: #003366;">New Student Submission</h3>' +
        '<table style="width: 100%; border-collapse: collapse;">' +
        '<tr><td style="padding: 8px 0; font-weight: 600; color: #64748b; width: 140px;">Student Name:</td><td style="padding: 8px 0; color: #0f172a;">' + name + '</td></tr>' +
        '<tr><td style="padding: 8px 0; font-weight: 600; color: #64748b;">Student ID:</td><td style="padding: 8px 0; color: #0f172a;">' + studentId + '</td></tr>' +
        '<tr><td style="padding: 8px 0; font-weight: 600; color: #64748b;">Department:</td><td style="padding: 8px 0; color: #0f172a;">' + dept + '</td></tr>' +
        '<tr><td style="padding: 8px 0; font-weight: 600; color: #64748b;">Academic Year:</td><td style="padding: 8px 0; color: #0f172a;">' + year + '</td></tr>' +
        '<tr><td style="padding: 8px 0; font-weight: 600; color: #64748b;">Tracking ID:</td><td style="padding: 8px 0; color: #003366; font-weight: 700; font-family: monospace;">' + trackerId + '</td></tr>' +
        '<tr><td style="padding: 8px 0; font-weight: 600; color: #64748b;">Images:</td><td style="padding: 8px 0; color: #0f172a;">' + images.length + ' file(s)</td></tr>' +
        '</table>' +
        '<div style="margin-top: 16px; padding: 12px; background: #e6f0ff; border-radius: 8px; text-align: center;">' +
        '<a href="' + studentFolder.getUrl() + '" style="background: #003366; color: white; padding: 10px 24px; text-decoration: none; border-radius: 6px; font-weight: 600;">Open Folder</a>' +
        '</div>' +
        '</div></div>';

      NOTIFICATION_EMAILS.forEach(function(email) {
        MailApp.sendEmail({
          to: email,
          subject: '[Mechatronics] New Submission: ' + name + ' (' + studentId + ')',
          htmlBody: emailBody,
          name: 'Alexandria University — Mechatronics Portal'
        });
      });
    } catch(e) {}

    return { success: true, trackerId: trackerId };

  } catch (err) {
    return { success: false, error: err.message };
  }
}

function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('Alexandria University — Mechatronics Submission Portal')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}