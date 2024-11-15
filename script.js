function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
  
    if (isNaN(peso) || isNaN(altura) || altura <= 0 || peso <= 0) {
      alert('Por favor, insira valores válidos para peso e altura.');
      return;
    }
  
    const imc = peso / (altura * altura);
    document.getElementById('resultado').innerText = imc.toFixed(1);
    if(imc<18.5){
      alert('Você está muito magro! Seu IMC é de ' +imc.toFixed(1));
    } else if(imc > 18.5 && imc <= 25){
      alert('Você está com o peso na média! Seu IMC é de ' +imc.toFixed(1));
    } else if(imc > 24.9 && imc < 30){
      alert('Você está com Obesidade Grau I! Seu IMC é de ' +imc.toFixed(1));
    } else if(imc > 30 && imc < 35){
      alert('Você está com Obesidade Grau II! Seu IMC é de ' +imc.toFixed(1));
    } else if(imc > 35){
      alert('Você está com Obesidade Grau III! Seu IMC é de ' +imc.toFixed(1));
    } else{
      return false;
    }
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
  

