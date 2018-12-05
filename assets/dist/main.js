
const toggler = document.querySelector('.toggler');
togglerShown = false;

const lowerBar = document.querySelector('.lowerBar');
width = lowerBar.offsetWidth-toggler.offsetWidth;

lowerBar.style.transform = 'translateX('+width+'px)';

function updateLowerBarPosition() {
    
    width = lowerBar.offsetWidth-toggler.offsetWidth;

    lowerBar.style.transform = 'translateX('+width+'px)';
}

lowerBar.addEventListener(('mouseover'), (e) => {
    if (togglerShown == false) {
        toggler.innerHTML = 'Know more about -';
    }

    lowerBar.style.transform = 'translateX(0px)';
    
});
lowerBar.addEventListener(('mouseout'), (e) => {
    if (togglerShown == false) {
        toggler.innerHTML = 'Know more about +';
    }

    lowerBar.style.transform = 'translateX(0px)';
    lowerBar.style.transform = 'translateX('+width+'px)';
    
});