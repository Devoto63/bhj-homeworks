const editor = document.getElementById('editor');

const STORAGE_KEY = 'editor_text';

function loadSavedText() {
    const savedText = localStorage.getItem(STORAGE_KEY);
    if (savedText) {
        editor.value = savedText;
    }
}

function saveText() {
    localStorage.setItem(STORAGE_KEY, editor.value);
}

loadSavedText();

editor.addEventListener('input', saveText);

editor.addEventListener('change', () => {
    if (editor.value === '') {
        localStorage.removeItem(STORAGE_KEY);
    }
});