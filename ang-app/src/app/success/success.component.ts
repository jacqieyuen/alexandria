import { Component, OnInit } from '@angular/core';

@Component ({
	selector: '.app-success',
	template: `
		<p>
			success message
		</p>
	`,
	styles: [`
		p {
			color: green;
		}
	`]
})

export class SuccessComponent implements OnInit {
	constructor() {}

	ngOnInit(){
		
	}

}