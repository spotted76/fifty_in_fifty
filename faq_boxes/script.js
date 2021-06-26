
const toggles = document.querySelectorAll('.faq-toggle');

toggles.forEach(toggle => {
    toggle.addEventListener('click', (evt) => {
        const faq = toggle.closest('.faq');
        faq.classList.toggle('active');
    })
})