import 'bootstrap-scss/bootstrap.scss';
import './App.scss';
import $ from 'jquery';
import SimpleModule from './modules/SampleModule';

class Main {
  constructor() {
    this.init();
    this.app = $('#app');
    // this.events();
    // console.log(this.app);

    let sm = new SimpleModule(this.app);
  }

  init() {
    console.log('Main Initialized!');
  }

  events = () => {
    // this.app.on('click', this.clickHandler);
  };

  clickHandler = () => {
    // console.log('clicked up');
  };
}

const main = new Main();
