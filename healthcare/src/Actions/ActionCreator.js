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

export const PatientRegisterRequest = (data) =>{
   
    return{
        type : ActionTypes.REGISTER_PATIENT,
        payload : data
    }
}

export const PatientRegisterResponse = (data) =>{
    return{
        type : ActionTypes.REGISTER_PATIENT_RESPONSE,
        payload : data
    }
}


export const DoctorRegisterRequest = (data) =>{
   
    return{
        type : ActionTypes.REGISTER_DOCTOR,
        payload : data
    }
}

export const DoctorRegisterResponse = (data) =>{
   
    return{
        type : ActionTypes.REGISTER_DOCTOR_RESPONSE,
        payload : data
    }
}


export const StoreKeeperRegisterRequest = (data) =>{
   
    return{
        type : ActionTypes.REGISTER_STORE_KEEPER,
        payload : data
    }
}

export const StoreKeeperRegisterResponse = (data) =>{
   
    return{
        type : ActionTypes.REGISTER_STORE_KEEPER_RESPONSE,
        payload : data
    }
}






export const FetchProfileRequest = (data) =>{
   
    return{
        type : ActionTypes.FETCH_PROFILE_REQUEST,
        payload : data
    }
}

export const FetchProfileResponse = (data) =>{
    return{
        type : ActionTypes.FETCH_PROFILE_RESPONSE,
        payload : data
    }
}
export const SubmitProfileRequest = (data) =>{
   
    return{
        type : ActionTypes.SUBMIT_PROFILE_REQUEST,
        payload : data
    }
}

export const SubmitProfileResponse = (data) =>{
    return{
        type : ActionTypes.SUBMIT_PROFILE_RESPONSE,
        payload : data
    }
}

export const  FetchVisitNotes= (data) =>{
    return{
        type : ActionTypes.FETCH_VISIT_NOTES,
        payload : data
    }
}

export const  FetchVisitNotesResponse= (data) =>{
    return{
        type : ActionTypes.FETCH_VISIT_NOTES_RESPONSE,
        payload : data
    }
}

export const FetchMedicalHistory = (data) =>{
    return{
        type : ActionTypes.FETCH_MEDICAL_HISTORY,
        payload : data
    }
}
export const FetchMedicalHistoryResponse = (data) =>{
    return{
        type : ActionTypes.FETCH_MEDICAL_HISTORY_RESPONSE,
        payload : data
    }
}

export const SubmitMedicalHistory = (data) =>{
    return{
        type : ActionTypes.SUBMIT_MEDICAL_HISTORY,
        payload : data
    }
}
export const SubmitMedicalHistoryResponse = (data) =>{
    return{
        type : ActionTypes.SUBMIT_MEDICAL_HISTORY_RESPONSE,
        payload : data
    }
}

export const FetchUpcomingAppointments = (data) =>{
    return{
        type : ActionTypes.FETCH_UPCOMING_APPOINTMENTS,
        payload : data
    }
}
export const FetchUpcomingAppointmentsResponse = (data) =>{
    return{
        type : ActionTypes.FETCH_UPCOMING_APPOINTMENTS_RESPONSE,
        payload : data
    }
}

export const CancelAppointment = (data) =>{
    return{
        type : ActionTypes.CANCEL_APPOINTMENT,
        payload : data
    }
}

export const CancelAppointmentResponse = (data) =>{
    return{
        type : ActionTypes.CANCEL_APPOINTMENT_RESPONSE,
        payload : data
    }
}

export const SubmitAppointment = (data) =>{
    return{
        type : ActionTypes.SUBMIT_APPOINTMENT,
        payload : data
    }
}

export const SubmitAppointmentResponse = (data) =>{
    return{
        type : ActionTypes.SUBMIT_APPOINTMENT_RESPONSE,
        payload : data
    }
}

export const CheckAvailibility = (data) =>{
    return{
        type : ActionTypes.CHECK_AVAILIBILITY,
        payload : data
    }
}

export const CheckAvailibilityResponse = (data) =>{
    return{
        type : ActionTypes.CHECK_AVAILIBILITY_RESPONSE,
        payload : data
    }
}

export const FetchPatientEquipments = (data) =>{
    return{
        type : ActionTypes.FETCH_PATIENT_EQUIPMENTS,
        payload : data
    }
}
export const FetchPatientEquipmentsResponse = (data) =>{
    return{
        type : ActionTypes.FETCH_PATIENT_EQUIPMENTS_RESPONSE,
        payload : data
    }
}
export const FetchEquipments = (data) =>{
    return{
        type : ActionTypes.FETCH_EQUIPMENTS,
        payload : data
    }
}

export const FetchEquipmentsResponse = (data) =>{
    return{
        type : ActionTypes.FETCH_EQUIPMENTS_RESPONSE,
        payload : data
    }
}

export const RequestEquipment = (data) =>{
    return{
        type : ActionTypes.REQUEST_EQUIPMENT,
        payload : data
    }
}

export const RequestEquipmentResponse = (data) =>{
    return{
        type : ActionTypes.REQUEST_EQUIPMENT_RESPONSE,
        payload : data
    }
}

export const FetchBills = (data) =>{
    return{
        type : ActionTypes.FETCH_BILLS,
        payload : data
    }
}

export const FetchBillsResponse = (data) =>{
    return{
        type : ActionTypes.FETCH_BILLS_RESPONSE,
        payload : data
    }
}