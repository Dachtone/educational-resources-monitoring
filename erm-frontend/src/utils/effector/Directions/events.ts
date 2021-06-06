import { IDirection } from '../../../customTypes/direction'
import { DirectionsDomain } from './domain'

export const getDirections = DirectionsDomain.createEffect<void, IDirection[]>()
