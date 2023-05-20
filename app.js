
const menuContainer = document.getElementById('menuContainer');
const toggle = document.getElementById('toggle');
const menuButtons = document.getElementById('menu-buttons')


menuButtons.querySelectorAll('button').forEach((btn)=>{
    btn.addEventListener('click',()=>{
        menuContainer.classList.toggle('flex-wrap-reverse')
    })
})



function replaceIcon(){
    if(toggle.classList.contains('fa-bars')){
        toggle.classList.replace('fa-bars','fa-xmark')
    }else{
        toggle.classList.replace('fa-xmark','fa-bars')
    }


}   