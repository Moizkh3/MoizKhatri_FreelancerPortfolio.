// Toggle menu
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    // Marquee brand logos
    const logos = [
      "slack",
      "framer",
      "netflix",
      "google",
      "linkedin",
      "instagram",
      "facebook",
    ];

    const logoTrack = document.getElementById("logo-track");
    const template = document.getElementById("logo-template");

    // Duplicate logos for continuous scroll
    [...logos, ...logos].forEach((name) => {
      const img = template.content.cloneNode(true).querySelector("img");
      img.src = `https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/${name}.svg`;
      img.alt = name.charAt(0).toUpperCase() + name.slice(1);
      logoTrack.appendChild(img);
    });

    const carousel = document.getElementById('carousel');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');

    nextBtn.addEventListener('click', () => {
      carousel.scrollBy({ left: 320, behavior: 'smooth' });
    });

    prevBtn.addEventListener('click', () => {
      carousel.scrollBy({ left: -320, behavior: 'smooth' });
    });

 const container = document.getElementById("testimonial-container");
  const slides = container.children;
  const totalSlides = slides.length;
  let currentIndex = 0;

  function updateCarousel() {
    container.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  document.getElementById("next").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
  });

  document.getElementById("prev").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateCarousel();
  });

  