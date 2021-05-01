import {Component} from '@angular/core';

@Component({
  selector: 'app-root', // selectors have to be unique
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  // use this style instead of styleUrls
  styles: [`
    h3 {
      color: dodgerblue;
    }
  `]
})
export class AppComponent {
  title = 'UdemyAngular';
}
