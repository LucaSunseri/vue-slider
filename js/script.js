/*
  Descrizione:
  Rifare l’esercizio dello slider come fatto assieme in classe.
  Bonus:
  Applicare l’autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente.
*/

const app = new Vue({

  el: '#app',

  data: {
    databaseImage: [
      'img/01.jpg',
      'img/02.jpg',
      'img/03.jpg',
      'img/04.jpg',
      'img/05.jpg'
    ],
    captionTitle: [
      'Svezia',
      'Svizzera',
      'Gran Bretagna',
      'Germania',
      'Paradise'
    ],
    captionText: [
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
      'Lorem ipsum',
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
      'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    ]
  }

});
