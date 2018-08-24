import * as ActionTypes from './ActionsTypes';
export const actionFormSubmit =(data)=>{
    return {
        type : ActionTypes.FORM_SUBMIT,
        payload : data
    };
}
export const ResultFormSubmit =(data)=>{
    return {
        type : ActionTypes.FORM_SUBMIT_RESULT,
        payload : data
    };
}

export const SignInRequest = (data) =>{
    return{
        type : ActionTypes.SIGN_IN,
        payload : data
    }
}

export const SignInSuccess = (data) =>{
    return{
        type : ActionTypes.SIGN_IN_SUCCESS,
        payload : data
    }
}

export const SignInSuccess1 = (data) =>{
    return{
        type : ActionTypes.SIGN_IN_SUCCESS,
        payload : data
    }
}

// export function SignInSuccess(data) {
//     return (dispatch) => {
//         dispatch({
//             type: ACTION_TYPE,
//             data,
//         }).then((response) => {
//             dispatch(push('/my_url'));
//         });
//     };
// }