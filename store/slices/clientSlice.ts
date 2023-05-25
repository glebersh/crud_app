import { FormDataType, FormValidationResult, FormValueType, OperationResultType } from './../../types/';
import { createSlice } from '@reduxjs/toolkit';

export const initialFormState = {
  first_name: '',
  last_name: '',
  email: '',
  birth_date: '',
  salary: '',
  status: '',
  sex: 'default',
  avatar_img_URL: ''
};

const clientReducer = createSlice({
  name: 'clientReducer',
  initialState: {
    formType: 'add',
    formVisibility: false,
    currentUserID: '',
    formData: initialFormState,
    operationResult: {
      operationStatus: '',
      alertVisible: false,
      alertMessage: '',
    },
    formValidation: {
      validatedInputs: {
        first_name: true,
        last_name: true,
        email: true,
        birth_date: true,
        salary: true,
        status: true,
        sex: true
      }
    },
    paginationData: {
      pageNumber: 1,
      limit: 4,
    },
    filters: {
      searchFilterValue: '',
      columnSort: 'none',
      mapFilters: {
        salary: 0,
        status: '',
        sex: '',
      }
    }
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
    },
    setOperationResult: (state, action: { payload: OperationResultType }) => {
      state.operationResult = action.payload;
    },
    hideAlert: (state, action: { payload: boolean }) => {
      state.operationResult.alertVisible = action.payload;
    },
    setValidationResult: (state, action: { payload: FormValidationResult }) => {
      state.formValidation.validatedInputs = action.payload;
    },
    setPage: (state, action: { payload: number }) => {
      state.paginationData.pageNumber = action.payload;
    },
    setLimit: (state, action: { payload: number }) => {
      state.paginationData.limit = action.payload;
    },
    setSearchValue: (state, action: { payload: string }) => {
      state.filters.searchFilterValue = action.payload;
    },
    setColumnSort: (state, action: { payload: string }) => {
      state.filters.columnSort = action.payload;
    },
    addMapFilter: (state, action: {
      payload: {
        salary: number,
        status: string,
        sex: string
      }
    }) => {
      state.filters.mapFilters = action.payload;
    }
  }
});

export default clientReducer.reducer;
export const {
  toggleFormVisibility,
  closePopUp,
  formTypeHandler,
  updateForm, fillUpForm,
  setOperationResult,
  hideAlert,
  setCurrentUser,
  setValidationResult,
  setPage,
  setLimit,
  setSearchValue,
  setColumnSort,
  addMapFilter } = clientReducer.actions;