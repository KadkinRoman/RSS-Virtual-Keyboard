const Keyboard = {
  elements: {
    main: null,
    keysContainer: null,
    keys: [],
  },

  eventHandlers: {
    oninput: null,
    onclose: null,
  },

  properties: {
    value: '',
    capsLock: false,
  },

  init() {
    // Create main elements
    this.elements.main = document.createElement('div');
    this.elements.keysContainer = document.createElement('div');

    // Setup main elements
    this.elements.main.classList.add('keyboard');
    this.elements.keysContainer.classList.add('keyboard__keys');
    this.elements.keysContainer.appendChild(this._createKeys());

    this.elements.keys = this.elements.keysContainer.querySelectorAll('.keyboard__key');

    // Add to DOM
    this.elements.main.appendChild(this.elements.keysContainer);
    document.body.appendChild(this.elements.main);

    // Automatically use keyboard for elements with .use-keyboard-input
    document.querySelectorAll('.use-keyboard-input').forEach((element) => {
      element.addEventListener('focus', () => {
        this.open(element.value, (currentValue) => {
          element.value = currentValue;
        });
      });
    });
  },

  _createKeys() {
    const fragment = document.createDocumentFragment();
    const keyLayout = {
      Backquote: '`',
      Digit1: '1',
      Digit2: '2',
      Digit3: '3',
      Digit4: '4',
      Digit5: '5',
      Digit6: '6',
      Digit7: '7',
      Digit8: '8',
      Digit9: '9',
      Digit0: '0',
      Minus: '-',
      Equal: '=',
      Backspace: 'Backspace',
      Tab: 'Tab',
      KeyQ: 'q',
      KeyW: 'w',
      KeyE: 'e',
      KeyR: 'r',
      KeyT: 't',
      KeyY: 'y',
      KeyU: 'u',
      KeyI: 'i',
      KeyO: 'o',
      KeyP: 'p',
      BracketLeft: '[',
      BracketRight: ']',
      Delete: 'Delete',
      CapsLock: 'CapsLock',
      KeyA: 'a',
      KeyS: 's',
      KeyD: 'd',
      KeyF: 'f',
      KeyG: 'g',
      KeyH: 'h',
      KeyJ: 'j',
      KeyK: 'k',
      KeyL: 'l',
      Semicolon: ';',
      Quote: '\'',
      Backslash: '\\',
      Enter: 'Enter',
      ShiftLeft: 'Shift',
      IntlBackslash: '\\',
      KeyZ: 'z',
      KeyX: 'x',
      KeyC: 'c',
      KeyV: 'v',
      KeyB: 'b',
      KeyN: 'n',
      KeyM: 'm',
      Comma: ',',
      Period: '.',
      Slash: '/',
      ArrowUp: 'Up',
      ShiftRight: 'Shift',
      ControlLeft: 'Ctrl',
      MetaLeft: 'Win',
      AltLeft: 'Alt',
      Space: '',
      AltRight: 'Alt',
      ControlRight: 'Ctrl',
      ArrowLeft: 'Left',
      ArrowDown: 'Down',
      ArrowRight: 'Right',
    };

    // Creates HTML for an icon
    // const createIconHTML = (icon_name) => { `<i class='material-icons'>${icon_name}</i>`; };

    Object.keys(keyLayout).forEach((key) => {
      const keyElement = document.createElement('button');
      const insertLineBreak = ['Backspace', 'Delete', 'Enter', 'ShiftRight'].indexOf(key) !== -1;

      // Add attributes/classes
      keyElement.setAttribute('type', 'button');
      keyElement.classList.add('keyboard__key');

      switch (key) {
        case 'shiftR':
          keyElement.classList.add('keyboard__key');
          keyElement.innerHTML = 'shift';

          keyElement.addEventListener('click', () => {
            this.properties.value = this.properties.value.substring(
              0,
              this.properties.value.length - 1,
            );
            this.triggerEvent('oninput');
          });
          break;

        case 'ArrowUp':
          keyElement.classList.add('keyboard__key');
          keyElement.innerHTML = 'ArrowUp';

          //   keyElement.addEventListener('click', () => {
          //     this.properties.value = this.properties.value.substring(
          //       0,
          //       this.properties.value.length - 1,
          //     );
          //     this.triggerEvent('oninput');
          //   });
          break;

        case 'ShiftLeft':
          keyElement.classList.add('keyboard__key', 'ShiftLeft');
          keyElement.innerHTML = 'shift';

          keyElement.addEventListener('click', () => {
            this.properties.value = this.properties.value.substring(
              0,
              this.properties.value.length - 1,
            );
            this.triggerEvent('oninput');
          });
          break;

        case 'Backspace':
          keyElement.textContent = keyLayout[key];
          keyElement.classList.add(key);

          keyElement.addEventListener('click', () => {
            this.properties.value = this.properties.value.substring(
              0,
              this.properties.value.length - 1,
            );
            this.triggerEvent('oninput');
          });

          break;

        case 'ctrl':
          keyElement.classList.add('keyboard__key--wide');
          keyElement.innerHTML = 'ctrl';

          keyElement.addEventListener('click', () => {
            this.properties.value = this.properties.value.substring(
              0,
              this.properties.value.length - 1,
            );
            this.triggerEvent('oninput');
          });

          break;

        case '`':
          keyElement.classList.add('keyboard__key--wide');
          keyElement.innerHTML = '`';

          keyElement.addEventListener('click', () => {
            this.properties.value = this.properties.value.substring(
              0,
              this.properties.value.length - 1,
            );
            this.triggerEvent('oninput');
          });

          break;

        case 'shift':
          keyElement.classList.add('keyboard__key--wide');
          keyElement.innerHTML = 'shift';

          keyElement.addEventListener('click', () => {
            this.properties.value = this.properties.value.substring(
              0,
              this.properties.value.length - 1,
            );
            this.triggerEvent('oninput');
          });

          break;

        case 'win':
          keyElement.classList.add('keyboard__key--wide');
          keyElement.innerHTML = 'win';

          keyElement.addEventListener('click', () => {
            this.properties.value = this.properties.value.substring(
              0,
              this.properties.value.length - 1,
            );
            this.triggerEvent('oninput');
          });

          break;

        case 'alt':
          keyElement.classList.add('keyboard__key--wide');
          keyElement.innerHTML = 'alt';

          keyElement.addEventListener('click', () => {
            this.properties.value = this.properties.value.substring(
              0,
              this.properties.value.length - 1,
            );
            this.triggerEvent('oninput');
          });

          break;

        case 'CapsLock':
          keyElement.classList.add(
            'keyboard__key--wide',
            'keyboard__key--activatable',
          );
          keyElement.innerHTML = 'CapsLock';

          keyElement.addEventListener('click', () => {
            this.toggleCapsLock();
            keyElement.classList.toggle(
              'keyboard__key--active',
              this.properties.capsLock,
            );
          });

          break;

        case 'tab':
          keyElement.classList.add('keyboard__key--wide');
          keyElement.innerHTML = 'tab';

          keyElement.addEventListener('click', () => {
            this.toggleCapsLock();
            keyElement.classList.toggle(
              'keyboard__key--active',
              this.properties.capsLock,
            );
          });

          break;

        case 'Enter':
          keyElement.textContent = keyLayout[key];
          keyElement.classList.add(key);

          keyElement.addEventListener('click', () => {
            this.properties.value += '\n';
            this.triggerEvent('oninput');
          });

          break;

        case 'Space':
          keyElement.classList.add('keyboard__key--extra-wide');

          keyElement.addEventListener('click', () => {
            this.properties.value += ' ';
            this.triggerEvent('oninput');
          });

          break;

        default:
          keyElement.textContent = keyLayout[key];
          keyElement.classList.add(key);

          keyElement.addEventListener('click', () => {
            this.properties.value += this.properties.capsLock
              ? keyLayout[key].toUpperCase()
              : keyLayout[key].toLowerCase();
            this.triggerEvent('oninput');
          });

          break;
      }

      fragment.appendChild(keyElement);

      if (insertLineBreak) {
        fragment.appendChild(document.createElement('br'));
      }
    });

    return fragment;
  },

  triggerEvent(handlerName) {
    if (typeof this.eventHandlers[handlerName] === 'function') {
      this.eventHandlers[handlerName](this.properties.value);
    }
  },

  toggleCapsLock() {
    this.properties.capsLock = !this.properties.capsLock;

    /* eslint-disable-next-line */
    for (const key of this.elements.keys) {
      if (key.childElementCount === 0) {
        key.textContent = this.properties.capsLock
          ? key.textContent.toUpperCase()
          : key.textContent.toLowerCase();
      }
    }
  },

  open(initialValue, oninput, onclose) {
    this.properties.value = initialValue || '';
    this.eventHandlers.oninput = oninput;
    this.eventHandlers.onclose = onclose;
  },

  close() {
    this.properties.value = '';
    this.eventHandlers.oninput = oninput;
    this.eventHandlers.onclose = onclose;
  },
};

const exclusionButtons = [27, 112, 113, 114, 115, 116, 117, 118,
  119, 120, 121, 122, 123, 8, 32];

document.addEventListener('DOMContentLoaded', () => {
  Keyboard.init();
});

document.addEventListener('keydown', (event) => {
  if (!exclusionButtons.includes(event.keyCode)) {
    event.preventDefault();
  }

  if (event.repeat === true) {
    switch (event.code) {
      case 'Backspace':
        Keyboard.properties.value = document.querySelector('.use-keyboard-input').value;
        break;

      default:
        Keyboard.properties.value = document.querySelector('.use-keyboard-input').value;
        break;
    }
  }
  switch (event.code) {
    case 'Backspace':
      Keyboard.properties.value = document.querySelector('.use-keyboard-input').value;
      Keyboard.triggerEvent('oninput');
      break;

    case 'Enter':
      console.log(Keyboard.properties.value);
      Keyboard.properties.value += '\n';
      Keyboard.triggerEvent('oninput');
      break;

    case 'Space':
      Keyboard.properties.value += ' ';
      Keyboard.triggerEvent('oninput');
      break;

    default:
      Keyboard.properties.value += document.querySelector(`.${event.code}`).textContent;
      Keyboard.triggerEvent('oninput');
      break;
  }

  document.querySelector(`.${event.code}`).classList.add('keyboard__key--active');
  console.log(event.keyCode);
//   console.log(event);
});

document.addEventListener('keyup', (event) => {
  document.querySelector(`.${event.code}`).classList.remove('keyboard__key--active');
//   Keyboard.properties.value = document.querySelector('.use-keyboard-input').value;
});
