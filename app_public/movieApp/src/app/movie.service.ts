import { Injectable } from '@angular/core';
import {Movie} from './movie';
import {Http,Response} from "@angular/http";

import {promise} from "selenium-webdriver";

@Injectable({
  providedIn: 'root'
})
export class MovieService {
     private movieUrl = 'http://localhost:3000/api/movies';
  constructor(private http: Http) { }

  getMovie(): Promise<void | Movie[]>{
    return this.http.get(this.movieUrl)
      .toPromise()
      .then(response => response.json() as Movie[])
      .catch(this.handleError);
  }

  getSingleMovie(movieid: string):Promise<void | Movie>{
    return this.http.get(this.movieUrl + '/' + movieid)
      .toPromise()
      .then(response=>response.json() as Movie)
      .catch(this.handleError)
  }
  createMovie(newMovie :Movie): Promise<void | Movie>{
    return this.http.post(this.movieUrl,newMovie)
      .toPromise()
      .then(response=>response.json() as Movie)
      .catch(this.handleError)
  }


  updateMovie(newMovie: Movie): Promise<void | Movie>{
    var putUrl = this.movieUrl + '/' + newMovie._id;

    return this.http.put(putUrl, newMovie)
      .toPromise()
      .then(response => response.json() as Movie)
      .catch(this.handleError);
  }

deleteMovie(movieid: string) : Promise<void | string>{
    return this.http.delete(this.movieUrl + '/' + movieid)
      .toPromise()
      .then(response => response.json() as string)
      .catch(this.handleError);

}

  private handleError(error: any){
    console.log("error");
  }
}
