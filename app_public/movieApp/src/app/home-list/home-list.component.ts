import { Component, OnInit } from '@angular/core';
import { Movie} from "../movie";
import {MovieService} from "../movie.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css'],
  providers:[MovieService]
})
export class HomeListComponent implements OnInit {
movies : Movie[];
  constructor(private movieService: MovieService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.movieService
            .getMovie()
      .then((movies: Movie[])=>{
        this.movies = movies.map(movie=>{
          return movie;
        })
      })
  }

  public deleteMovie(movieid: string) : void {
    this.movieService.deleteMovie(movieid);
    setTimeout(() => {
      //this.router.navigateByUrl('');
      window.location.reload();
    },1500);
  }

}
