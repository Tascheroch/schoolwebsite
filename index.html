<!DOCTYPE html>
<html lang="uk">
<head>
    <meta charset="UTF-8">
    <title>WorkCheck Form</title>
</head>
<body>
    <form id="workcheckForm">
        <!-- Ваші поля з HTML файлу -->
        <div>
            <label for="emailField">Електронна пошта (checkbox для підтвердження):</label>
            <input type="checkbox" id="i5" name="EmailConfirmed"> Так, це моя адреса
            <input type="hidden" id="emailHidden" name="Email" value="cifrotex2717@gmail.com">
        </div>
        <div>
            <label for="postField">Пошта:</label>
            <input type="text" id="i8" name="Пошта" placeholder="Ваша відповідь">
        </div>
        <div>
            <label for="classField">Клас:</label>
            <input type="text" id="i13" name="Клас" placeholder="Ваша відповідь">
        </div>
        <!-- Додайте решту полів аналогічно, де атрибут name відповідає назві колонки в таблиці -->
        
        <button type="submit">Надіслати</button>
    </form>

    <script>
        // ЗАМІНІТЬ ЦЕЙ URL НА ТОЙ, ЩО ВИ ОТРИМАЛИ ПРИ РОЗГОРТАННІ
        const scriptURL = 'https://script.google.com/macros/s/TBІЙ_ID/exec';

        document.getElementById('workcheckForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Запобігаємо стандартному перезавантаженню сторінки

            // Збираємо дані з форми
            const formData = {};
            
            // Додаємо статичний email
            formData['Email'] = document.getElementById('emailHidden').value;
            formData['EmailConfirmed'] = document.getElementById('i5').checked;
            
            // Додаємо інші поля. Важливо, щоб ключі (наприклад, 'Пошта') 
            // точно відповідали назвам колонок у таблиці.
            formData['Пошта'] = document.getElementById('i8').value;
            formData['Клас'] = document.getElementById('i13').value;
            
            // Тут потрібно зібрати решту 15 полів аналогічно до вашого HTML
            // formData['Назва проекту'] = document.getElementById('i18').value;
            // formData['Перше враження від проекту'] = document.getElementById('i23').value;
            // ... і так далі

            // Відправляємо дані методом POST
            fetch(scriptURL, {
                method: 'POST',
                mode: 'no-cors', // Важливо для Google Apps Script, щоб уникнути CORS помилок
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData) // Відправляємо як JSON рядок
            })
            .then(() => {
                // Через 'no-cors' ми не можемо прочитати відповідь, 
                // тому просто показуємо повідомлення про успіх
                alert('Дані успішно надіслано!');
                document.getElementById('workcheckForm').reset();
            })
            .catch(error => {
                console.error('Помилка:', error);
                alert('Сталася помилка при надсиланні.');
            });
        });
    </script>
</body>
</html>
