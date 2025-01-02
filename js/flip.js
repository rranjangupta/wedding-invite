const targetDate = new Date('2025-01-26T19:00:00').getTime();

function updateFlipClock() {
    const now = new Date().getTime();
    const diff = targetDate - now;

    if (diff <= 0) {
        clearInterval(timer);
        showMessage();  // Show message when the countdown ends
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    updateDigit('days-tens', Math.floor(days / 10));
    updateDigit('days-ones', days % 10);
    updateDigit('hours-tens', Math.floor(hours / 10));
    updateDigit('hours-ones', hours % 10);
    updateDigit('minutes-tens', Math.floor(minutes / 10));
    updateDigit('minutes-ones', minutes % 10);
    updateDigit('seconds-tens', Math.floor(seconds / 10));
    updateDigit('seconds-ones', seconds % 10);
}

function updateDigit(unitId, value) {
    const top = document.getElementById(`${unitId}-top`);
    const bottom = document.getElementById(`${unitId}-bottom`);
    const wrapper = document.getElementById(`${unitId}-wrapper`);

    if (top.textContent !== String(value)) {
        top.textContent = value;
        bottom.textContent = value;
        wrapper.classList.add('flipping');

        setTimeout(() => {
            wrapper.classList.remove('flipping');
        }, 500);
    }
}

function showMessage() {
    // Hide the flip clock
    const flipClock = document.querySelector('.flip-clock');
    flipClock.style.display = 'none';

    // Display a congratulatory message
    const messageContainer = document.createElement('div');
    messageContainer.style.textAlign = 'center';
    messageContainer.style.fontSize = '20px';
    messageContainer.style.color = 'blue';
    messageContainer.style.fontWeight = 'bold';
    messageContainer.innerHTML = `
        <h3>SUBH ARAMBH!</h3>
        <p>Bless us lifetime filled with joy, love, and happiness!</p>
    `;
    document.body.appendChild(messageContainer);
}

const timer = setInterval(updateFlipClock, 1000);
updateFlipClock(); // Initialize clock immediately
