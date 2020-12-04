import { Component, OnInit } from '@angular/core';
import {Recipe, RecipesService} from "./recipes.service";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes:Recipe[];
  dummy = {"id": "id","imgPath": "./assets/avatar.svg","name": "test","ingredients": ["A","B","C"],"ntoe": "note"};

  constructor(private rs:RecipesService) { }

  ngOnInit() {
    this.rs.setRecipe("recipes", this.dummy).then(r => console.log(r))
    this.rs.getRecipe("recipes").then(r => console.log(r))
  }

  setDummy() {
    this.rs.setRecipe("recipes", this.dummy).then(r => console.log(r))
    this.rs.getRecipe("recipes").then(r => console.log(r))
  }
}
