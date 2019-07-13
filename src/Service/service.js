import '../service.html'
import './scss/main.scss'
import axios from 'axios'

/*------------------ tabs click ------------------*/
const tabs = document.querySelectorAll('.content-tab__item')
const contentCards = document.querySelector('.content-cards')
const loading = document.querySelector('.loading').cloneNode(true)
const articleBody = document.querySelector('.body')

let currentTab = document.querySelector('.content-tab__item--current')
tabs.forEach((el,i)=>{

  el.onclick = function (){
    currentTab.classList.remove('content-tab__item--current')
    el.classList.toggle('content-tab__item--current')
    currentTab = el

    /*------------------ 点击第几个tab 执行某块函数 ------------------*/
    switch (i) {
      case 0:
        all()
        break;
      case 1:
        free()
        break;
      case 2:
        standard()
        break;
      case 3:
        preminum()
        break;
    
      default:
        break;
    }
    return false
  }
})

// 接口
const APIAll = 'https://easy-mock.com/mock/5d276cc97c78013d841db5af/data/getAllNewsletters'
const APIMore = 'https://easy-mock.com/mock/5d276cc97c78013d841db5af/data/getMoreNewsletters'
// All数据变量
let dataAll = null
let dataIndex = 0

axios.get(APIAll) // 从api获取数据
.then(({ data }) => {
  dataAll = data
  all()
})

function all(){
  const { riqi, title, caption, img } = dataAll.data.first
  contentCards.innerHTML = `
    <div class="content-cards__first">
      <div class="content-cards__first-left">
        <span><i class="icon date"></i>${riqi}</span>
        <h2><a class="hr" href="">${title}</a></h2>
        <p>${caption}</p>
      </div>
      <a href="" class="content-cards__first-right">
        <figure style="background-image: url(${img})"></figure>
      </a>
    </div>
  `
  const list = dataAll.data.list
  list.forEach(({riqi, index, caption, img})=>{
    const html = `
      <div class="content-cards__item">
        <a href='' class="content-cards__item-img">
          <figure style='background-image: url(${img})'></figure>
          <span><i class="icon date"></i>${riqi}</span>
          <div class="overlay"></div>
        </a>
        <h2>${caption}</h2>
      </div>
    `
    contentCards.innerHTML += html
    dataIndex = index
  })
  if (document.body.offsetHeight < window.innerHeight) bottomAttached()
}
function free() {
  contentCards.innerHTML = ''
  dataAll.data.list.forEach(({riqi, index, caption, img, type})=>{
    if (type==='free') {
      const html = `
        <div class="content-cards__item">
          <a href='' class="content-cards__item-img">
            <figure style='background-image: url(${img})'></figure>
            <span><i class="icon date"></i>${riqi}</span>
            <div class="overlay"></div>
          </a>
          <h2>${caption}</h2>
        </div>
      `
      contentCards.innerHTML += html
    }
  })
  if (document.body.offsetHeight < window.innerHeight) bottomAttached()
}
function standard() {
  contentCards.innerHTML = ''
  dataAll.data.list.forEach(({riqi, index, caption, img, type})=>{
    if (type==='standard') {
      const html = `
        <div class="content-cards__item">
          <a href='' class="content-cards__item-img">
            <figure style='background-image: url(${img})'></figure>
            <span><i class="icon date"></i>${riqi}</span>
            <div class="overlay"></div>
          </a>
          <h2>${caption}</h2>
        </div>
      `
      contentCards.innerHTML += html
    }
  })
  if (document.body.offsetHeight < window.innerHeight) bottomAttached()
}
function preminum() {
  contentCards.innerHTML = ''
  dataAll.data.list.forEach(({riqi, index, caption, img, type})=>{
    if (type==='preminum') {
      const html = `
        <div class="content-cards__item">
          <a href='' class="content-cards__item-img">
            <figure style='background-image: url(${img})'></figure>
            <span><i class="icon date"></i>${riqi}</span>
            <div class="overlay"></div>
          </a>
          <h2>${caption}</h2>
        </div>
      `
      contentCards.innerHTML += html
    }
  })
  if(document.body.offsetHeight<window.innerHeight) bottomAttached()
}

/*------------------ 触底加载 ------------------*/
let loadit = true
window.addEventListener('scroll', function (){
  const bodyBottom = document.body.getBoundingClientRect().bottom
  const contentHeight = contentCards.offsetHeight
  const contentTop = contentCards.offsetTop
  if (bodyBottom<window.innerHeight+20 && loadit) {
    loadit = false
    bottomAttached()
  }
})

function bottomAttached() {
  contentCards.appendChild(loading)
  axios.get(APIMore+'?index='+dataIndex)
  .then(({data})=>{
    console.log( data )
    loadit = true
    // 加载完
    console.log( dataIndex )
    contentCards.removeChild(loading)
    dataAll.data.list = dataAll.data.list.concat(data.data.list)
    switch(currentTab.innerHTML) {
      case 'All': 
        all()
        break
      case 'Free': 
        free()
        break
      case 'Standard': 
        standard()
        break
      case 'Preminum': 
        preminum()
        break
      default : return
    }
  })
  .catch(err=>{
    console.log( err )
  })
}