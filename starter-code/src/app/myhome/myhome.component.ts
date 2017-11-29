import { Component, OnInit } from '@angular/core';
import { CinemaService } from '../cinema.service';

@Component({
  selector: 'app-myhome',
  templateUrl: './myhome.component.html',
  styleUrls: ['./myhome.component.css'],
  providers: [ CinemaService ]
})
export class MyhomeComponent implements OnInit {
  pelis = [];

  constructor(public cinemaService: CinemaService) { }

  ngOnInit() {
    this.pelis = this.cinemaService.getMovies();
  }
}
