// ANIMAÇÃO DAS SEÇÕES AO ROLAR
const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.15,
  }
);

hiddenElements.forEach((element) => observer.observe(element));


// MENU ATIVO AO ROLAR A PÁGINA
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 180;
    const sectionHeight = section.offsetHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
});


// CLIQUE NO MENU
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((item) => item.classList.remove("active"));
    link.classList.add("active");
  });
});


// MODAL DOS MODELOS
const modelCards = document.querySelectorAll(".model-card img");
const imageModal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const closeModal = document.getElementById("closeModal");

modelCards.forEach((image) => {
  image.addEventListener("click", () => {
    modalImage.src = image.src;
    modalImage.alt = image.alt;
    imageModal.classList.add("active");
  });
});

closeModal.addEventListener("click", () => {
  imageModal.classList.remove("active");
  modalImage.src = "";
});

imageModal.addEventListener("click", (event) => {
  if (event.target === imageModal) {
    imageModal.classList.remove("active");
    modalImage.src = "";
  }
});