const cards = document.querySelectorAll('.card')
const turn = document.querySelectorAll('p')
cards.forEach((card) => {
  card.addEventListener('click', () => {
    card.classList.toggle('flip')
  })
})

