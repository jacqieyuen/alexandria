import { EventEmitter, Injectable } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model'
import { Recipe } from './recipes.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
	recipeSelected = new EventEmitter<Recipe>();

	private recipes:Recipe[] = [
	    new Recipe(
	    	"Souffle Pancakes",
	    	"Fluffy japanese pancakes",
	    	"https://www.culinarytribune.com/wp-content/uploads/2017/04/pancake1.jpg",
	    	[
	    		new Ingredient('flour',2), 
	    		new Ingredient('eggs',5)
	    	]),
	    new Recipe("Spicy Shrimp Pasta",
	    	"Spicy Shrimp and Tomato Cream Pasta",
	    	"http://ghk.h-cdn.co/assets/cm/15/11/54fdf2f1362f8-angel-hair-pasta-shrimp-400.jpg",
	    	[
	    		new Ingredient('shrimp', 10),
	    		new Ingredient('chilli',3)
	    	])
	];

	constructor(private shoppinglistService:ShoppingListService){
	}

	getRecipe(){
		return this.recipes.slice();
	}

	addToShoppingList(ingredients:Ingredient[]){
		this.shoppinglistService.addIngredients(ingredients);
	}
}