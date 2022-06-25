const hamBurger = document.querySelector('.hamburger-container');
const closeBtn = document.querySelector('#close');
const hamBurgerBtn = document.querySelector('#hamburger');
const menuItem1 = document.querySelector('#program');
const menuItem2 = document.querySelector('#speaker');
const menuItem3 = document.querySelector('#openAbout');
const menuItem4 = document.querySelector('#sponsor');
function openMenu() {
  hamBurger.classList.toggle('extended');
}
function closeMenu() {
  hamBurger.classList.remove('extended');
}
hamBurgerBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);

menuItem1.addEventListener('click', closeMenu);
menuItem2.addEventListener('click', closeMenu);
menuItem3.addEventListener('click', closeMenu);
menuItem4.addEventListener('click', closeMenu);
//Speakers Section
const speakers = [{
  Name: 'Ariel Camus',
  Title: 'FOUNDER + CEO',
  Image: 'images/Ariel.jpg',
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
];

const container = document.querySelector('.feature-speaker-container');
const h3 = document.createElement('h3');
h3.append('Featuring');
h3.classList.add('featuring');
container.appendChild(h3);

const featureBoxContainer = document.createElement('div');
featureBoxContainer.classList.add('feature-box-container');
container.appendChild(featureBoxContainer);

const featureBox = document.createElement('div');
featureBox.classList.add('feature-box');
featureBoxContainer.appendChild(featureBox);

const image = document.createElement('img');
image.classList.add('image', 'arielimage');
featureBox.appendChild(image);

const featureBoxContent = document.createElement('div');
featureBoxContent.classList.add('feature-box-content');
featureBox.appendChild(featureBoxContent);

const featureBoxText = document.createElement('div');
featureBoxText.classList.add('feature-box-text', 'arielname');
featureBoxContent.appendChild(featureBoxText);

const featureBoxText1 = document.createElement('div');
featureBoxText1.classList.add('feature-box-text1', 'arieltitle');
featureBoxContent.appendChild(featureBoxText1);

const featureBoxText2 = document.createElement('div');
featureBoxText2.classList.add('feature-box-text2', 'arielmore');
featureBoxContent.appendChild(featureBoxText2);
//Andrea
const featureBox2 = document.createElement('div');
featureBox2.classList.add('feature-box');
featureBoxContainer.appendChild(featureBox2);

const image2 = document.createElement('img');
image2.classList.add('image', 'andreaimage');
featureBox2.appendChild(image2);

const featureBoxContent2 = document.createElement('div');
featureBoxContent2.classList.add('feature-box-content');
featureBox2.appendChild(featureBoxContent2);

const featureBoxTextr = document.createElement('div');
featureBoxTextr.classList.add('feature-box-text', 'andreaname');
featureBoxContent2.appendChild(featureBoxTextr);

const featureBoxText1r = document.createElement('div');
featureBoxText1r.classList.add('feature-box-text1', 'andreatitle');
featureBoxContent2.appendChild(featureBoxText1r);

const featureBoxText2r = document.createElement('div');
featureBoxText2r.classList.add('feature-box-text2', 'andreamore');
featureBoxContent2.appendChild(featureBoxText2r);
// Emilia

const featureBox3 = document.createElement('div');
featureBox3.classList.add('feature-box');
featureBoxContainer.appendChild(featureBox3);

const image3 = document.createElement('img');
image3.classList.add('image', 'emiliaimage');
featureBox3.appendChild(image3);

const featureBoxContent3 = document.createElement('div');
featureBoxContent3.classList.add('feature-box-content');
featureBox3.appendChild(featureBoxContent3);

const featureBoxTexts = document.createElement('div');
featureBoxTexts.classList.add('feature-box-text', 'emilianame');
featureBoxContent3.appendChild(featureBoxTexts);

const featureBoxText1s = document.createElement('div');
featureBoxText1s.classList.add('feature-box-text1', 'emiliatitle');
featureBoxContent3.appendChild(featureBoxText1s);

const featureBoxText2s = document.createElement('div');
featureBoxText2s.classList.add('feature-box-text2', 'emiliamore');
featureBoxContent3.appendChild(featureBoxText2s);
//Gaby


const featureBox4 = document.createElement('div');
featureBox4.classList.add('feature-box');
featureBoxContainer.appendChild(featureBox4);

const image4 = document.createElement('img');
image4.classList.add('image', 'gabyimage');
featureBox4.appendChild(image4);

const featureBoxContent4 = document.createElement('div');
featureBoxContent4.classList.add('feature-box-content');
featureBox4.appendChild(featureBoxContent4);

const featureBoxTextst = document.createElement('div');
featureBoxTextst.classList.add('feature-box-text', 'gabyname');
featureBoxContent4.appendChild(featureBoxTextst);

const featureBoxText1st = document.createElement('div');
featureBoxText1st.classList.add('feature-box-text1', 'gabytitle');
featureBoxContent4.appendChild(featureBoxText1st);

const featureBoxText2st = document.createElement('div');
featureBoxText2st.classList.add('feature-box-text2', 'gabymore');
featureBoxContent4.appendChild(featureBoxText2st);

function ariel() {
  document.querySelector('.arielimage').src = `${speakers[0].Image}`;
  document.querySelector('.arielname').innerHTML = speakers[0].Name;
  document.querySelector('.arieltitle').innerHTML = speakers[0].Title;
  document.querySelector('.arielmore').innerHTML = speakers[0].More;
}

function andrea() {
  document.querySelector('.andreaimage').src = `${speakers[1].Image}`;
  document.querySelector('.andreaname').innerHTML = speakers[1].Name;
  document.querySelector('.andreatitle').innerHTML = speakers[1].Title;
  document.querySelector('.andreamore').innerHTML = speakers[1].More;
}

function emilia() {
  document.querySelector('.emiliaimage').src = `${speakers[2].Image}`;
  document.querySelector('.emilianame').innerHTML = speakers[2].Name;
  document.querySelector('.emiliatitle').innerHTML = speakers[2].Title;
  document.querySelector('.emiliamore').innerHTML = speakers[2].More;
}

function gaby() {
  document.querySelector('.gabyimage').src = `${speakers[3].Image}`;
  document.querySelector('.gabyname').innerHTML = speakers[3].Name;
  document.querySelector('.gabytitle').innerHTML = speakers[3].Title;
  document.querySelector('.gabymore').innerHTML = speakers[3].More;
}

ariel();
andrea();
emilia();
gaby();


