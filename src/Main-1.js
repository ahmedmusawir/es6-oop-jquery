import 'bootstrap-scss/bootstrap.scss';
import './App.scss';
import $ from 'jquery';
import App1 from './App1';
import App2 from './App2';
import App3 from './App3';
import App4 from './App4';
// import Button from './modules/ui/Button';

class Main {
  constructor() {
    this.init();
    this.app1 = $('#app1');
    const app1 = new App1(this.app1);
    this.app2 = $('#app2');
    const app2 = new App2(this.app2);
    this.app3 = $('#app3');
    const app3 = new App3(this.app3);
    this.app4 = $('#app4');
    const app4 = new App4(this.app4);

    this.addElements();
  }

  init() {
    console.log('Main Initialized!');
  }

  addElements = () => {
    // const ac = new Accordion();
    // ac.makeElement(this.app1);
    // const btn2 = new Button('btn-danger');
    // btn2.makeElement(this.app2);
    // const btn3 = new Button('btn-dark');
    // btn3.makeElement(this.app3);
    // const btn4 = new Button('btn-secondary');
    // btn4.makeElement(this.app4);
  };
}

const main = new Main();
