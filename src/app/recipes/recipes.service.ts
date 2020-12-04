import { Injectable } from '@angular/core';
import { Plugins } from "@capacitor/core";

const { Storage } = Plugins;

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

  async setRecipe(key: string, value: { imgPath: string; name: string; ingredients: string[]; id: string; ntoe: string }): Promise<void> {
    await Storage.set({
      key: key,
      value: JSON.stringify(value)
    });
  }

  async getRecipe(key: string): Promise<any> {
    const item = await Storage.get({key: key});
    return JSON.parse(item.value);
  }

  async delRecipe(key: string): Promise<void> {
    await Storage.remove({
      key: key
    });

  }

}
