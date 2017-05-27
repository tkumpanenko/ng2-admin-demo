import { NgModule }  from '@angular/core';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { DemoPage } from './demo-page.component';
import { routing }  from './demo-page.routing';

import { NgaModule } from '../../theme/nga.module';
import { DemoPageChartService } from './demo-page.service';

@NgModule({
	imports: [
		TabsModule.forRoot(),
		NgaModule,
		routing
	],
	declarations: [ DemoPage ],
	exports: [ DemoPage ],
	providers: [DemoPageChartService]
})

export class DemoPageModule {

}