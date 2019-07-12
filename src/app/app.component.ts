import { Component } from '@angular/core';
import * as M from '../../node_modules/materialize-css/dist/js/materialize.min.js';

@Component({
  selector: 'my-app',
  templateUrl: '../templates/app.component.html',
  styleUrls: ['../styles/app.component.css'],
  providers: [
    // Add providers here later, when drawing from other data sources (ex. announcements)
  ]
})
export class AppComponent {
  title = 'IEEE at UCI';  // Create banner image later

  toggleNavbar = false;

  ontoggleNavbar() {
    this.toggleNavbar = !this.toggleNavbar;
  }

  ngAfterContentInit() {
    // document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.sidenav');
      var instances = M.Sidenav.init(elems, {
        edge: 'left'
      }
  // );
  }
}
