// Ciao ragazzi,
// Esercizio di oggi: **Carosello Mono Array**
// nome repo: js-array-carousel
// **Consegna:**
// Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.
// **MILESTONE 1**
// Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un'immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.
// **MILESTONE 2**
// Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
// Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
// Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.
// **MILESTONE 3**
// Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.
// **BONUS 1:**
// Aggiungere il **ciclo infinito** del carosello. Ovvero se è attiva la prima immagine e l'utente clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.
// **BONUS 2:**
// Aggiungere la visualizzazione di tutte le thumbnails sulla destra dell’immagine grande attiva, come nello screenshot proposto. Tutte le miniature avranno un layer di opacità scura, tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato.
// Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva.
// **Prima di partire a scrivere codice:**
// Non lasciamoci spaventare dalla complessità apparente dell'esercizio, ma analizziamo prima, come abbiamo fatto sempre, cosa ci potrebbe aspettare. Abbiamo completato ormai da qualche giorno la sessione HTML e CSS, se non ci ricordiamo qualcosa andiamo pure a riguardare alcuni argomenti. Non dedichiamo però al ripasso più di una **mezz'ora**, così da non perdere di vista il focus dell'esercizio.
// **Consigli del giorno:**
// 1. Costruiamo del carosello una versione statica contenente solamente un'immagine. Di questa versione statica al momento opportuno commenteremo (oscureremo) alcuni elementi per poterli riprodurre dinamicamente in js. Potremo quindi usarli come "template".
// 2. Scriviamo sempre prima per punti il nostro algoritmo in italiano per capire cosa vogliamo fare
// 3. Al momento giusto (ihihhi starà a voi capire quale) rispondete a questa domanda: "Quanti cicli servono?"
// Buon lavoro e buon divertimento! :faccia_leggermente_sorridente:

/*
const carouselImgs = document.getElementsByClassName("carousel-img");
console.log(carouselImgs);

const arrayImgs = [];

for(let i = 0; i < carouselImgs.length; i++) {

    console.log(carouselImgs[i].src);

}
*/

const arrayImgs = ["img/01.jpg","img/02.jpg","img/03.jpg","img/04.jpg","img/05.jpg"];

const carousel = document.getElementById("carousel");

const thumbnails = document.getElementById("thumbnails");

for(let i = 0; i < arrayImgs.length; i++) {

    carousel.innerHTML += `<img class="carousel-img" src="${arrayImgs[i]}" alt="Image ${i+1}"></img>`;
    thumbnails.innerHTML += `<img class="thumbnail-img" src="${arrayImgs[i]}" alt="Thumbnail ${i+1}"></img>`;

}

const arrayImgTags = document.getElementsByClassName("carousel-img");
const arrayThumbTags = document.getElementsByClassName("thumbnail-img");

const up = document.getElementsByClassName("up");
const down = document.getElementsByClassName("down");

// STATO INIZIALE
arrayImgTags[0].classList.add("active");
arrayThumbTags[0].classList.add("active");

let imgPosition = 0;

down[0].addEventListener("click", function() {

    arrayImgTags[imgPosition].classList.remove("active");
    arrayThumbTags[imgPosition].classList.remove("active");
    imgPosition++;
    if(imgPosition >= arrayImgTags.length) {
        imgPosition = 0;
    }

    console.log("Posizione", imgPosition);
    arrayImgTags[imgPosition].classList.add("active");

    arrayThumbTags[imgPosition].classList.add("active");

});

up[0].addEventListener("click", function() {

    arrayImgTags[imgPosition].classList.remove("active");
    arrayThumbTags[imgPosition].classList.remove("active");
    
    imgPosition--;
    
    if(imgPosition < 0) {

        imgPosition = arrayImgTags.length - 1;
        

    }

    console.log("Posizione", imgPosition);
    arrayImgTags[imgPosition].classList.add("active");

    arrayThumbTags[imgPosition].classList.add("active");

});

// STATO INTERMEDIO
// arrayImgTags[x].classList.remove("active");
// x++;
// arrayImgTags[x].classList.add("active");
// up[0].classList.remove("hidden");

// STATO FINALE
// arrayImgTags[x].classList.remove("active");
// x++;
// arrayImgTags[x].classList.add("active");
// down[0].classList.add("hidden");





