import '../perspective.html'
import './scss/main.scss'
import './voice'
import '../Common/components/nav'
import '../Common/components/btnFloat'
import axios from 'axios'
import voice from './voice'

/*------------------ inital ------------------*/
loadInitial('https://easy-mock.com/mock/5d276cc97c78013d841db5af/data/perspective/getAll')

/*------------------ tabs click ------------------*/
const tabs = document.querySelectorAll('.content-tab__item')

let currentTab = document.querySelector('.content-tab__item--current')
tabs.forEach((el,i)=>{

  el.onclick = function (){
    currentTab.classList.remove('content-tab__item--current')
    el.classList.toggle('content-tab__item--current')
    currentTab = el

    /*------------------ 点击第几个tab 执行某块函数 ------------------*/
    switch(currentTab.innerHTML) {
      case 'All':
        loadInitial('https://easy-mock.com/mock/5d276cc97c78013d841db5af/data/perspective/getAll')
        break
      case 'Take on top news':
        loadInitial('https://easy-mock.com/mock/5d276cc97c78013d841db5af/data/perspective/getAll')
        break
      case 'Podcast':
        loadInitial('https://easy-mock.com/mock/5d276cc97c78013d841db5af/data/perspective/getAll')
        break
      case 'Discussion':
        loadInitial('https://easy-mock.com/mock/5d276cc97c78013d841db5af/data/perspective/getAll')
        break
    }
  }
})

// loadInitial 函数
function loadInitial(url){ // 获取第一屏15个卡片的数据
  const cols = document.querySelectorAll('.content-cards__col')
  cols.forEach(col=>{ col.innerHTML = '' }) // 先清空
  axios.get(url) // 再异步拿数据
  .then(data => {
    if(data.status!==200) return
    const { list, first } = data.data
    // 如果有第一次个卡片就填充第一个
    if(first){
      const firstLeft = document.querySelector('.content-cards__first-left')
      const firstRight = document.querySelector('.content-cards__first-right')
      firstLeft.innerHTML = `
        <span>${first.date}</span>
        <h2><a class="hr" href="${first.url}">${first.h2}</a></h2>
        <p>${first.p}</p>
        <a href="${first.url}" class="linkto">Keep reading<i class="icon readmore"></i></a>
      `
      firstRight.innerHTML = `
        <figure style="background-image:url(${first.img})"></figure>
      `
    }else {
      const firstCard = document.querySelector('.content-cards__first')
      firstCard.innerHTML = ''
    }

    // 填充第一组col
    list.slice(0,5).forEach(list=>{
      const html = `
        <div class="content-cards__item">
          <span>${list.date}</span>
          ${list.voice?`
            <div class="voice content-cards__item-voice">
              <audio src="${list.voice.src}"></audio>
              <i class="icon icon-voice"></i>
              <p>${list.voice.p}</p>
              <div class="voice__slider">
                <div class="voice__slider-progress">
                  <div class="voice__slider-progress-oval"></div>
                </div>
              </div>
              <div class="flex-between">
                <span class="voice__slider-in"></span>
                <span class="voice__slider-out"></span>
              </div>
            </div>
          `:''}
          ${list.media?`
            <a target="_blank"
              href="${list.media.href}"
              class="media content-cards__item-media">
              <figure style="background-image: url(${list.media.cover})"></figure>
              <i class="icon play"></i>
              <span>${list.media.duration}</span>
            </a>
          `:''}
          ${list.h4?`
            <h4>${list.h4}</h4>
          `:''}
          ${list.img?`
            <img src="${list.img}" alt="">
          `:''}
          ${list.h5?`
            <h5>${list.h5}</h5>
          `:''}
          ${list.h6?`
            <h6>${list.h6}</h6>
          `:''}
          ${list.p?`
            <p>${list.p}</p>
          `:''}
          <a href="${list.href}" class="linkto">Keep reading<i class="icon readmore"></i></a>
        </div>
      `
      cols[0].innerHTML += html
    })
    // 填充第二组col
    list.slice(5,10).forEach(list=>{
      const html = `
        <div class="content-cards__item">
          <span>${list.date}</span>
          ${list.voice?`
            <div class="voice content-cards__item-voice">
              <audio src="${list.voice.src}"></audio>
              <i class="icon icon-voice"></i>
              <p>${list.voice.p}</p>
              <div class="voice__slider">
                <div class="voice__slider-progress">
                  <div class="voice__slider-progress-oval"></div>
                </div>
              </div>
              <div class="flex-between">
                <span class="voice__slider-in"></span>
                <span class="voice__slider-out"></span>
              </div>
            </div>
          `:''}
          ${list.media?`
            <a target="_blank"
              href="${list.media.href}"
              class="media content-cards__item-media">
              <figure style="background-image: url(${list.media.cover})"></figure>
              <i class="icon play"></i>
              <span>${list.media.duration}</span>
            </a>
          `:''}
          ${list.h4?`
            <h4>${list.h4}</h4>
          `:''}
          ${list.img?`
            <img src="${list.img}" alt="">
          `:''}
          ${list.h5?`
            <h5>${list.h5}</h5>
          `:''}
          ${list.h6?`
            <h6>${list.h6}</h6>
          `:''}
          ${list.p?`
            <p>${list.p}</p>
          `:''}
          <a href="${list.href}" class="linkto">Keep reading<i class="icon readmore"></i></a>
        </div>
      `
      cols[1].innerHTML += html
    })
    // 填充第三组col
    list.slice(10,15).forEach(list=>{
      const html = `
        <div class="content-cards__item">
          <span>${list.date}</span>
          ${list.voice?`
            <div class="voice content-cards__item-voice">
              <audio src="${list.voice.src}"></audio>
              <i class="icon icon-voice"></i>
              <p>${list.voice.p}</p>
              <div class="voice__slider">
                <div class="voice__slider-progress">
                  <div class="voice__slider-progress-oval"></div>
                </div>
              </div>
              <div class="flex-between">
                <span class="voice__slider-in"></span>
                <span class="voice__slider-out"></span>
              </div>
            </div>
          `:''}
          ${list.media?`
            <a target="_blank"
              href="${list.media.href}"
              class="media content-cards__item-media">
              <figure style="background-image: url(${list.media.cover})"></figure>
              <i class="icon play"></i>
              <span>${list.media.duration}</span>
            </a>
          `:''}
          ${list.h4?`
            <h4>${list.h4}</h4>
          `:''}
          ${list.img?`
            <img src="${list.img}" alt="">
          `:''}
          ${list.h5?`
            <h5>${list.h5}</h5>
          `:''}
          ${list.h6?`
            <h6>${list.h6}</h6>
          `:''}
          ${list.p?`
            <p>${list.p}</p>
          `:''}
          <a href="${list.href}" class="linkto">Keep reading<i class="icon readmore"></i></a>
        </div>
      `
      cols[2].innerHTML += html
    })
    // 调用voice
    voice()
  })
}

/*------------------ 触底加载 ------------------*/

window.addEventListener('scroll', ()=>{
  handleScrolling()
})

function handleScrolling() {
  const cols = document.querySelectorAll('.content-cards__col')

  cols.forEach(col=>{
    // 内容底部距离屏幕底部高度
    const clientBottom = (window.innerHeight - col.getBoundingClientRect().bottom)
    // 距离底部300 && 不在第一屏 && 允许加载
    if (clientBottom > 300 && col.offsetHeight > window.innerHeight / 2 && !col.loading) {
      // 执行当前tab对应的触底加载函数
      col.loading = true
      switch (currentTab.innerHTML) {
        case 'All':
          loadMore('https://easy-mock.com/mock/5d276cc97c78013d841db5af/data/perspective/getMore', col)
          break
        case 'Take on top news':
          loadMore('https://easy-mock.com/mock/5d276cc97c78013d841db5af/data/perspective/getMore', col)
          break
        case 'Podcast':
          loadMore('https://easy-mock.com/mock/5d276cc97c78013d841db5af/data/perspective/getMore', col)
          break
        case 'Discussion':
          loadMore('https://easy-mock.com/mock/5d276cc97c78013d841db5af/data/perspective/getMore', col)
          break
      }
    }
    // loadMore 函数
    function loadMore(url, el) {
      const oLoading = document.querySelector('.loading')
      oLoading.style.visibility = 'visible'
      axios.get(url) // 异步拿数据
      .then(data => {
        if (data.status !== 200) return
        const { list } = data.data
        list.forEach(list=>{
          const html = `
            <div class="content-cards__item">
              <span>${list.date}</span>
              ${list.voice ? `
                <div class="voice content-cards__item-voice">
                  <audio src="${list.voice.src}"></audio>
                  <i class="icon icon-voice"></i>
                  <p>${list.voice.p}</p>
                  <div class="voice__slider">
                    <div class="voice__slider-progress">
                      <div class="voice__slider-progress-oval"></div>
                    </div>
                  </div>
                  <div class="flex-between">
                    <span class="voice__slider-in"></span>
                    <span class="voice__slider-out"></span>
                  </div>
                </div>
              `: ''}
              ${list.media ? `
                <a target="_blank"
                  href="${list.media.href}"
                  class="media content-cards__item-media">
                  <figure style="background-image: url(${list.media.cover})"></figure>
                  <i class="icon play"></i>
                  <span>${list.media.duration}</span>
                </a>
              `: ''}
              ${list.h4 ? `
                <h4>${list.h4}</h4>
              `: ''}
              ${list.img ? `
                <img src="${list.img}" alt="">
              `: ''}
              ${list.h5 ? `
                <h5>${list.h5}</h5>
              `: ''}
              ${list.h6 ? `
                <h6>${list.h6}</h6>
              `: ''}
              ${list.p ? `
                <p>${list.p}</p>
              `: ''}
              <a href="${list.href}" class="linkto">Keep reading<i class="icon readmore"></i></a>
            </div>
          `
          col.innerHTML += html
        })

        // 异步完成 调用voice设置loading
        oLoading.style.visibility = 'hidden'
        el.loading = !el.loading
        voice()
      })
    }
  })
}