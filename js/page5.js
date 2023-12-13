document.addEventListener('DOMContentLoaded', function () {
    const robotList = document.getElementById('robotList');
    const robotInfo = document.getElementById('robotInfo');
    const additionalImagesContainer = document.getElementById('additionalImages');

    robotList.addEventListener('click', function (event) {
        if (event.target.tagName === 'LI') {
            const selectedRobot = event.target.textContent;
            let infoText = '';

            switch (selectedRobot) {
                case 'Экзоскелеты для усиления физических возможностей':
                    infoText = 'Экзоскелеты представляют собой механические конструкции, надеваемые на тело человека для усиления его физических возможностей. Они находят широкое применение в медицинских целях, в военной сфере, а также в индустрии для улучшения производственных процессов. Экзоскелеты могут помочь людям с ограниченными физическими возможностями, а также повысить эффективность работы в тяжелых условиях.';
                    break;
                case 'Киборги и интеграция технологий в человеческий организм':
                    infoText = 'Киборги представляют собой сущности, в которых интегрированы как человеческие, так и механические компоненты. Этот подход к объединению человека и технологий может включать в себя использование искусственных протезов, нейроинтерфейсов и других технологий для расширения человеческих способностей. Киборгизация открывает новые перспективы в области медицины, исследований мозга и создания уникальных способностей у человека.';
                    break;
                default:
                    infoText = 'Выберите направление развития робототехники для получения информации. У каждого направления есть свои уникальные аспекты и потенциал для внедрения в различные сферы человеческой жизни.';
                    hideAdditionalImages();
            }

            robotInfo.innerHTML = `<h3>${selectedRobot}</h3><p>${infoText}</p>`;
        }
    });

    function hideAdditionalImages() {
        additionalImagesContainer.style.display = 'none';
    }
});