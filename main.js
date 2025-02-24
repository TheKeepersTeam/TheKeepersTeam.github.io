// Import AOS library.  This assumes AOS is available via a CDN or has been included in your project.
// If using a module bundler like Webpack or Parcel, you would use an import statement like: import AOS from 'aos';

document.addEventListener("DOMContentLoaded", () => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
    })
  
    // Navbar scroll effect
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        document.querySelector(".navbar").classList.add("scrolled")
      } else {
        document.querySelector(".navbar").classList.remove("scrolled")
      }
    })
  
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        })
      })
    })
  
    // Form submission
    document.getElementById("contact-form").addEventListener("submit", function (e) {
      e.preventDefault()
      const form = this
      const formData = new FormData(form)
      const mailtoLink = `mailto:lasthopeinthisgame@outlook.com?subject=${encodeURIComponent(formData.get("subject"))}&body=${encodeURIComponent(formData.get("message"))}`
      window.location.href = mailtoLink
      alert("Votre message a été envoyé avec succès.")
      form.reset()
    })
  
    // Project card hover effect
    document.querySelectorAll(".project-card").forEach((card) => {
      card.addEventListener("mouseenter", function () {
        this.style.transform = "scale(1.05)"
      })
      card.addEventListener("mouseleave", function () {
        this.style.transform = "scale(1)"
      })
    })
  
    // Skill icon animation
    document.querySelectorAll(".skill-item i").forEach((icon) => {
      icon.addEventListener("mouseenter", function () {
        this.style.transform = "rotate(360deg)"
        this.style.transition = "transform 0.5s ease"
      })
      icon.addEventListener("mouseleave", function () {
        this.style.transform = "rotate(0deg)"
      })
    })
  })
  