import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { AppUiModule } from 'src/shared/modules/ui/ui.module'

import { TimelineRoute } from './store/timeline.routes'

import { TimelineComponent } from './components/timeline.component'

@NgModule({
	imports: [CommonModule, AppUiModule, RouterModule.forChild(TimelineRoute)],
	declarations: [TimelineComponent],
	providers: [],
	exports: [],
})
export class TimelineModule {}
