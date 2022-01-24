

//dummy
export const userService = {
    login
}
function login(params){
    const {username,password,tourId,isLeader} = params
    if(username==="admin_ttr_1"
    &&password==="admin_pwd_test"
    // &&tourId==="TTRDEV2"
    // &&isLeader===0
    ){
        return {
            data:{...params,userName:username},
            responseMessage:"SUCCESS"
        }
    }else{
        return {responseMessage:"GAGAL"}
    }
}