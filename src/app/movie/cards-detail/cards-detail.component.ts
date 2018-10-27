import { Component, OnInit } from '@angular/core';
import { IMovie } from '../movie';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cards-detail',
  templateUrl: './cards-detail.component.html',
  styleUrls: ['./cards-detail.component.css']
})
export class CardsDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  sub:any;

  detail : IMovie;
  added : boolean = true;

  ngOnInit() {
    console.log('i m here')
    this.sub = this.route.params
      .subscribe(
        params => {
          this.detail = params['movie'];
        }
      )
  }

}
