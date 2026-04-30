// ===================== Preloader =====================
window.addEventListener('load',()=>{
    const preloader = document.getElementById('preloader');
    if(preloader) preloader.style.display = 'none';
});

// ===================== Header Scroll =====================
window.addEventListener('scroll',()=>{
    const header = document.querySelector('header');
    if(header) header.classList.toggle('scrolled', window.scrollY > 50);
});

// ===================== Reveal Sections =====================
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting) entry.target.classList.add('show');
    });
},{ threshold: 0.2 });
sections.forEach(sec=>observer.observe(sec));

// ===================== Lightbox =====================
const lightbox = document.querySelector('.lightbox');
const lightboxImg = lightbox?.querySelector('img');
document.querySelectorAll('.portfolio-btn img, .gallery img').forEach(img=>{
    img.addEventListener('click', ()=>{
        if(lightbox && lightboxImg){
            lightbox.style.display='flex';
            lightboxImg.src = img.src;
        }
    });
});
if(lightbox) lightbox.addEventListener('click', ()=> lightbox.style.display='none');

// ===================== Dark Mode =====================
const darkModeBtn = document.getElementById('darkModeToggle');
if(darkModeBtn){
    if(localStorage.getItem('theme')==='dark'){
        document.body.classList.add('dark');
        darkModeBtn.textContent = '☀️';
    } else {
        darkModeBtn.textContent = '🌙';
    }

    darkModeBtn.addEventListener('click', ()=>{
        document.body.classList.toggle('dark');
        if(document.body.classList.contains('dark')){
            localStorage.setItem('theme','dark');
            darkModeBtn.textContent='☀️';
        } else {
            localStorage.setItem('theme','light');
            darkModeBtn.textContent='🌙';
        }
    });
}

// ===================== Contact Form =====================
const contactForm = document.getElementById('contactForm');
if(contactForm){
    contactForm.addEventListener('submit', e=>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const message = e.target.message.value;
        window.location.href = `mailto:example@domain.com?subject=Contact from ${name}&body=${message} (${email})`;
        alert('Email client opened!');
    });
}

// ===================== Next/Previous Buttons =====================
const pages = ["portraits.html","landscape.html","weddings.html","street.html"];
const current = location.pathname.split("/").pop();
let index = pages.indexOf(current);
if(index === -1) index = 0;

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

if(prevBtn) prevBtn.onclick = ()=> window.location.href = pages[(index-1+pages.length)%pages.length];
if(nextBtn) nextBtn.onclick = ()=> window.location.href = pages[(index+1)%pages.length];

/// ===================== HERO SLIDER =====================
const slidesContainer = document.querySelector('.hero-slider .slides');
const slides = document.querySelectorAll('.hero-slider .slide');
const sliderPrevBtn = document.querySelector('.hero-slider .prev-slide'); // renamed
const sliderNextBtn = document.querySelector('.hero-slider .next-slide'); // renamed
let currentSlide = 0;

function showSlide(index) {
    if(index < 0) currentSlide = slides.length - 1;
    else if(index >= slides.length) currentSlide = 0;
    else currentSlide = index;
  
    const offset = -currentSlide * 100;
    slidesContainer.style.transform = `translateX(${offset}%)`;
  }

if (sliderPrevBtn) sliderPrevBtn.addEventListener('click', () => showSlide(currentSlide - 1));
if (sliderNextBtn) sliderNextBtn.addEventListener('click', () => showSlide(currentSlide + 1));

// Auto slide every 5 seconds
setInterval(() => showSlide(currentSlide + 1), 5000);
const photographyBtn = document.getElementById('photographyBtn');
const portfolioSection = document.getElementById('portfolio');

if(photographyBtn && portfolioSection){
    photographyBtn.addEventListener('click', () => {
        const topPos = portfolioSection.getBoundingClientRect().top + window.scrollY - 80; // offset for fixed header
        window.scrollTo({ top: topPos, behavior: 'smooth' });
    });
}
/* ===== IMAGE FADE IN ===== */

const items = document.querySelectorAll('.portfolio-item');

const galleryObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
},{
  threshold: 0.2
});

items.forEach(item => galleryObserver.observe(item));
// ===================== Preloader =====================
window.addEventListener('load',()=>{
    const preloader = document.getElementById('preloader');
    if(preloader) preloader.style.display = 'none';
});

// ===================== Header Scroll =====================
window.addEventListener('scroll',()=>{
    const header = document.querySelector('header');
    if(header) header.classList.toggle('scrolled', window.scrollY > 50);
});

// ===================== Reveal Sections =====================
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting) entry.target.classList.add('show');
    });
},{ threshold: 0.2 });
sections.forEach(sec=>observer.observe(sec));

// ===================== Lightbox =====================
const lightbox = document.querySelector('.lightbox');
const lightboxImg = lightbox?.querySelector('img');
document.querySelectorAll('.portfolio-btn img, .gallery img').forEach(img=>{
    img.addEventListener('click', ()=>{
        if(lightbox && lightboxImg){
            lightbox.style.display='flex';
            lightboxImg.src = img.src;
        }
    });
});
if(lightbox) lightbox.addEventListener('click', ()=> lightbox.style.display='none');

// ===================== Dark Mode =====================
const darkModeBtn = document.getElementById('darkModeToggle');
if(darkModeBtn){
    if(localStorage.getItem('theme')==='dark'){
        document.body.classList.add('dark');
        darkModeBtn.textContent = '☀️';
    } else {
        darkModeBtn.textContent = '🌙';
    }

    darkModeBtn.addEventListener('click', ()=>{
        document.body.classList.toggle('dark');
        if(document.body.classList.contains('dark')){
            localStorage.setItem('theme','dark');
            darkModeBtn.textContent='☀️';
        } else {
            localStorage.setItem('theme','light');
            darkModeBtn.textContent='🌙';
        }
    });
}

// ===================== Contact Form =====================
const contactForm = document.getElementById('contactForm');
if(contactForm){
    contactForm.addEventListener('submit', e=>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const message = e.target.message.value;
        window.location.href = `mailto:example@domain.com?subject=Contact from ${name}&body=${message} (${email})`;
        alert('Email client opened!');
    });
}

// ===================== Next/Previous Buttons =====================
const pages = ["portraits.html","landscape.html","weddings.html","street.html"];
const current = location.pathname.split("/").pop();
let index = pages.indexOf(current);
if(index === -1) index = 0;

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

if(prevBtn) prevBtn.onclick = ()=> window.location.href = pages[(index-1+pages.length)%pages.length];
if(nextBtn) nextBtn.onclick = ()=> window.location.href = pages[(index+1)%pages.length];

/// ===================== HERO SLIDER =====================
const slidesContainer = document.querySelector('.hero-slider .slides');
const slides = document.querySelectorAll('.hero-slider .slide');
const sliderPrevBtn = document.querySelector('.hero-slider .prev-slide'); // renamed
const sliderNextBtn = document.querySelector('.hero-slider .next-slide'); // renamed
let currentSlide = 0;

function showSlide(index) {
    if(index < 0) currentSlide = slides.length - 1;
    else if(index >= slides.length) currentSlide = 0;
    else currentSlide = index;
  
    const offset = -currentSlide * 100;
    slidesContainer.style.transform = `translateX(${offset}%)`;
  }

if (sliderPrevBtn) sliderPrevBtn.addEventListener('click', () => showSlide(currentSlide - 1));
if (sliderNextBtn) sliderNextBtn.addEventListener('click', () => showSlide(currentSlide + 1));

// Auto slide every 5 seconds
setInterval(() => showSlide(currentSlide + 1), 5000);
const photographyBtn = document.getElementById('photographyBtn');
const portfolioSection = document.getElementById('portfolio');

if(photographyBtn && portfolioSection){
    photographyBtn.addEventListener('click', () => {
        const topPos = portfolioSection.getBoundingClientRect().top + window.scrollY - 80; // offset for fixed header
        window.scrollTo({ top: topPos, behavior: 'smooth' });
    });
}
/* ===== IMAGE FADE IN ===== */

const items = document.querySelectorAll('.portfolio-item');

const galleryObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
},{
  threshold: 0.2
});

items.forEach(item => galleryObserver.observe(item));
