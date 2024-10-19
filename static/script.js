document.addEventListener('DOMContentLoaded', () => {
    const animalSelector = document.getElementById('animal-selector');
    const animalImage = document.getElementById('animal-image');
    const uploadForm = document.getElementById('upload-form');
    const fileInfo = document.getElementById('file-info');

    animalSelector.addEventListener('change', (e) => {
        if (e.target.type === 'radio') {
            const animal = e.target.value;
            // Update the image path to include the 'images' directory
            animalImage.innerHTML = `<img src="/static/images/${animal}.jpg" alt="${animal}">`;
        }
    });

    uploadForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(uploadForm);
        const selectedAnimal = document.querySelector('input[name="animal"]:checked');

        if (selectedAnimal) {
            formData.append('animal', selectedAnimal.value);
        } else {
            alert('Please select an animal before uploading.');
            return;
        }

        try {
            const response = await fetch('/upload', {
                method: 'POST',
                body: formData
            });
            const data = await response.json();
            fileInfo.innerHTML = `
                <p>Filename: ${data.filename}</p>
                <p>Size: ${data.size} bytes</p>
                <p>Type: ${data.content_type}</p>
                <p>Selected Animal: ${data.selected_animal}</p>
            `;
        } catch (error) {
            console.error('Error:', error);
            fileInfo.innerHTML = '<p>An error occurred while uploading the file.</p>';
        }
    });
});
