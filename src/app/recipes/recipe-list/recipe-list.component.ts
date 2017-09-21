import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [new Recipe('Test', "This is a test", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQP3rE0Y0b3mBBXDF46doJtTeVRP-1LNy0ouxTvo1SjAvZYi7qyg")
  ];

  constructor() { }

  ngOnInit() {
  }

}
