function focusLabel(elemId) {
    const elem = document.getElementById(elemId)
    elem.style.color = '#60A5FA'
  }

function blurLabel(elemId, elem) {
  if (elem.value !== ''){
      const color = document.getElementById(elemId);
       color.style.color = '#60A5FA'
   } else {
      const color = document.getElementById(elemId)
      color.style.color = '#0000007c'
   }
    
 }

var visible = true;
const headerNav = document.getElementById('header-nav');
  const blackMenu = document.getElementById('black-menu');

function mostrarMenu() {
  headerNav.style.right = '0px';
  blackMenu.style.display = 'flex'; 
}
function ocultarMenu() {
  headerNav.style.right = '-60%';
  blackMenu.style.display = 'none'; 
  console.log('haaa')
}

document.getElementById('btn-menu').addEventListener('click', mostrarMenu);
document.getElementById('black-menu').addEventListener('click', ocultarMenu);
document.getElementById('header-nav').addEventListener('click', ocultarMenu)

