export class Display {
  #canvas;
  #context;

  constructor() {
    this.#canvas = document.querySelector('canvas');
    this.#context = this.#canvas.getContext('2d');
  }
}