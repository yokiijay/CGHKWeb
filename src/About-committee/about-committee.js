import '../about-committee.html'
import './scss/main.scss'
import axios from 'axios'

/*------------------ 内容生成 ------------------*/
const cardsItems = document.querySelectorAll('.content-cards .content-cards__item')

cardsItems.forEach((el,i)=>{
  const figure = el.querySelector('figure')
  const overlay = el.querySelector('.overlay')
  const h2 = el.querySelector('h2')

  setTimeout(() => {
    axios.get('https://uinames.com/api/?region=United States&ext')
    .then(({data})=>{
      console.log( data )
      const { name, photo, email } = data
      figure.style.backgroundImage = `url(${photo})`
      overlay.innerHTML = name
      h2.innerHTML = email
    })
  }, i*100);

})

// for(let i=0;i<21;i++) {
//   fetch('https://uinames.com/api/?ext')
//   .then(result => {
//     return result.json()
//   })
//   .then(data => {
//     console.log(data)
//     const { name, photo } = data
//     const html = `
//       <div class="content-cards__item">
//         <a href='' class="content-cards__item-img">
//           <figure style="background-image: url(${photo})"></figure>
//           <div class="overlay">${name}</div>
//         </a>
//         <h2>Subscribe to our weekly podcast</h2>
//       </div>
//     `
//     contentCards.innerHTML += html
//   })
// }