import * as ActionTypes from'../Actions/ActionsTypes';
const EquipmentsReducer =(state={},action) =>{
    console.log("reducer",action)
switch(action.type){
    case ActionTypes.FETCH_PATIENT_EQUIPMENTS :
    return { ...state, response :action.payload};   

    case ActionTypes.FETCH_EQUIPMENTS :
    return { ...state, response :action.payload};

    
    case ActionTypes.REQUEST_EQUIPMENT :
    return { ...state, response :action.payload};

    default : 
    return state;
}
};
export default EquipmentsReducer;