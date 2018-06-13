import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RecipeComponent} from './recipe.component';
import {RecipesComponent} from './recipes/recipes.component';
import {StrToArrayPipe} from './str-to-array.pipe';
import {CustomMaterialModule} from '../custom-material/custom-material.module';
import {RouterModule} from '@angular/router';
import {RecipeDetailComponent} from './recipe-detail/recipe-detail.component';
import { RecipeCreateComponent } from './recipe-create/recipe-create.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    StrToArrayPipe,
    RecipeComponent,
    RecipesComponent,
    RecipeDetailComponent,
    RecipeCreateComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CustomMaterialModule,
    FormsModule
  ]
})
export class RecipeModule { }
