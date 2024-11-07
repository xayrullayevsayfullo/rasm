let imageNameElement = document.getElementById('imageName');
let boxes = document.querySelectorAll('.image-box');
let messageElement = document.getElementById('message');
let scoreElement = document.getElementById('score');
let startGameButton = document.getElementById('startGame');

let images = ['olma', 'nok', 'banan', 'uzum', 'qulupnay', 'mandarin', 'ananas', 'shaftoli', 'gilos', 'apelsin'];

let imageFiles = {
    'olma': 'images/olma.jpg',
    'nok': 'images/nok.jpg',
    'banan': 'images/banan.jpg',
    'uzum': 'images/uzum.jpg',
    'qulupnay': 'images/qulupnay.jpg',
    'mandarin': 'images/mandarin.jpg',
    'ananas': 'images/ananas.jpg',
    'shaftoli': 'images/shaftoli.jpg',
    'gilos': 'images/gilos.jpg',
    'apelsin': 'images/apelsin.jpg',
}

let score = 0;
let correctImage;

function startGame() {
    score = 0;
    scoreElement.textContent = score;
    nextRound();
}

function nextRound() {
    messageElement.textContent = '';

    // Tasodifiy rasm tanlash
    let randomImageName = images[Math.floor(Math.random() * images.length)];
    correctImage = randomImageName;
    imageNameElement.textContent = randomImageName;

    // Rasmlarni aralashtirish
    let shuffledImages = [...images].sort(() => Math.random() - 0.5);

    boxes.forEach((box,index) => {
        box.style.backgroundImage = `url(${imageFiles[shuffledImages[index]]})`;
        box.onclick = () => checkAnswer(shuffledImages[index]);
    })
}

function checkAnswer(selectedImage) {
    if(selectedImage === correctImage) {
        messageElement.textContent = "To'g'ri!";
        score++;
        scoreElement.textContent = score;
        nextRound();
    } else {
        messageElement.textContent = `Noto'g'ri! Bu ${selectedImage} edi!`;
        score = 0;
        scoreElement.textContent = score;
    }
}

startGameButton.addEventListener('click', startGame);
