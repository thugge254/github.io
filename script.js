document.addEventListener("DOMContentLoaded", () => {
  // --- 1. Back to Top Button Functionality ---
  const scrollTopBtn = document.getElementById("scrollTopBtn");

  if (scrollTopBtn) {

    // Show/hide button based on scroll position
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        scrollTopBtn.classList.add("show");
      } else {
        scrollTopBtn.classList.remove("show");
      }
    });

    // Smooth scroll back to top on click
    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  // --- 2. Navbar Smooth Scrolling Offset (Optional Fix for Sticky Navbars) ---
  const navLinks = document.querySelectorAll("nav a[href^='#']");

  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });
});

// update footer copyright year
document.getElementById("year").textContent = new Date().getFullYear();
