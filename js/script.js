/**
 * @author Vinit Shahdeo <vinitshahdeo@gmail.com>
 */
(function ($) {
    "use strict";
      $('.sakura-falling').sakura();
})(jQuery);

/**
 *
 * Despite so many new Bollywood and English song options, I prefered to use two-decade-old song, Din Shagna Da!
 *
 * Ever attended a North Indian Wedding? As soon as the DJ plays Din Shagna Da song, it means that the much-awaited moment is here
 * and the bride is all set to put her first foot forward to the wedding venue under a breathtaking phoolon ki chaadar.
 * Let's keep the sky-high status of this song untouched!
 *
 * When the website is backed up with a soul-stirring track, the feeling becomes absolutely surreal.
 * Choose a heart-touching track! 🎵 ❤️
 *
 * Listen here: https://youtu.be/X0MDALpV29s
 *
 */
// $(document).on('click', function(){
//     document.getElementById("my_audio").play();
//     console.log('Shaadi me zaroor aana');
// });
//
// // Set the date we're counting down to
// var countDownDate = new Date("Jan 26, 2025 17:00:00").getTime();
//
// // Update the count down every 1 second
// var x = setInterval(function() {
//
//     // Get todays date and time
//     var now = new Date().getTime();
//
//     // Find the distance between now and the count down date
//     var distance = countDownDate - now;
//
//     // Time calculations for days, hours, minutes and seconds
//     var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//     var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     var seconds = Math.floor((distance % (1000 * 60)) / 1000);
//
//     // Output the result in an element with id="demo"
//     document.getElementById("time").innerHTML = "<div class='container'><div class='days block'>"+ days + "<br>Days</div>" + "<div class='hours block'>" + hours + "<br>Hours</div>" + "<div class='minutes block'>" + minutes + "<br>Minutes</div>" + "<div class='seconds block'>" + seconds + "<br>Seconds</div></div>";
//
//     // If the count down is over, write some text
//     if (distance < 0) {
//         clearInterval(x);
//         document.getElementById("time").innerHTML = "Bless the married couple for happy life!";
//     }
// }, 1000);



// // being a bit cool :p
// var styles = [
//     'background: linear-gradient(#D33106, #571402)'
//     , 'border: 4px solid #3E0E02'
//     , 'color: white'
//     , 'display: block'
//     , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 0.3)'
//     , 'box-shadow: 0 2px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset'
//     , 'line-height: 40px'
//     , 'text-align: center'
//     , 'font-weight: bold'
//     , 'font-size: 32px'
// ].join(';');
//
// var styles1 = [
//     'color: #FF6C37'
//     , 'display: block'
//     , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 1)'
//     , 'line-height: 40px'
//     , 'font-weight: bold'
//     , 'font-size: 32px'
// ].join(';');
//
// var styles2 = [
//     'color: teal'
//     , 'display: block'
//     , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 1)'
//     , 'line-height: 40px'
//     , 'font-weight: bold'
//     , 'font-size: 32px'
// ].join(';');


console.log('\n\n%c SAVE THE DATE: 26th Jan, 2025!', styles);

console.log('%cYour presence is requested!%c\n\nRegards: Raju Gupta', styles1, styles2);

console.log(
    `%cShaadi me zaroor aana!\n\n`,
    'color: yellow; background:tomato; font-size: 24pt; font-weight: bold',
)


document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('my_audio');

    // Function to play audio on page load (desktop autoplay)
    const playAudio = () => {
        audio.play().catch(error => {
            console.log("Autoplay blocked. Waiting for user interaction...");
        });
    };

    // Function to play audio after user interaction (mobile)
    const enableAudio = () => {
        audio.muted = false; // Unmute audio
        audio.play().catch(error => console.error("Failed to play audio:", error));
        document.body.removeEventListener('click', enableAudio); // Remove listener after enabling
    };

    // Try autoplay on desktop browsers
    playAudio();

    // Add event listener for mobile or desktop user interaction as a fallback
    document.body.addEventListener('click', enableAudio);

    // Countdown timer
    const countDownDate = new Date("Jan 26, 2025 17:00:00").getTime();
    const timer = setInterval(() => {
        const now = new Date().getTime();
        const distance = countDownDate - now;

        if (distance < 0) {
            clearInterval(timer);
            document.getElementById("time").innerHTML = "Bless the married couple for happy life!";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("time").innerHTML = `
      <div class='container'>
        <div class='days block'>${days}<br>Days</div>
        <div class='hours block'>${hours}<br>Hours</div>
        <div class='minutes block'>${minutes}<br>Minutes</div>
        <div class='seconds block'>${seconds}<br>Seconds</div>
      </div>`;
    }, 1000);
});

// Initialize Sakura Falling Animation
(function ($) {
    "use strict";
    $('.sakura-falling').sakura();
})(jQuery);

console.log('%c SAVE THE DATE: 26th Jan, 2025!', 'color: red; font-size: 24px; font-weight: bold;');
console.log('%c Your presence is requested!%c\n\nRegards: Raju Gupta', 'color: teal; font-size: 20px;', 'color: black;');

/*bkp code*/
    document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('my_audio');

    // Function to play audio on page load (desktop autoplay)
    const playAudio = () => {
    audio.play().catch(error => {
    console.log("Autoplay blocked. Waiting for user interaction...");
});
};

    // Function to play audio after user interaction (mobile)
    const enableAudio = () => {
    audio.muted = false; // Unmute audio
    audio.play().catch(error => console.error("Failed to play audio:", error));
    document.body.removeEventListener('click', enableAudio); // Remove listener after enabling
};

    // Try autoplay on desktop browsers
    playAudio();

    // Add event listener for mobile or desktop user interaction as a fallback
    document.body.addEventListener('click', enableAudio);

    // Also listen for touch events on mobile to ensure audio can play after touch
    document.body.addEventListener('touchstart', enableAudio);
});
    /*ADDING time*/

function updateClock() {
    const eventDate = new Date("January 26, 2025 19:00:00").getTime();
    const now = new Date().getTime();
    const timeLeft = eventDate - now;

    if (timeLeft <= 0) {
        clearInterval(countdown);
        return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days-tens-top").textContent = Math.floor(days / 10);
    document.getElementById("days-tens-bottom").textContent = days % 10;
    document.getElementById("hours-tens-top").textContent = Math.floor(hours / 10);
    document.getElementById("hours-tens-bottom").textContent = hours % 10;
    document.getElementById("minutes-tens-top").textContent = Math.floor(minutes / 10);
    document.getElementById("minutes-tens-bottom").textContent = minutes % 10;
    document.getElementById("seconds-tens-top").textContent = Math.floor(seconds / 10);
    document.getElementById("seconds-tens-bottom").textContent = seconds % 10;
}

const countdown = setInterval(updateClock, 1000);
updateClock();

    /*crousal*/
