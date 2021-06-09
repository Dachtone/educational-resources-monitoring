import React from 'react'
import { useStore } from 'effector-react'
import { createEvent, forward } from 'effector'
import { DirectionsStore } from './../Directions/store'
import { getDirections } from '../Directions/events'
import { degreesTransl } from '../../customTypes/degrees'
import { IDirection } from '../../customTypes/direction'

const pageLoaded = createEvent()

forward({ from: pageLoaded, to: getDirections })

const degreePageModel = (degree: string) => {
    React.useEffect(() => {
        pageLoaded()
    }, [])

    const degreeDirections = useStore(DirectionsStore).filter(
        (direction: IDirection) => (degreesTransl as any)[direction.degree] === degree[0],
    )

    return {
        degreeDirections,
    }
}

export default degreePageModel
