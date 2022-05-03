import keys from './keys.js';

const bodyWrapper = document.createElement('div');
bodyWrapper.classList.add('wrapper');
document.body.append(bodyWrapper);

const title = document.createElement('h1');
title.classList.add('title');
title.innerHTML = 'RSS Virtual Keybord';

const textarea = document.createElement('textarea');
textarea.classList.add('field');

const keyboardcontainer = document.createElement('div');
keyboardcontainer.classList.add('keyboard-container');

const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');

bodyWrapper.append(title, textarea, keyboardcontainer);

keyboardcontainer.append(keyboard);

function getKeys(arr) {
  arr.forEach((element) => {
    const key = document.createElement('div');
    key.classList.add('key');
    key.innerHTML = `${element.key}`;
    keyboard.append(key);
  });
}

getKeys(keys);

function showCode(event) {
  const { code } = event;
  const textCode = keys.find((item) => item.code === code);
  let item = textarea.value;
  if (textCode.key === 'Backspace') {
    item = item.slice(0, -1);
    textarea.value = item;
    event.preventDefault();
  } else if (textCode.key === 'Del') {
    textarea.value = item;
    event.preventDefault();
  } else {
    textarea.value = item + textCode.key;
    event.preventDefault();
  }
}
window.addEventListener('keydown', showCode);
