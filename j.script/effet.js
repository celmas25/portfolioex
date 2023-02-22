//animation du titre en noire
const txtanim = document.querySelector('h1');

let typewriter = new Typewriter(txtanim, { 
    loop: true,
})

typewriter.typeString('<span style="color: rgb(35, 34, 34)">Moi c\'est Masure Céline')
.pauseFor(300)
.typeString('<strong><span style="color: rgb(35, 34, 34)">, Dev Front</strong>')
.pauseFor(1000)
.deleteChars(9)
.typeString('<span style="color: #27ae60"> CSS</span> !')
.pauseFor(1000)
.deleteChars(5)
.typeString('<span style="color: yellow"> Javascript</span> !')
.pauseFor(1000)
.start()

// stock ce theme d'animation noire
let animationDark = false;

//Partie chnagement de theme
// Sélectionnez le bouton qui inverse les couleurs
const toggleButton = document.querySelector('.btn');

// Ajoutez un écouteur d'événements au bouton
toggleButton.addEventListener('click', () => {
  // Inversez les couleurs des éléments de la page
  const elements = document.querySelectorAll('*');

  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    const backgroundColor = window.getComputedStyle(element).backgroundColor;
    const color = window.getComputedStyle(element).color;

    if (backgroundColor === 'rgb(35, 34, 34)'){
        element.style.backgroundColor ='#ffffff';
        element.style.color = '#232222';
        //sur fond blanc partie dev front devient noire 
        if (element.classList.contains('Moi c\'est Masure Céline, ,dev-front')) {
            element.style.color = '#232222';
        }

    } else if (backgroundColor === 'rgb(255, 255, 255)'){
        element.style.backgroundColor = '#232222';
        element.style.color = '#ffffff';
        //sur fond noire partie dev front devient blanc 
        if (element.classList.contains('Moi c\'est Masure Céline, ,dev-front')) {
            element.style.color = '#ffffff';
        }
    }

    if (color === 'rgb(35, 34, 34)'){
        element.style.color = '#ffffff';

   } else if (color === 'rgb(255, 255, 255)'){
        element.style.color = '#232222';
        //si ecriture noire partie dev front devient blanche 
        if (element.classList.contains('Moi c\'est Masure Céline, ,dev-front')) {
            element.style.color = '#ffffff';
        }
   }
}
});
