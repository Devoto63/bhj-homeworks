function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const windowWidth = window.innerWidth || document.documentElement.clientWidth;
    const vertInView = rect.top <= windowHeight && rect.top + rect.height >= 0;
    return vertInView;
}
function handleScroll() {
    const revealBlocks = document.querySelectorAll('.reveal');

    for (let block of revealBlocks) {
        if (isElementInViewport(block)) {
            block.classList.add('reveal_active');
        } else {
            block.classList.remove('reveal_active');
        }
    }
}

window.addEventListener('scroll', handleScroll);

document.addEventListener('DOMContentLoaded', handleScroll);