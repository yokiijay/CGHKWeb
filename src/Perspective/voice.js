// 当ajax异步加载后 dom会变 调用refreshVoices函数以重新生效
export default function refreshVoices(){
  const voices = document.querySelectorAll('.voice')
  
  voices.forEach(el=>{
    // 获取元素
    const audioEl = el.querySelector('audio')
    const audioBtn = el.querySelector('i.icon-voice')
    const audioOval = el.querySelector('.voice__slider-progress-oval')
    const audioIcon = el.querySelector('.icon-voice')
  
    // 点击喇叭播放/暂停
    audioBtn.addEventListener('click',()=>{
      if (audioEl.readyState === 0) {
        audioEl.load()
      }else {
        audioEl.paused && audioEl.play() || audioEl.pause()
      }
    })
    audioEl.addEventListener('canplay', ()=>{
      audioEl.play()
    })

    // 播放时oval动画开始
    audioEl.addEventListener('play', ()=>{
      document.querySelectorAll('audio').forEach(el=>{
        if(el!==audioEl)el.pause()
      })
      audioOval.classList.toggle('voice__slider-progress-oval--active', true)
      audioIcon.classList.toggle('icon--active', true)
    })
    audioEl.oncanplay = ()=>{
      // 播放时oval动画停止
      audioEl.addEventListener('pause', ()=>{
        audioOval.classList.toggle('voice__slider-progress-oval--active', false)
        audioIcon.classList.toggle('icon--active', false)
      })
      // 播放结束时重置时间轴
      audioEl.addEventListener('ended', ()=>{
        audioEl.currentTime = 0
      })
    
      // 音频进度处理
      const spanIn = el.querySelector('.voice__slider-in')
      const spanOut = el.querySelector('.voice__slider-out')
      const slider = el.querySelector('.voice__slider-progress')
      const { duration, currentTime } = audioEl
  
      spanIn.innerHTML = `${parseInt(currentTime / 60 / 10) || '0'}${parseInt(currentTime / 60 % 10)}:${parseInt(currentTime % 60 / 10)}${parseInt(currentTime % 60 % 10)}`
      spanOut.innerHTML = `${parseInt(duration / 60 / 10) || '0'}${parseInt(duration / 60 % 10)}:${parseInt(duration % 60 / 10)}${parseInt(duration % 60 % 10)}`
      slider.style.width = modulate(currentTime,[0,duration],[0,100])+'%'
  
      audioEl.addEventListener('timeupdate', () => {
        const { duration, currentTime } = audioEl
        spanIn.innerHTML = `${parseInt(currentTime / 60 / 10) || '0'}${parseInt(currentTime / 60 % 10)}:${parseInt(currentTime % 60 / 10)}${parseInt(currentTime % 60 % 10)}`
        spanOut.innerHTML = `${parseInt(duration / 60 / 10) || '0'}${parseInt(duration / 60 % 10)}:${parseInt(duration % 60 / 10)}${parseInt(duration % 60 % 10)}`
        slider.style.width = modulate(currentTime, [0, duration], [0, 100]) + '%'
      })
    }
  })
}

// 联动函数 例如modulate(50,[0,100],[500,1000]) => 750
function modulate(i, [a, b], [c, d]) {
  return (i - a) / (b - a) * (d - c) + c
}