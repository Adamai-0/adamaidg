document.addEventListener('DOMContentLoaded', function () {
    const robotList = document.getElementById('robotList');
    const robotInfo = document.getElementById('robotInfo');
    const robotImageContainer = document.getElementById('robotImageContainer');
    const additionalImagesContainer = document.getElementById('additionalImages');

    robotList.addEventListener('click', function (event) {
        if (event.target.tagName === 'LI') {
            // Очищаем старые стили для изображений в списке
            const listImages = document.querySelectorAll('#robotList li img');
            listImages.forEach(function (image) {
                image.style.width = '';
                image.style.height = '';
            });

            const selectedRobot = event.target.textContent;
            const selectedRobotImage = event.target.getAttribute('data-image');
            let infoText = '';

            switch (selectedRobot) {
                case 'ИИ в медицине: диагностика и лечение':
                    infoText = 'Искусственный интеллект применяется в медицине для улучшения точности диагностики, предсказания заболеваний и разработки эффективных методов лечения.';
                    showAdditionalImages(['img/ai1.jpg']);
                    break;
                case 'ИИ в образовании: персонализированное обучение':
                    infoText = 'Искусственный интеллект в образовании обеспечивает персонализированный подход к обучению, учитывая индивидуальные потребности и способности каждого ученика.';
                    showAdditionalImages(['img/ai2.jpg']);
                    break;
                case 'ИИ в искусстве: генерация творческих произведений':
                    infoText = 'Искусственный интеллект применяется в сфере искусства для создания уникальных творческих произведений, анализа трендов и вдохновения художников.';
                    showAdditionalImages(['img/ai3.jpg']);
                    break;
                case 'ИИ в транспорте: автономные транспортные средства':
                    infoText = 'Автономные транспортные средства, оснащенные искусственным интеллектом, предоставляют безопасные и эффективные средства передвижения, минимизируя риски дорожных происшествий.';
                    showAdditionalImages(['img/ai4.jpg']);
                    break;
                default:
                    infoText = 'Выберите область применения искусственного интеллекта для получения информации.';
                    hideAdditionalImages();
            }

            robotInfo.textContent = infoText;

            // Очищаем основной контейнер перед добавлением изображения
            robotImageContainer.innerHTML = '';
            
            // Создаем и добавляем изображение в основной контейнер
            const mainRobotImage = document.createElement('img');
            mainRobotImage.src = selectedRobotImage; // Устанавливаем изображение для выбранного примера
            mainRobotImage.alt = 'Изображение искусственного интеллекта';
            robotImageContainer.appendChild(mainRobotImage);
        }
    });

    function showAdditionalImages(images) {
        // Очищаем контейнер перед добавлением новых изображений
        additionalImagesContainer.innerHTML = '';
        
        if (images.length > 0) {
            // Создаем и добавляем изображения в контейнер только если есть дополнительные изображения
            images.forEach(function (imagePath) {
                const additionalImage = document.createElement('img');
                additionalImage.src = imagePath;
                additionalImage.alt = 'Дополнительное изображение искусственного интеллекта';
    
                // Устанавливаем фиксированный размер
                additionalImage.style.width = '400px';
                additionalImage.style.height = '400px';
    
                additionalImagesContainer.appendChild(additionalImage);
            });
    
            // Показываем контейнер с дополнительными изображениями
            additionalImagesContainer.style.display = 'block';
        } else {
            // Если нет дополнительных изображений, скрываем контейнер
            additionalImagesContainer.style.display = 'none';
        }
    }

    function hideAdditionalImages() {
        // Просто очищаем контейнер
        additionalImagesContainer.innerHTML = '';
        // И скрываем его
        additionalImagesContainer.style.display = 'none';
    }
});