import { Component, OnInit } from '@angular/core';
import {Movie} from "../movie";
import {MovieService} from "../movie.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers:[MovieService]
})
export class CreateComponent implements OnInit {
public newMovie: Movie = {
  _id:'',
  name:'',
  type:'',
    director:'',
    year:'',
    description:'',
  rating:''
}


  constructor(private movieService: MovieService, private router: Router) { }

  ngOnInit() {
  console.log("created");
  }

public createNewMovie(newMovie : Movie): void {
  this.movieService.createMovie(newMovie);
  this.router.navigate(['']);
}
}
