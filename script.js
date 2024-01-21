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
  