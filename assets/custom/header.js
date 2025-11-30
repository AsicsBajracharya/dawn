console.log('hello from the assets/custom/js')

document.addEventListener("DOMContentLoaded", () => {
    console.log('document ready')
    const header = document.querySelector("[data-sticky-header]");
    if (!header) return;
  
    let lastScrollY = window.scrollY;
  
    const onScroll = () => {
      const current = window.scrollY;
  
      // Add sticky style once we’re off the very top
      if (current > 0) {
        header.classList.add("is-sticky");
      } else {
        header.classList.remove("is-sticky");
      }
  
      // OPTIONAL: hide on scroll down, show on scroll up
      if (current > lastScrollY && current > 150) {
        // scrolling down
        header.classList.add("is-hidden");
      } else {
        // scrolling up
        header.classList.remove("is-hidden");
      }
  
      lastScrollY = current;
    };
  
    window.addEventListener("scroll", onScroll, { passive: true });
  });