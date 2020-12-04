import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipes.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
    recipe: Recipe;


  constructor() { }

  ngOnInit() {
  }



  like() {

  }
}
