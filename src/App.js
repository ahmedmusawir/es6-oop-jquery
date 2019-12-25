import 'bootstrap-scss/bootstrap.scss';
import './App.scss';
import $ from 'jquery';
import SimpleModule from './modules/SampleModule';
import Button from './ui/Button';

class App {
  constructor() {
    this.init();
    this.app = $('#app');

    this.addUIElements();

    let sm = new SimpleModule(this.app);
  }

  init() {
    console.log('App Initialized!');
  }

  addUIElements = () => {
    const btn1 = new Button('Button One', this.app);
    btn1.makeElement('btn btn-dark btn-lg');

    const btn2 = new Button('Button One', this.app);
    btn2.makeElement('btn btn-warning btn-lg');
  };
}

const app = new App();
