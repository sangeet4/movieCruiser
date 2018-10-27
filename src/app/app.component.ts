import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  entr: boolean = false;

  toggle() {
    this.entr = !this.entr;
  }
}
