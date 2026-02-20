(function() {
    const book = document.getElementById('book');

    const fontSizes = document.querySelectorAll('.font-size');

    function removeActiveClass() {
        fontSizes.forEach(item => {
            item.classList.remove('font-size_active');
        });
    }

    function removeBookFontSizeClasses() {
        book.classList.remove('book_fs-small', 'book_fs-big');
    }

    fontSizes.forEach(item => {
        item.addEventListener('click', function(event) {

            event.preventDefault();

            removeActiveClass();

            this.classList.add('font-size_active');
            
            const size = this.dataset.size;

            removeBookFontSizeClasses();

            if (size === 'small') {
                book.classList.add('book_fs-small');
            } else if (size === 'big') {
                book.classList.add('book_fs-big');
            }
        });
    });
})();