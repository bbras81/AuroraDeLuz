function menuPr(){
    if (menuDrop.style.display == 'block'){
        menuDrop.style.display = 'none'
    }else{
        menuDrop.style.display = 'block'
    }
}

function newMessage(){

}

window.onscroll = function(){headerScroll()}

function headerScroll(){
    var logo = document.querySelector('#logo')
    const logoWidth = window.getComputedStyle(logo)
    var scroll = document.documentElement.scrollTop
    if (logo != 100){
        document.querySelector('#logo').style.width = logo - scroll
    }

    console.log(logoWidth.width)
    console.log(scroll)
}