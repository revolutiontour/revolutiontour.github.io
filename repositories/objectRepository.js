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
    async getPlaceWisata(params) {
        const place = params.payload
        const token = "B2xvKZXOoctOEJUBcGvIRIOxK9qvu8SGDJ1WC6Vqlx8"
            const reponse = await Repository.get(
                `https://discover.search.hereapi.com/v1/discover?limit=1&q=${place}&apiKey=${token}`, 
                // setHeader()
            )
                .then(response => {
                    return response.data;
                })
                .catch(error => ({ error: JSON.stringify(error) }));
            return reponse;
        }
}

export default new ObjectRepository