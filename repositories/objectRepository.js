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
            `${tourifyUrl}/objects/${params}`, 
            // setHeader()
        )
            .then(response => {
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }

    async getPlaceWisata(params) {
        var {place} = params
        place = place.replace(" ", "+")
        const token = "BYrIifYEk_cazqQRnTgSzrkZcrq7UyvsF4ZPGTgg0fQ"
            const reponse = await Repository.get(
                `https://geocode.search.hereapi.com/v1/geocode?q=${place}&apiKey=${token}`, 
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