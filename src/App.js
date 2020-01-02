import 'bootstrap-scss/bootstrap.scss';
import './App.scss';
import $ from 'jquery';
import Button from './modules/ui/Button';
import Text from './modules/ui/Text';
import Form from './modules/ui/Form';

class App {
  constructor() {
    this.init();
    this.app = $('#app');
    this.addElement();
  }

  init() {
    console.log('App Initialized!');
  }

  addElement = () => {
    let txt = new Text();
    txt.makeElement(this.app);

    let btn = new Button();
    btn.makeElement(this.app);

    let frm = new Form();
    frm.makeElement(this.app);
  };
}

const app = new App();
