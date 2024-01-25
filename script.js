function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
  
    if (isNaN(peso) || isNaN(altura) || altura <= 0 || peso <= 0) {
      alert('Por favor, insira valores válidos para peso e altura.');
      return;
    }
  
    const imc = peso / (altura * altura);
    document.getElementById('resultado').innerText = imc.toFixed(2);
  }
  
  /* Programação do Primeiro Slide */
  const sliderContainer = document.querySelector('.slider-container');
  const slides = document.querySelector('.slides');
  const slideWidth = document.querySelector('.slide').offsetWidth;
  const totalSlides = document.querySelectorAll('.slide').length;
  let currentIndex = 0;
  
  document.querySelector('.arrow.left').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlidePosition();
  });
  
  document.querySelector('.arrow.right').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlidePosition();
  });
  
  function updateSlidePosition() {
    slides.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
  }
  

