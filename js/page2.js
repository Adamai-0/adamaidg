document.addEventListener('DOMContentLoaded', function () {
    const robotList = document.getElementById('robotList');
    const robotInfo = document.getElementById('robotInfo');
    const robotImageContainer = document.getElementById('robotImageContainer');
    const additionalImagesContainer = document.getElementById('additionalImages');

    robotList.addEventListener('click', function (event) {
        if (event.target.tagName === 'LI') {
            const selectedRobot = event.target.textContent;
            const selectedRobotImage = event.target.getAttribute('data-image');
            let infoText = '';

            switch (selectedRobot) {
                case 'Хирургические роботы для операций':
                    infoText = 'Хирургические роботы применяются для выполнения сложных операций с высокой точностью и минимальным воздействием на ткани.';
                    showAdditionalImages(['img/medical_robot1.jpg']);
                    break;
                case 'Роботы для доставки медикаментов':
                    infoText = 'Эти роботы обеспечивают автоматизированную доставку медикаментов по больнице, что улучшает эффективность и точность.';
                    showAdditionalImages(['img/medical_robot2.jpg']);
                    break;
                case 'Роботы для реабилитации пациентов':
                    infoText = 'Медицинские роботы используются в реабилитации для помощи пациентам восстанавливать подвижность и функциональность.';
                    showAdditionalImages(['img/medical_robot3.jpg']);
                    break;
                case 'Роботы для диагностики и обследования':
                    infoText = 'Роботы в медицине также применяются для проведения диагностических процедур и обследований пациентов.';
                    showAdditionalImages(['img/medical_robot4.jpg']);
                    break;
                default:
                    infoText = 'Выберите тип медицинского робота для получения информации.';
                    hideAdditionalImages();
            }

            robotInfo.textContent = infoText;

            // Очищаем основной контейнер перед добавлением изображения
            robotImageContainer.innerHTML = '';
            
            // Создаем и добавляем изображение в основной контейнер
            const mainRobotImage = document.createElement('img');
            mainRobotImage.src = selectedRobotImage; // Устанавливаем изображение для выбранного робота
            mainRobotImage.alt = 'Изображение медицинского робота';
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
                additionalImage.alt = 'Дополнительное изображение медицинского робота';
    
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
        // Просто скрываем контейнер
        additionalImagesContainer.style.display = 'none';
    }
});