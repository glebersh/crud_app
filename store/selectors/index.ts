import { RootState } from "..";

export const pageLimitSelector = (state: RootState) => state.clientReducer.paginationData.limit;
export const pageNumberSelector = (state: RootState) => state.clientReducer.paginationData.pageNumber;
export const formVisibilitySelector = (state: RootState) => state.clientReducer.formVisibility;
export const formTypeSelector = (state: RootState) => state.clientReducer.formType;
export const formDataSelector = (state: RootState) => state.clientReducer.formData;
export const paginationDataSelector = (state: RootState) => state.clientReducer.paginationData;
export const operationResultSelector = (state: RootState) => state.clientReducer.operationResult;
export const filtersSelector = (state: RootState) => state.clientReducer.filters;
export const columnSortSelector = (state: RootState) => state.clientReducer.filters.columnSort;
export const searchQSelector = (state: RootState) => state.clientReducer.filters.searchFilterValue;