import { DirectionsStore } from './../Directions/store'
import React from 'react'
import { useStore } from 'effector-react'
import { createEvent, forward } from 'effector'
import { getDirections } from '../Directions/events'

const pageLoaded = createEvent()

forward({ from: pageLoaded, to: getDirections })

const homePageModel = () => {
    React.useEffect(() => {
        pageLoaded()
    }, [])

    const allDirections = useStore(DirectionsStore)

    return {
        allDirections,
    }
}

export default homePageModel
