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

var visible = false;
const headerNav = document.getElementById('header-nav');
const blackMenu = document.getElementById('black-menu');
const bar1 = document.getElementById('bars1');
const bar2 = document.getElementById('bars2');
const bar3 = document.getElementById('bars3');

function mostrarMenu() {
  headerNav.style.right = '0px';
  blackMenu.style.display = 'flex';
  bar1.style.rotate = '45deg'; 
  bar3.style.rotate = '-45deg';
  bar2.style.opacity = '0';  
}
function ocultarMenu() {
  bar1.style.rotate = '0deg'; 
  bar3.style.rotate = '0deg';
  bar2.style.opacity = '1';  
  headerNav.style.right = '-100%';
  blackMenu.style.display = 'none'; 
  visible = !visible;
}

function btnMenu() {
  if(visible == false) {
    console.log(visible)
    mostrarMenu();
    visible = !visible
  } else if (visible == true) {
    console.log(visible)
    ocultarMenu()
    
  }
}

document.getElementById('black-menu').addEventListener('click', ocultarMenu);
document.getElementById('header-nav').addEventListener('click', ocultarMenu)

