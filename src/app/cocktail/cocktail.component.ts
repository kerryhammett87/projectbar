import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.css']
})
export class CocktailComponent implements OnInit {

  cocktail:any = []

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getCocktail().subscribe(
      (response:any) => this.cocktail = response.drinks);
  }

}
