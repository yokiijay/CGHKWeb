import '../about-committee.html'
import './scss/main.scss'

/*------------------ 内容生成 ------------------*/
const contentCards = document.querySelector('.content-cards')

for(let i=0;i<21;i++) {
  fetch('https://uinames.com/api/?ext')
  .then(result => {
    return result.json()
  })
  .then(data => {
    console.log(data)
    const { name, photo } = data
    const html = `
      <div class="content-cards__item">
        <a href='' class="content-cards__item-img">
          <figure style="background-image: url(${photo})"></figure>
          <div class="overlay">${name}</div>
        </a>
        <h2>Subscribe to our weekly podcast</h2>
      </div>
    `
    contentCards.innerHTML += html
  })
}