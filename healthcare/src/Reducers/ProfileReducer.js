import * as ActionTypes from'../Actions/ActionsTypes';
const ProfileReducer =(state={},action) =>{
    console.log("reducer",action)
switch(action.type){
    case ActionTypes.FETCH_PROFILE_REQUEST :
    return { ...state, response :action.payload};   

    case ActionTypes.FETCH_PROFILE_RESPONSE :
    return { ...state, response :action.payload};

    default : 
    return state;
}
};
export default ProfileReducer;