import { createEvent, forward } from 'effector'
import { useStore } from 'effector-react'
import React from 'react'
import { getDegree } from '../currentDegree/events'
import { DegreeStore } from '../currentDegree/store'

const pageLoaded = createEvent<string>()

forward({ from: pageLoaded, to: getDegree })

const degreePageModel = (degreeName: string) => {
    React.useEffect(() => {
        pageLoaded(degreeName)
    }, [])

    const subjects = useStore(DegreeStore)

    return {
        subjects,
    }
}

export default degreePageModel
