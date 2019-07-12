import { Component, OnInit } from '@angular/core';
import * as M from '../../node_modules/materialize-css/dist/js/materialize.min.js';

@Component({
  selector: 'my-events',
  templateUrl: '../templates/events.component.html',
  styleUrls: ['../styles/events.component.css']
})

export class EventsComponent implements OnInit {
  options = {};
  elems = {};

  ngOnInit() {
    var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems, this.options);
  }

  scrollToElement($element): void {
    console.log($element);
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
}
