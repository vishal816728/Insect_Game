const screens=document.querySelectorAll('.screens')

const insect_choose_list=document.querySelectorAll('.insect-choose-list')
const game=document.querySelector('.game')
const timeEl=document.querySelector('.time')
const scoreEl=document.querySelector('.score')
const start_btn=document.querySelector('.btn')

let score=0
let seconds=0

selected_insect={}

start_btn.addEventListener('click',()=>{
     screens[0].classList.add('up')
})

insect_choose_list.forEach(btn=>{
    btn.addEventListener('click',()=>{
        const img=btn.querySelector('img')
        const src=img.getAttribute('src')
        const alt=img.getAttribute('alt')
        selected_insect={src,alt}
        screens[1].classList.add('up')
        setTimeout(showInsect,1000)
        starttimer()
    })
})

function starttimer(){
    setInterval(increasetime,1000)
}
function increasetime(){
    let m=Math.floor(seconds/60)
    let s=seconds%60
    m=m<10?`0${m}`:m
    s=s<10?`0${s}`:s
    timeEl.innerHTML=`Time:${m}:${s}`
    seconds++
}

function showInsect(){
    const insect=document.createElement('div')
    insect.classList.add('insect')
     const {x,y}=getRandomLocation()
     insect.style.top=`${y}px`
     insect.style.left=`${x}px`
     insect.innerHTML=`
     <img src="${selected_insect.src}" alt="${selected_insect.alt}" style="transform:rotate(${Math.random()*360}deg) " />`
     
     insect.addEventListener('click',()=>{
       increasescore()
       insect.classList.add('caught')
       setTimeout(()=>insect.remove(),2000)
       addInsect()
     })
     game.append(insect)
    }
    
    function addInsect(){
        setTimeout(showInsect,1000)
    }

    function increasescore(){
        score++
        scoreEl.innerHTML=`Score:${score}`
    }
 
function getRandomLocation(){
    let width=window.innerWidth
    let height=window.innerHeight
    x=Math.random()*(width-200)+100
    y=Math.random()*(height-200)+100
    return {x,y}
}