// Get the container element to enable horizontal scrolling
const container = document.querySelector('.horizontal');

function handleHorizontalScroll(e) {
    // Detect the scroll direction for different browsers
    const delta = (e.deltaY || -e.detail || e.wheelDelta);
    const direction = delta > 0 ? 1 : -1;
    //control scroll speed
    const scrollSpeed = 25; // Adjust this value to change scroll speed
    const scrollDistance = 100 / scrollSpeed;
    // Check if the user is scrolling up or down
    if (direction > 0) {
        container.scrollLeft += 100; // Scroll to the right
    } else {
        container.scrollLeft -= 100; // Scroll to the left
    }

    // Prevent the default vertical scrolling behavior
    e.preventDefault();
}

// Add event listener to the entire document for scrolling
if (document.addEventListener) {
    document.addEventListener('wheel', handleHorizontalScroll);
    document.addEventListener('mousewheel', handleHorizontalScroll); // For older browsers
    document.addEventListener('DOMMouseScroll', handleHorizontalScroll); // For Firefox
} else { // For older IE versions
    document.attachEvent('onmousewheel', handleHorizontalScroll);
}
