import '../events.html'
import './scss/main.scss'
import '../Common/components/nav'
import '../Common/components/btnFloat'
import axios from 'axios'

/*------------------ 异步加载 ------------------*/
let loading = true
const contentCards = document.querySelector('.content-cards')
const oLoading = document.querySelector('.loading')

window.addEventListener('scroll', () => {
  const clientBottom = (window.innerHeight - contentCards.getBoundingClientRect().bottom)
  if (clientBottom > 300 && contentCards.offsetHeight > window.innerHeight / 2 && loading) {
    loading = false
    oLoading.style.visibility = 'visible'
    loadMore('https://easy-mock.com/mock/5d276cc97c78013d841db5af/data/media/getMore')
  }
})

function loadMore(url) {
  axios.get(url)
    .then(data => {
      if (data.status !== 200) return
      const { moreList } = data.data
      moreList.forEach((list) => {
        const a = document.createElement('a')
        a.href = list.url
        a.className = 'content-cards__item'
        a.innerHTML = `
        <div class="content-cards__item-img">
          <figure style="background:url(${list.img})"></figure>
        </div>
        <div class="content-cards__item-content">
          <span>${list.date}</span>
          <h3>${list.h3}</h3>
          <p>${list.p}</p>
        </div>
      `
        contentCards.appendChild(a)
      })
      oLoading.style.visibility = 'hidden'
      loading = true
    })
}