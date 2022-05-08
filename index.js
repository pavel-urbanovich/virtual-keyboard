import {
  keys, letters, numbersPoints, secondNumbersPoints,
} from './keys.js';

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
  const findKey = [...document.querySelectorAll('.key')].filter((item) => item.innerHTML === e || item.innerHTML === e.toUpperCase());
  if (findKey.length > 1) {
    findKey.forEach((item) => {
      if (item.hasAttribute('left')) {
        findKey[0].classList.add('animation');
        setTimeout(() => findKey[0].classList.remove('animation'), 500);
      }
      findKey[1].classList.add('animation');
      setTimeout(() => findKey[1].classList.remove('animation'), 500);
    });
  } findKey[0].classList.add('animation');
  setTimeout(() => findKey[0].classList.remove('animation'), 500);
}

function doCapsLock() {
  const letterKeys = [...document.querySelectorAll('.key')].filter((item) => letters.includes(item.textContent));
  letterKeys.forEach((item) => {
    const content = item;
    content.innerHTML = `${item.innerHTML.toUpperCase()}`;
  });
  const keyCapsLock = [...document.querySelectorAll('.key')].find((item) => item.textContent === 'CapsLock');
  if (keyCapsLock.classList.contains('active-caps')) {
    const lettersUpper = letters.map((item) => item.toUpperCase());
    const letterKeysUpper = [...document.querySelectorAll('.key')].filter((item) => lettersUpper.includes(item.innerHTML));
    letterKeysUpper.forEach((item) => {
      const content = item;
      content.innerHTML = `${content.innerHTML.toLowerCase()}`;
    });
  }
  keyCapsLock.classList.toggle('active-caps');
}

function doShift() {
  const letterKeysSHF = [...document.querySelectorAll('.key')].filter((item) => numbersPoints.includes(item.innerHTML));
  const letterKeys = [...document.querySelectorAll('.key')].filter((item) => letters.includes(item.textContent));
  letterKeys.forEach((item) => {
    const content = item;
    content.innerHTML = `${item.innerHTML.toUpperCase()}`;
  });
  letterKeysSHF.forEach((item) => {
    const content = item;
    keys.forEach((elem) => {
      if (content.innerHTML === elem.key) {
        content.innerHTML = `${elem.secondkey}`;
      }
    });
  });
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
  } else if (textCode.key === 'Shift' && event.code === 'ShiftLeft') {
    doShift();
  } else if (textCode.key === 'Shift' && event.code === 'ShiftRight') {
    doShift();
  } else {
    textarea.value = `${item}${event.key}`;
    event.preventDefault();
  }
}
window.addEventListener('keydown', showCode);

function endKeyShift(event) {
  const keyName = event.key;
  if (keyName === 'Shift') {
    const letterKeysSHF = [...document.querySelectorAll('.key')].filter((item) => secondNumbersPoints.includes(item.textContent));
    const lettersUpper = letters.map((item) => item.toUpperCase());
    const letterKeysUpper = [...document.querySelectorAll('.key')].filter((item) => lettersUpper.includes(item.innerHTML));
    letterKeysUpper.forEach((item) => {
      const content = item;
      content.innerHTML = `${content.innerHTML.toLowerCase()}`;
    });
    letterKeysSHF.forEach((item) => {
      const content = item;
      keys.forEach((elem) => {
        if (content.textContent === elem.secondkey) {
          content.innerHTML = `${elem.key}`;
        }
      });
    });
  }
}

window.addEventListener('keyup', endKeyShift, false);

function addDataSetName(event) {
  if (event.code === 'ShiftLeft') {
    const shiftLeft = [...document.querySelectorAll('.key')].find((item) => item.textContent === 'Shift');
    shiftLeft.setAttribute('name', 'left');
  }
}

window.addEventListener('keydown', addDataSetName);
