const send = document.getElementById('send')

send.addEventListener('click', function (ev) {
  ev.preventDefault()

  const name01 = document.getElementById('name01').value
  const name02 = document.getElementById('name02').value
  const power = document.getElementById('power01').value
  const health = document.getElementById('health01').value
  const defense = document.getElementById('defense01').value
  const shield = document.querySelector("input[name='main']:checked").value

  //se power for maior que defense, a diferenca de dano ao health
  //se power for maior que defense e tiver shield, a diferenca é dividida por dois

  const damage = power - (power > defense ? defense : power  )
  const damageShield = damage * ( shield === 'true' ? 0.5 : 1)

  alert(`O guerreiro ${name01} causou um dano de ${damageShield} no guerreiro inimigo ${name02}`)
  console.log(
    name01,
    name02,
    power,
    health,
    defense,
    shield
  )
  /*document.getElementById('name01').value =''
  document.getElementById('name02').value = ''
  document.getElementById('power01').value = ''
  document.getElementById('health01').value = ''
  document.getElementById('defense01').value = ''
  document.querySelector("input[name='main']").checked = false;*/
    document.querySelector('form').reset()
})




