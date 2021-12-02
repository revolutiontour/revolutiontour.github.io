
import Repository, {tourifyUrl, serializeQuery, setHeader } from './Repository';

class MemberRepository {
    constructor(callback) {
        this.callback = callback;
    }
    async getTourLeader() {
        const reponse = await Repository.get(
            `${tourifyUrl}/member/leader`, 
            // setHeader()
        )
            .then(response => {
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }
    async getTourParticipant() {
        const reponse = await Repository.get(
            `${tourifyUrl}/member/participant`, 
            // setHeader()
        )
            .then(response => {
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }
    async registTourParticipant(params) {
        
        var myHeaders = new Headers();
        myHeaders.append('Accept', 'application/json');
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: params,
            redirect: 'follow',
        };
        const regis = fetch(
            `${tourifyUrl}/member/participant`, requestOptions
        )
            .then((response) => {
                return response.json();
            })
            .catch((error) => {
                console.log('error', error);
            });
            
        console.log("setelah post ",regis)
        return regis;
    }
    async registTourLeader(params) {

        var myHeaders = new Headers();
        myHeaders.append('Accept', 'application/json');
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: params,
            redirect: 'follow',
        };
        const regis = fetch(
            `${tourifyUrl}/member/leader`, requestOptions
        )
            .then((response) => {
                return response.json();
            })
            .catch((error) => {
                console.log('error', error);
            });
        return regis;
    }
    async loginMember(params) {
        console.log(params)
        const login = await Repository.get(`${tourifyUrl}/member/auth?${serializeQuery(params)}` 
        // setHeader()
        )
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                console.log('error', error);
            });
        return login;
    }
}
export default new MemberRepository();