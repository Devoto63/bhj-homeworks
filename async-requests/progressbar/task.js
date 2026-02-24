document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');
    const fileInput = document.getElementById('file');
    const progressBar = document.getElementById('progress');
    const sendButton = document.getElementById('send');

    fileInput.addEventListener('change', function() {
        const fileDesc = document.querySelector(".input__wrapper-desc");
        let fileName = this.value.split("\\");
        fileName = fileName[fileName.length - 1];
        fileDesc.textContent = fileName || "Имя файла...";
    });

    form.addEventListener('submit', function(e) {
        e.preventDefault(); 
        if (fileInput.files.length === 0) {
            alert('Пожалуйста, выберите файл');
            return;
        }

        const formData = new FormData();
        formData.append('file', fileInput.files[0]);

        const xhr = new XMLHttpRequest();

        xhr.upload.addEventListener('progress', function(event) {
            if (event.lengthComputable) {
                const percentComplete = event.loaded / event.total;
                progressBar.value = percentComplete;
            }
        });

        xhr.addEventListener('load', function() {
            if (xhr.status >= 200 && xhr.status < 300) {
                console.log('Файл успешно загружен');
                alert('Файл успешно загружен!');
                setTimeout(() => {
                    progressBar.value = 0;
                }, 1000);
            } else {
                console.error('Ошибка загрузки:', xhr.statusText);
                alert('Произошла ошибка при загрузке файла');
            }
        });

        xhr.addEventListener('error', function() {
            console.error('Ошибка сети');
            alert('Произошла ошибка сети. Проверьте подключение к интернету');
        });

        xhr.addEventListener('abort', function() {
            console.log('Загрузка отменена');
        });

        xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
        xhr.send(formData);

        sendButton.disabled = true;
        
        const enableButton = function() {
            sendButton.disabled = false;
            xhr.removeEventListener('load', enableButton);
            xhr.removeEventListener('error', enableButton);
            xhr.removeEventListener('abort', enableButton);
        };
        
        xhr.addEventListener('load', enableButton);
        xhr.addEventListener('error', enableButton);
        xhr.addEventListener('abort', enableButton);
    });
});