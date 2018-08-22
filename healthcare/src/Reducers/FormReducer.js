import * as ActionTypes from'../Actions/ActionsTypes';
const FormReducer =(state={},action) =>{
switch(action.type){
    case ActionTypes.FORM_SUBMIT_RESULT :
    debugger
    return { ...state, response :action.payload};   
    default : 
    return state;
}
};
export default FormReducer;