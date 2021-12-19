

//dummy
export const userService = {
    login
}
function login(params){
    const {username,password,tourId,isLeader} = params
    if(username==="UOT5JQ08"
    &&password==="B490CVQ7"
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