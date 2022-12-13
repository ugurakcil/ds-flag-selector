// import { subtract } from "./libraries/app";
import './styles/index.scss'

interface Options {
  targetInput?: string;
  /*
  answer?: number,
  aMethod?: (a:string) => string;
  */
}

export default class dsFlagSelector {
  options: Options;

  constructor(options: Options) {
    this.options = {
      targetInput: 'bar',
      /*
      answer: 42,
      aMethod: function(){}
      */
    };

    Object.assign(this.options, options);

    //document.addEventListener('DOMContentLoaded', this.doSomething);
    console.info('değis bi')

    this.doSomething()
  }

  doSomething() {
    console.warn('Heheheheh')
  }
  
}


/*

  constructor() {
    const form = document.querySelector("form");
    form?.addEventListener("submit", this.submitHandler);
  }

  submitHandler(e: Event) {
    e.preventDefault();
    const num1 = document.querySelector("input[name='a']") as HTMLInputElement;
    const num2 = document.querySelector("input[name='b']") as HTMLInputElement;
    const result = subtract(Number(num1.value), Number(num2.value));
    const resultElement = document.querySelector("#display");
    if (resultElement) {
      resultElement.textContent = result.toString();
    }
  }
*/