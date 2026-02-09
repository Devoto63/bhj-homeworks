const clickCounter = document.getElementById('clicker__counter');
const cookie = document.getElementById('cookie');

let isCookieEnlarged = false;

function handleCookieClick() {
    let currentCounter = parseInt(clickCounter.textContent);
    clickCounter.textContent = currentCounter + 1;
    
    if (isCookieEnlarged) {
        cookie.width = 200;
        cookie.height = cookie.width; 
    } else {
        cookie.width = 250;
        cookie.height = cookie.width;
    }

    isCookieEnlarged = !isCookieEnlarged;
}

cookie.addEventListener('click', handleCookieClick);