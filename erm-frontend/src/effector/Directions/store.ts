import { IDirection } from '../../customTypes/direction'
import { DirectionsDomain } from './domain'
import { getDirections } from './events'

const initData: IDirection[] = [
    // b
    {
        code: '09.03.02',
        name: 'Информационные системы и технолгии',
        degree: 'б',
        subjects: [
            {
                name: 'Английский язык',
                exams: [1, 2, 3],
                benefits: [5, 6, 7],
                periods: [
                    { periodName: '1 семестр', value: 123 },
                    { periodName: '2 семестр', value: 123 },
                    { periodName: '3 семестр', value: 312 },
                    { periodName: '4 семестр', value: 333 },
                ],
            },
            {
                name: 'Информатика',
                exams: [1, 2, 3],
                benefits: [5, 6, 7],
                periods: [
                    { periodName: '1 семестр', value: 123 },
                    { periodName: '2 семестр', value: 123 },
                    { periodName: '3 семестр', value: 312 },
                    { periodName: '4 семестр', value: 333 },
                ],
            },
            {
                name: 'Экология',
                exams: [1, 2, 3],
                benefits: [5, 6, 7],
                periods: [
                    { periodName: '1 семестр', value: 123 },
                    { periodName: '2 семестр', value: 123 },
                    { periodName: '3 семестр', value: 312 },
                    { periodName: '4 семестр', value: 333 },
                ],
            },
            {
                name: 'Русский язык',
                exams: [1, 2, 3],
                benefits: [5, 6, 7],
                periods: [
                    { periodName: '1 семестр', value: 123 },
                    { periodName: '2 семестр', value: 123 },
                    { periodName: '3 семестр', value: 312 },
                    { periodName: '4 семестр', value: 333 },
                ],
            },
        ],
    },
    {
        code: '09.03.03',
        name: 'Информационные системы и технолгии',
        degree: 'б',
        subjects: [
            {
                name: 'Английский язык',
                exams: [1, 2, 3],
                benefits: [5, 6, 7],
                periods: [
                    { periodName: '1 семестр', value: 123 },
                    { periodName: '2 семестр', value: 123 },
                    { periodName: '3 семестр', value: 312 },
                    { periodName: '4 семестр', value: 333 },
                ],
            },
            {
                name: 'Информатика',
                exams: [1, 2, 3],
                benefits: [5, 6, 7],
                periods: [
                    { periodName: '1 семестр', value: 123 },
                    { periodName: '2 семестр', value: 123 },
                    { periodName: '3 семестр', value: 312 },
                    { periodName: '4 семестр', value: 333 },
                ],
            },
            {
                name: 'Экология',
                exams: [1, 2, 3],
                benefits: [5, 6, 7],
                periods: [
                    { periodName: '1 семестр', value: 123 },
                    { periodName: '2 семестр', value: 123 },
                    { periodName: '3 семестр', value: 312 },
                    { periodName: '4 семестр', value: 333 },
                ],
            },
            {
                name: 'Русский язык',
                exams: [1, 2, 3],
                benefits: [5, 6, 7],
                periods: [
                    { periodName: '1 семестр', value: 123 },
                    { periodName: '2 семестр', value: 123 },
                    { periodName: '3 семестр', value: 312 },
                    { periodName: '4 семестр', value: 333 },
                ],
            },
        ],
    },
    {
        code: '09.03.04',
        name: 'Информационные системы и технолгии',
        degree: 'б',
        subjects: [
            {
                name: 'Английский язык',
                exams: [1, 2, 3],
                benefits: [5, 6, 7],
                periods: [
                    { periodName: '1 семестр', value: 123 },
                    { periodName: '2 семестр', value: 123 },
                    { periodName: '3 семестр', value: 312 },
                    { periodName: '4 семестр', value: 333 },
                ],
            },
            {
                name: 'Информатика',
                exams: [1, 2, 3],
                benefits: [5, 6, 7],
                periods: [
                    { periodName: '1 семестр', value: 123 },
                    { periodName: '2 семестр', value: 123 },
                    { periodName: '3 семестр', value: 312 },
                    { periodName: '4 семестр', value: 333 },
                ],
            },
            {
                name: 'Экология',
                exams: [1, 2, 3],
                benefits: [5, 6, 7],
                periods: [
                    { periodName: '1 семестр', value: 123 },
                    { periodName: '2 семестр', value: 123 },
                    { periodName: '3 семестр', value: 312 },
                    { periodName: '4 семестр', value: 333 },
                ],
            },
            {
                name: 'Русский язык',
                exams: [1, 2, 3],
                benefits: [5, 6, 7],
                periods: [
                    { periodName: '1 семестр', value: 123 },
                    { periodName: '2 семестр', value: 123 },
                    { periodName: '3 семестр', value: 312 },
                    { periodName: '4 семестр', value: 333 },
                ],
            },
        ],
    },
    {
        code: '09.03.05',
        name: 'Информационные системы и технолгии',
        degree: 'б',
        subjects: [
            {
                name: 'Английский язык',
                exams: [1, 2, 3],
                benefits: [5, 6, 7],
                periods: [
                    { periodName: '1 семестр', value: 123 },
                    { periodName: '2 семестр', value: 123 },
                    { periodName: '3 семестр', value: 312 },
                    { periodName: '4 семестр', value: 333 },
                ],
            },
            {
                name: 'Информатика',
                exams: [1, 2, 3],
                benefits: [5, 6, 7],
                periods: [
                    { periodName: '1 семестр', value: 123 },
                    { periodName: '2 семестр', value: 123 },
                    { periodName: '3 семестр', value: 312 },
                    { periodName: '4 семестр', value: 333 },
                ],
            },
            {
                name: 'Экология',
                exams: [1, 2, 3],
                benefits: [5, 6, 7],
                periods: [
                    { periodName: '1 семестр', value: 123 },
                    { periodName: '2 семестр', value: 123 },
                    { periodName: '3 семестр', value: 312 },
                    { periodName: '4 семестр', value: 333 },
                ],
            },
            {
                name: 'Русский язык',
                exams: [1, 2, 3],
                benefits: [5, 6, 7],
                periods: [
                    { periodName: '1 семестр', value: 123 },
                    { periodName: '2 семестр', value: 123 },
                    { periodName: '3 семестр', value: 312 },
                    { periodName: '4 семестр', value: 333 },
                ],
            },
        ],
    },
    {
        code: '09.03.06',
        name: 'Информационные системы и технолгии',
        degree: 'б',
        subjects: [
            {
                name: 'Английский язык',
                exams: [1, 2, 3],
                benefits: [5, 6, 7],
                periods: [
                    { periodName: '1 семестр', value: 123 },
                    { periodName: '2 семестр', value: 123 },
                    { periodName: '3 семестр', value: 312 },
                    { periodName: '4 семестр', value: 333 },
                ],
            },
            {
                name: 'Информатика',
                exams: [1, 2, 3],
                benefits: [5, 6, 7],
                periods: [
                    { periodName: '1 семестр', value: 123 },
                    { periodName: '2 семестр', value: 123 },
                    { periodName: '3 семестр', value: 312 },
                    { periodName: '4 семестр', value: 333 },
                ],
            },
            {
                name: 'Экология',
                exams: [1, 2, 3],
                benefits: [5, 6, 7],
                periods: [
                    { periodName: '1 семестр', value: 123 },
                    { periodName: '2 семестр', value: 123 },
                    { periodName: '3 семестр', value: 312 },
                    { periodName: '4 семестр', value: 333 },
                ],
            },
            {
                name: 'Русский язык',
                exams: [1, 2, 3],
                benefits: [5, 6, 7],
                periods: [
                    { periodName: '1 семестр', value: 123 },
                    { periodName: '2 семестр', value: 123 },
                    { periodName: '3 семестр', value: 312 },
                    { periodName: '4 семестр', value: 333 },
                ],
            },
        ],
    },

    // s
    {
        code: '09.03.07',
        name: 'Информационные системы и технолгии',
        degree: 'с',
        subjects: [
            {
                name: 'Английский язык',
                exams: [1, 2, 3],
                benefits: [5, 6, 7],
                periods: [
                    { periodName: '1 семестр', value: 123 },
                    { periodName: '2 семестр', value: 123 },
                    { periodName: '3 семестр', value: 312 },
                    { periodName: '4 семестр', value: 333 },
                ],
            },
            {
                name: 'Информатика',
                exams: [1, 2, 3],
                benefits: [5, 6, 7],
                periods: [
                    { periodName: '1 семестр', value: 123 },
                    { periodName: '2 семестр', value: 123 },
                    { periodName: '3 семестр', value: 312 },
                    { periodName: '4 семестр', value: 333 },
                ],
            },
            {
                name: 'Экология',
                exams: [1, 2, 3],
                benefits: [5, 6, 7],
                periods: [
                    { periodName: '1 семестр', value: 123 },
                    { periodName: '2 семестр', value: 123 },
                    { periodName: '3 семестр', value: 312 },
                    { periodName: '4 семестр', value: 333 },
                ],
            },
            {
                name: 'Русский язык',
                exams: [1, 2, 3],
                benefits: [5, 6, 7],
                periods: [
                    { periodName: '1 семестр', value: 123 },
                    { periodName: '2 семестр', value: 123 },
                    { periodName: '3 семестр', value: 312 },
                    { periodName: '4 семестр', value: 333 },
                ],
            },
        ],
    },
    {
        code: '09.03.08',
        name: 'Информационные системы и технолгии',
        degree: 'с',
        subjects: [
            {
                name: 'Английский язык',
                exams: [1, 2, 3],
                benefits: [5, 6, 7],
                periods: [
                    { periodName: '1 семестр', value: 123 },
                    { periodName: '2 семестр', value: 123 },
                    { periodName: '3 семестр', value: 312 },
                    { periodName: '4 семестр', value: 333 },
                ],
            },
            {
                name: 'Информатика',
                exams: [1, 2, 3],
                benefits: [5, 6, 7],
                periods: [
                    { periodName: '1 семестр', value: 123 },
                    { periodName: '2 семестр', value: 123 },
                    { periodName: '3 семестр', value: 312 },
                    { periodName: '4 семестр', value: 333 },
                ],
            },
            {
                name: 'Экология',
                exams: [1, 2, 3],
                benefits: [5, 6, 7],
                periods: [
                    { periodName: '1 семестр', value: 123 },
                    { periodName: '2 семестр', value: 123 },
                    { periodName: '3 семестр', value: 312 },
                    { periodName: '4 семестр', value: 333 },
                ],
            },
            {
                name: 'Русский язык',
                exams: [1, 2, 3],
                benefits: [5, 6, 7],
                periods: [
                    { periodName: '1 семестр', value: 123 },
                    { periodName: '2 семестр', value: 123 },
                    { periodName: '3 семестр', value: 312 },
                    { periodName: '4 семестр', value: 333 },
                ],
            },
        ],
    },
    {
        code: '09.03.09',
        name: 'Информационные системы и технолгии',
        degree: 'с',
        subjects: [
            {
                name: 'Английский язык',
                exams: [1, 2, 3],
                benefits: [5, 6, 7],
                periods: [
                    { periodName: '1 семестр', value: 123 },
                    { periodName: '2 семестр', value: 123 },
                    { periodName: '3 семестр', value: 312 },
                    { periodName: '4 семестр', value: 333 },
                ],
            },
            {
                name: 'Информатика',
                exams: [1, 2, 3],
                benefits: [5, 6, 7],
                periods: [
                    { periodName: '1 семестр', value: 123 },
                    { periodName: '2 семестр', value: 123 },
                    { periodName: '3 семестр', value: 312 },
                    { periodName: '4 семестр', value: 333 },
                ],
            },
            {
                name: 'Экология',
                exams: [1, 2, 3],
                benefits: [5, 6, 7],
                periods: [
                    { periodName: '1 семестр', value: 123 },
                    { periodName: '2 семестр', value: 123 },
                    { periodName: '3 семестр', value: 312 },
                    { periodName: '4 семестр', value: 333 },
                ],
            },
            {
                name: 'Русский язык',
                exams: [1, 2, 3],
                benefits: [5, 6, 7],
                periods: [
                    { periodName: '1 семестр', value: 123 },
                    { periodName: '2 семестр', value: 123 },
                    { periodName: '3 семестр', value: 312 },
                    { periodName: '4 семестр', value: 333 },
                ],
            },
        ],
    },
    {
        code: '09.03.11',
        name: 'Информационные системы и технолгии',
        degree: 'с',
        subjects: [
            {
                name: 'Английский язык',
                exams: [1, 2, 3],
                benefits: [5, 6, 7],
                periods: [
                    { periodName: '1 семестр', value: 123 },
                    { periodName: '2 семестр', value: 123 },
                    { periodName: '3 семестр', value: 312 },
                    { periodName: '4 семестр', value: 333 },
                ],
            },
            {
                name: 'Информатика',
                exams: [1, 2, 3],
                benefits: [5, 6, 7],
                periods: [
                    { periodName: '1 семестр', value: 123 },
                    { periodName: '2 семестр', value: 123 },
                    { periodName: '3 семестр', value: 312 },
                    { periodName: '4 семестр', value: 333 },
                ],
            },
            {
                name: 'Экология',
                exams: [1, 2, 3],
                benefits: [5, 6, 7],
                periods: [
                    { periodName: '1 семестр', value: 123 },
                    { periodName: '2 семестр', value: 123 },
                    { periodName: '3 семестр', value: 312 },
                    { periodName: '4 семестр', value: 333 },
                ],
            },
            {
                name: 'Русский язык',
                exams: [1, 2, 3],
                benefits: [5, 6, 7],
                periods: [
                    { periodName: '1 семестр', value: 123 },
                    { periodName: '2 семестр', value: 123 },
                    { periodName: '3 семестр', value: 312 },
                    { periodName: '4 семестр', value: 333 },
                ],
            },
        ],
    },
    {
        code: '09.03.12',
        name: 'Информационные системы и технолгии',
        degree: 'с',
        subjects: [
            {
                name: 'Английский язык',
                exams: [1, 2, 3],
                benefits: [5, 6, 7],
                periods: [
                    { periodName: '1 семестр', value: 123 },
                    { periodName: '2 семестр', value: 123 },
                    { periodName: '3 семестр', value: 312 },
                    { periodName: '4 семестр', value: 333 },
                ],
            },
            {
                name: 'Информатика',
                exams: [1, 2, 3],
                benefits: [5, 6, 7],
                periods: [
                    { periodName: '1 семестр', value: 123 },
                    { periodName: '2 семестр', value: 123 },
                    { periodName: '3 семестр', value: 312 },
                    { periodName: '4 семестр', value: 333 },
                ],
            },
            {
                name: 'Экология',
                exams: [1, 2, 3],
                benefits: [5, 6, 7],
                periods: [
                    { periodName: '1 семестр', value: 123 },
                    { periodName: '2 семестр', value: 123 },
                    { periodName: '3 семестр', value: 312 },
                    { periodName: '4 семестр', value: 333 },
                ],
            },
            {
                name: 'Русский язык',
                exams: [1, 2, 3],
                benefits: [5, 6, 7],
                periods: [
                    { periodName: '1 семестр', value: 123 },
                    { periodName: '2 семестр', value: 123 },
                    { periodName: '3 семестр', value: 312 },
                    { periodName: '4 семестр', value: 333 },
                ],
            },
        ],
    },

    // м
    {
        code: '09.03.13',
        name: 'Информационные системы и технолгии',
        degree: 'м',
        subjects: [
            {
                name: 'Английский язык',
                exams: [1, 2, 3],
                benefits: [5, 6, 7],
                periods: [
                    { periodName: '1 семестр', value: 123 },
                    { periodName: '2 семестр', value: 123 },
                    { periodName: '3 семестр', value: 312 },
                    { periodName: '4 семестр', value: 333 },
                ],
            },
            {
                name: 'Информатика',
                exams: [1, 2, 3],
                benefits: [5, 6, 7],
                periods: [
                    { periodName: '1 семестр', value: 123 },
                    { periodName: '2 семестр', value: 123 },
                    { periodName: '3 семестр', value: 312 },
                    { periodName: '4 семестр', value: 333 },
                ],
            },
            {
                name: 'Экология',
                exams: [1, 2, 3],
                benefits: [5, 6, 7],
                periods: [
                    { periodName: '1 семестр', value: 123 },
                    { periodName: '2 семестр', value: 123 },
                    { periodName: '3 семестр', value: 312 },
                    { periodName: '4 семестр', value: 333 },
                ],
            },
            {
                name: 'Русский язык',
                exams: [1, 2, 3],
                benefits: [5, 6, 7],
                periods: [
                    { periodName: '1 семестр', value: 123 },
                    { periodName: '2 семестр', value: 123 },
                    { periodName: '3 семестр', value: 312 },
                    { periodName: '4 семестр', value: 333 },
                ],
            },
        ],
    },
    {
        code: '09.03.14',
        name: 'Информационные системы и технолгии',
        degree: 'м',
        subjects: [
            {
                name: 'Английский язык',
                exams: [1, 2, 3],
                benefits: [5, 6, 7],
                periods: [
                    { periodName: '1 семестр', value: 123 },
                    { periodName: '2 семестр', value: 123 },
                    { periodName: '3 семестр', value: 312 },
                    { periodName: '4 семестр', value: 333 },
                ],
            },
            {
                name: 'Информатика',
                exams: [1, 2, 3],
                benefits: [5, 6, 7],
                periods: [
                    { periodName: '1 семестр', value: 123 },
                    { periodName: '2 семестр', value: 123 },
                    { periodName: '3 семестр', value: 312 },
                    { periodName: '4 семестр', value: 333 },
                ],
            },
            {
                name: 'Экология',
                exams: [1, 2, 3],
                benefits: [5, 6, 7],
                periods: [
                    { periodName: '1 семестр', value: 123 },
                    { periodName: '2 семестр', value: 123 },
                    { periodName: '3 семестр', value: 312 },
                    { periodName: '4 семестр', value: 333 },
                ],
            },
            {
                name: 'Русский язык',
                exams: [1, 2, 3],
                benefits: [5, 6, 7],
                periods: [
                    { periodName: '1 семестр', value: 123 },
                    { periodName: '2 семестр', value: 123 },
                    { periodName: '3 семестр', value: 312 },
                    { periodName: '4 семестр', value: 333 },
                ],
            },
        ],
    },
    {
        code: '09.03.15',
        name: 'Информационные системы и технолгии',
        degree: 'м',
        subjects: [
            {
                name: 'Английский язык',
                exams: [1, 2, 3],
                benefits: [5, 6, 7],
                periods: [
                    { periodName: '1 семестр', value: 123 },
                    { periodName: '2 семестр', value: 123 },
                    { periodName: '3 семестр', value: 312 },
                    { periodName: '4 семестр', value: 333 },
                ],
            },
            {
                name: 'Информатика',
                exams: [1, 2, 3],
                benefits: [5, 6, 7],
                periods: [
                    { periodName: '1 семестр', value: 123 },
                    { periodName: '2 семестр', value: 123 },
                    { periodName: '3 семестр', value: 312 },
                    { periodName: '4 семестр', value: 333 },
                ],
            },
            {
                name: 'Экология',
                exams: [1, 2, 3],
                benefits: [5, 6, 7],
                periods: [
                    { periodName: '1 семестр', value: 123 },
                    { periodName: '2 семестр', value: 123 },
                    { periodName: '3 семестр', value: 312 },
                    { periodName: '4 семестр', value: 333 },
                ],
            },
            {
                name: 'Русский язык',
                exams: [1, 2, 3],
                benefits: [5, 6, 7],
                periods: [
                    { periodName: '1 семестр', value: 123 },
                    { periodName: '2 семестр', value: 123 },
                    { periodName: '3 семестр', value: 312 },
                    { periodName: '4 семестр', value: 333 },
                ],
            },
        ],
    },
    {
        code: '09.03.16',
        name: 'Информационные системы и технолгии',
        degree: 'м',
        subjects: [
            {
                name: 'Английский язык',
                exams: [1, 2, 3],
                benefits: [5, 6, 7],
                periods: [
                    { periodName: '1 семестр', value: 123 },
                    { periodName: '2 семестр', value: 123 },
                    { periodName: '3 семестр', value: 312 },
                    { periodName: '4 семестр', value: 333 },
                ],
            },
            {
                name: 'Информатика',
                exams: [1, 2, 3],
                benefits: [5, 6, 7],
                periods: [
                    { periodName: '1 семестр', value: 123 },
                    { periodName: '2 семестр', value: 123 },
                    { periodName: '3 семестр', value: 312 },
                    { periodName: '4 семестр', value: 333 },
                ],
            },
            {
                name: 'Экология',
                exams: [1, 2, 3],
                benefits: [5, 6, 7],
                periods: [
                    { periodName: '1 семестр', value: 123 },
                    { periodName: '2 семестр', value: 123 },
                    { periodName: '3 семестр', value: 312 },
                    { periodName: '4 семестр', value: 333 },
                ],
            },
            {
                name: 'Русский язык',
                exams: [1, 2, 3],
                benefits: [5, 6, 7],
                periods: [
                    { periodName: '1 семестр', value: 123 },
                    { periodName: '2 семестр', value: 123 },
                    { periodName: '3 семестр', value: 312 },
                    { periodName: '4 семестр', value: 333 },
                ],
            },
        ],
    },
]

export const DirectionsStore = DirectionsDomain.createStore<IDirection[]>(initData).on(
    getDirections.doneData,
    (_state, payload) => payload,
)
