var imgSlider=document.querySelectorAll('.slider__img');
var elToShow=document.querySelectorAll('.show-on-scroll')
var tooltip=document.querySelector('.tooltip')
var menuSmall=document.querySelector('.menu--small')
var navSmall=document.querySelector('#navbar--small')
var menuIcon=document.querySelector('.menu__icon i')
console.log(menuIcon.classList)
var currentIndex=0
var currentClick=0
convertSlider()
window.onscroll=loopScroll
menuSmall.addEventListener('click',e=>{
    navSmall.classList.toggle('show')
    menuIcon.classList.add('fa-times')
    menuIcon.classList.remove('fa-bars')
    if(e.type==='click'){
        currentClick++
    }
    if(currentClick%2==0){
        menuIcon.classList.remove('fa-times')
        menuIcon.classList.add('fa-bars')
    }
   
})

function convertSlider(){
    imgSlider.forEach((img,index)=>{
        img.classList.add('hide')
    })
    currentIndex++
    if(currentIndex>imgSlider.length){currentIndex=1}
    imgSlider[currentIndex-1].classList.remove('hide')
    setTimeout(convertSlider,4000)
}

function isElViewPort(el){
    let rect=el.getBoundingClientRect()
    let viewHeight=window.innerHeight||document.documentElement.clientHeight;

    return(
        (rect.top<=0&&rect.bottom>=0)||
        (rect.top<=viewHeight&&rect.bottom>=viewHeight)||
        (rect.top>=0&&rect.bottom<=viewHeight)
            )
}

function loopScroll(){
    elToShow.forEach(el=>{
        if(el.id=='to-top'){
            if(isToTopViewPort(el)){
              tooltip.classList.add('start')
            }
            else{
                tooltip.classList.remove('start')
            }

        }
        else if(isElViewPort(el)){
            el.classList.add('start')
        }
        else{
          //code false
        }
    })
}
function isToTopViewPort(el){
    let rect =el.getBoundingClientRect()
    let viewHeight=window.innerHeight||document.documentElement.clientHeight
    return (
        (rect.top<0)
    )
}
