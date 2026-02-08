// Envelope click
document.getElementById('envelope-container').addEventListener('click', function() {
    document.getElementById('envelope-container').style.display = 'none';
    document.getElementById('letter-container').style.display = 'flex';
    setTimeout(() => {
        document.getElementById('letter-window').classList.add('open');
    }, 10);
});

// Step navigation
function showStep2() {
    document.querySelector('.step-1').style.display = 'none';
    document.querySelector('.step-2').style.display = 'block';
}

function showStep3() {
    document.querySelector('.step-2').style.display = 'none';
    document.querySelector('.step-3').style.display = 'block';
}

function showQuestion() {
    document.querySelector('.step-3').style.display = 'none';
    document.querySelector('.step-4').style.display = 'block';
}

// Yes button
document.querySelector('.yes-btn').addEventListener('click', function() {
    document.getElementById('letter-buttons').style.display = 'none';
    document.querySelector('.step-4 .question').style.display = 'none';
    document.getElementById('final-text').style.display = 'block';
    document.getElementById('letter-window').classList.add('final');
});

// No button hover - runs away
const noBtn = document.querySelector('.no-btn');
const noWrapper = document.querySelector('.no-wrapper');

noBtn.addEventListener('mouseenter', function() {
    const randomX = Math.random() * 200 - 100;
    const randomY = Math.random() * 200 - 100;
    noWrapper.style.transform = `translate(${randomX}px, ${randomY}px)`;
});

// Reset position when mouse leaves the area
noWrapper.addEventListener('mouseleave', function() {
    setTimeout(() => {
        noWrapper.style.transform = 'translate(0, 0)';
    }, 500);
})