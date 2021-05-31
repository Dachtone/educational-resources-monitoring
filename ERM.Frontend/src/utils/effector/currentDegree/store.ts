import { ISubject } from '../../../customTypes/subject'
import { DegreeDomain } from './domain'
import { getDegree } from './events'

export const DegreeStore = DegreeDomain.createStore<ISubject[]>([]).on(getDegree.doneData, (_state, payload) => payload)
