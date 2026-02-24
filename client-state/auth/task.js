document.addEventListener('DOMContentLoaded', function() {
    const signinForm = document.getElementById('signin__form');
    const signinBlock = document.getElementById('signin');
    const welcomeBlock = document.getElementById('welcome');
    const userIdSpan = document.getElementById('user_id');

    const savedUserId = localStorage.getItem('user_id');
    if (savedUserId) {
        showWelcomeScreen(savedUserId);
    } else {
        showSigninScreen();
    }
    
    signinForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const formData = new FormData(signinForm);

        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
        
        xhr.addEventListener('readystatechange', function() {
            if (xhr.readyState === xhr.DONE) {
                if (xhr.status === 200) {
                    try {
                        const response = JSON.parse(xhr.responseText);
                        
                        if (response.success) {
                            const userId = response.user_id;

                            localStorage.setItem('user_id', userId);

                            showWelcomeScreen(userId);
                            
                            signinForm.reset();
                        } else {
                            alert('Неверный логин/пароль');
                        }
                    } catch (e) {
                        console.error('Ошибка парсинга ответа:', e);
                        alert('Произошла ошибка при обработке ответа сервера');
                    }
                } else {
                    alert('Произошла ошибка при отправке запроса');
                }
            }
        });
        
        xhr.send(formData);
    });
    
    function showWelcomeScreen(userId) {
        userIdSpan.textContent = userId;
        signinBlock.classList.remove('signin_active');
        welcomeBlock.classList.add('welcome_active');
    }
    
    function showSigninScreen() {
        welcomeBlock.classList.remove('welcome_active');
        signinBlock.classList.add('signin_active');
    }
});