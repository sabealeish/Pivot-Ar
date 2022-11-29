

const open_nav = document.querySelectorAll('.open-menu i');

function show_nav (){
    document.querySelector(".mobile-nav").classList.add("show-nav")
}
function disply_nav (){
    document.querySelector(".mobile-nav").classList.remove("show-nav")
}
function show_con(e){
    e.classList.toggle('show_arow');
    e.nextElementSibling.classList.toggle('ditelis_ser_show');
    e.parentElement.classList.toggle('boxs-se-show');
}