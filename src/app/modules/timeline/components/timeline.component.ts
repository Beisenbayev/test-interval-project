import { Component, OnInit, OnDestroy } from '@angular/core'

import { IIntervalData } from 'src/shared/types/interval.interface'
import { IntervalEventTypes } from 'src/shared/data/intervalEventTypes.data'

@Component({
	selector: 'app-timeline',
	templateUrl: './timeline.component.html',
	styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent implements OnInit, OnDestroy {
	data: IIntervalData = {
		// main task
		events: [
			{
				dateStart: '2022-01-01T01:00:00',
				dateEnd: '2022-01-01T02:00:00',
				type: IntervalEventTypes.CRITICAL,
			},
			{
				dateStart: '2022-01-01T08:21:00',
				dateEnd: '2022-01-01T14:44:11',
				type: IntervalEventTypes.DANGEROUS,
			},
			{
				dateStart: '2022-01-01T22:11:00',
				dateEnd: '2022-01-01T23:50:00',
				type: IntervalEventTypes.NORMAL,
			},
		],
		intervalDates: {
			dateStart: '2022-01-01T00:00:00',
			dateEnd: '2022-01-02T00:00:00',
		},
	}

	data2: IIntervalData = {
		// test task
		events: [
			{
				dateStart: '2022-01-01T00:11:00',
				dateEnd: '2022-01-01T02:00:00',
				type: IntervalEventTypes.CRITICAL,
			},
			{
				dateStart: '2022-01-01T03:59:22',
				dateEnd: '2022-01-01T04:23:20',
				type: IntervalEventTypes.DANGEROUS,
			},
			{
				dateStart: '2022-01-01T06:00:00',
				dateEnd: '2022-01-01T07:00:00',
				type: IntervalEventTypes.DANGEROUS,
			},
			{
				dateStart: '2022-01-01T08:21:00',
				dateEnd: '2022-01-01T12:44:11',
				type: IntervalEventTypes.DANGEROUS,
			},
			{
				dateStart: '2022-01-01T13:11:00',
				dateEnd: '2022-01-01T19:50:00',
				type: IntervalEventTypes.NORMAL,
			},
		],
		intervalDates: {
			dateStart: '2022-01-01T00:00:00',
			dateEnd: '2022-01-02T00:00:00',
		},
	}

	constructor() {}

	ngOnInit() {}

	ngOnDestroy() {}
}
