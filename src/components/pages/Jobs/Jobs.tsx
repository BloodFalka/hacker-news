import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FeedItem, FiltersTypes } from '../../../redux/reducers/feed-reducer'
import { changeFilter, fetchJobs } from '../../../redux/reducers/jobs-reducer'
import { selectJobsState } from '../../../redux/selectors/jobs-selector'
import { sortItems } from '../../../utils/sortItems'
import Table from '../../Table/Table'

export default function Jobs() {

    const dispatch = useDispatch()
    
    const state = useSelector(selectJobsState)

    React.useEffect(() => {
        if(!state.items){
            dispatch(fetchJobs(1))
            
        }
        setSortedItems(state.items)
    }, [state.items])

    const changeFilterHandler = (sortBy: FiltersTypes, value: boolean|null) => dispatch(changeFilter({sortBy, value}))
    
    const sortItemsHandler = (sortBy: FiltersTypes) => {
        setSortedItems(sortItems(state, sortBy, changeFilterHandler))
    }

    const [sortedItems, setSortedItems] = useState<Array<FeedItem>>(state.items)

    return(
        <Table state={{...state, items: sortedItems}} fetchMore={fetchJobs} sortItems={sortItemsHandler}/>
    )
}
