import { IDirection } from './../../customTypes/direction'
import { DirectionsStore } from './../Directions/store'
import React from 'react'
import { useStore } from 'effector-react'
import { createEvent } from 'effector'

const pageLoaded = createEvent<string>()

// if u want fetch data uncomment these lines
// forward({ from: pageLoaded, to: getDirections })

const directionPageModel = (directionCode: string) => {
    React.useEffect(() => {
        pageLoaded(directionCode)
    }, [])

    const direction = useStore(DirectionsStore).find((direction: IDirection) => direction.code === directionCode)

    return {
        direction,
    }
}

export default directionPageModel
