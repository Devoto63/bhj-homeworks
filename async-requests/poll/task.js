const POLL_URL = 'https://students.netoservices.ru/nestjs-backend/poll';

function loadPoll() {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', POLL_URL);

  xhr.onload = function() {
    if (xhr.status === 200) {
      try {
        const response = JSON.parse(xhr.responseText);

        displayPoll(response);
      } catch (error) {
        console.error('Ошибка при обработке данных:', error);
      }
    } else {
      console.error('Ошибка загрузки опроса. Статус:', xhr.status);
    }
  };

  xhr.onerror = function() {
    console.error('Ошибка сети. Не удалось загрузить опрос.');
  };

  xhr.send();
}

function displayPoll(pollData) {
  const pollTitle = document.getElementById('poll__title');
  const pollAnswers = document.getElementById('poll__answers');

  pollAnswers.innerHTML = '';
 
  pollTitle.textContent = pollData.data.title;

  pollData.data.answers.forEach(answer => {
    const button = document.createElement('button');
    button.className = 'poll__answer';
    button.textContent = answer;
    
    button.addEventListener('click', function() {
      alert('Спасибо, ваш голос засчитан!');
    });

    pollAnswers.appendChild(button);
  });
}

document.addEventListener('DOMContentLoaded', loadPoll);