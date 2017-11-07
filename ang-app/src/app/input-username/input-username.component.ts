import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-input-username',
	templateUrl: './input-username.component.html',
	styleUrls: ['./input-username.component.css']
})
export class InputUsernameComponent implements OnInit {
	username = "";
	usernameEmpty = true;
	onUsernameInput(e){
		console.log("e")
		if(this.username.length > 0) {
			this.usernameEmpty = false;
		} else {
			this.usernameEmpty = true;
		}
	}
	runEmptyUsername(){
		console.log("run")
		this.username = "";
		this.usernameEmpty = true;
	}
	constructor() {
	}

	ngOnInit(){
	}

}
