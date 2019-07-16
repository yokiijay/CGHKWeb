import './Home/scss/main.scss'
import './index.html'
import './Common/components/nav'

import $ from 'jquery'
import '../node_modules/slick-carousel/slick/slick'

/*------------------ 轮播图 ------------------*/
$('.header-carousel').slick({
  draggable: false,
  autoplay: true,
  arrows: false,
  speed: 800,
  pauseOnDotsHover: true,
})

let currentIndex = null
$('.header-carousel').on('beforeChange', function (ev, slick, current){
  currentIndex = current
  $('.banner-pagination__item').eq(currentIndex).removeClass('banner-pagination__item--current')
  currentIndex = (currentIndex + 1) % 3
  $('.banner-pagination__item').eq(currentIndex).addClass('banner-pagination__item--current')
})

$('.banner-pagination__item').each(function (index){
  $(this).click(()=>{
    console.log( index )
    $('.header-carousel').slick('slickGoTo', index)
    $('.banner-pagination__item').eq(currentIndex).removeClass('banner-pagination__item--current')
    $('.banner-pagination__item').eq(index).addClass('banner-pagination__item--current')
  })
})