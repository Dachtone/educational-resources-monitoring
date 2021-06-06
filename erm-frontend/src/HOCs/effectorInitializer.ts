import { DegreeApi } from '../utils/api/degreeApi'
import { getDirections } from '../utils/effector/Directions/events'
// import { getDegree } from '../utils/effector/currentDegree/events'

const EffectorInitializer = (props: { children: any }) => {
    getDirections.use(DegreeApi.loadAllDirections)
    return props.children
}

export default EffectorInitializer
