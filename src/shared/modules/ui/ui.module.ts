import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { HeaderComponent } from './components/header/header.component'
import { IntervalComponent } from './components/interval/interval.component'

@NgModule({
	imports: [CommonModule, RouterModule],
	declarations: [HeaderComponent, IntervalComponent],
	providers: [],
	exports: [HeaderComponent, IntervalComponent],
})
export class AppUiModule {}
