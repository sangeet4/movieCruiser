import { Component, OnInit, Input } from '@angular/core';
import { ShareService } from '../share.service';

@Component({
  selector: 'app-cards-grid',
  templateUrl: './cards-grid.component.html',
  styleUrls: ['./cards-grid.component.css'],
  providers: []
})

export class CardsGridComponent implements OnInit {
  
  @Input() public foundMovies = [];

  constructor(private service: ShareService) { }

  ngOnInit() { 
    this.service.getValue()
    .subscribe(
      data => {
        this.foundMovies = data
      }
    )
  }

}
