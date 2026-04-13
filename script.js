const text = "Desarrollador Web | Creativo | Apasionado";
let i = 0;
function typing() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 50);
  }
}
typing();

const elements = document.querySelectorAll('.fade-in');
window.addEventListener('scroll', () => {
  elements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    const screen = window.innerHeight;
    if (position < screen - 100) {
      el.classList.add('visible');
    }
  });
});
