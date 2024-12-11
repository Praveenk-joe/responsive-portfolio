// ANIMATION TRIGGER
const animateMeElements = document.querySelectorAll("#pkimg");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("slide-in-photo");
    }
  });
});

animateMeElements.forEach(element => {
  observer.observe(element);
});

// service-card
const animateMeElement = document.querySelectorAll(".service__card");
const observers = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("slide-nextt-photo");
    }
  });
});

animateMeElement.forEach(element => {
  observers.observe(element);
});




// qualification
const animateMeElementss = document.querySelectorAll(".skills,.about__content");
const observerr = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("slide-in-photo");
    }
  });
});

animateMeElementss.forEach(element => {
  observerr.observe(element);
});


// ANIMATION TRIGGER 2
const animateMeElemen = document.querySelectorAll(".qualification__item");
const observe = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("slide-next-photo");
    }
  });
});

animateMeElemen.forEach(element => {
  observe.observe(element);
});

// project1

const MeElemen = document.querySelectorAll(".cont1");
const or = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("slide-next-photo");
    }
  });
});

MeElemen.forEach(element => {
  or.observe(element);
});

// project2

const animateElementss = document.querySelectorAll(".cont2");
const orr = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("slide-in-photo");
    }
  });
});

animateElementss.forEach(element => {
  orr.observe(element);
});

const bubbles = [];
const numBubbles = 10; // Number of bubbles

// Create bubbles
for (let i = 0; i < numBubbles; i++) {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    document.body.appendChild(bubble);
    bubbles.push(bubble);
}

// Mouse move event
document.addEventListener('mousemove', (e) => {
    bubbles.forEach((bubble, index) => {
        const x = e.clientX + (Math.random() - 0.5) * 30;
        const y = e.clientY + (Math.random() - 0.5) * 30;
        bubble.style.transform = `translate(${x}px, ${y}px)`;
    });
});

