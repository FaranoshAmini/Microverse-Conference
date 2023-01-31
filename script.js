const hamBurger = document.querySelector('.hamburger-container');
const closeBtn = document.querySelector('#close');
const hamBurgerBtn = document.querySelector('#hamburger');

function openMenu() {
  hamBurger.classList.toggle('extended');
}
function closeMenu() {
  hamBurger.classList.remove('extended');
}
hamBurgerBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);

const speakers = [{
  Name: 'Ariel Camus',
  Title: 'FOUNDER + CEO',
  Image: 'images/Arialedited.png',
  More: 'Ariel has lived and worked in 7 different countries including Spain, Argentina, USA, and Vietnam',
},
{
  Name: 'Andrea Funda',
  Title: 'STUDENT SUCCESS',
  Image: 'images/Andrea.png',
  More: ' Professionally though, she loves helping people find their way. Her background is in process, project, and people management.',
},
{
  Name: 'Emilia Andrezejewska',
  Title: 'PRODUCT',
  Image: 'images/Emilia.png',
  More: 'Emilia is a web developer by profession and a teacher at heart.',
},
{
  Name: 'Gaby Suarez',
  Title: 'ADMISSIONS',
  Image: 'images/Gaby.png',
  More: 'Gaby is a native Salvadoran, Spanglish-speaking, dog (and sushi) lover.',
},
{
  Name: 'Bee Quesada',
  Title: 'STUDENT SUCCESS',
  Image: 'images/Bee.png',
  More: 'Based in the heart of Central America, Bee is a language-loving nerd.',
},
{
  Name: 'Benjamin Rojsuontikul',
  Title: 'FINANCE',
  Image: 'images/binjamin.png',
  More: 'Ben is a former Peace Corps volunteer turned Valuation and Financial Modeling professional.',
},
];

const container = document.querySelector('.feature-speaker-container');
const h3 = document.createElement('h3');
h3.append('Featured Speakers');
h3.classList.add('featuring');
container.appendChild(h3);

const featureBoxContainer = document.createElement('ul');
featureBoxContainer.classList.add('feature-box-container');

speakers.forEach(s => {
  featureBoxContainer.innerHTML += `<li class="feature-box">
  <div class="speaker-image">
    <img class="bottom-image" src="${s.Image}" />
  </div>
    <div class="feature-box-content">
      <div class="feature-box-text arielname">${s.Name}</div>
      <div class="feature-box-text1 arieltitle">${s.Title}</div>
      <div class="feature-box-text2 arielmore">${s.More}</div>
    </div>
</li>`
  container.appendChild(featureBoxContainer);
})
