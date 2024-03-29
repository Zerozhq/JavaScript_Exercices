const name01 = document.getElementById('name01')
const name02 = document.getElementById('name02')
const speed01 = document.getElementById('speed01')
const speed02 = document.getElementById('speed02')


const btn = document.getElementById('btn-submit')

btn.addEventListener('click', function () {

  if(Number(speed01.value) > Number(speed02.value)) {
    alert(`Veículo ${name01.value} tem a velocidade maior que o veículo ${name02.value}`)
  } else if (Number(speed02.value) > Number(speed01.value)) {
    alert(`Veículo ${name02.value} tem a velocidade maior que o veículo ${name01.value}`)
  } else if(Number(speed01.value) == Number(speed02.value)) {
    alert(`Veículo ${name01.value} tem a mesma velocidade do veículo ${name02.value}`)
  }

})