import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h1>Grandma's Secret Recipe Box</h1>
  <div class="container">
  <h1>Recipe's</h1>
  <ul>
  <li *ngFor="let currentRecipe of recipeList">{{currentRecipe.title}}</li>
  </ul>
  </div>
  `
})

export class AppComponent {
  recipe1: string = 'Extra Chocolate Chip Cookies';
  recipe2: Recipe = new Recipe('chocolate milk', 'chocolate and milk', 'mix the chocolate into the milk!');
  recipeList: Recipe[] = [new Recipe('Peach Cobbler', 'peach and cobbler', 'mix the peach into the cobbler'), new Recipe('Mohingya', 'noodles, eggs, chili, "spices" and fish paste', 'cook noodles and mix ingredients into bowl'), new Recipe('Peanut Butter Cups', 'peanut butter and chocolate', 'make chocolate cups and insert peanut butter')]
}

export class Recipe {
  constructor(public title: string, public ingredients: string, public instructions: string) { }
}
