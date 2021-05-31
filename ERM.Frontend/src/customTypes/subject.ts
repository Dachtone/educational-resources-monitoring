export interface ISubject {
    name: string
    exams: number[]
    offsets: number[]
    periods: { period: string; value: number | string }[]
}
