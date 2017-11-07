import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styles: [`
		.white-text{
			color: white;
		}
  `]
})
export class DisplayDetailsComponent implements OnInit {
	showDetails = false;
	clicks= [];
	toggleDetails() {
		this.showDetails ? this.showDetails=false:this.showDetails=true;
		this.clicks.push("clicked")
	}
	getBgColor(index) {
		return index>3?"blue":"pink";
	}
  constructor() { }

  ngOnInit() {
  }

}
