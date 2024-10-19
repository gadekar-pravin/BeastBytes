document.addEventListener('DOMContentLoaded', () => {
    const animalSelector = document.getElementById('animal-selector');
    const animalImage = document.getElementById('animal-image');
    const uploadForm = document.getElementById('upload-form');
    const fileInfo = document.getElementById('file-info');
    const fileInput = document.getElementById('file-input');
    const fileName = document.getElementById('file-name');
    const resetButton = document.getElementById('reset-button');

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

    resetButton.addEventListener('click', () => {
        // Reset animal selection
        const selectedAnimal = document.querySelector('input[name="animal"]:checked');
        if (selectedAnimal) {
            selectedAnimal.checked = false;
        }
        animalImage.innerHTML = '';

        // Reset file input
        fileInput.value = '';
        fileName.textContent = 'No file chosen';

        // Clear file info
        fileInfo.innerHTML = '';
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

    // Create background animation
    const backgroundAnimation = document.createElement('div');
    backgroundAnimation.className = 'background-animation';
    document.body.appendChild(backgroundAnimation);

    function createBubble() {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        const size = Math.random() * 100 + 50;
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.left = `${Math.random() * 100}vw`;
        bubble.style.animationDuration = `${Math.random() * 4 + 6}s`;
        backgroundAnimation.appendChild(bubble);

        setTimeout(() => {
            bubble.remove();
        }, 8000);
    }

    setInterval(createBubble, 300);

    // Create meteor shower
    const meteorShower = document.createElement('div');
    meteorShower.className = 'meteor-shower';
    document.body.appendChild(meteorShower);

    function createMeteor() {
        const meteor = document.createElement('div');
        meteor.className = 'meteor';

        const startX = Math.random() * window.innerWidth;
        const startY = -50; // Start above the viewport
        const translateX = Math.random() * window.innerWidth - startX + 'px';
        const translateY = window.innerHeight + 50 + 'px'; // Ensure it goes beyond the viewport

        meteor.style.left = startX + 'px';
        meteor.style.top = startY + 'px';
        meteor.style.setProperty('--translateX', translateX);
        meteor.style.setProperty('--translateY', translateY);

        const size = Math.random() * 3 + 2; // Increase size for visibility
        meteor.style.width = size + 'px';
        meteor.style.height = size * 15 + 'px'; // Make it longer

        const duration = Math.random() * 1000 + 750; // Increase duration
        meteor.style.animationDuration = duration + 'ms';

        meteorShower.appendChild(meteor);

        setTimeout(() => {
            meteor.remove();
        }, duration);
    }

    // Increase frequency of meteors
    setInterval(createMeteor, 150);
});
