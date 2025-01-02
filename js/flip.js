const targetDate = new Date('2025-01-26T00:00:00').getTime();

function updateFlipClock() {
    const now = new Date().getTime();
    const diff = targetDate - now;

    if (diff <= 0) {
        clearInterval(timer);
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

const timer = setInterval(updateFlipClock, 1000);
updateFlipClock(); // Initialize clock immediately
