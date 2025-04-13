import { Pipe, PipeTransform } from '@angular/core';
import { Recipe } from '../data/recipes';

@Pipe({
  name: 'categoryFilter'
})
export class CategoryFilterPipe implements PipeTransform {
  transform(recipes: Recipe[], category: string): Recipe[] {
    if (!category) return recipes.slice(0,6); 
    return recipes.filter(recipe => recipe.type === category);
  }
}