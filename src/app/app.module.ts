import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlcoholicComponent } from './alcoholic/alcoholic.component';
import { NonAlcoholicComponent } from './non-alcoholic/non-alcoholic.component';
import { OrdinaryDrinkComponent } from './ordinary-drink/ordinary-drink.component';
import { CocktailComponent } from './cocktail/cocktail.component';
import { HttpClientModule } from '@angular/common/http';
import { HomepageComponent } from './homepage/homepage.component';
import { DrinkDetailComponent } from './drink-detail/drink-detail.component';
import { PageErrorComponent } from './page-error/page-error.component';

@NgModule({
  declarations: [
    AppComponent,
    AlcoholicComponent,
    NonAlcoholicComponent,
    OrdinaryDrinkComponent,
    CocktailComponent,
    HomepageComponent,
    DrinkDetailComponent,
    PageErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
