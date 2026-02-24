const itemsContainer = document.getElementById('items');
const loader = document.getElementById('loader');

function loadCurrencies() {

  loader.classList.add('loader_active');

  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');

  xhr.onload = function() {
    if (xhr.status === 200) {
      try {

        const data = JSON.parse(xhr.responseText);

        itemsContainer.innerHTML = '';

        const valutes = data.response.Valute;

        for (let key in valutes) {
          if (valutes.hasOwnProperty(key)) {
            const currency = valutes[key];

            const itemDiv = document.createElement('div');
            itemDiv.className = 'item';

            const codeDiv = document.createElement('div');
            codeDiv.className = 'item__code';
            codeDiv.textContent = currency.CharCode;

            const valueDiv = document.createElement('div');
            valueDiv.className = 'item__value';
            valueDiv.textContent = currency.Value;

            const currencyDiv = document.createElement('div');
            currencyDiv.className = 'item__currency';
            currencyDiv.textContent = 'руб.';

            itemDiv.appendChild(codeDiv);
            itemDiv.appendChild(valueDiv);
            itemDiv.appendChild(currencyDiv);

            itemsContainer.appendChild(itemDiv);
          }
        }

        loader.classList.remove('loader_active');
        
      } catch (error) {
        console.error('Ошибка при обработке данных:', error);
        loader.classList.remove('loader_active');
      }
    } else {
      console.error('Ошибка загрузки:', xhr.status);
      loader.classList.remove('loader_active');
    }
  };

  xhr.onerror = function() {
    console.error('Ошибка сети');
    loader.classList.remove('loader_active');
  };

  xhr.send();
}

document.addEventListener('DOMContentLoaded', loadCurrencies);