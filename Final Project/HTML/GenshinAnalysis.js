//importing stuff from html
const container = document.querySelector('.horizontal');
const imageContainer = document.querySelector('.image-container');
const lumineIdle = document.querySelector('.Lumine-Idle');
const lumineRun = document.querySelector('.Lumine-Run');

//button
document.getElementById("click").onclick = function() {
    const titleDiv = document.querySelector('.title');
    titleDiv.classList.add("fade-out");
    
    // Optionally, remove the div after the animation ends
    titleDiv.addEventListener("transitionend", function() {
        titleDiv.remove();
    });

    document.getElementById("custom-animation").classList.add("visible");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry);
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        })
    });
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
};

//scrolling part
let isScrolling;
let isArrowKeyDown = {
    ArrowLeft: false,
    ArrowRight: false
};

let animationInterval;
//lumine animation
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
//able to scroll with arrow keys
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
//graphs
const data = [
    { x: 0, y: 30 },
    { x: 1, y: 40 },
    { x: 2, y: 25 },
    { x: 3, y: 35 },
    { x: 4, y: 45 },
    { x: 5, y: 50 },
    { x: 6, y: 40 }
  ];
  
  // Function to draw the line graph
  function drawGraph() {
    const canvas = document.getElementById('lineGraph');
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
  
    // Clear canvas
    ctx.clearRect(0, 0, width, height);
  
    // Plotting the data points
    ctx.beginPath();
    ctx.strokeStyle = '#007bff';
    ctx.lineWidth = 2;
  
    for (let i = 0; i < data.length; i++) {
      const x = (width / (data.length - 1)) * i;
      const y = height - (height * data[i].y) / 100;
  
      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
  
      // Draw circles for data points
      ctx.beginPath();
      ctx.arc(x, y, 5, 0, Math.PI * 2);
      ctx.fillStyle = '#007bff';
      ctx.fill();
      ctx.closePath();
    }
  
    ctx.stroke();
  
    // Tooltip element
    const tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');
    canvas.parentNode.appendChild(tooltip);
    tooltip.style.display = 'none';
  
    // Show tooltip on hover
    canvas.addEventListener('mousemove', function (e) {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
  
      for (let i = 0; i < data.length; i++) {
        const x = (width / (data.length - 1)) * i;
        const y = height - (height * data[i].y) / 100;
  
        if (mouseX >= x - 8 && mouseX <= x + 8 && mouseY >= y - 8 && mouseY <= y + 8) {
          // Show tooltip with x and y-axis values
          tooltip.style.display = 'block';
          tooltip.style.left = e.pageX + 'px';
          tooltip.style.top = e.pageY - 30 + 'px';
          tooltip.textContent = `X: ${data[i].x}, Y: ${data[i].y}`;
          
          // Highlight the point
          ctx.clearRect(0, 0, width, height);
          ctx.beginPath();
          ctx.arc(x, y, 7, 0, Math.PI * 2);
          ctx.fillStyle = '#ff0000';
          ctx.fill();
          ctx.closePath();
        }
      }
    });
  
    // Hide tooltip when not hovering over a point
    canvas.addEventListener('mouseout', function () {
      tooltip.style.display = 'none';
      ctx.clearRect(0, 0, width, height);
      drawGraph(); // Redraw the graph when the mouse moves out
    });
  }
  
//add things to html
lumineIdle.style.display = 'block';
lumineRun.style.display = 'none';
window.onload = drawGraph;
