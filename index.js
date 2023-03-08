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
