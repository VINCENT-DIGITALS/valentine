const messages = [
    "Are you sure? 😢",
    "Really sure?? 😭",
    "Pookie please... 🥺",
    "Think about it! 💭",
    "I’ll be super sad... 😞",
    "Very very sad... 😭",
    "Fine, last chance! 😩",
    "Just kidding, say yes! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');

    // Change text progressively
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    // Make the Yes button grow
    let currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.2}px`;

    // Move the No button randomly
    let x = Math.random() * (window.innerWidth - 100);
    let y = Math.random() * (window.innerHeight - 50);
    noButton.style.transform = `translate(${x}px, ${y}px)`;
}

function handleYesClick() {
    createHearts();
    setTimeout(() => {
        window.location.href = "yes_page.html";
    }, 1500);
}

function createHearts() {
    for (let i = 0; i < 15; i++) {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animationDuration = `${2 + Math.random() * 3}s`;
        document.body.appendChild(heart);
        
        setTimeout(() => heart.remove(), 5000);
    }
}
