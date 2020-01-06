import { Component, OnInit } from '@angular/core';
declare var M:any;	//No types for Materialize 1.0.0-alpha.1 yet

@Component({
  selector: 'my-micromouse',
  templateUrl: '../templates/micromouse.component.html',
  styleUrls: ['../styles/micromouse.component.css']
})

export class MicromouseComponent implements OnInit {
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
