import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-servers', // <app-servers></app-servers>
  // change selector to look for attribute, not the element
  // selector: '[app-servers]', // <div app-servers></div>
  // selector: '.app-servers', // look for class <div class="app-servers"></div>
  // selector: '#app-servers', // !by id is not supported
  // ----
  // templateUrl: './servers.component.html',
  // don' use the template file, but an inline
  // template: '<app-server></app-server><app-server></app-server>',
  // to have multiline template add backticks
  template: `
    <app-server></app-server>
    <app-server></app-server>
  `,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
