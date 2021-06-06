import { IDirection } from '../../../customTypes/direction'
import { DirectionsDomain } from './domain'
import { getDirections } from './events'

export const DirectionsStore = DirectionsDomain.createStore<IDirection[]>([]).on(
    getDirections.doneData,
    (_state, payload) => payload,
)
