import { Component, Injectable, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Recipe, RECIPES } from '../../data/recipes';
import { NgFor, NgIf } from '@angular/common';
import { HighlightDirective } from '../../../directs/highlight.directive';
import { BoldDirective } from '../../../directs/bold.directive';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CategoryFilterPipe } from '../../pipes/text-transform.pipe';
import { AuthService } from '../../services/authservices.service';

@Component({
  selector: 'app-home',
  imports: [NgFor, HighlightDirective, BoldDirective, MatToolbarModule, 
      MatButtonModule, MatCardModule, CategoryFilterPipe, NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

@Injectable({
  providedIn: 'root',
})
export class HomeComponent implements OnInit{
  constructor(private router:Router, public authService: AuthService){}

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
  goToProfile(){
    this.router.navigate(['/profile'])
  }

  isLoggedIn(): boolean {
  return this.authService.isLoggedIn();
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
