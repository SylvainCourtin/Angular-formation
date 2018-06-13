import { Component, OnInit } from '@angular/core';
import {RecipeService} from '../recipe.service';
import {Recipe} from '../recipe.model';
import {Ingredient} from '../ingredient.model';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-recipe-create',
  templateUrl: './recipe-create.component.html',
  styleUrls: ['./recipe-create.component.scss']
})
export class RecipeCreateComponent implements OnInit {

  public recipe: Recipe = new Recipe();
  public recipeForm: FormGroup;
  public isError = false;


  constructor(private recipeService: RecipeService, private route: Router, private fb: FormBuilder ) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.recipeForm = this.fb.group({
      name: ['', Validators.required],
      description: 'Non renseigné',
      instructions: 'Non renseigné',
      picture: 'http://fabienloaec.com/wp-content/themes/trend/assets/img/empty/424x500.png',
      ingredients: this.fb.group({
        id: 1
      })
    });
  }

  toggleSend() {
    if (this.recipeForm.status === 'VALID') {
      this.isError = false;
      const recipe = new Recipe();
      const ingredients = new Array<Ingredient>();
      const ingredientDefault =  new Ingredient();

      recipe.name = this.recipeForm.get('name').value;
      recipe.picture = this.recipeForm.get('picture').value;
      recipe.description = this.recipeForm.get('description').value;
      recipe.instructions = this.recipeForm.get('instructions').value;



      ingredientDefault.ingredientId = 1;
      ingredients.push(ingredientDefault);

      recipe.ingredients = ingredients;

      this.recipeService.addRecipe(recipe);
      this.route.navigate(['recipes']).catch();
    } else {
      this.isError = true;
    }
  }

}
