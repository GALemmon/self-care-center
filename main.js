//-----------------  Button Variables ----------------
var affirmationBtn = document.getElementById('affirmation-btn');
var mantraBtn = document.getElementById('mantra-btn');
var receiveMessageBtn = document.getElementById('receive-message-btn');
var clearMessageBtn = document.getElementById('clear-message-btn');
var buttons = document.getElementsByTagName('input');

//----------------- Other Component Variables --------
var image = document.getElementById('meditation-graphic');
var displayedStatement = document.querySelector('.returned-statement');
var clearMessageButton = document.querySelector('.clear-message-button');

//----------------- Text Arrays ---------------------
var affirmations = [
  'I forgive myself and set myself free.',
  'I believe I can be all that I want to be.',
  'I am in the process of becoming the best version of myself.',
  'I have the freedom & power to create the life I desire.',
  'I choose to be kind to myself and love myself unconditionally.',
  'My possibilities are endless.',
  'I am worthy of my dreams.',
  'I am enough.',
  'I deserve to be healthy and feel good.',
  'I am full of energy and vitality and my mind is calm and peaceful.',
  'Every day I am getting healthier and stronger.',
  'I honor my body by trusting the signals that it sends me.',
  'I manifest perfect health by making smart choices.'
];
var mantras = [
  'Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.',
  'Don’t let yesterday take up too much of today.',
  'Every day is a second chance.',
  'Tell the truth and love everyone.',
  'I am free from sadness.',
  'I am enough.',
  'In the beginning it is you, in the middle it is you and in the end it is you.',
  'I love myself.',
  'I am present now.',
  'Inhale the future, exhale the past.',
  'This too shall pass.',
  'Yesterday is not today.',
  'The only constant is change.',
  'Onward and upward.',
  'I am the sky, the rest is weather.',
];

//------------------ Event Listeners --------------
receiveMessageBtn.addEventListener('click', receiveMessage);
mantraBtn.addEventListener('click', selectMantra);
affirmationBtn.addEventListener('click', selectAffirmation);
clearMessageBtn.addEventListener('click', clearMessage);

//------------------ Functions -------------------
function receiveMessage() {
  if (mantraBtn.checked === true) {
    var displayMantra = getMantra();
    displayedStatement.innerText = displayMantra || 'Oops.  Try again.';
    image.style.display = 'none';
    displayedStatement.style.display = 'flex';
    clearMessageButton.style.display = 'flex';
  };
  if (affirmationBtn.checked === true) {
    var displayAffirmation = getAffirmation();
    displayedStatement.innerText = displayAffirmation || 'Oops. Try again.';
    image.style.display = 'none';
    displayedStatement.style.display = 'flex';
    clearMessageButton.style.display = 'flex';
  };
};

function clearMessage() {
  clearSelection();
  image.style.display = 'flex';
  displayedStatement.style.display = 'none';
  clearMessageButton.style.display = 'none';
};

function clearSelection(){
  for (i = 0; i < buttons.length; i++) {
    buttons[i].checked = false;
  };
};

function selectMantra() {
  mantraBtn.checked = true;
  affirmationBtn.checked = false;
};

function selectAffirmation() {
  mantraBtn.checked = false;
  affirmationBtn.checked = true;
};

function getMantra() {
  var i = getRandomIndex(mantras);
  return affirmations[i];
};

function getAffirmation() {
  var i = getRandomIndex(affirmations);
  return affirmations[i];
};

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};
