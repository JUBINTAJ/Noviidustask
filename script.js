document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    if (question) {
      question.addEventListener("click", () => {
        item.classList.toggle("open");
      });
    }
  });

  const toggle = document.getElementById("menu-toggle");
  const header = document.querySelector("header");

  if (toggle && header) {
    toggle.addEventListener("click", () => {
      header.classList.toggle("active");
    });
  }

  const images = [
    "public/teach.jpg",
    "public/teach-2.jpg",
    "public/teach-3.jpg"
  ];

  let imageIndex = 0;  
  const imageElement = document.getElementById("teachingImage");

  if (imageElement) {
    setInterval(() => {
      imageIndex = (imageIndex + 1) % images.length;
      imageElement.src = images[imageIndex];
    }, 3000);
  }

  const prevArrow = document.getElementById("prevArrow");
  const nextArrow = document.getElementById("nextArrow");
  const programsContainer = document.getElementById("programsContainer");
  const dots = document.querySelectorAll(".dot");

  let cardIndex = 0;  
  const totalCards = document.querySelectorAll(".program-card").length;

  function updateDot() {
    dots.forEach(dot => dot.classList.remove("active"));
    dots[cardIndex].classList.add("active");
  }

  
  nextArrow.addEventListener("click", () => {
    cardIndex = (cardIndex + 1) % totalCards;
    programsContainer.style.transform = `translateX(-${cardIndex * 100}%)`;
    updateDot();
  });






    const texts = [
      "Personalized One-to-One Tutoring at Our Center",
      "Unlock Your Potential with Our Personalized Tutoring!",
      "Experience One-to-One Sessions with Expert Tutors!"
    ];

  
    let textIndex = 0; 
      const textElement = document.getElementById("changing-text");
      if (textElement) {
        setInterval(()=>{
          textIndex = (textIndex + 1) % texts.length; 
          textElement.innerHTML = texts[textIndex];
        },2000)
      }  
    
      const items = document.querySelectorAll(".carousel-item");
      let currentSlide = 0;
      function updateCarousel() {
          items.forEach((item, index) => {
              item.classList.remove("active");
              if (index === currentSlide) {
                  item.classList.add("active");
              }
          });
          const carousel = document.querySelector(".carousel");
          carousel.style.transform = `translateX(-${currentSlide * 150}px)`;
      }
      setInterval(() => {
          currentSlide = (currentSlide + 1) % items.length;
          updateCarousel();
      }, 2500);
      updateCarousel();


  });
  