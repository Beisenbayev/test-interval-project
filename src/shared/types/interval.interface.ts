import { IntervalEventTypes } from '../data/intervalEventTypes.data'

export interface IIntervalData {
	events: IIntervalEvent[]
	intervalDates: IIntervalDates
}

export interface IIntervalDates {
	dateStart: string
	dateEnd: string
}

export interface IIntervalEvent {
	dateStart: string
	dateEnd: string
	type: IntervalEventTypes
}
