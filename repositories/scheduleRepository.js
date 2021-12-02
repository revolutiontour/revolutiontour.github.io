import Repository, { tourifyUrl, serializeQuery, setHeader } from './Repository';

class ScheduleRepository {
    constructor(callback) {
        this.callback = callback;
    }
    
    async registTourSchedule(params) {
        const reponse = await Repository.get(
            `${tourifyUrl}/schedule/tour-schedule`, 
            params
            // setHeader()
        )
            .then(response => {
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }
    async registTourGroupSchedule(params) {
        var myHeaders = new Headers();
        myHeaders.append('Accept', 'application/json');
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: params,
            redirect: 'follow',
        };
        const reponse = fetch(
            `${tourifyUrl}/schedule/tour-group`, requestOptions
        )
            .then(response => {
                return response.json();
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }
    async getSchedule() {
        console.log("GET SCHEDULE")
        const reponse = await Repository.get(
            `${tourifyUrl}/schedule`, 
            // setHeader()
        )
            .then(response => {
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }

    
    async getDetailSchedule(params) {
        const reponse = await Repository.get(
            `${tourifyUrl}/schedule/${params}`, 
            // setHeader()
        )
            .then(response => {
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }

    async getScheduleByDate(params) {
        const reponse = await Repository.get(
            `${tourifyUrl}/schedule/by-date`, 
            params
            // setHeader()
        )
            .then(response => {
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }
}

export default new ScheduleRepository