import '../service.html'
import './scss/main.scss'

/*------------------ tabs click ------------------*/
const tabs = document.querySelectorAll('.content-tab__item')

let currentTab = document.querySelector('.content-tab__item--current')
tabs.forEach((el,i)=>{

  el.onclick = function (){
    currentTab.classList.remove('content-tab__item--current')
    el.classList.toggle('content-tab__item--current')
    currentTab = el

    /*------------------ 点击第几个tab 执行某块函数 ------------------*/
    switch (i) {
      case 0:
        
        break;
      case 1:
        
        break;
      case 2:
        
        break;
      case 3:
        
        break;
    
      default:
        break;
    }

    return false
  }
})