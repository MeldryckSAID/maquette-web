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

function retour(){ 
    document.querySelector('retour')
	.addEventListener('click', function (retour) {
  	window.scrollTo(0, 0);
  }).play;
}
