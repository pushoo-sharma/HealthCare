import * as ActionTypes from'../Actions/ActionsTypes';
const SignInReducer =(state={},action) =>{
switch(action.type){
    case ActionTypes.SIGN_IN_SUCCESS :
   var a = {...state, response :action.payload};
   debugger
    return { ...state, response :action.payload};   
    default : 
    return state;
}
};
export default SignInReducer;