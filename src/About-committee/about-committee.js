import '../about-committee.html'
import './scss/main.scss'
import axios from 'axios'
import '../Common/components/nav'
import '../Common/components/btnFloat'

/*------------------ 异步加载 ------------------*/
let loading = true
const contentCards = document.querySelector('.content-cards')
const oLoading = document.querySelector('.loading')

window.addEventListener('scroll', () => {
  const clientBottom = (window.innerHeight - contentCards.getBoundingClientRect().bottom)
  if (clientBottom > 300 && contentCards.offsetHeight > window.innerHeight / 2 && loading) {
    loading = false
    oLoading.style.visibility = 'visible'
    loadMore('contentCards.dataset.url')
  }
})

function loadMore(url) {
  axios.get(url)
    .then(data => {
      if (data.status !== 200) return
      const { moreList } = data.data
      moreList.forEach((list) => {
        const html = `
          <div class="content-cards__item">
            <a href='${list.url}' class="content-cards__item-img">
              <figure style="background-image:url(${list.img})"></figure>
              <div class="overlay">${list.name}</div>
            </a>
            <h2>${list.h2}</h2>
          </div>
        `
        contentCards.innerHTML += html
      })
      oLoading.style.visibility = 'hidden'
      loading = true
    })
}