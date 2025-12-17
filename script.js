// Открытие модального окна
const contactBtns = document.querySelectorAll('#contactBtn, #contactBtn2, #submitRequestBtn');
const modal = document.getElementById('contactModal');
const closeModal = document.querySelector('.close-modal');

contactBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });
});

// Закрытие модального окна
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Закрытие модального окна при клике вне его
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Кнопка "Начать процесс"
const startProcessBtn = document.getElementById('startProcessBtn');
startProcessBtn.addEventListener('click', () => {
    alert('Начинаем процесс перевода! Следуйте инструкциям на странице.');
    // Прокрутка к разделу с документами
    document.getElementById('docs').scrollIntoView({ behavior: 'smooth' });
});

// Обработка формы
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Получаем значения формы
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // В реальном приложении здесь был бы код для отправки данных на сервер
        console.log('Данные формы:', { name, phone, email, message });
        
        // Показываем сообщение об успехе
        alert(`Спасибо, ${name}! Ваша заявка отправлена. Мы свяжемся с вами по телефону ${phone} в ближайшее время.`);
        
        // Закрываем модальное окно
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        
        // Очищаем форму
        contactForm.reset();
    });
}

// Анимация при прокрутке
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.prestage-card, .docs-card, .step, .enrollment-step, .tip-card, .review-card, .question-option');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Устанавливаем начальные стили для анимации
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.prestage-card, .docs-card, .step, .enrollment-step, .tip-card, .review-card, .question-option');
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Запускаем анимацию после загрузки страницы
    setTimeout(() => {
        animateOnScroll();
    }, 100);
});

// Обработчик прокрутки
window.addEventListener('scroll', animateOnScroll);

// Гладкая прокрутка для навигационных ссылок
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Анимация для кнопок в футере
const footerButtons = document.querySelectorAll('.footer-links a');
footerButtons.forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateX(5px)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateX(0)';
    });
});
