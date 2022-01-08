function carrouselBasic() {
    let nbImages = document.querySelectorAll('.images li').length;

    let largeurImg = 75 ;
    let lesimg = document.querySelector('.images');

    let bsuiv = document.querySelector('.suivante button');
    let bprec = document.querySelector('.precedente button');
  
    // Navigation
    let cpt=0;

    // Paramètres de la transition
    lesimg.style.transition = 'transform 1s ease-in-out';

    // Click sur le bouton 'suivante'
    bsuiv.addEventListener('click',function() {
        console.log('detect bsuiv');
        if (cpt<(nbImages-1)) {
            cpt++;
        } else {
            cpt=0;
        }
        lesimg.style.transform = 'translateX(-'+cpt*largeurImg+'px)';
    });

    // Click sur le bouton 'precedente'
    bprec.addEventListener('click',function() {
        console.log('detect bprec');
        if (cpt>0) {
            cpt--;
        } else {
            cpt=nbImages-1;
        }
        lesimg.style.transform = 'translateX(-'+cpt*largeurImg+'px)';
    });
}

//Legende
// 1
 function monterLegende() {
     let texte13 = document.querySelector(".texte__js1");
     texte13.style.display = 'block';
     return anime({
         targets: texte13,
         translateY: '-5em',
         autoplay: false,
         easing: 'linear',
         duration: 200
     }).play;
 }

 function descendreLegende() {

    
     return anime({
         targets: '.texte__js1',
         translateY: '5em',
         autoplay: false,
         easing: 'linear',
         duration: 200
     }).play;
 }

 //2
 function monterLegende2() {
    let texte13 = document.querySelector(".texte__js2");
    texte13.style.display = 'block';
    return anime({
        targets: texte13,
        translateY: '-5em',
        autoplay: false,
        easing: 'linear',
        duration: 200
    }).play;
}

function descendreLegende2() {

   
    return anime({
        targets: '.texte__js2',
        translateY: '5em',
        autoplay: false,
        easing: 'linear',
        duration: 200
    }).play;
}
//3
function monterLegende3() {
    let texte13 = document.querySelector(".texte__js3");
    texte13.style.display = 'block';
    return anime({
        targets: texte13,
        translateY: '-5em',
        autoplay: false,
        easing: 'linear',
        duration: 200
    }).play;
}

function descendreLegende3() {

   
    return anime({
        targets: '.texte__js3',
        translateY: '5em',
        autoplay: false,
        easing: 'linear',
        duration: 200
    }).play;
}

//4
function monterLegende4() {
    let texte13 = document.querySelector(".texte__js4");
    texte13.style.display = 'block';
    return anime({
        targets: texte13,
        translateY: '-5em',
        autoplay: false,
        easing: 'linear',
        duration: 200
    }).play;
}

function descendreLegende4() {

   
    return anime({
        targets: '.texte__js4',
        translateY: '5em',
        autoplay: false,
        easing: 'linear',
        duration: 200
    }).play;
}

//5
function monterLegende5() {
    let texte13 = document.querySelector(".texte__js5");
    texte13.style.display = 'block';
    return anime({
        targets: texte13,
        translateY: '-6em',
        autoplay: false,
        easing: 'linear',
        duration: 200
    }).play;
}

function descendreLegende5() {

   
    return anime({
        targets: '.texte__js5',
        translateY: '6em',
        autoplay: false,
        easing: 'linear',
        duration: 200
    }).play;
}

// Carousel auto infi
function carrousel6img() {
    var carr6 = document.querySelectorAll('.carou6');
    let d = 2000;
    let delta = 1000;

    carr6.forEach(function(img,indice) {
        img.style.zIndex = carr6.length - indice;
    });

    let anim4 = anime.timeline({
        loop: true,
        delay: 0
    });

    anim4.add({
        targets: carr6,
        translateX: [{value: '375', duration: d},
                     {value: '-375', duration: 0, delay: function(img,ind) {
                         if (ind == 0) return (5*delta)+(4*d);
                         if (ind == 1) return (4*delta)+(3*d);
                         if (ind == 2) return (3*delta)+(2*d);
                         if (ind == 3) return (2*delta)+d;
                         if (ind == 4) return delta;
                         return 0;
                     }
                    },
                     {value: '0', duration: function(img,ind) {
                         if (ind == 5) return 0;
                         return d;
                     }
                }],
        easing: 'linear',
        delay: function(img,ind) {
            if (ind == 0) return delta;
            if (ind == 1) return (2*delta)+d;
            if (ind == 2) return (3*delta)+(2*d);
            if (ind == 3) return (4*delta)+(3*d);
            if (ind == 4) return (5*delta)+(4*d);
            return (6*delta)+(5*d);
        }
    });

}