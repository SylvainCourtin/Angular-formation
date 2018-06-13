import { Component, OnInit } from '@angular/core';
import {RecipeService} from '../recipe.service';
import {Recipe} from '../recipe.model';
import {ActivatedRoute} from '@angular/router';
import {animate, group, keyframes, query, stagger, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  recipe: Recipe;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.recipeService.getRecipe(this.route.snapshot.paramMap.get('id')).subscribe(recipe => this.recipe = recipe);
  }

}
