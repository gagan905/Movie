import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {MovieService} from "../movie.service";
import {Movie} from "../movie";
import {switchMap} from "rxjs/operators";

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css'],
  providers:[MovieService]
})
export class DetailsPageComponent implements OnInit {

  constructor(private movieService : MovieService, private route: ActivatedRoute, private router: Router) { }


  newMovie: Movie;

  ngOnInit() : void {

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


  public deleteMovie(movieid: string) : void {
    this.movieService.deleteMovie(movieid);
    setTimeout(() => {
        this.router.navigateByUrl('');
    },1500);

  }



  pageContent = {
    header: {
      title:'',
      body:''
    }
  }

}
