import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';
import {animate, group, keyframes, query, stagger, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
  animations: [
    trigger('affichage', [
        transition('* => *', [

          query(':enter', style({ opacity: 0 }), {optional: true}),

          query(':enter', stagger('300ms', [
            animate('1s ease-in', keyframes([
              style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
              style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
              style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
            ]))]), {optional: true})
        ])
      ])
  ]
})
export class RecipesComponent implements OnInit {

  recipes: Recipe[];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.getRecipes().subscribe(recipes => this.recipes = recipes);
  }

  makeDelete(recipe: Recipe) {
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }

}
