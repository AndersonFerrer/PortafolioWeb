function focusLabel(elemId) {
    const elem = document.getElementById(elemId)
    elem.style.color = '#60A5FA'
  }

function blurLabel(elemId, elem) {

  if (elem === email) {

    const color = document.getElementById(elemId);
    let expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    let emailValid = expReg.test(elem.value);
    console.log(elem.value , emailValid)
    if(emailValid == true) {
      color.style.color = '#60A5FA'
    }
     else {
      color.style.color = 'var(--label-ligth)'
    }

  }


  if (elem !== email && elem.value !== ''){
      const color = document.getElementById(elemId);
      color.style.color = '#60A5FA'
   } 
   else if (elem !== email){
      const color = document.getElementById(elemId)
      color.style.color = 'var(--label-ligth)'
   }
    
 }

let visible = false;
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
    mostrarMenu();
    visible = !visible
  } else if (visible == true) {
    ocultarMenu()
    
  }
}
let darkModeIs = false;
function darkMode() {
  console.log('clickkk')
  if(darkModeIs === true) {
    darkModeIs = !darkModeIs
    visible = !visible
    document.documentElement.style.setProperty('--ligth-mode', 'white')
    document.documentElement.style.setProperty('--dark-mode', '#212121')
    document.documentElement.style.setProperty('--bg-ligth-mode', '#ffffffda')
    document.documentElement.style.setProperty('--bg-dark-mode', '#212121da')
    document.documentElement.style.setProperty('--portada-dark', '#212121')
    document.documentElement.style.setProperty('--portada-ligth', 'url(../assets/bg-portada.svg)')
    document.documentElement.style.setProperty('--label-ligth', '#0000007c')
    document.documentElement.style.setProperty('--label-dark', 'rgba(128, 128, 128, 0.5)#0000007c')
    document.getElementById('henry').src = './assets/henryB.png'
    document.getElementById('alura').src = './assets/alura.png'
  } else {
    visible = !visible
    darkModeIs = !darkModeIs
    document.documentElement.style.setProperty('--ligth-mode', '#212121')
    document.documentElement.style.setProperty('--dark-mode', 'white')
    document.documentElement.style.setProperty('--bg-dark-mode', '#ffffffda')
    document.documentElement.style.setProperty('--bg-ligth-mode', '#212121da')
    document.documentElement.style.setProperty('--portada-dark', 'url(../assets/bg-portada.svg)')
    document.documentElement.style.setProperty('--portada-ligth', '#212121')
    document.documentElement.style.setProperty('--label-ligth', 'rgba(128, 128, 128, 0.5)')
    document.documentElement.style.setProperty('--label-dark', '#0000007c')
    document.getElementById('henry').src = './assets/henry.png'
    document.getElementById('alura').src = './assets/aluraW.png'
  }

}

document.getElementById('switch-dark').addEventListener('click', darkMode);
document.getElementById('black-menu').addEventListener('click', ocultarMenu);
document.getElementById('header-nav').addEventListener('click', ocultarMenu)
window.addEventListener('resize', esconder)
function esconder() {
  blackMenu.style.display = 'none'
}

