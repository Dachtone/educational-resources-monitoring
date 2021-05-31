import axios from 'axios'

export class DegreeApi {
    public static loadDegree = async (degreeName: string) => {
        return (await axios.get(`${process.env.REACT_APP_API_BASE_URL}/get/${degreeName}`)).data
    }
}
