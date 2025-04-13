import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe, RECIPES } from '../../data/recipes';
import { NgIf, NgFor } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-recipe-detail',
  imports: [NgIf, NgFor, MatCardModule],
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.scss'
})
export class RecipeDetailComponent {

  recipe: Recipe | undefined;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.recipe = RECIPES.find(r => r.id === id);
  }
}
