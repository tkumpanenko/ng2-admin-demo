import { Routes, RouterModule }  from '@angular/router';

import { DemoPage } from './demo-page.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
	{
		path: '',
		component: DemoPage,
		children: [
			{ path: 'demo-page', component: DemoPage }
		]
	}
];

export const routing = RouterModule.forChild(routes);
