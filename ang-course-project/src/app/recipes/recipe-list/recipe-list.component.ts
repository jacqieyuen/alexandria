import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[] = [
  	new Recipe("Souffle Pancakes","Fluffy japanese pancakes","https://www.culinarytribune.com/wp-content/uploads/2017/04/pancake1.jpg"),
  	new Recipe("Spicy Shrimp Pasta","Spicy Shrimp and Tomato Cream Pasta","http://ghk.h-cdn.co/assets/cm/15/11/54fdf2f1362f8-angel-hair-pasta-shrimp-400.jpg"), 
  ]
  constructor() { }

  ngOnInit() {
  }

}
