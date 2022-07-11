const digitalClock = document.querySelector('p');

// On page load
window.addEventListener('load', clock);

function clock() {
    let currentTime = new Date(),
        sec = currentTime.getSeconds(),
        min = currentTime.getMinutes(),
        hr = currentTime.getHours();


    if (sec < 10) {
        sec = '0' + sec;
    }
    if (min < 10) {
        min = '0' + min;
    }
    if (hr > 12) {
        hr -= 12;
        if (hr < 10) {
            hr = '0' + hr;
        }
        digitalClock.innerHTML = `${hr}:${min}:${sec} PM`;
    } else if (hr === 12) {
        digitalClock.innerHTML = `${hr}:${min}:${sec} PM`;
    } else if (hr === 0) {
        hr += 12;
        digitalClock.innerHTML = `${hr}:${min}:${sec} AM`;
    }
    else {
        if (hr < 10) {
            hr = '0' + hr;
        }
        digitalClock.innerHTML = `${hr}:${min}:${sec} AM`;
    }
    setTimeout(clock, 1000);
}