/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */

/* Store Teamss in Javascript objects */
const teams = {
  Monarcas: {
    name: 'Monarcas',
    fullname: 'Monarcas CF',
    caption: 'Amateur Serie B, Singapore',
    image: 'img/team1.png',
    description: 'The team animates the division and were crowned champions in 1901.',
    players: '(Main players: Anton Boriska, Donut Alvarado)',
  },
  Tanque01: {
    name: 'Tanque 01',
    fullname: 'CA Tanque 01',
    caption: 'Amateur Serie C, Arroyo Seco, Argentina',
    image: 'img/team2.png',
    description: 'The team is one of the oldest Serie C animators, with 658 games played in 33 years.',
    players: '(Main players: José Ramón Serrizuela, Sergio Denis)',
  },
  Reading: {
    name: 'Reading',
    fullname: 'Reading TM',
    caption: 'Amateur Serie B, Bangalore, India',
    image: 'img/team3.png',
    description: 'The team is one of the oldest Serie C animators, with 658 games played in 33 years.',
    players: '(Main players: José Ramón Serrizuela, Sergio Denis)',
  },
  Mushembe: {
    name: 'Mushembe',
    fullname: 'Mushembe TP',
    caption: 'Amateur Serie B, Braville, Cameroon',
    image: 'img/team4.png',
    description: 'The team is one of the oldest Serie C animators, with 658 games played in 33 years.',
    players: '(Main players: Boom Boom Chochoka, Olawun Tupefor)',
  },
  RapidDnipro: {
    name: 'Rapid Dnipro',
    fullname: 'Rapid Dnipro',
    caption: 'Ukraine\'s top amateur Serie B, from the city of Dnipro',
    image: 'img/team5.png',
    description: 'The team is always on the top spots, still they cannot make it to serie A because a field of their own is required.',
    players: '(Main players: Ilijushin Dubrobsnik, Dimitry Papadulous)',
  },
  SanJose: {
    name: 'San José',
    fullname: 'San José de Oruro',
    caption: 'San José de Oruro, Potosí, Bolivia; serie B amateur',
    image: 'img/team6.png',
    description: 'The team from the heights of the Andine region has a strong reputation of respect and sportsmanship.',
    players: '(Main players: La laucha José Benítez, Josefino Acosta)',
  },
};

const btnHamburger = document.getElementById('hamburger-menu');
const mobileMenu = document.getElementById('mobile-menu');
const btnCloseMenu = document.getElementById('close-menu');
const menuItem = document.querySelectorAll('.list-item');

/* Events and their actions */
btnHamburger.addEventListener('click', () => {
  mobileMenu.style.display = 'block';
});

btnCloseMenu.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
});

for (let i = 0; i < menuItem.length; i++) {
  menuItem[i].addEventListener('click', () => {
    mobileMenu.style.display = 'none';
  });
}
