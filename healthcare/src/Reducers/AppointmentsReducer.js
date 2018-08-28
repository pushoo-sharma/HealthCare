import * as ActionTypes from'../Actions/ActionsTypes';
const AppointmentsReducer =(state={},action) =>{
    console.log("reducer",action)
switch(action.type){
    case ActionTypes.FETCH_UPCOMING_APPOINTMENTS :
    return { ...state, upcoming :action.payload};   

    case ActionTypes.CANCEL_APPOINTMENT :
    return { ...state, cancelResp :action.payload};

    
    case ActionTypes.SUBMIT_APPOINTMENT :
    return { ...state, submitResp :action.payload};

    
    case ActionTypes.CHECK_AVAILIBILITY :
    return { ...state, availability :action.payload};

    default : 
    return state;
}
};
export default AppointmentsReducer;