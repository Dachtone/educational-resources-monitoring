import { DirectionsStore } from './../Directions/store'
import React from 'react'
import { useStore } from 'effector-react'
import { createEvent } from 'effector'

const pageLoaded = createEvent()

// if u want fetch data uncomment these lines
// forward({ from: pageLoaded, to: getDirections })

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
