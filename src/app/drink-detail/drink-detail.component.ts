import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-drink-detail',
  templateUrl: './drink-detail.component.html',
  styleUrls: ['./drink-detail.component.css']
})
export class DrinkDetailComponent implements OnInit {

drink:any = null;  // è un oggetto, non array!
ingredients:any[];  //di tipo array che può contenere di tutto di più

  constructor(private api: ApiService, private route:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('idDrink'));
    this.api.getDrink(productIdFromRoute).subscribe(
      (response:any) => {
        if(!response || !response.drinks){
             //c'è questa response? c'è response.drink? se no:
          setTimeout(()=> this.router.navigate(['/error']),0);
        } else {
          this.drink = response.drinks[0];
          console.log(response);
          console.log(response.drinks);
          
          const {strIngredient1, strIngredient2, strIngredient3,strIngredient4,strIngredient5,strIngredient6,strIngredient7,strIngredient8,strIngredient9,strIngredient10,strIngredient11,strIngredient12,strIngredient13,strIngredient14,strIngredient15} = this.drink;
          console.log(strIngredient1);
      
          const newarray = [strIngredient1, strIngredient2, strIngredient3,strIngredient4,strIngredient5,strIngredient6,strIngredient7,strIngredient8,strIngredient9,strIngredient10,strIngredient11,strIngredient12,strIngredient13,strIngredient14,strIngredient15];
          console.log(newarray);

          this.ingredients = newarray.filter(value => value !== null);
          console.log(this.ingredients);
        }
    });
  /*var VanillaTilt;
  VanillaTilt.init(document.querySelector(".card"), { max: 25, speed: 400, glare:true, "max-glare": 1});
  VanillaTilt.init(document.querySelectorAll(".card"));*/
}
}
