import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './modules/settings/appRouting.module'
import { AppUiModule } from 'src/shared/modules/ui/ui.module'
import { HomeModule } from './modules/home/home.module'
import { TimelineModule } from './modules/timeline/timeline.module'

import { AppComponent } from './component/app.component'

@NgModule({
	imports: [BrowserModule, AppRoutingModule, AppUiModule, HomeModule, TimelineModule],
	declarations: [AppComponent],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
