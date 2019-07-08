const voices = document.querySelectorAll('.voice')

voices.forEach(voice=>{
  const spanIn = voice.querySelector('[data-in]')
  const spanOut = voice.querySelector('[data-out]')
  const slider = voice.querySelector('.voice__slider-progress')

  let stringIn = spanIn.getAttribute('data-in')
  let stringOut = spanOut.getAttribute('data-out')

  spanIn.innerHTML = stringIn
  spanOut.innerHTML = stringOut

  let numIn = Number(stringIn.split(':')[0]) * 60 + Number(stringIn.split(':')[1])
  let numOut = Number(stringOut.split(':')[0]) * 60 + Number(stringOut.split(':')[1])

  let progress = parseInt(numIn / numOut * 100 ) + '%';

  slider.style.width = progress
})