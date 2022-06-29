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
{
  Name: 'Bee Quesada',
  Title: 'STUDENT SUCCESS',
  Image: 'images/bee.jpg',
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
//
const featureBox5 = document.createElement('div');
featureBox5.classList.add('feature-box');
featureBoxContainer.appendChild(featureBox5);

const image5 = document.createElement('img');
image5.classList.add('image', 'beeimage');
featureBox5.appendChild(image5);

const featureBoxContent5 = document.createElement('div');
featureBoxContent5.classList.add('feature-box-content');
featureBox5.appendChild(featureBoxContent5);

const featureBoxTextf = document.createElement('div');
featureBoxTextf.classList.add('feature-box-text', 'beename');
featureBoxContent5.appendChild(featureBoxTextf);

const featureBoxText1f = document.createElement('div');
featureBoxText1f.classList.add('feature-box-text1', 'beetitle');
featureBoxContent5.appendChild(featureBoxText1f);

const featureBoxText2f = document.createElement('div');
featureBoxText2f.classList.add('feature-box-text2', 'beemore');
featureBoxContent5.appendChild(featureBoxText2f);
//
const featureBox6 = document.createElement('div');
featureBox6.classList.add('feature-box');
featureBoxContainer.appendChild(featureBox6);

const image6 = document.createElement('img');
image6.classList.add('image', 'binjaminimage');
featureBox6.appendChild(image6);

const featureBoxContent6 = document.createElement('div');
featureBoxContent6.classList.add('feature-box-content');
featureBox6.appendChild(featureBoxContent6);

const featureBoxTexth = document.createElement('div');
featureBoxTexth.classList.add('feature-box-text', 'binjaminname');
featureBoxContent6.appendChild(featureBoxTexth);

const featureBoxText1h = document.createElement('div');
featureBoxText1h.classList.add('feature-box-text1', 'binjamintitle');
featureBoxContent6.appendChild(featureBoxText1h);

const featureBoxText2h = document.createElement('div');
featureBoxText2h.classList.add('feature-box-text2', 'binjaminmore');
featureBoxContent6.appendChild(featureBoxText2h);

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

function bee(){
  document.querySelector('.beeimage').src = `${speakers[4].Image}`;
  document.querySelector('.beename').innerHTML = speakers[4].Name;
  document.querySelector('.beetitle').innerHTML = speakers[4].Title;
  document.querySelector('.beemore').innerHTML = speakers[4].More;
}
function binjamin(){
  document.querySelector('.binjaminimage').src = `${speakers[5].Image}`;
  document.querySelector('.binjaminname').innerHTML = speakers[5].Name;
  document.querySelector('.binjamintitle').innerHTML = speakers[5].Title;
  document.querySelector('.binjaminmore').innerHTML = speakers[5].More;
}
ariel();
andrea();
emilia();
gaby();
bee();
binjamin();