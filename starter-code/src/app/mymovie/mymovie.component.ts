import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CinemaService } from '../cinema.service';

@Component({
  selector: 'app-mymovie',
  templateUrl: './mymovie.component.html',
  styleUrls: ['./mymovie.component.css'],
  providers: [ CinemaService ]
})

export class MymovieComponent implements OnInit {
  movieId: Number;
  movie = {};
  constructor(private route: ActivatedRoute, public cinema: CinemaService) { }

  ngOnInit() {
    this.route.params
      .subscribe((params) => this.movieId = Number(params['id']) - 1);
      this.movie = this.cinema.getMovie(this.movieId);
  }
}
