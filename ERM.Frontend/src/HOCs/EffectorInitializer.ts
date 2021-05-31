import { DegreeApi } from '../utils/api/degreeApi'
import { getDegree } from '../utils/effector/currentDegree/events'

const EffectorInitializer = (props: { children: any }) => {
    getDegree.use(DegreeApi.loadDegree)
    return props.children
}

export default EffectorInitializer
