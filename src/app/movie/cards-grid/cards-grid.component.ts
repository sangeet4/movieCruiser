import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards-grid',
  templateUrl: './cards-grid.component.html',
  styleUrls: ['./cards-grid.component.css']
})
export class CardsGridComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  iter = [1, 2, 3, 4];

}
