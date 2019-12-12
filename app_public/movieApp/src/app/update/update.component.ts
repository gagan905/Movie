import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {MovieService} from "../movie.service";
import {Movie} from "../movie";
import {switchMap} from "rxjs/operators";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private movieService : MovieService, private route: ActivatedRoute, private router: Router) { }


  newMovie: Movie;
  ngOnInit() {
    this.route.params.pipe(
      switchMap((params: Params)=>{
        return this.movieService.getSingleMovie(params['movieid'])
      }))
      .subscribe((newMovie: Movie)=>{
        this.newMovie = newMovie;
        this.pageContent.header.title = newMovie.name;
        this.pageContent.header.body = "details for selected movie";
      });
  }

  public updateMovie(newMovie : Movie): void {
    this.movieService.updateMovie(newMovie);
      setTimeout(() => {
          this.router.navigate(['movie/'+newMovie._id]);
      },1500);

  }

  pageContent = {
    header: {
      title:'',
      body:''
    }
  }
}
