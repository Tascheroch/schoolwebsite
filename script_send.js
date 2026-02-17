// Функція для першого налаштування (створення властивостей)
function initialSetup() {
  const scriptProp = PropertiesService.getScriptProperties();
  const activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  scriptProp.setProperty('key', activeSpreadsheet.getId());
  Logger.log('Setup complete. Spreadsheet ID saved.');
}

// Функція для обробки POST-запитів
function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.tryLock(10000); // Запобігає одночасному запису

  try {
    // Отримуємо ID таблиці з властивостей проекту
    const scriptProp = PropertiesService.getScriptProperties();
    const spreadsheetId = scriptProp.getProperty('key');
    
    // Відкриваємо таблицю та лист
    const doc = SpreadsheetApp.openById(spreadsheetId);
    const sheet = doc.getSheetByName('Sheet1'); // Змініть назву, якщо ваш лист називається інакше

    // Парсимо отримані дані (очікуємо JSON)
    let formData;
    if (e.postData && e.postData.contents) {
      formData = JSON.parse(e.postData.contents);
    } else {
      formData = e.parameter; // Якщо дані прийшли як звичайний POST
    }

    // Отримуємо заголовки колонок з першого рядка
    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    
    // Знаходимо номер наступного вільного рядка
    const nextRow = sheet.getLastRow() + 1;
    
    // Створюємо масив для нового рядка
    const newRow = headers.map(header => {
      if (header === 'Дата') {
        return new Date(); // Автоматично додаємо поточну дату
      }
      // Знаходимо значення для кожної колонки за назвою заголовка
      return formData[header] || '';
    });

    // Додаємо новий рядок до таблиці
    sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow]);

    // Повертаємо успішну відповідь
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success', 'row': nextRow }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // Логуємо помилку та повертаємо відповідь про помилку
    console.error(error);
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': error.message }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock(); // Звільняємо блокування
  }
}
