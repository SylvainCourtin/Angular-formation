import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RecipeComponent} from './recipe.component';
import {RecipesComponent} from './recipes/recipes.component';
import {StrToArrayPipe} from './str-to-array.pipe';
import {CustomMaterialModule} from '../custom-material/custom-material.module';
import {RouterModule} from '@angular/router';
import {RecipeDetailComponent} from './recipe-detail/recipe-detail.component';

@NgModule({
  declarations: [
    StrToArrayPipe,
    RecipeComponent,
    RecipesComponent,
    RecipeDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CustomMaterialModule
  ]
})
export class RecipeModule { }
