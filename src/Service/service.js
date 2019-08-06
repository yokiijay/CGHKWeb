import '../service.html'
import './scss/main.scss'
import axios from 'axios'
import '../Common/components/nav'
import '../Common/components/btnFloat'

/*------------------ tabs click ------------------*/
const tabs = document.querySelectorAll('.content-tab__item')
const contentCards = document.querySelector('.content-cards')

let currentTab = document.querySelector('.content-tab__item--current')
let page = 0 // 触底页数计数

tabs.forEach((el,i)=>{
  el.onclick = function (){
    currentTab.classList.remove('content-tab__item--current')
    el.classList.toggle('content-tab__item--current')
    currentTab = el
    page = 0 // 重置页数
    /*------------------ 点击第几个tab 执行某块函数 ------------------*/
    switch (i) {
      case 0:
        getAll(APIAll + `${(/\?/).test(APIAll) ? '&' : '?'}tab=All`)
        break;
      case 1:
        getOthers(APIOthers + `${(/\?/).test(APIOthers) ? '&' : '?'}tab=Free`)
        break;
      case 2:
        getOthers(APIOthers + `${(/\?/).test(APIOthers) ? '&' : '?'}tab=Standard`)
        break;
      case 3:
        getOthers(APIOthers + `${(/\?/).test(APIOthers) ? '&' : '?'}tab=Preminum`)
        break;
    
      default:
        break;
    }
    return false
  }
})

// 接口 已经修改 并写到了html的script里
// const APIAll = 'https://easy-mock.com/mock/5d276cc97c78013d841db5af/data/getAll'
// const APIFree = 'https://easy-mock.com/mock/5d276cc97c78013d841db5af/data/getFree'
// const APIStandard = 'https://easy-mock.com/mock/5d276cc97c78013d841db5af/data/getStandard'
// const APIPreminum = 'https://easy-mock.com/mock/5d276cc97c78013d841db5af/data/getPreminum'

const loadingHTML = `
    <div class="loading">
      <span></span>
      <span></span>
      <span></span>
    </div>
  `

function getAll(url){
  contentCards.innerHTML = loadingHTML
  axios.get(url)
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
getAll(APIAll + `${(/\?/).test(APIAll) ? '&' : '?'}tab=All`)
function getOthers(url){
  contentCards.innerHTML = loadingHTML
  axios.get(url)
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

let loading = true
function handleScrolling(){
  // 内容底部距离屏幕底部高度
  const clientBottom = (window.innerHeight - contentCards.getBoundingClientRect().bottom)
  if(clientBottom>300 && contentCards.offsetHeight>window.innerHeight/2 && loading){
    // 执行当前tab对应的触底加载函数
    loading = false
    switch(currentTab.innerHTML) {
      case 'All':
        getMore(APIMore + `${(/\?/).test(APIMore) ? '&' : '?'}tab=All&page=${page}`)
        break
      case 'Free':
        getMore(APIMore + `${(/\?/).test(APIMore) ? '&' : '?'}tab=Free&page=${page}`)
        break
      case 'Standard':
        getMore(APIMore + `${(/\?/).test(APIMore) ? '&' : '?'}tab=Standard&page=${page}`)
        break
      case 'Preminum':
        getMore(APIMore + `${(/\?/).test(APIMore) ? '&' : '?'}tab=Preminum&page=${page}`)
        break
    }
  }

  function getMore(url){
    document.querySelector('.loading').classList.toggle('loading--hide', false)
    axios.get(url)
    .then(({data,status})=>{
      // 如果结束就隐藏loading图标 返回函数
      if (data.finished) {
        document.querySelector('.loading').classList.toggle('loading--hide', true)
        return
      }

      if(status == 200) {
        page ++ // 每次触底都增加1page
        data.moreList.forEach(({ riqi, caption, img, url }) => {
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