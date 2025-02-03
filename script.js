//your code here
 const imageContainer = document.getElementById('image-container');
        const h3 = document.getElementById('h');
        const resetBtn = document.getElementById('reset');
        const verifyBtn = document.getElementById('verify');
        const para = document.getElementById('para');
        let selectedImages = [];
        let repeatedImageClass;
        let images = [];

        function generateImages() {
            images = [];
            const imageClasses = ['img1', 'img2', 'img3', 'img4', 'img5'];
            const randomIndex = Math.floor(Math.random() * 5);
            repeatedImageClass = imageClasses[randomIndex];

            for (let i = 0; i < 5; i++) {
                images.push(imageClasses[i]);
            }
            images.push(repeatedImageClass);
            shuffleArray(images);
        }

        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }

        function renderImages() {
            imageContainer.innerHTML = '';
            images.forEach(className => {
                const img = document.createElement('div');
                img.classList.add(className);
                img.addEventListener('click', handleImageClick);
                imageContainer.appendChild(img);
            });
        }

        function handleImageClick(event) {
            const clickedImage = event.target;
            if (selectedImages.length < 2 && !selectedImages.includes(clickedImage)) {
                selectedImages.push(clickedImage);
                resetBtn.style.display = 'block';

                 if (selectedImages.length === 2) {
                    verifyBtn.style.display = 'block';
                    h3.style.display = 'none';

                }
            }
        }

        verifyBtn.addEventListener('click', () => {
            verifyBtn.style.display = 'none';
            const class1 = selectedImages[0].classList.item(0);
            const class2 = selectedImages[1].classList.item(0);

            if (class1 === class2) {
                para.textContent = "You are a human. Congratulations!";
            } else {
                para.textContent = "We can't verify you as a human. You selected the non-identical tiles.";
            }
            para.style.display = 'block';
            selectedImages = [];
        });


        resetBtn.addEventListener('click', () => {
            selectedImages = [];
            resetBtn.style.display = 'none';
            verifyBtn.style.display = 'none';
            para.textContent = '';
            para.style.display = 'none';
            h3.style.display = 'block';

        });

        generateImages();
        renderImages();