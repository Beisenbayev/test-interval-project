import { Component, Input } from '@angular/core'

import { IntervalEventTypes } from 'src/shared/data/intervalEventTypes.data'
import { IIntervalDates, IIntervalEvent } from 'src/shared/types/interval.interface'

@Component({
	selector: 'app-interval',
	templateUrl: './interval.component.html',
	styleUrls: ['./interval.component.scss'],
})
export class IntervalComponent {
	@Input({ required: true, alias: 'events' }) eventsProps: IIntervalEvent[] = []
	@Input({ required: true, alias: 'period' }) periodProps!: IIntervalDates

	constructor() {}

	get getIntervalStart(): number {
		return new Date(this.periodProps.dateStart).getTime()
	}

	get getIntervalEnd(): number {
		return new Date(this.periodProps.dateEnd).getTime()
	}

	getEventStatus(status: IntervalEventTypes): string {
		switch (status) {
			case IntervalEventTypes.CRITICAL:
				return 'CRITICAL'
			case IntervalEventTypes.DANGEROUS:
				return 'DANGEROUS'
			case IntervalEventTypes.NORMAL:
				return 'NORMAL'
		}
	}

	getParsedEventDate(date: string): string {
		return new Intl.DateTimeFormat('ru-Ru', {
			year: 'numeric',
			month: '2-digit',
			day: '2-digit',
			hour: '2-digit',
			minute: '2-digit',
			second: '2-digit',
		}).format(new Date(date))
	}

	getEventStyles(event: IIntervalEvent): Object {
		const intervalStart: number = this.getIntervalStart
		const intervalEnd: number = this.getIntervalEnd

		const eventStart: number = new Date(event.dateStart).getTime()
		const eventEnd: number = new Date(event.dateEnd).getTime()

		const width: number =
			((eventEnd - eventStart) / (intervalEnd - intervalStart)) * 100
		const left: number =
			((eventStart - intervalStart) / (intervalEnd - intervalStart)) * 100

		return {
			width: `${width}%`,
			left: `${left}%`,
			background: event.type,
		}
	}
}
