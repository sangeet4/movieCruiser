import { Component, OnInit , Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})

export class CardsComponent implements OnInit {

  @Input() private movieInfo: any;

  constructor(private route: Router) { }

  added : boolean = false;

  ngOnInit() {}
  
}
