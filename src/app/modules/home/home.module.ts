import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { HomeRoute } from './store/home.routes'

import { HomeComponent } from './components/home.component'

@NgModule({
	imports: [CommonModule, RouterModule.forChild(HomeRoute)],
	declarations: [HomeComponent],
	providers: [],
	exports: [],
})
export class HomeModule {}
