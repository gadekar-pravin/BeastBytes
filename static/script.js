document.addEventListener('DOMContentLoaded', () => {
    const animalSelector = document.getElementById('animal-selector');
    const animalImage = document.getElementById('animal-image');
    const uploadForm = document.getElementById('upload-form');
    const fileInfo = document.getElementById('file-info');
    const fileInput = document.getElementById('file-input');
    const fileName = document.getElementById('file-name');

    animalSelector.addEventListener('change', (e) => {
        if (e.target.type === 'radio') {
            const animal = e.target.value;
            animalImage.innerHTML = `<img src="/static/images/${animal}.jpg" alt="${animal}">`;
        }
    });

    fileInput.addEventListener('change', async (e) => {
        if (e.target.files.length > 0) {
            fileName.textContent = e.target.files[0].name;
            await uploadFile();
        } else {
            fileName.textContent = 'No file chosen';
        }
    });

    async function uploadFile() {
        const formData = new FormData(uploadForm);
        const selectedAnimal = document.querySelector('input[name="animal"]:checked');

        if (!selectedAnimal) {
            alert('Please select an animal before uploading.');
            return;
        }

        formData.append('animal', selectedAnimal.value);

        try {
            const response = await fetch('/upload', {
                method: 'POST',
                body: formData
            });
            const data = await response.json();
            fileInfo.innerHTML = `
                <p><strong>Filename:</strong> ${data.filename}</p>
                <p><strong>Size:</strong> ${formatFileSize(data.size)}</p>
                <p><strong>Type:</strong> ${data.content_type}</p>
            `;
        } catch (error) {
            console.error('Error:', error);
            fileInfo.innerHTML = '<p>An error occurred while uploading the file.</p>';
        }
    }

    function formatFileSize(bytes) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }
});
