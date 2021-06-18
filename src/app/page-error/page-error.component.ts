import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page-error',
  templateUrl: './page-error.component.html',
  styleUrls: ['./page-error.component.css']
})
export class PageErrorComponent implements OnInit {

  constructor(public route: ActivatedRoute, public router: Router) { }

  ngOnInit(): void {
    setTimeout(()=> this.router.navigate(['/']),3000);
  }

}
