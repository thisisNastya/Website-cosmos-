<artifact artifact_id="442d081f-efca-4fe0-beeb-9b57310049da" artifact_version_id="8f2a4c3d-5e7f-4b1a-9c8e-2d6b7c8d9e0f" title="README.md" contentType="text/markdown">

# First-site-2024: Сайт о космосе / Space Website

## Русский / RUS

**Название продукта:** Сайт о космосе

Сайт был разработан для летней практики в вузе РУТ (МИИТ) с 31.06.24 по 25.07.24. Летняя практика проходила в ООО "Роболайн софтлаб". Тема сайта выбрана в рандомном порядке, но был сделан акцент на мороженом "Чистая линия". Создана имитация промо-акции мороженого на тематику космоса с предоставлением интересной и познавательной информации о космосе.

Проект можно использовать в ознакомительных целях, но не копировать.

**Технологии разработки:**
- **IDE:** Visual Studio
- **Платформа:** .NET
- **Языки:** HTML, CSS, JavaScript

**Разработчик:** Калинина А.В., студент 3 курса ИЭФ РУТ (МИИТ)

## English / EN

**Product Name:** Website about Space

The site was developed for summer internship at RUT (MIIT) University from 31.06.24 to 25.07.24. The summer internship took place at Roboline Softclub LLC. The theme of the site was chosen randomly, but emphasis was placed on "Clean Line" ice cream. An imitation of an ice cream promo campaign on the space theme was created, providing interesting and informative information about space.

You can use the project for educational purposes, but do not copy it.

**Development Technologies:**
- **IDE:** Visual Studio
- **Platform:** .NET
- **Languages:** HTML, CSS, JavaScript

**Developer:** Kalinina A.V., 3rd year student of IEF at RUT (MIIT)

## Структура репозитория
- `/Controllers/`: Контроллеры ASP.NET для обработки запросов.
- `/Models/`: Модели данных для сайта.
- `/Properties/`: Конфигурационные файлы проекта.
- `/Views/`: Представления (HTML-шаблоны) для отображения страниц.
- `/wwwroot/css/`: Стили CSS для оформления сайта.
- `/wwwroot/dist/`: Скомпилированные ресурсы.
- `/wwwroot/js/`: JavaScript-файлы для интерактивности.
- `/wwwroot/lib/`: Внешние библиотеки (jQuery, Bootstrap и др.).
- `Program.cs`: Точка входа в приложение ASP.NET.
- `README.md`: Это руководство.
- `appsettings.Development.json`: Настройки для разработки.
- `appsettings.json`: Основные настройки приложения.
- `libman.json`: Управление клиентскими библиотеками.
- `First-site.csproj`: Файл проекта ASP.NET.
- `First-site.csproj.user`: Пользовательские настройки проекта.

## Установка и запуск / Installation and Setup
1. **Клонируйте репозиторий:**
   ```bash
   git clone https://github.com/username/First-site-2024.git
   cd First-site-2024
   ```

2. **Откройте проект в Visual Studio:**
   - Запустите Visual Studio 2022 (или новее).
   - Откройте файл `First-site.csproj`.

3. **Восстановите пакеты:**
   - В Visual Studio: Tools → NuGet Package Manager → Restore NuGet Packages.
   - Или через CLI: `dotnet restore`.

4. **Запустите проект:**
   - Нажмите F5 в Visual Studio или выполните `dotnet run`.
   - Сайт будет доступен по адресу `https://localhost:5001` (или аналогичному порту).

## Особенности проекта / Project Features
- **Тема космоса:** Информация о планетах, звездах и космических миссиях.
- **Промо-акция:** Интеграция тематики мороженого "Чистая линия" в космический дизайн.
- **Адаптивный дизайн:** CSS-стили для корректного отображения на мобильных устройствах.
- **Интерактивность:** JavaScript для анимаций и динамического контента.
- **ASP.NET Core:** Современный фреймворк для серверной логики.

Проект создан в образовательных целях и демонстрирует базовые навыки веб-разработки.

## Лицензия / License
MIT License. Используйте для обучения, но не копируйте без изменений.

</artifact>

<artifact artifact_id="a1b2c3d4-e5f6-7890-abcd-ef1234567890" artifact_version_id="v1" title="index.html" contentType="text/html">
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Сайт о космосе - First-site-2024</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background: linear-gradient(to bottom, #000428, #004e92);
            color: white;
            line-height: 1.6;
        }
        header {
            text-align: center;
            padding: 50px 20px;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="2" fill="white"/><circle cx="80" cy="30" r="1" fill="white"/><circle cx="50" cy="80" r="1.5" fill="white"/></svg>') repeat;
        }
        h1 {
            font-size: 3em;
            margin: 0;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
        }
        .subtitle {
            font-size: 1.2em;
            margin-top: 10px;
        }
        main {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }
        section {
            margin-bottom: 40px;
            padding: 20px;
            background: rgba(255,255,255,0.1);
            border-radius: 10px;
            backdrop-filter: blur(10px);
        }
        h2 {
            color: #ffd700;
            border-bottom: 2px solid #ffd700;
            padding-bottom: 10px;
        }
        .promo {
            text-align: center;
            background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
            color: #fff;
            padding: 30px;
            border-radius: 15px;
            margin: 20px 0;
        }
        .info-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
        }
        .card {
            background: rgba(0,0,0,0.3);
            padding: 15px;
            border-radius: 8px;
            transition: transform 0.3s;
        }
        .card:hover {
            transform: translateY(-5px);
        }
        footer {
            text-align: center;
            padding: 20px;
            background: rgba(0,0,0,0.5);
            margin-top: 40px;
        }
        .lang-switch {
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 1000;
        }
        .lang-btn {
            background: rgba(255,255,255,0.2);
            border: none;
            color: white;
            padding: 10px 15px;
            margin: 5px;
            border-radius: 5px;
            cursor: pointer;
        }
        .lang-btn.active {
            background: #ffd700;
            color: #000;
        }
        .hidden {
            display: none;
        }
    </style>
</head>
<body>
    <div class="lang-switch">
        <button class="lang-btn active" onclick="switchLang('ru')">RUS</button>
        <button class="lang-btn" onclick="switchLang('en')">EN</button>
    </div>

    <header>
        <h1 id="title-ru">🚀 Космическое приключение с "Чистая линия"!</h1>
        <h1 id="title-en" class="hidden">🚀 Space Adventure with "Clean Line"!</h1>
        <p class="subtitle" id="subtitle-ru">Погрузитесь в мир космоса и попробуйте наше космическое мороженое</p>
        <p class="subtitle hidden" id="subtitle-en">Dive into the world of space and try our cosmic ice cream</p>
    </header>

    <main>
        <section class="promo">
            <h2 id="promo-ru">Специальная промо-акция!</h2>
            <h2 id="promo-en" class="hidden">Special Promo Offer!</h2>
            <p id="promo-text-ru">Купите мороженое "Чистая линия" и отправьтесь в виртуальное путешествие по галактике! Соберите все космические вкусы и узнайте интересные факты о Вселенной.</p>
            <p id="promo-text-en" class="hidden">Buy "Clean Line" ice cream and embark on a virtual journey through the galaxy! Collect all cosmic flavors and learn interesting facts about the Universe.</p>
        </section>

        <section>
            <h2 id="about-ru">О проекте / About the Project</h2>
            <h2 id="about-en" class="hidden">About the Project</h2>
            <div class="info-grid">
                <div class="card">
                    <h3 id="dev-ru">Разработка / Development</h3>
                    <h3 id="dev-en" class="hidden">Development</h3>
                    <p id="dev-text-ru">Сайт создан для летней практики в РУТ (МИИТ) с 31.06.24 по 25.07.24 в ООО "Роболайн софтлаб".</p>
                    <p id="dev-text-en" class="hidden">The site was developed for summer internship at RUT (MIIT) from 31.06.24 to 25.07.24 at Roboline Softclub LLC.</p>
                </div>
                <div class="card">
                    <h3 id="tech-ru">Технологии / Technologies</h3>
                    <h3 id="tech-en" class="hidden">Technologies</h3>
                    <p id="tech-text-ru">Visual Studio, .NET, HTML, CSS, JavaScript.</p>
                    <p id="tech-text-en" class="hidden">Visual Studio, .NET, HTML, CSS, JavaScript.</p>
                </div>
                <div class="card">
                    <h3 id="theme-ru">Тема / Theme</h3>
                    <h3 id="theme-en" class="hidden">Theme</h3>
                    <p id="theme-text-ru">Космос с акцентом на промо-акцию мороженого "Чистая линия". Интересная информация о Вселенной.</p>
                    <p id="theme-text-en" class="hidden">Space theme with emphasis on "Clean Line" ice cream promo. Interesting information about the Universe.</p>
                </div>
                <div class="card">
                    <h3 id="dev-info-ru">Разработчик / Developer</h3>
                    <h3 id="dev-info-en" class="hidden">Developer</h3>
                    <p id="dev-info-text-ru">Калинина А.В., студент 3 курса ИЭФ РУТ (МИИТ).</p>
                    <p id="dev-info-text-en" class="hidden">Kalinina A.V., 3rd year student of IEF at RUT (MIIT).</p>
                </div>
            </div>
        </section>

        <section>
            <h2 id="space-facts-ru">Факты о космосе / Space Facts</h2>
            <h2 id="space-facts-en" class="hidden">Space Facts</h2>
            <div class="info-grid">
                <div class="card">
                    <h3>🌌 Галактика</h3>
                    <p>Наша галактика Млечный Путь содержит около 100-400 миллиардов звезд.</p>
                </div>
                <div class="card">
                    <h3>🪐 Планеты</h3>
                    <p>В Солнечной системе 8 планет, каждая с уникальными характеристиками.</p>
                </div>
                <div class="card">
                    <h3>⭐ Звезды</h3>
                    <p>Солнце - самая близкая к Земле звезда, расстояние 149.6 млн км.</p>
                </div>
                <div class="card">
                    <h3>🌑 Луна</h3>
                    <p>Луна - естественный спутник Земли, влияет на приливы и отливы.</p>
                </div>
            </div>
        </section>

        <section class="promo">
            <h2 id="cta-ru">Присоединяйтесь к космическому приключению!</h2>
            <h2 id="cta-en" class="hidden">Join the Space Adventure!</h2>
            <p id="cta-text-ru">Попробуйте все вкусы "Чистая линия" и исследуйте космос вместе с нами!</p>
            <p id="cta-text-en" class="hidden">Try all "Clean Line" flavors and explore space with us!</p>
        </section>
    </main>

    <footer>
        <p>&copy; 2024 First-site-2024. Проект для образовательных целей. Не копировать.</p>
        <p>&copy; 2024 First-site-2024. Educational project. Do not copy.</p>
    </footer>

    <script>
        function switchLang(lang) {
            // Скрыть/показать элементы
            const elements = document.querySelectorAll('[id$="-ru"], [id$="-en"]');
            elements.forEach(el => {
                const baseId = el.id.replace(/-ru|-en/, '');
                const ruEl = document.getElementById(baseId + '-ru');
                const enEl = document.getElementById(baseId + '-en');
                
                if (lang === 'ru') {
                    ruEl.classList.remove('hidden');
                    enEl.classList.add('hidden');
                } else {
                    ruEl.classList.add('hidden');
                    enEl.classList.remove('hidden');
                }
            });

            // Обновить активную кнопку
            document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');
        }

        // Анимация появления карточек
        window.addEventListener('load', () => {
            const cards = document.querySelectorAll('.card');
            cards.forEach((card, index) => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, index * 200);
            });
        });

        // Параллакс-эффект для заголовка
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            const scrolled = window.pageYOffset;
            header.style.transform = `translateY(${scrolled * 0.5}px)`;
        });
    </script>
</body>
</html>
</artifact>
