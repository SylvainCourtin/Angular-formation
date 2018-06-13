import { Component, OnInit } from '@angular/core';
import {RecipeService} from '../recipe.service';
import {Recipe} from '../recipe.model';
import {Ingredient} from '../ingredient.model';

@Component({
  selector: 'app-recipe-create',
  templateUrl: './recipe-create.component.html',
  styleUrls: ['./recipe-create.component.scss']
})
export class RecipeCreateComponent implements OnInit {

  public recipe: Recipe = new Recipe();

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  toggleSend() {
    const ingredient: Ingredient = new Ingredient();
    ingredient.ingredientId = 1;
    this.recipe.ingredients.push(ingredient);
    this.recipe.instructions = 'rien';
    this.recipeService.addRecipe(this.recipe);
  }

}
