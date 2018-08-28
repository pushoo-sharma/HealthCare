import * as ActionTypes from'../Actions/ActionsTypes';
const BillsReducer =(state={},action) =>{
switch(action.type){
    case ActionTypes.FETCH_BILLS :
    return { ...state, response :action.payload};   

    case ActionTypes.FETCH_BILLS_RESPONSE :
    return { ...state, response :action.payload};   

    default : 
    return state;
}
};
export default BillsReducer;