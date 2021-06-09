export interface ISubject {
    name: string
    exams: number[]
    benefits: number[]
    periods: { periodName: string; value: number | string }[]
}
