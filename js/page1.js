document.addEventListener('DOMContentLoaded', function () {
    const robotList = document.getElementById('robotList');
    const robotInfo = document.getElementById('robotInfo');
    const robotImageContainer = document.getElementById('robotImageContainer');
    const additionalImagesContainer = document.getElementById('additionalImages');
    const STANDARD_IMAGE_SIZE = '200px'; // Задайте стандартный размер изображения

    robotList.addEventListener('click', function (event) {
        if (event.target.tagName === 'LI') {
            const selectedRobot = event.target.textContent;
            const selectedRobotImage = event.target.getAttribute('data-image');
            let infoText = '';

            switch (selectedRobot) {
                case 'Манипуляторы для сборки и обработки материалов':
                    infoText = 'Эти роботы применяются для сборки и обработки различных материалов на производстве.';
                    showAdditionalImages(['img/robot1.jpg']);
                    break;
                case 'Сварочные роботы для автоматизации сварки':
                    infoText = 'Сварочные роботы обеспечивают высокую точность и производительность в процессе сварки.';
                    showAdditionalImages(['img/robot2.jpg']);
                    break;
                case 'Роботы с компьютерным зрением для контроля качества':
                    infoText = 'Эти роботы используют системы компьютерного зрения для контроля качества продукции.';
                    showAdditionalImages(['img/robot3.jpg']);
                    break;
                case 'Автоматизированные транспортные роботы':
                    infoText = 'Транспортные роботы обеспечивают автоматическую доставку материалов и компонентов по производственным линиям.';
                    showAdditionalImages(['img/robot4.jpg']);
                    break;
                default:
                    infoText = 'Выберите тип робота для получения информации.';
                    hideAdditionalImages();
            }

            robotInfo.textContent = infoText;

            // Очищаем основной контейнер перед добавлением изображения
            robotImageContainer.innerHTML = '';
            
            // Создаем и добавляем изображение в основной контейнер
            const mainRobotImage = document.createElement('img');
            mainRobotImage.src = selectedRobotImage; // Устанавливаем изображение для выбранного робота
            mainRobotImage.alt = 'Изображение робота';
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
                additionalImage.alt = 'Дополнительное изображение робота';
                additionalImage.style.width = '400px'; // Устанавливаем новый размер в два раза больше
                additionalImage.style.height = '400px';
                additionalImage.addEventListener('click', function () {
                    // Обработчик события click для изменения размера при нажатии
                    if (additionalImage.style.width === '400px') {
                        additionalImage.style.width = '800px'; // Новый размер в два раза больше текущего
                        additionalImage.style.height = '800px';
                    } else {
                        additionalImage.style.width = '400px';
                        additionalImage.style.height = '400px';
                    }
                });
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
        // Просто очищаем контейнер и скрываем его
        additionalImagesContainer.innerHTML = '';
        additionalImagesContainer.style.display = 'none';
    }
});