document.getElementById('hamburger-icon').addEventListener('click', function() {
  var navMenu = document.getElementById('nav-menu');
  navMenu.classList.toggle('active');
});


const timer = document.querySelector('.timer');
function updateTimer() {
  let [hours, minutes, seconds] = timer.textContent.split(':').map(num => parseInt(num));
  
  if (seconds === 0) {
    if (minutes === 0) {
      minutes = 10;
      seconds = 0;
    } else {
      minutes -= 1;
      seconds = 59;
    }
  } else {
    seconds -= 1;
  }
  
  timer.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

setInterval(updateTimer, 1000);


let currentIndex = 0;
const slides = document.querySelectorAll('.offer-card'); 
const indicators = document.querySelectorAll('.square');


function updateSlider() {
  slides.forEach((slide, index) => {
    slide.classList.add('slide');
    if (index === currentIndex) {
      slide.classList.remove('slide');
    }
  });

  indicators.forEach((indicator, index) => {
    indicator.classList.toggle('active', index === currentIndex);
  });
}

function currentSlide(index) {
  currentIndex = index - 1;
  updateSlider();
}

function autoSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlider();
}

setInterval(autoSlide, 3000);

updateSlider();







const svgElements = document.querySelectorAll('.svg-img');
document.addEventListener('mousemove', (e) => {
    const mouseX = e.pageX;
    const mouseY = e.pageY;

    svgElements.forEach((svg) => {
        const rect = svg.getBoundingClientRect();
        const svgX = rect.left + rect.width / 2;
        const svgY = rect.top + rect.height / 2;

        const dx = mouseX - svgX;
        const dy = mouseY - svgY;
            svg.style.transform = `translate(${dx / 20}px, ${dy / 20}px)`;
    });
});



