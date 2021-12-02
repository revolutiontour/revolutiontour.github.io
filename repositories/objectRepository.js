import Repository, { tourifyUrl, serializeQuery, setHeader } from './Repository';

class ObjectRepository {
    constructor(callback) {
        this.callback = callback;
    }
    
    async getObjekWisata() {
        
    console.log("OBJEK REPO")
        const reponse = await Repository.get(
            `${tourifyUrl}/objects`, 
            // setHeader()
        )
            .then(response => {
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
        console.log("OBJEK AFTER GET",reponse)
    }
    async getDetailObjekWisata(params) {
        const reponse = await Repository.get(
            `${tourifyUrl}/objects/${params.id}`, 
            // setHeader()
        )
            .then(response => {
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }
    async registObjekWisata(params) {

        const regis = await Repository.post(tourifyUrl + '/objects', params, 
        // setHeader()
        )
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                console.log('error', error);
            });
        return regis;
    }
}

export default new ObjectRepository