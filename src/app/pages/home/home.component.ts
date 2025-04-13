import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Recipe, RECIPES } from '../../data/recipes';
import { NgFor } from '@angular/common';
import { HighlightDirective } from '../../../directs/highlight.directive';
import { BoldDirective } from '../../../directs/bold.directive';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-home',
  imports: [NgFor, HighlightDirective, BoldDirective, MatToolbarModule, 
      MatButtonModule, MatCardModule],
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

  selectedType: string | null = null;
  
  ngOnInit():void{
    this.recipes = RECIPES;
  }

  get filteredRecipes() {
    if (!this.selectedType) return this.recipesType;
    return this.recipesType.filter(recipe => recipe.type === this.selectedType);
  }

  setFilter(type: string) {
    this.selectedType = type;
  }
}
