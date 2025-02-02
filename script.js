function moveNoButton() {
    const noButton = document.querySelector('.no-button');
    let x = Math.random() * (window.innerWidth - 150);
    let y = Math.random() * (window.innerHeight - 100);
    noButton.style.transform = `translate(${x}px, ${y}px)`;
}

function handleYesClick() {
    createHearts();
    showConfetti();
    document.body.classList.add("glow-effect");
    setTimeout(() => {
        window.location.href = "yes_page.html";
    }, 1500);
}

/* Creates floating hearts */
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

/* Simulates confetti effect */
function showConfetti() {
    for (let i = 0; i < 50; i++) {
        let confetti = document.createElement("div");
        confetti.classList.add("confetti");
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.top = `-10px`;
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        confetti.style.animationDuration = `${1 + Math.random() * 2}s`;
        document.body.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 3000);
    }
}
