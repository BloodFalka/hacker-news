import { AppStateType } from '../store'

export const selectJobsState = (state: AppStateType) => state.jobs

export const selectJobsItems = (state: AppStateType) => state.jobs.items
export const selectJobsLoading = (state: AppStateType) => state.jobs.loading
export const selectJobsPage = (state: AppStateType) => state.jobs.page

export const selectJobsFiltersAscending = (state: AppStateType) => state.jobs.filter.ascending