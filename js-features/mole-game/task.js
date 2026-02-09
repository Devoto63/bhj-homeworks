const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

const getHole = index => document.getElementById(`hole${index}`);

for (let i = 1; i <= 9; i++) {
    const hole = getHole(i);
    
    hole.onclick = function() {
        if (this.className.includes('hole_has-mole')) {
            dead.textContent = parseInt(dead.textContent) + 1;

            if (parseInt(dead.textContent) === 10) {
                alert('Победа! Вы убили 10 кротов!');
                dead.textContent = '0';
                lost.textContent = '0';
            }
        } else {
            lost.textContent = parseInt(lost.textContent) + 1;

            if (parseInt(lost.textContent) === 5) {
                alert('Игра окончена! У вас 5 промахов.');
                dead.textContent = '0';
                lost.textContent = '0';
            }
        }
    };
}