import './DayNightModule.scss';
import $ from 'jquery';

class DayNightModule {
  constructor(el) {
    this.init();
    this.el = el;

    this.btnDay = $('button.btn-warning');
    this.btnNight = $('button.btn-dark');

    this.btn = $('button');

    this.events(this.el);
  }

  init = () => {
    console.log('DayNightModule Init');
  };

  events = (el) => {
    // this.btnDay.on('click', this.clickHandlerDay);
    // this.btnNight.on('click', this.clickHandlerNight);
    const app = el;
    this.btn.on('click', function() {
      const $this = $(this);
      const cls = $this.data('file');
      app.removeClass();
      app.addClass(cls);
      $this
        .siblings('button')
        .removeAttr('disabled')
        .end()
        .attr('disabled', 'disabled');
    });
  };

  clickHandlerDay = () => {
    // console.log(this.btnDay.data('file'));
    const cls = this.btnDay.data('file');
    this.el.removeClass();
    this.el.addClass(cls);
    this.btnDay
      .siblings('button')
      .removeAttr('disabled')
      .end()
      .attr('disabled', 'disabled');
  };
  clickHandlerNight = () => {
    // console.log(this.btnNight.data('file'));
    const cls = this.btnNight.data('file');
    this.el.removeClass();
    this.el.addClass(cls);
    this.btnNight
      .siblings('button')
      .removeAttr('disabled')
      .end()
      .attr('disabled', 'disabled');
  };
}

export default DayNightModule;
