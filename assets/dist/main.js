const slider = document.querySelector ('.slider');

slider.style.height = window.innerHeight-80;

const psyco = document.querySelectorAll('.psyco');
const training = document.querySelectorAll('.training');

const psycoCont = document.querySelector('.service.psyco');
const trainingCont = document.querySelector('.service.training');

psyco.forEach((e) => {
    e.addEventListener('click',() => {
        psycoCont.style.transform= 'translateX(425px)';
        trainingCont.style.transform= 'translateX(425px)';
        if (trainingCont.style.transform == 'translateX(425px)') {

            psyco.forEach((e) => {
                if (e.className.includes('service')){
                    var classes = e.className.split(" ");
                    var i = classes.indexOf("focus");
                
                    if (i >= 0) 
                        classes.splice(i, 1);
                    else 
                        classes.push("focus");
                        e.className = classes.join(" "); 
                } else {
                    var classes = e.className.split(" ");
                    var i = classes.indexOf("focus");
                
                    if (i >= 0) 
                        classes.splice(i, 1);
                    else 
                        classes.push("focus");
                        e.className = classes.join(" "); 
                }  
            });
            training.forEach((e) => {
                if (e.className.includes('service')){
                    var classes = e.className.split(" ");
                    var i = classes.indexOf("focus");
                
                    if (i >= 0) 
                        classes.splice(i, 1);
                    else 
                        classes.push("focus");
                        e.className = classes.join(" "); 
                } else {
                    var classes = e.className.split(" ");
                    var i = classes.indexOf("focus");
                
                    if (i >= 0) 
                        classes.splice(i, 1);
                    else 
                        classes.push("focus");
                        e.className = classes.join(" "); 
                }  
            });
        } 
    });
});

training.forEach((e) => {
    e.addEventListener('click',() => {
        psycoCont.style.transform= 'translateX(-425px)';
        trainingCont.style.transform= 'translateX(-425px)';
        if (trainingCont.style.transform== 'translateX(-425px)') {

            psyco.forEach((e) => {
                if (e.className.includes('service')){
                    var classes = e.className.split(" ");
                    var i = classes.indexOf("focus");
                
                    if (i >= 0) 
                        classes.splice(i, 1);
                    else 
                        classes.push("focus");
                        e.className = classes.join(" "); 
                } else {
                    var classes = e.className.split(" ");
                    var i = classes.indexOf("focus");
                
                    if (i >= 0) 
                        classes.splice(i, 1);
                    else 
                        classes.push("focus");
                        e.className = classes.join(" "); 
                }  
            });
            training.forEach((e) => {
                if (e.className.includes('service')){
                    var classes = e.className.split(" ");
                    var i = classes.indexOf("focus");
                
                    if (i >= 0) 
                        classes.splice(i, 1);
                    else 
                        classes.push("focus");
                        e.className = classes.join(" "); 
                } else {
                    var classes = e.className.split(" ");
                    var i = classes.indexOf("focus");
                
                    if (i >= 0) 
                        classes.splice(i, 1);
                    else 
                        classes.push("focus");
                        e.className = classes.join(" "); 
                }  
            });
        }
    });
});

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