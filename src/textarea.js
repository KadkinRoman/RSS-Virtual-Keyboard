const TextArea = {

  elements: {
    main: null,
    textAreaContainer: null,
  },

  init() {
    // Create textAreaContainer elements
    this.elements.main = document.createElement('div');
    this.elements.textContainer = document.createElement('textarea');

    // Setup main elements
    this.elements.textContainer.classList.add('use-keyboard-input');

    // Add to DOM
    this.elements.main.appendChild(this.elements.textContainer);
    document.body.appendChild(this.elements.main);
  },
};

document.addEventListener('DOMContentLoaded', () => {
  TextArea.init();
});
