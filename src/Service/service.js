import '../service.html'
import './scss/main.scss'
import axios from 'axios'

/*------------------ tabs click ------------------*/
const tabs = document.querySelectorAll('.content-tab__item')
const contentCards = document.querySelector('.content-cards')

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
const APIAll = 'https://easy-mock.com/mock/5d276cc97c78013d841db5af/data/getAll'
const APIFree = 'https://easy-mock.com/mock/5d276cc97c78013d841db5af/data/getFree'
const APIStandard = 'https://easy-mock.com/mock/5d276cc97c78013d841db5af/data/getStandard'
const APIPreminum = 'https://easy-mock.com/mock/5d276cc97c78013d841db5af/data/getPreminum'

const loadingHTML = `
    <div class="loading">
      <span></span>
      <span></span>
      <span></span>
    </div>
  `

function all(){
  contentCards.innerHTML = loadingHTML
  axios.get(APIAll)
  .then(({data, status})=>{
    if(status == 200) {
      const { riqi, img, title, caption, url } = data.first
      contentCards.innerHTML += `
        <div class="content-cards__first">
          <div class="content-cards__first-left">
            <span><i class="icon date"></i>${riqi}</span>
            <h2><a class="hr" href="${url}">${title}</a></h2>
            <p>${caption}</p>
          </div>
          <a href="${url}" class="content-cards__first-right">
            <figure style='background-image:url(${img})'></figure>
          </a>
        </div>
      `
      data.list.forEach(({riqi, caption, img, url})=>{
        contentCards.innerHTML += `
          <div class="content-cards__item">
            <a href='${url}' class="content-cards__item-img">
              <figure style='background-image:url(${img})'></figure>
              <span><i class="icon date"></i>${riqi}</span>
              <div class="overlay"></div>
            </a>
            <h2>${caption}</h2>
          </div>
        `
      })

      document.querySelector('.loading').classList.toggle('loading--hide', true)
    }
  })
}
all()
function free(){
  contentCards.innerHTML = loadingHTML
  axios.get(APIFree)
  .then(({data, status})=>{
    if(status == 200) {
      data.list.forEach(({riqi, caption, img, url})=>{
        contentCards.innerHTML += `
          <div class="content-cards__item">
            <a href='${url}' class="content-cards__item-img">
              <figure style='background-image:url(${img})'></figure>
              <span><i class="icon date"></i>${riqi}</span>
              <div class="overlay"></div>
            </a>
            <h2>${caption}</h2>
          </div>
        `
        document.querySelector('.loading').classList.toggle('loading--hide', true)
      })
    }
  })
}
function standard(){
  contentCards.innerHTML = loadingHTML
  axios.get(APIStandard)
  .then(({data, status})=>{
    if(status == 200) {
      data.list.forEach(({riqi, caption, img, url})=>{
        contentCards.innerHTML += `
          <div class="content-cards__item">
            <a href='${url}' class="content-cards__item-img">
              <figure style='background-image:url(${img})'></figure>
              <span><i class="icon date"></i>${riqi}</span>
              <div class="overlay"></div>
            </a>
            <h2>${caption}</h2>
          </div>
        `
        document.querySelector('.loading').classList.toggle('loading--hide', true)
      })
    }
  })
}
function preminum(){
  contentCards.innerHTML = loadingHTML
  axios.get(APIPreminum)
  .then(({data, status})=>{
    if(status == 200) {
      data.list.forEach(({riqi, caption, img, url})=>{
        contentCards.innerHTML += `
          <div class="content-cards__item">
            <a href='${url}' class="content-cards__item-img">
              <figure style='background-image:url(${img})'></figure>
              <span><i class="icon date"></i>${riqi}</span>
              <div class="overlay"></div>
            </a>
            <h2>${caption}</h2>
          </div>
        `
        document.querySelector('.loading').classList.toggle('loading--hide', true)
      })
    }
  })
}

/*------------------ 触底加载 ------------------*/
window.addEventListener('scroll', handleScrolling)

function handleScrolling(){
  // 内容底部距离屏幕底部高度
  const clientBottom = (window.innerHeight - contentCards.getBoundingClientRect().bottom)
  let loading = true
  if(clientBottom>300 && contentCards.offsetHeight>window.innerHeight/2 && loading){
    // 执行当前tab对应的触底加载函数
    loading = false
    switch(currentTab.innerHTML) {
      case 'All':
        moreAll()
        break
      case 'Free':
        moreFree()
        break
      case 'Standard':
        moreStandard()
        break
      case 'Preminum':
        morePreminum()
        break
    }
  }

  function moreAll(){
    document.querySelector('.loading').classList.toggle('loading--hide', false)
    axios.get(APIAll)
    .then(({data,status})=>{
      if(status == 200) {
        data.more.forEach(({ riqi, caption, img, url }) => {
          contentCards.innerHTML += `
            <div class="content-cards__item">
              <a href='${url}' class="content-cards__item-img">
                <figure style='background-image:url(${img})'></figure>
                <span><i class="icon date"></i>${riqi}</span>
                <div class="overlay"></div>
              </a>
              <h2>${caption}</h2>
            </div>
          `
        })
        document.querySelector('.loading').classList.toggle('loading--hide', true)
        loading = true
      }
    })
  }
  function moreFree(){
    document.querySelector('.loading').classList.toggle('loading--hide', false)
    axios.get(APIFree)
    .then(({data,status})=>{
      if(status == 200) {
        data.more.forEach(({ riqi, caption, img, url }) => {
          contentCards.innerHTML += `
            <div class="content-cards__item">
              <a href='${url}' class="content-cards__item-img">
                <figure style='background-image:url(${img})'></figure>
                <span><i class="icon date"></i>${riqi}</span>
                <div class="overlay"></div>
              </a>
              <h2>${caption}</h2>
            </div>
          `
        })
        document.querySelector('.loading').classList.toggle('loading--hide', true)
        loading = true
      }
    })
  }
  function moreStandard(){
    document.querySelector('.loading').classList.toggle('loading--hide', false)
    axios.get(APIStandard)
    .then(({data,status})=>{
      if(status == 200) {
        data.more.forEach(({ riqi, caption, img, url }) => {
          contentCards.innerHTML += `
            <div class="content-cards__item">
              <a href='${url}' class="content-cards__item-img">
                <figure style='background-image:url(${img})'></figure>
                <span><i class="icon date"></i>${riqi}</span>
                <div class="overlay"></div>
              </a>
              <h2>${caption}</h2>
            </div>
          `
        })
        document.querySelector('.loading').classList.toggle('loading--hide', true)
        loading = true
      }
    })
  }
  function morePreminum(){
    document.querySelector('.loading').classList.toggle('loading--hide', false)
    axios.get(APIPreminum)
    .then(({data,status})=>{
      if(status == 200) {
        data.more.forEach(({ riqi, caption, img, url }) => {
          contentCards.innerHTML += `
            <div class="content-cards__item">
              <a href='${url}' class="content-cards__item-img">
                <figure style='background-image:url(${img})'></figure>
                <span><i class="icon date"></i>${riqi}</span>
                <div class="overlay"></div>
              </a>
              <h2>${caption}</h2>
            </div>
          `
        })
        document.querySelector('.loading').classList.toggle('loading--hide', true)
        loading = true
      }
    })
  }
}