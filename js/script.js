var u = document.querySelector('#el')
u.style.backgroundColor = "red"
u.style.width = u.style.height = '20' + 'px'
var cont = document.querySelector('#cont')
var mainb = document.querySelector('#main')
mainb.style.display = 'none'
var c = 1 
var f = true
var a = 0
var interval = setInterval(async ()=>{
  if(f){
    u.style.width = c + 'px'
    c++
    u.style.color = 'red'
  if(c == 400){
    f = false
    a++
  }
  }
  if(!f){
    u.style.width = c + 'px'
    c--
    if(c == 0){
      f = true
      a++
    }
  }
  if(a == 2){
    clearInterval(interval)
    u.style.color = "white"
    u.style.backgroundColor = 'blue'
    u.style.marginLeft = '150px'
    setTimeout(()=>{
      cont.style.display = 'none'
      mainb.style.display = 'block'
    })
    }
  }
)
