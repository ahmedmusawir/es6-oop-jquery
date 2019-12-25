import 'bootstrap-scss/bootstrap.scss';
import './App.scss';
import $ from 'jquery';
import DayNightModule from './modules/DayNightModule';
import Button from './ui/Button';

class App {
  constructor() {
    this.init();
    this.app = $('#app');

    this.addUIElements();

    let sm = new DayNightModule(this.app);
  }

  init() {
    console.log('App Initialized!');
  }

  addUIElements = () => {
    const btn1 = new Button('Day Time', this.app);
    btn1.makeElement('btn btn-warning btn-lg', 'day');

    const btn2 = new Button('Night Time', this.app);
    btn2.makeElement('btn btn-dark btn-lg', 'night');
  };
}

const app = new App();
