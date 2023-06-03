let menu=document.querySelector('.menu-list-item')
menu.addEventListener('mouseover',function(){
    document.querySelector('.menu-list').classList.toggle('active')
})
let menuTwo=document.querySelector('.menu-list-item-two')
menuTwo.addEventListener('mouseover',function(){
    document.querySelector('.about-list').classList.toggle('active')
})
function join(){
    alert('please to login ')
}
let toggle =document.querySelector('.toggle')
toggle.addEventListener('click',function(){
    document.querySelector('.navigasi .menu').classList.toggle('active')
})

let i=1
function handlerLeft(){
    if(i<=3){
        document.querySelector('.img-header').setAttribute('src',`gambar${i++}.jpg`)
    }
    else{
        alert('full')
    }
}

let tiket=document.querySelectorAll('.content-tiket button')
tiket.forEach(el=>{
    el.addEventListener('click',function(){
        let first=el.firstChild
        console.log(first)
    })
})