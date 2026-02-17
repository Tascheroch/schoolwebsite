

function showModal(){
    document.getElementById("modal").style.display = "flex";
}

function closeModal(){
    document.getElementById("modal").style.display = "none";
}

function newProject(){
    window.location.href = "login.html";
}

document.addEventListener("DOMContentLoaded", () => {
    const loginBtn = document.querySelector("button"); // твоя кнопка увійти

    loginBtn.addEventListener("click", (e) => {
        e.preventDefault(); // блокуємо стандартну поведінку кнопки

        const emailInput = document.getElementById("i5");
        const classInput = document.getElementById("i13");
        const projectInput = document.getElementById("i18");

        const email = emailInput.value.trim().toLowerCase();
        const userClass = classInput.value.trim();
        const project = projectInput.value.trim();

        const SCHOOL_DOMAIN = "@dolynska-nvk3.edukit.kr.ua";

        // Регулярка: будь-яке ім'я + точний домен
        const regex = /^[a-zа-яёіїєґ0-9._-]+@dolynska-nvk3\.edukit\.kr\.ua$/i;

        if (!regex.test(email)) {
            alert("Використовуйте тільки шкільну пошту з доменом " + SCHOOL_DOMAIN);
            return;
        }

        if (!userClass || !project) {
            alert("Будь ласка, заповніть всі поля");
            return;
        }

        // Все пройшло — переходимо на сторінку критеріїв
        window.location.href = "criteria.html";
    });
});
