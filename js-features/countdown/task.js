const timerElement = document.getElementById('timer');

let timerValue = parseInt(timerElement.textContent);

function updateTimer() {
    timerValue--;
    
    timerElement.textContent = timerValue;
    
    if (timerValue <= 0) {
        clearInterval(timerInterval);
        alert('Вы победили в конкурсе!');
    }
}

const timerInterval = setInterval(updateTimer, 1000);