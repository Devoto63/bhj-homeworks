document.addEventListener('DOMContentLoaded', function() {
    const rotators = document.querySelectorAll('.rotator');
    rotators.forEach(rotator => {
        const cases = rotator.querySelectorAll('.rotator__case');
        let activeIndex = 0;
        cases.forEach((item, index) => {
            if (item.classList.contains('rotator__case_active')) {
                activeIndex = index;
            }
        });

        function rotate() {
            cases[activeIndex].classList.remove('rotator__case_active');
            activeIndex = (activeIndex + 1) % cases.length;
            cases[activeIndex].classList.add('rotator__case_active');
        }
        setInterval(rotate, 1000);
    });
});