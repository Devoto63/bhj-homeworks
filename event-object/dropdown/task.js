document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        const dropdownValue = dropdown.querySelector('.dropdown__value');
        const dropdownList = dropdown.querySelector('.dropdown__list');
        const dropdownItems = dropdown.querySelectorAll('.dropdown__item');

        dropdownValue.addEventListener('click', function(event) {
            event.stopPropagation(); 

            document.querySelectorAll('.dropdown__list_active').forEach(list => {
                if (list !== dropdownList) {
                    list.classList.remove('dropdown__list_active');
                }
            });

            dropdownList.classList.toggle('dropdown__list_active');
        });

        dropdownItems.forEach(item => {
            const link = item.querySelector('.dropdown__link');
            
            link.addEventListener('click', function(event) {
                event.preventDefault(); 
                const selectedText = this.textContent.trim();
                dropdownValue.textContent = selectedText;
                dropdownList.classList.remove('dropdown__list_active');
            });
        });
    });

    document.addEventListener('click', function(event) {
        if (!event.target.closest('.dropdown')) {
            document.querySelectorAll('.dropdown__list_active').forEach(list => {
                list.classList.remove('dropdown__list_active');
            });
        }
    });
});