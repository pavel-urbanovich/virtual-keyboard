import {
  keys, letters, numbersPoints, secondNumbersPoints, keysRus, lettersRus,
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
  const findKey = [...document.querySelectorAll('.key')].find((item) => item.innerHTML === e || item.innerHTML === e.toUpperCase());
  if (findKey) {
    findKey.classList.add('animation');
    setTimeout(() => findKey.classList.remove('animation'), 500);
  }
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

function doKeyAlt() {
  showAnimationKey('Alt');
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
    textarea.value = textarea.value.slice(0, startPos) + textarea.value.slice(startPos + 1);
  } else if (textCode.key === 'CapsLock') {
    doCapsLock();
  } else if (textCode.key === 'Enter') {
    textarea.focus();
    startPos = textarea.value.length;
  } else if (textCode.code === 'ShiftLeft') {
    doShift();
  } else if (textCode.code === 'ShiftRight') {
    const shiftKey = [...document.querySelectorAll('.key')].filter((el) => el.innerHTML === 'Shift');
    shiftKey[0].classList.remove('animation');
    shiftKey[1].classList.add('animation');
    setTimeout(() => shiftKey[1].classList.remove('animation'), 500);
    textarea.value = `${item}`;
    doShift();
  } else if (textCode.code === 'AltLeft') {
    event.preventDefault();
    doKeyAlt();
  } else if (textCode.code === 'AltRight') {
    event.preventDefault();
    const altKey = [...document.querySelectorAll('.key')].filter((el) => el.innerHTML === 'Alt');
    altKey[0].classList.remove('animation');
    altKey[1].classList.add('animation');
    setTimeout(() => altKey[1].classList.remove('animation'), 500);
    textarea.value = `${item}`;
  } else if (textCode.key === '&#8594;') {
    const arrowEl = [...document.querySelectorAll('.key')].find((el) => el.innerHTML === '→');
    arrowEl.classList.add('animation');
    setTimeout(() => arrowEl.classList.remove('animation'), 500);
    textarea.value = `${item}→`;
  } else if (textCode.key === '&#8595;') {
    const arrowEl = [...document.querySelectorAll('.key')].find((el) => el.innerHTML === '↓');
    arrowEl.classList.add('animation');
    setTimeout(() => arrowEl.classList.remove('animation'), 500);
    textarea.value = `${item}↓`;
  } else if (textCode.key === '&#8592;') {
    const arrowEl = [...document.querySelectorAll('.key')].find((el) => el.innerHTML === '←');
    arrowEl.classList.add('animation');
    setTimeout(() => arrowEl.classList.remove('animation'), 500);
    textarea.value = `${item}←`;
  } else if (textCode.key === '&#8593;') {
    const arrowEl = [...document.querySelectorAll('.key')].find((el) => el.innerHTML === '↑');
    arrowEl.classList.add('animation');
    setTimeout(() => arrowEl.classList.remove('animation'), 500);
    textarea.value = `${item}↑`;
  } else if (textCode.code === 'ControlLeft') {
    const controlKey = [...document.querySelectorAll('.key')].find((el) => el.innerHTML === 'Ctrl');
    controlKey.classList.add('animation');
    controlKey.classList.add('active-caps');
    textarea.value = `${item}`;
  } else if (textCode.code === 'ControlRight') {
    const controlKey = [...document.querySelectorAll('.key')].filter((el) => el.innerHTML === 'Ctrl');
    controlKey[1].classList.add('animation');
    controlKey[1].classList.add('active-caps');
    textarea.value = `${item}`;
  } else if (textCode.code === 'MetaLeft') {
    const metaKey = [...document.querySelectorAll('.key')].find((el) => el.innerHTML === 'Win');
    metaKey.classList.add('animation');
    setTimeout(() => metaKey.classList.remove('animation'), 500);
    textarea.value = `${item}`;
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

function endKeyCtrl() {
  const keyControl = [...document.querySelectorAll('.key')].filter((item) => item.innerHTML === 'Ctrl');
  keyControl[0].classList.remove('active-caps');
  keyControl[1].classList.remove('active-caps');
}

window.addEventListener('keyup', endKeyCtrl, false);

function showKeyTextarea(event) {
  const { target } = event;
  if (target.classList.contains('key')) {
    showAnimationKey(target.innerHTML);
    const startPos = textarea.selectionStart;
    if (target.innerHTML === 'Backspace') {
      textarea.value = textarea.value.slice(0, -1);
    } else if (target.innerHTML === 'Tab') {
      textarea.value = `${textarea.value.slice(0, startPos)}        ${textarea.value.slice(startPos)}`;
    } else if (target.innerHTML === 'Delete') {
      textarea.value = textarea.value.slice(0, startPos) + textarea.value.slice(startPos + 1);
    } else if (target.innerHTML === 'Enter') {
      textarea.focus();
      textarea.value += '\n';
    } else if (target.innerHTML === 'CapsLock') {
      doCapsLock();
    } else if (target.innerHTML === 'Shift') {
      const findKey = [...document.querySelectorAll('.key')].find((item) => item.innerHTML === 'Shift');
      findKey.classList.remove('animation');
      textarea.value = `${textarea.value}`;
    } else if (target.innerHTML === 'Ctrl') {
      textarea.value = `${textarea.value}`;
    } else if (target.innerHTML === 'Alt') {
      const findKey = [...document.querySelectorAll('.key')].find((item) => item.innerHTML === 'Alt');
      findKey.classList.add('animation');
      textarea.value = `${textarea.value}`;
    } else {
      textarea.value = `${textarea.value}${target.innerHTML}`;
    }
  }
}

keyboard.addEventListener('click', showKeyTextarea);

function endKeyShiftMouse(e) {
  e.target.classList.remove('active-caps');
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

function showAnimationKeyMouseEvent(e) {
  e.target.classList.add('animation');
  setTimeout(() => e.target.classList.remove('animation'), 500);
}

function doShiftMouse(event) {
  showAnimationKeyMouseEvent(event);
  event.target.classList.add('active-caps');
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

const shiftKeyLeft = [...document.querySelectorAll('.key')].find((el) => el.innerHTML === 'Shift');

shiftKeyLeft.addEventListener('mousedown', doShiftMouse);

shiftKeyLeft.addEventListener('mouseup', endKeyShiftMouse, false);

const shiftKeyRight = [...document.querySelectorAll('.key')].filter((el) => el.innerHTML === 'Shift');

shiftKeyRight[1].addEventListener('mousedown', doShiftMouse);

shiftKeyRight[1].addEventListener('mouseup', endKeyShiftMouse, false);

const altKeyLeft = [...document.querySelectorAll('.key')].filter((el) => el.innerHTML === 'Alt');

function dokeyAltMouse(e) {
  showAnimationKeyMouseEvent(e);
}

altKeyLeft[1].addEventListener('click', dokeyAltMouse);

const contolKey = [...document.querySelectorAll('.key')].filter((el) => el.innerHTML === 'Ctrl');

contolKey[1].addEventListener('click', dokeyAltMouse);

function swichLanguage(event) {
  if (event.ctrlKey && event.altKey) {
    const key = [...document.querySelectorAll('.key')].find((item) => item.innerHTML === 'й');
    if (key) {
      keyboard.innerHTML = '';
      getKeys(keys);
    } else {
      keyboard.innerHTML = '';
      getKeys(keysRus);
      letters.splice(0, letters.length, ...lettersRus);
    }
  }
}
window.addEventListener('keydown', swichLanguage);
