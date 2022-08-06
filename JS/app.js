const btn = document.querySelector('#menu-btn');
const nav = document.querySelector('#menu');
let active = 0;

btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    nav.classList.toggle('flex');
    nav.classList.toggle('hidden');
});

const testimonials = [
    {
        idx: 0,
        card: document.querySelector('#test-1'),
        btn: document.querySelector('#test-1-btn')
    },
    {
        idx: 1,
        card: document.querySelector('#test-2'),
        btn: document.querySelector('#test-2-btn')
    },
    {
        idx: 2,
        card: document.querySelector('#test-3'),
        btn: document.querySelector('#test-3-btn')
    },
    {
        idx: 3,
        card: document.querySelector('#test-4'),
        btn: document.querySelector('#test-4-btn')
    }
]

function goToSlide(n) {
    active = n;
    for(const testimonial of testimonials) {
        if(testimonial.idx === n) {
            testimonial.btn.classList.add('bg-brightRed');
            testimonial.card.classList.add('flex', 'flex-col', 'animate-fade', 'duration-1000');
            testimonial.card.classList.remove('hidden');
        }else {
            testimonial.btn.classList.remove('bg-brightRed');
            testimonial.card.classList.add('hidden');
            testimonial.card.classList.remove('flex', 'flex-col', 'animation-fade', 'duration-1000');
        }
    }
}

function slideRight() {
    goToSlide((active + 1) % 4);
}

function slideLeft() {
    goToSlide((active + 3) % 4);
}

let xDown = null; 

function handleTouchStart(evt) {                                         
    xDown = evt.touches[0].clientX;                                      
};

function handleTouchMove(evt) {
    if (!xDown) return;
    
    let xUp = evt.touches[0].clientX;
    let xDiff = xDown - xUp;
    if(xDiff >= 8) slideRight();
    else if(xDiff <= -8) slideLeft();
    // Reset
    xDown = null;
    yDown = null;                                             
};

for(const testimonial of testimonials) {
    testimonial.btn.addEventListener('click', () => {
        goToSlide(testimonial.idx);
    })
    if (window.matchMedia("(max-width: 768px)").matches) {
        const slider = testimonial.card;
        slider.addEventListener('touchstart', handleTouchStart, {passive: false});        
        slider.addEventListener('touchmove', handleTouchMove, {passive: false});
    }
}