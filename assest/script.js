//Humbergar Section
const humbergar = document.querySelector('#humbergar');
const close = document.querySelector('#close');
const main = document.querySelectorAll('.main');

function openHumbergar() {
    document.querySelector('.forth-nav').classList.add('active');
    toggleMenu.classList.add('invisible');
    document.body.style.overflowY = 'hidden';
}
humbergar.addEventListener('click', openHumbergar);

function closeHumbergar(){
    document.querySelector('.forthnav').classList.remove('active');
  toggleMenu.classList.remove('invisible');
  document.body.style.overflowY = 'auto';
}
close.addEventListener('click', closeHumbergar);

menuItems.forEach((item) => {
  item.addEventListener('click', closeHumbergar);
});
//Speakers Section
const speakers = [
    {
      Name: 'Ariel Camus',
      Title: 'FOUNDER + CEO',
      Image: 'Ariel.png',
      More: 'Ariel has lived and worked in 7 different countries including Spain, Argentina, USA, and Vietnam',
    },
    {
      Name: 'Andrea Funda',
      Title: 'STUDENT SUCCESS',
      Image: 'Andrea.png',
      More: ' Professionally though, she loves helping people find their way. Her background is in process, project, and people management.',
    },
    {
      Name: 'Emilia Andrezejewska',
      Title: 'PRODUCT',
      Image: 'Emilia.png',
      More: 'Emilia is a web developer by profession and a teacher at heart.',
    },
    {
      Name: 'Gaby Suarez',
      Title: 'ADMISSIONS',
      Image: 'Gaby.png',
      More: 'Gaby is a native Salvadoran, Spanglish-speaking, dog (and sushi) lover.',
    },
];

const speakersPart = document.querySelector('#speaker .speakers');

speakers.forEach((speaker, index) => {
  speakersPart.innerHTML += `
    <div class="person ${index > 1 ? 'mobile-hide' : ''}">
      <div class="person-graphic">
        <img src="./assest/image/${speaker.Image}" alt="" />
      </div>
      <div class="person-info">
        <h4 class="person-Name">${speaker.Name}</h4>
        <p class="person-Title"><em>${speaker.Title}</em></p>
        <p class="person-More">${speaker.More}</p>
      </div>
    </div>
    `;
});

const moreSpeakerButton = document.getElementById('more-speakers');
moreSpeakerButton.addEventListener(
  'click',
  (event) => {
    event.preventDefault();
    document.querySelectorAll('.mobile-hide').forEach((el) => {
      el.classList.toggle('mobile-hide');
    });
    moreSpeakerButton.style.display = 'none';
  },
);