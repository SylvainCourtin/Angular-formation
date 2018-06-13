import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from './recipe.model';
import {RecipeService} from './recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  @Input() recipe: Recipe;
  expanded = false;
  @Input() details = false;

  @Output() eventDelete: EventEmitter<any> = new EventEmitter();

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  toggleExpanded() {
    this.expanded = !this.expanded;
  }

  doDelete(recipe: Recipe) {
    this.recipeService.deleteRecipe(recipe);
    this.eventDelete.emit(recipe);
  }

}
