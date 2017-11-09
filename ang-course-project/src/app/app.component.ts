import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	navRecipe: boolean = true;
	onNavigate(data){
		this.navRecipe = data;
	}
}
