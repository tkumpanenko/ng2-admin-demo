import { Component } from '@angular/core';
import { DemoPageChartService } from './demo-page.service';

@Component({
	selector: 'demo-page',
	templateUrl: './demo-page.template.html'
})

export class DemoPage {
	data:any;

	constructor(private _chartistJsService:DemoPageChartService) {
	}

	ngOnInit() {
		this.data = this._chartistJsService.getAll();
	}


}