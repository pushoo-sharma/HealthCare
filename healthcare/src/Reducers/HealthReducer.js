import * as ActionTypes from'../Actions/ActionsTypes';
const HealthReducer =(state={},action) =>{
    console.log("reducer",action)
switch(action.type){
    case ActionTypes.FETCH_VISIT_NOTES :
    return { ...state, response :action.payload};   

    case ActionTypes.FETCH_MEDICAL_HISTORY :
    return { ...state, response :action.payload};

    
    case ActionTypes.SUBMIT_MEDICAL_HISTORY :
    return { ...state, response :action.payload};

    
    case ActionTypes.FETCH_VISIT_NOTES_RESPONSE :
    return { ...state, notes :action.payload};   

    case ActionTypes.FETCH_MEDICAL_HISTORY_RESPONSE :
    return { ...state, response :action.payload};

    
    case ActionTypes.SUBMIT_MEDICAL_HISTORY_RESPONSE :
    return { ...state, response :action.payload};

    default : 
    return state;
}
};
export default HealthReducer;