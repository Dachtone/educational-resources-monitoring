import { ISubject } from './subject'

export interface IDirection {
    code: string
    name: string
    degree: string
    subjects?: ISubject[] | null | undefined
}
