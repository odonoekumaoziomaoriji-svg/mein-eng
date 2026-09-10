
/* =========================================================
   Mein Engineering shared JavaScript
   - Mobile navigation
   - Scroll reveal animations
   - FAQ accordion
   - Demo form messages
   - Footer year
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  /* -----------------------------
     Mobile navigation
     ----------------------------- */
  const header = document.querySelector(".site-header");
  const menuButton = document.querySelector(".menu-toggle");

  if (header && menuButton) {
    menuButton.addEventListener("click", () => {
      const isOpen = header.classList.toggle("menu-open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
      menuButton.textContent = isOpen ? "✕" : "☰";
    });
  }

  /* -----------------------------
     Animate elements on scroll
     IntersectionObserver is light-weight and avoids scroll-event spam.
     ----------------------------- */
  const animatedItems = document.querySelectorAll("[data-animate]");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries, animationObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            animationObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -45px 0px",
      }
    );

    animatedItems.forEach((item) => observer.observe(item));
  } else {
    // Fallback for very old browsers.
    animatedItems.forEach((item) => item.classList.add("is-visible"));
  }

  /* -----------------------------
     FAQ accordion
     ----------------------------- */
  document.querySelectorAll(".faq-question").forEach((button) => {
    button.addEventListener("click", () => {
      const row = button.closest(".faq-row");
      if (!row) return;

      const wasOpen = row.classList.contains("open");

      // Keep only one FAQ open at a time.
      document.querySelectorAll(".faq-row").forEach((item) => {
        item.classList.remove("open");
        const itemButton = item.querySelector(".faq-question");
        if (itemButton) itemButton.setAttribute("aria-expanded", "false");
      });

      if (!wasOpen) {
        row.classList.add("open");
        button.setAttribute("aria-expanded", "true");
      }
    });
  });

  /* -----------------------------
     Demo contact / newsletter forms
     These forms are front-end only. Replace with your backend
     endpoint, Formspree, EmailJS, PHP, etc. when deploying.
     ----------------------------- */
  document.querySelectorAll("[data-demo-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const successBox = form.querySelector(".form-success");
      if (successBox) {
        successBox.hidden = false;
        successBox.textContent =
          "Thank you. Your message has been captured on the front end. Connect this form to your preferred email/backend service before launch.";
      } else {
        alert("Thank you. Connect this form to your preferred backend before launch.");
      }
    });
  });

  /* -----------------------------
     Current year in footer
     ----------------------------- */
  document.querySelectorAll("[data-current-year]").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });
});
