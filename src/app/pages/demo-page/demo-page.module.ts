import { NgModule }  from '@angular/core';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { DemoPage } from './demo-page.component';
import { routing }  from './demo-page.routing';


@NgModule({
	imports: [
		TabsModule.forRoot(),
		routing
	],
	declarations: [DemoPage],
	exports: [DemoPage]
})

export class DemoPageModule {

}