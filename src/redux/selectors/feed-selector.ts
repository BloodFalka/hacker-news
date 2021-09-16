import { AppStateType } from '../store'

export const selectFeedState = (state: AppStateType) => state.feed

export const selectFeedItems = (state: AppStateType) => state.feed.items
export const selectFeedLoading = (state: AppStateType) => state.feed.loading
export const selectFeedPage = (state: AppStateType) => state.feed.page

export const selectFeedFiltersAscending = (state: AppStateType) => state.feed.filter.ascending