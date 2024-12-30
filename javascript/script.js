const cards = document.querySelectorAll('.card')
const image = document.querySelectorAll('img')
console.log(image)
cards.forEach((card) => {
  card.addEventListener('click', () => {
    card.classList.toggle('flip')
    for (let i = 0; i < 1; i++) {
      if (image.length) {
        if (image[i].id===image[i].id) {
          console.log("same")
        }else{
          console.log('wrong')
        }
      }
    }
  })
})



