//menu hamburguer
let menuburguer = document.querySelector('.menu-burguer');
let headerMenu = document.querySelector('.header-menu');
//evento click para mostrar e esconder o meu hamburguer
menuburguer.addEventListener('click', ()=>{
    if(headerMenu.style.display==='block'){
        headerMenu.style.display = none;
        menuburguer.classList.remove('active');
    }else{
        headerMenu.style.display='block';
        menuburguer.classList.add('active');
    }
});