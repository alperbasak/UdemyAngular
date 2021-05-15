import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-servers', // <app-servers></app-servers>
  // change selector to look for attribute, not the element
  // selector: '[app-servers]', // <div app-servers></div>
  // selector: '.app-servers', // look for class <div class="app-servers"></div>
  // selector: '#app-servers', // !by id is not supported
  // ----
  templateUrl: './servers.component.html',
  // to not use the template file, but an inline
  // template: '<app-server></app-server><app-server></app-server>',
  // to have multiline template add backticks
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>
  // `,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'Testserver';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer(): void {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event): void {
    console.log(event);
    this.serverName = (event.target as HTMLInputElement).value;
  }
}
