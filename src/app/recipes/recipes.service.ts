import { Injectable } from '@angular/core';

export class Recipe{
  id: string;
  imgPath= "./assets/avatar.svg";
  name: string;
  ingredients: string[];
  notes: string;
}

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes:Recipe[];

}
