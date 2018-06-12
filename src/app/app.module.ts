import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {CustomMaterialModule} from './custom-material/custom-material.module';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {RecipeModule} from './recipe/recipe.module';
import {HeaderComponent} from './header/header.component';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

  ],
  imports: [
    HttpClientModule,
    RecipeModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
