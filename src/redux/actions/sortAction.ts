import { PayloadAction } from "@reduxjs/toolkit"
import { FeedItem, FiltersTypes, ListStateType } from "../reducers/feed-reducer"

export const sortAction = (state: ListStateType, action: PayloadAction<{sortBy: FiltersTypes}>) => {
    const {sortBy} = action.payload


    for (const property in state.filter.ascending) {
        if(property === sortBy){
            if(state.filter.ascending[property]===null){
                state.filter.ascending[property] = true
            }else{
                state.filter.ascending[property] = !state.filter.ascending[property]
            }
            
        } else{
            //@ts-ignore
            state.filter.ascending[property] = null
        }
        
    }

    const ascending = state.filter.ascending[sortBy]

    const sortItems = (state: ListStateType, sortCallback:(a:FeedItem,b:FeedItem)=>number) =>{
        state.items = state.items.sort(sortCallback)
    } 

    if(sortBy==='title'||sortBy==='domain'){
        sortItems(state,(a: FeedItem, b: FeedItem) =>  ascending?a[sortBy].localeCompare(b[sortBy]):b[sortBy].localeCompare(a[sortBy]))
    }

    if(sortBy==='date'){
        sortItems(state,(a: FeedItem, b: FeedItem) => ascending? b.time - a.time: a.time-b.time)
    }
}