const btn = document.querySelector('.btn');
const openUl = document.querySelector('.menu-area ul')



btn.addEventListener('click',function(){

   openUl.classList.toggle('open');
})