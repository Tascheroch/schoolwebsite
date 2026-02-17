// script.js

// --------------------
// Функції для Login.html
// --------------------
function saveLoginData() {
    const email = document.getElementById("i5").value;
    const className = document.getElementById("i13").value;
    const projectName = document.getElementById("i18").value;

    // Перевірка, щоб нічого не було пустим
    if (!email || !className || !projectName) {
        alert("Будь ласка, заповніть всі поля!");
        return false;
    }

    // Зберігаємо дані в localStorage
    localStorage.setItem("email", email);
    localStorage.setItem("className", className);
    localStorage.setItem("projectName", projectName);

    // Переходимо на сторінку критеріїв
    window.location.href = "criteria.html";
}

// --------------------
// Функції для Criteria.html
// --------------------
function sendToGoogleForm() {
    // Беремо login-дані з localStorage
    const email = localStorage.getItem("email");
    const className = localStorage.getItem("className");
    const projectName = localStorage.getItem("projectName");

    if (!email || !className || !projectName) {
        alert("Помилка: дані login не знайдено. Поверніться на сторінку входу.");
        return;
    }

    // ID полів критеріїв
    const scoreIDs = ["i23","i28","i33","i38","i43","i48","i53","i58","i63","i68","i73","i78","i83","i88","i93"];
    
    // Збираємо оцінки
    const scores = {};
    let allFilled = true;
    scoreIDs.forEach(id => {
        const val = document.getElementById(id).value;
        if (val === "") allFilled = false;
        scores[id] = val;
    });

    if (!allFilled) {
        if(!confirm("Деякі поля оцінок порожні. Надіслати все одно?")) return;
    }

    // Формуємо тіло POST-запиту
    const data = {};
    data["entry.5"] = email;        // Пошта
    data["entry.13"] = className;   // Клас
    data["entry.18"] = projectName; // Назва проєкту

    scoreIDs.forEach(id => {
        data["entry." + id.slice(1)] = scores[id];
    });

    const formBody = Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");

    // URL вашої Google форми
    const formURL = "https://docs.google.com/forms/d/e/1FAIpQLSdjTbjQGwof2d5s77lf22VQQU9ydYWfPhjh-pZmr-2bNXsTUg/formResponse";

    // Надсилаємо POST-запит
    fetch(formURL, {
        method: "POST",
        mode: "no-cors",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: formBody
    }).then(() => {
        alert("Дані успішно надіслані!");
        // Очистка localStorage після відправки
        localStorage.removeItem("email");
        localStorage.removeItem("className");
        localStorage.removeItem("projectName");
        // Можна перезавантажити сторінку або повернутися на login
        window.location.href = "index.html";
    }).catch((error) => {
        console.error(error);
        alert("Помилка при надсиланні даних.");
    });
}
