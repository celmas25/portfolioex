const txtanim = document.querySelector('h1');

let typewriter = new Typewriter(txtanim, { 
    loop: true,
})

typewriter.typeString('<span style="color: black">Moi c\'est Masure Céline')
.pauseFor(300)
.typeString('<strong>, Dev Front</strong>')
.pauseFor(1000)
.deleteChars(9)
.typeString('<span style="color: #27ae60"> CSS</span> !')
.pauseFor(1000)
.deleteChars(5)
.typeString('<span style="color: yellow"> Javascript</span> !')
.pauseFor(1000)
.start()


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
    } else if (backgroundColor === 'rgb(255, 255, 255)'){
        element.style.backgroundColor = '#232222';
        element.style.color = '#ffffff';
    }
    if (color === 'rgb(35, 34, 34)'){
        element.style.color = '#ffffff';
   } else if (color === 'rgb(255, 255, 255)'){
        element.style.color = '#232222';
   }
}

typewriter.stop();

const txtanim2 = document.querySelector('h1');

let typewriter2 = new Typewriter(txtanim, { 
    loop: true,
})

typewriter2.typeString('<span style="color: white">Moi c\'est Masure Céline')
.pauseFor(300)
.typeString('<strong><span style="color: white">, Dev Front</strong>')
.pauseFor(1000)
.deleteChars(9)
.typeString('<span style="color: #27ae60"> CSS</span> !')
.pauseFor(1000)
.deleteChars(5)
.typeString('<span style="color: yellow"> Javascript</span> !')
.pauseFor(1000)
.start()
});

