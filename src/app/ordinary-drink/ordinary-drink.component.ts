import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-ordinary-drink',
  templateUrl: './ordinary-drink.component.html',
  styleUrls: ['./ordinary-drink.component.css']
})
export class OrdinaryDrinkComponent implements OnInit {

  ordinaryDrink:any = [];
  
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getOrdinaryDrink().subscribe(
      (response:any) => this.ordinaryDrink = response.drinks);
  }

}
