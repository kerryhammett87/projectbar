import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-alcoholic',
  templateUrl: './alcoholic.component.html',
  styleUrls: ['./alcoholic.component.css']
})
export class AlcoholicComponent implements OnInit {

  alcoholic:any = [];
  errors = false;
  message:string;

  constructor(private api: ApiService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
      this.api.getAlcoholic().subscribe(
      (response:any) => {this.alcoholic = response.drinks},
      /*(error:any) => {
        console.log('Errore dal component', error.message);
        this.errors = true;
        this.message = "Error 404"
        setTimeout(()=> this.router.navigate(['/']),5000)}
    );*/
      )}
}
