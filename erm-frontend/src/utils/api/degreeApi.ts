import axios from 'axios'

export class DegreeApi {
    public static loadAllDirections = async () => {
        return (await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/files/get-all-directions`)).data
    }
}
