import '../about-committee.html'
import './scss/main.scss'
import axios from 'axios'
import '../Common/components/nav'
import '../Common/components/btnFloat'

/*------------------ 异步加载 ------------------*/
let loading = true
let page = 0
const contentCards = document.querySelector('.content-cards')
const oLoading = document.querySelector('.loading')

window.addEventListener('scroll', () => {
  const clientBottom = (window.innerHeight - contentCards.getBoundingClientRect().bottom)
  if (clientBottom > 300 && contentCards.offsetHeight > window.innerHeight / 2 && loading) {
    loading = false
    oLoading.style.visibility = 'visible'
    loadMore(APIMore +
      ((/\?/).test(APIMore) ? `&page=${page}` : `?page=${page}`)
    )
  }
})

function loadMore(url) {
  axios.get(url)
  .then(data => {
    // 如果结束就隐藏loading图标 返回函数
    if (data.data.finished) {
      oLoading.style.visibility = 'hidden'
      return
    }

    // 服务器不响应就返回函数
    if (data.status !== 200) return

    page ++ // 每次触底page+1
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