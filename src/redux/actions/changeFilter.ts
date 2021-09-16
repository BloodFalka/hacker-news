import { PayloadAction } from "@reduxjs/toolkit"
import { FiltersTypes, ListStateType } from "../reducers/feed-reducer"
import { ItemStateType } from "../reducers/item-reducer"

export const changeFilterAction = (state: ListStateType|ItemStateType, action: PayloadAction<{sortBy: FiltersTypes, value: null|boolean}>) => {
    const {sortBy, value} = action.payload
    state.filter.ascending[sortBy] = value
}