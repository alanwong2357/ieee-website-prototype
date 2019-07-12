import { Component, OnInit } from '@angular/core';
import * as M from '../../node_modules/materialize-css/dist/js/materialize.min.js';

@Component({
  selector: 'my-about',
  templateUrl: '../templates/about.component.html',
  styleUrls: ['../styles/about.component.css']
})

export class AboutComponent implements OnInit {
  // options = [indicators = true];
  options = {};
  elems = {};


  ngOnInit() {
    // var elems = document.querySelectorAll('.carousel');
    // var instances = M.Carousel.init(elems, this.options);

    // var instances = M.Carousel.init(elems, this.options);

    var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems, this.options);
  }

}
