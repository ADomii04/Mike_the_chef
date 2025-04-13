import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Recipe, RECIPES } from '../../data/recipes';
import { NgFor } from '@angular/common';
import { HighlightDirective } from '../../../directs/highlight.directive';
import { BoldDirective } from '../../../directs/bold.directive';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CategoryFilterPipe } from '../../pipes/text-transform.pipe';

@Component({
  selector: 'app-home',
  imports: [NgFor, HighlightDirective, BoldDirective, MatToolbarModule, 
      MatButtonModule, MatCardModule, CategoryFilterPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  constructor(private router:Router){}

  goToRecipes(){
    this.router.navigate(['/recipes'])
  }
  goToVideos(){
    this.router.navigate(['/videos'])
  }
  goToLogin(){
    this.router.navigate(['/login'])
  }
  goToSignup(){
    this.router.navigate(['/signup'])
  }

  goToSingleRecipe(id:string){
    this.router.navigate(['/recipes',id])
  }

  

  recipes: Recipe[] = [];

  recipesType = RECIPES;

  selectedType: string = '';
  
  ngOnInit():void{
    this.recipes = RECIPES;
  }


  setFilter(type: string) {
    this.selectedType = type;
  }
}
