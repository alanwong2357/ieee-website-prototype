import { Component, AfterContentInit } from '@angular/core';
// declare var M:any;	//No types for Materialize 1.0.0-alpha.1 yet
import * as M from '../../node_modules/materialize-css/dist/js/materialize.min.js';

@Component({
  selector: 'my-home',
  templateUrl: '../templates/home.component.html',
  styleUrls: ['../styles/home.component.css']
})

export class HomeComponent implements AfterContentInit{
  options = {'indicators' : false;};
  elems = {};

  ngAfterContentInit() {
    var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems, this.options);

    // var slider = new M.Slider(document.querySelector('.slider'));
  }
}
