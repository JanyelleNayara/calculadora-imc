function calcular() {
  let peso = document.getElementById("peso").value;
  let altura = document.getElementById("altura").value;
  let imc = (peso / (altura * altura)).toFixed(2);
  const resultado = document.getElementById("resultado")
  const resultadoInfo = document.getElementById("resultado-info")

    if (imc < 18.5) {
      resultado.innerHTML = `Seu IMC: ${imc}`
      resultadoInfo.innerHTML = `Magreza | Obesidade: 0`
    } else if (imc >= 18.5 && imc < 25) {
      resultado.innerHTML = ` Seu IMC: ${imc}`
      resultadoInfo.innerHTML = `Normal | Obesidade: 0`
    } else if (imc >= 25 && imc < 30) {
      resultado.innerHTML = ` Seu IMC: ${imc}`
      resultadoInfo.innerHTML = `Sobrepeso | Obesidade: I`
    } else if (imc >= 30 && imc < 40) {
      resultado.innerHTML = ` Seu IMC: ${imc}`
      resultadoInfo.innerHTML = `Obesidade | Obesidade: II`
    } else {
      resultado.innerHTML = ` Seu IMC: ${imc}`
      resultadoInfo.innerHTML = `Obesidade Grave | Obesidade: III`
    }

}
