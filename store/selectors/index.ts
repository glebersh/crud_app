import { RootState } from "..";

export const pageLimitSelector = (state: RootState) => state.paginationReducer.limit;
export const pageNumberSelector = (state: RootState) => state.paginationReducer.pageNumber;
export const paginationDataSelector = (state: RootState) => state.paginationReducer;

export const operationResultSelector = (state: RootState) => state.operationResultReducer;

export const filtersSelector = (state: RootState) => state.filtersReducer;
export const columnSortSelector = (state: RootState) => state.filtersReducer.columnSort;
export const searchQSelector = (state: RootState) => state.filtersReducer.searchFilterValue;
export const mapFiltersSelector = (state: RootState) => state.filtersReducer.mapFilters;


export const formVisibilitySelector = (state: RootState) => state.formReducer.formVisibility;
export const formTypeSelector = (state: RootState) => state.formReducer.formType;
export const formDataSelector = (state: RootState) => state.formReducer.formData;
export const currentUserSelector = (state: RootState) => state.formReducer.currentUserID;
export const formSelector = (state: RootState) => state.formReducer;


