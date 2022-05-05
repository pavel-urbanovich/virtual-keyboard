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

function showAnimationKey(e) {
  const findKey = [...document.querySelectorAll('.key')].find((item) => item.innerHTML === e);
  if (findKey) {
    findKey.classList.add('animation');
    setTimeout(() => findKey.classList.remove('animation'), 500);
  }
}

function doCapsLock() {
  const letters = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];
  const letterKeys = [...document.querySelectorAll('.key')].filter((item) => letters.includes(item.textContent));
  letterKeys.forEach((item) => item.classList.toggle('uppercase'));
  const keyCapsLock = [...document.querySelectorAll('.key')].find((item) => item.textContent === 'CapsLock');
  keyCapsLock.classList.toggle('active-caps');
}

function showCode(event) {
  const { code } = event;
  let startPos = textarea.selectionStart;
  showAnimationKey(event.key);
  const textCode = keys.find((item) => item.code === code);
  let item = textarea.value;
  if (textCode.key === 'Backspace') {
    item = item.slice(0, -1);
    textarea.value = item;
  } else if (textCode.key === 'Del') {
    textarea.value = item;
  } else if (textCode.key === 'Tab') {
    textarea.value = `${textarea.value.slice(0, startPos)}        ${textarea.value.slice(startPos)}`;
  } else if (textCode.key === 'Delete') {
    textarea.value = textarea.value.slice(startPos, 0) + textarea.value;
  } else if (textCode.key === 'CapsLock') {
    doCapsLock();
  } else if (textCode.key === 'Enter') {
    textarea.focus();
    startPos = textarea.value.length;
  } else {
    textarea.value = item + textCode.key;
    event.preventDefault();
  }
}
window.addEventListener('keydown', showCode);
