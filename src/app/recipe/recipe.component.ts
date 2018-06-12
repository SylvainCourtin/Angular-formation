import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from './recipe.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  @Input() recipe: Recipe;
  expanded = false;
  @Input() details = false;
  constructor() { }

  ngOnInit() {
  }

  toggleExpanded() {
    this.expanded = !this.expanded;
  }
}
