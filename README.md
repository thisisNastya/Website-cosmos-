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
   git clone https://github.com/username/Website-cosmos.git
   cd Website-cosmos
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
