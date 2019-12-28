import './Accordion.scss';
import $ from 'jquery';

class Accordion {
  constructor() {
    this.init();
  }

  init = () => {
    console.log('Accordion Init...');
  };

  makeElement = (el) => {
    const accrodion = $(this.getHTML());
    console.log(accrodion);
    el.append(accrodion);
  };

  getHTML = () => {
    const str = `
    <dl>
      <dt>Question 1</dt>
      <dd>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam impedit
        voluptate possimus dolorum quos beatae facere eveniet ea, in maxime
        obcaecati! Delectus ipsam corporis dolor incidunt? Pariatur laboriosam
        temporibus fugit.
      </dd>
      <dt>Question 2</dt>
      <dd>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam impedit
        voluptate possimus dolorum quos beatae facere eveniet ea, in maxime
        obcaecati! Delectus ipsam corporis dolor incidunt? Pariatur laboriosam
        temporibus fugit.
      </dd>
      <dt>Question 3</dt>
      <dd>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam impedit
        voluptate possimus dolorum quos beatae facere eveniet ea, in maxime
        obcaecati! Delectus ipsam corporis dolor incidunt? Pariatur laboriosam
        temporibus fugit.
      </dd>
      <dt>Question 4</dt>
      <dd>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam impedit
        voluptate possimus dolorum quos beatae facere eveniet ea, in maxime
        obcaecati! Delectus ipsam corporis dolor incidunt? Pariatur laboriosam
        temporibus fugit.
      </dd>
    </dl>
    `;

    return str;
  };
}

export default Accordion;
