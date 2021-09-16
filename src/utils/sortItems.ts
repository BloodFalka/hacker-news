import { useSelector } from "react-redux"
import { FeedItem, FiltersTypes, ListStateType } from "../redux/reducers/feed-reducer"
import { ItemStateType } from "../redux/reducers/item-reducer"

export const sortItems = (state: ListStateType|ItemStateType, sortBy: FiltersTypes, selectFilter: (sortBy: FiltersTypes, value: boolean|null) => void) => {
    const {filter, items} = state

    for (const property in filter.ascending) {
        if(property === sortBy){
            if(filter.ascending[property]===null){
                selectFilter(property, true)
                // state.filter.ascending[property] = true
            }else{
                selectFilter(property, !filter.ascending[property])
                // filter.ascending[property] = 
            }
            
        } else{
            //@ts-ignore
            selectFilter(property, null)
            // state.filter.ascending[property] = null
        }
        
    }

    const ascending = filter.ascending[sortBy]

    const sortCreator = (sortCallback:(a:FeedItem,b:FeedItem)=>number) =>{
        
        return items.slice().sort(sortCallback)
    } 

    if(sortBy==='date'){
        return sortCreator((a: FeedItem, b: FeedItem) => ascending? a.time - b.time: b.time-a.time)
    } else{
        return sortCreator((a: FeedItem, b: FeedItem) =>  
            {
                // if(typeof b[sortBy] === undefined){
                //     return ascending? 1 : -1
                // }
                // if(typeof a[sortBy] === undefined){
                //     return ascending? -1 : 1
                // }
                // return ascending?b[sortBy].localeCompare(a[sortBy]):a[sortBy].localeCompare(b[sortBy])
//@ts-ignore
                const elA = a[sortBy],
                    elB = b[sortBy]
                return ascending?elA===elB?0:(elA<elB?1:-1):(elA<elB?-1:1)
            }
        )
    }
}