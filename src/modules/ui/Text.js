import './Text.scss';
import $ from 'jquery';
import UIBase from '../framework/UIBase';

class Text extends UIBase {
  constructor() {
    super();
  }

  getHTML = () => {
    let strHtml = `
      <section class="text-container">
        <h3>A Sample Form Drop Content</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore explicabo,
          error laboriosam doloribus dignissimos magnam laborum possimus quo quae
          facilis eum quisquam quasi eligendi maxime et deserunt. Nemo, aut earum?
        </p>
      </section> 
    `;

    return strHtml;
  };
}

export default Text;
