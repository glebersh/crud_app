import { FormDataType, FormValueType } from '../../types';
import { createSlice } from '@reduxjs/toolkit';

export const initialFormState: FormDataType = {
  first_name: '',
  last_name: '',
  email: '',
  birth_date: '',
  salary: '',
  status: '',
  gender: '',
  department: '',
  phone: '',
  desiredPosition: '',
  about: '',
  avatar_img_URL: ''
};


const formReducer = createSlice({
  name: 'client/formReducer',
  initialState: {
    formType: 'add',
    formVisibility: false,
    currentUserID: '',
    formData: initialFormState,
  },
  reducers: {
    toggleFormVisibility: (state) => {
      state.formVisibility = !state.formVisibility;
    },
    closePopUp: (state, action: { payload: boolean }) => {
      state.formVisibility = action.payload;
    },
    formTypeHandler: (state, action: { payload: 'add' | 'update' }) => {
      state.formType = action.payload;
    },
    updateForm: (state, action: { payload: FormValueType }) => {
      const staleFormData = { ...state.formData };
      state.formData = { ...staleFormData, ...action.payload };
    },
    fillUpForm: (state, action: { payload: FormDataType }) => {
      state.formData = action.payload;
    },
    setCurrentUser: (state, action: { payload: string }) => {
      state.currentUserID = action.payload;
    }
  }
});

export default formReducer.reducer;
export const { toggleFormVisibility, closePopUp, formTypeHandler, updateForm, fillUpForm, setCurrentUser } = formReducer.actions;