import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { throwError } from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apipath = 'https://www.thecocktaildb.com/api/json/v1/1/';

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { }

  getAlcoholic(){
    return this.http.get(this.apipath + 'filter.php?a=Alcoholic' ).pipe(
      catchError(this.handleError));
  }
  getDrink(id:any){
    return this.http.get(this.apipath + 'lookup.php?i=' + id).pipe(
      catchError(this.handleError));
  }
  getCocktail(){
    return this.http.get(this.apipath + 'filter.php?c=Cocktail' ).pipe(
      catchError(this.handleError));
  }
  getNonAlcoholic(){
    return this.http.get(this.apipath + 'filter.php?a=Non_Alcoholic' ).pipe(
      catchError(this.handleError));
  }
  getOrdinaryDrink(){
    return this.http.get(this.apipath + 'filter.php?c=Ordinary_Drink' ).pipe(
      catchError(this.handleError));
  }

  private handleError(error:any){
    if(error.status === 0){
      console.log('An error occurred:', error.error);
    } else {
      console.log(
        `BackEnd returned code ${error.status},` +
        `message was: ${error.message}`);
      }
      return throwError(error);
  }

}
