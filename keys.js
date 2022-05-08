const keys = [
  {
    key: '`',
    keyCode: 192,
    code: 'Backquote',
    secondkey: '~',
  },
  {
    key: '1',
    keyCode: 49,
    code: 'Digit1',
    secondkey: '!',
  },
  {
    key: '2',
    keyCode: 50,
    code: 'Digit2',
    secondkey: '@',
  },
  {
    key: '3',
    keyCode: 51,
    code: 'Digit3',
    secondkey: '#',
  },
  {
    key: '4',
    keyCode: 52,
    code: 'Digit4',
    secondkey: '$',
  },
  {
    key: '5',
    keyCode: 53,
    code: 'Digit5',
    secondkey: '%',
  },
  {
    key: '6',
    keyCode: 54,
    code: 'Digit6',
    secondkey: '^',
  },
  {
    key: '7',
    keyCode: 55,
    code: 'Digit7',
    secondkey: '&',
  },
  {
    key: '8',
    keyCode: 56,
    code: 'Digit8',
    secondkey: '*',
  },
  {
    key: '9',
    keyCode: 57,
    code: 'Digit9',
    secondkey: '(',
  },
  {
    key: '0',
    keyCode: 48,
    code: 'Digit0',
    secondkey: ')',
  },
  {
    key: '-',
    keyCode: 109,
    code: 'Minus',
    secondkey: '_',
  },
  {
    key: '=',
    keyCode: 61,
    code: 'Equal',
    secondkey: '+',
  },
  {
    key: 'Backspace',
    keyCode: 8,
    code: 'Backspace',
  },
  {
    key: 'Tab',
    keyCode: 9,
    code: 'Tab',
  },
  {
    key: 'q',
    keyCode: 81,
    code: 'KeyQ',
  },
  {
    key: 'w',
    keyCode: 87,
    code: 'KeyW',
  },
  {
    key: 'e',
    keyCode: 69,
    code: 'KeyE',
  },
  {
    key: 'r',
    keyCode: 82,
    code: 'KeyR',
  },
  {
    key: 't',
    keyCode: 84,
    code: 'KeyT',
  },
  {
    key: 'y',
    keyCode: 89,
    code: 'KeyY',
  },
  {
    key: 'u',
    keyCode: 85,
    code: 'KeyU',
  },
  {
    key: 'i',
    keyCode: 73,
    code: 'KeyI',
  },
  {
    key: 'o',
    keyCode: 79,
    code: 'KeyO',
  },
  {
    key: 'p',
    keyCode: 80,
    code: 'KeyP',
  },
  {
    key: '[',
    keyCode: 160,
    code: 'BracketLeft',
    secondkey: '{',
  },
  {
    key: ']',
    keyCode: 221,
    code: 'BracketRight',
    secondkey: '}',
  },
  {
    key: '\\',
    keyCode: 220,
    code: 'Backslash',
    secondkey: '|',
  },
  {
    key: 'Delete',
    keyCode: 46,
    code: 'Delete',
  },
  {
    key: 'CapsLock',
    keyCode: 20,
    code: 'CapsLock',
  },
  {
    key: 'a',
    keyCode: 65,
    code: 'KeyA',
  },
  {
    key: 's',
    keyCode: 83,
    code: 'KeyS',
  },
  {
    key: 'd',
    keyCode: 68,
    code: 'KeyD',
  },
  {
    key: 'f',
    keyCode: 70,
    code: 'KeyF',
  },
  {
    key: 'g',
    keyCode: 71,
    code: 'KeyG',
  },
  {
    key: 'h',
    keyCode: 72,
    code: 'KeyH',
  },
  {
    key: 'j',
    keyCode: 74,
    code: 'KeyJ',
  },
  {
    key: 'k',
    keyCode: 75,
    code: 'KeyK',
  },
  {
    key: 'l',
    keyCode: 76,
    code: 'KeyL',
  },
  {
    key: ';',
    keyCode: 59,
    code: 'Semicolon',
    secondkey: ':',
  },
  {
    key: "'",
    keyCode: 222,
    code: 'Quote',
    secondkey: '"',
  },
  {
    key: 'Enter',
    keyCode: 13,
    code: 'Enter',
  },
  {
    key: 'Shift',
    keyCode: 16,
    code: 'ShiftLeft',
  },
  {
    key: 'z',
    keyCode: 90,
    code: 'KeyZ',
  },
  {
    key: 'x',
    keyCode: 88,
    code: 'KeyX',
  },
  {
    key: 'c',
    keyCode: 67,
    code: 'KeyC',
  },
  {
    key: 'v',
    keyCode: 86,
    code: 'KeyV',
  },
  {
    key: 'b',
    keyCode: 66,
    code: 'KeyB',
  },
  {
    key: 'n',
    keyCode: 78,
    code: 'KeyN',
  },
  {
    key: 'm',
    keyCode: 77,
    code: 'KeyM',
  },
  {
    key: ',',
    keyCode: 108,
    code: 'Comma',
    secondkey: '<',
  },
  {
    key: '.',
    keyCode: 190,
    code: 'Period',
    secondkey: '>',
  },
  {
    key: '/',
    keyCode: 191,
    code: 'Slash',
    secondkey: '?',
  },
  {
    key: '&#8593;',
    keyCode: 38,
    code: 'ArrowUp',
  },
  {
    key: 'Shift',
    keyCode: 16,
    code: 'ShiftRight',
  },
  {
    key: 'Ctrl',
    keyCode: 17,
    code: 'ControlLeft',
  },
  {
    key: 'Win',
    keyCode: 91,
    code: 'MetaLeft',
  },
  {
    key: 'Alt',
    keyCode: 18,
    code: 'AltLeft',
  },
  {
    key: ' ',
    keyCode: 32,
    code: 'Space',
  },
  {
    key: 'Alt',
    keyCode: 18,
    code: 'AltRight',
  },
  {
    key: '&#8592;',
    keyCode: 37,
    code: 'ArrowLeft',
  },
  {
    key: '&#8595;',
    keyCode: 40,
    code: 'ArrowDown',
  },
  {
    key: '&#8594;',
    keyCode: 39,
    code: 'ArrowRight',
  },
  {
    key: 'Ctrl',
    keyCode: 17,
    code: 'ControlRight',
  },
];

const letters = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];
const numbersPoints = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '[', ']', '\\', ';', '\'', ',', '.', '/'];
const secondNumbersPoints = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '{', '}', '|', ':', '"', '<', '>', '?'];

export {
  keys, letters, numbersPoints, secondNumbersPoints,
};
