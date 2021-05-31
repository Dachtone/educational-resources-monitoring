import { ISubject } from '../../../customTypes/subject'
import { DegreeDomain } from './domain'

export const getDegree = DegreeDomain.createEffect<string, ISubject[]>()
