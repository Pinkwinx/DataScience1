const container = document.querySelector('.horizontal');
const imageContainer = document.querySelector('.image-container');
const lumineIdle = document.querySelector('.Lumine-Idle');
const lumineRun = document.querySelector('.Lumine-Run');

window.onscroll = function() {scrollBar()};
function scrollBar() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let width = document.documentElement.scrollWidth - document.documentElement.clientWidth;
  let scrolled = (winScroll / width) * 100;
  if (scrolled>99){
    scrolled = 99.999999
  }
  document.getElementById("myBar").style.width = scrolled + "%";
}

//scrolling
let isScrolling;
let isArrowKeyDown = {
    ArrowLeft: false,
    ArrowRight: false
};

let animationInterval;

function toggleGifs() {
    lumineIdle.style.display = isScrolling || isArrowKeyDown.ArrowLeft || isArrowKeyDown.ArrowRight ? 'none' : 'block';
    lumineRun.style.display = isScrolling || isArrowKeyDown.ArrowLeft || isArrowKeyDown.ArrowRight ? 'block' : 'none';
}

function startAnimation() {
    if (!animationInterval) {
        animationInterval = setInterval(function() {
            lumineRun.style.display = 'block';
            lumineIdle.style.display = 'none';
        }, 100); // Adjust this interval for animation speed
    }
}

function stopAnimation() {
    clearInterval(animationInterval);
    animationInterval = null;
    lumineRun.style.display = 'none';
    lumineIdle.style.display = 'block';
}

function handleHorizontalScroll(e) {
    const delta = (e.deltaY || -e.detail || e.wheelDelta);
    const direction = delta > 0 ? 1 : -1;
    const scrollSpeed = 1;

    if (direction > 0) {
        container.scrollLeft += 100;
    } else {
        container.scrollLeft -= 100;
    }

    e.preventDefault();

    isScrolling = true;
    toggleGifs();
    setTimeout(function() {
        isScrolling = false;
        toggleGifs();
    }, 200); // Adjust this value to suit your desired delay
}

function handleArrowKeys(e) {
    if (e.keyCode === 37) {
        container.scrollLeft -= 100;
        e.preventDefault();
        isArrowKeyDown.ArrowLeft = true;
        startAnimation();
    } else if (e.keyCode === 39) {
        container.scrollLeft += 100;
        e.preventDefault();
        isArrowKeyDown.ArrowRight = true;
        startAnimation();
    }

    isScrolling = true;
    toggleGifs();
    setTimeout(function() {
        isScrolling = false;
        toggleGifs();
    }, 200); // Adjust this value to suit your desired delay
}

function handleKeyUp(e) {
    if (e.keyCode === 37) {
        isArrowKeyDown.ArrowLeft = false;
        stopAnimation();
    } else if (e.keyCode === 39) {
        isArrowKeyDown.ArrowRight = false;
        stopAnimation();
    }

    isScrolling = false;
    toggleGifs();
}

if (document.addEventListener) {
    document.addEventListener('wheel', handleHorizontalScroll);
    document.addEventListener('mousewheel', handleHorizontalScroll);
    document.addEventListener('DOMMouseScroll', handleHorizontalScroll);
    document.addEventListener('keydown', handleArrowKeys);
    document.addEventListener('keyup', handleKeyUp);
} else {
    document.attachEvent('onmousewheel', handleHorizontalScroll);
    document.attachEvent('onkeydown', handleArrowKeys);
    document.attachEvent('onkeyup', handleKeyUp);
}

lumineIdle.style.display = 'block';
lumineRun.style.display = 'none';
