import { Component } from '@angular/core';
declare var M:any;

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
  dropdown = false;

  ontoggleNavbar() {
    this.toggleNavbar = !this.toggleNavbar;
  }

  onDropdown() {
    this.dropdown = !this.dropdown;
  }

  ngAfterContentInit() {
      var elems = document.querySelectorAll('.sidenav');
      var instances = M.Sidenav.init(elems, {
        edge: 'left'
      });
  }
}
