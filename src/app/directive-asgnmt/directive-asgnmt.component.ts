import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-directive-asgnmt',
  templateUrl: './directive-asgnmt.component.html',
  styles: [`
    .white-text{
      color: white;
    }
  `]
})
export class DirectiveAsgnmtComponent implements OnInit {
  detailsShown = false;
  actions = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  toggleDetails(): void {
    this.detailsShown = !this.detailsShown;
    this.actions.push((this.detailsShown ? 'Shown' : 'Hidden') + ' ' + new Date());
  }

}
