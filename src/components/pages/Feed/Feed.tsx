import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeFilter, FeedItem, fetchNews, FiltersTypes } from '../../../redux/reducers/feed-reducer'
import { selectFeedState } from '../../../redux/selectors/feed-selector'
import { sortItems } from '../../../utils/sortItems'
import Table from '../../Table/Table'

export default function Feed() {

    const dispatch = useDispatch()

    const state = useSelector(selectFeedState)

    React.useEffect(() => {
        if(!state.items)dispatch(fetchNews(1))
        setSortedItems(state.items)
    }, [state.items])

    const changeFilterHandler = (sortBy: FiltersTypes, value: boolean|null) => dispatch(changeFilter({sortBy, value}))

    const sortItemsHandler = (sortBy: FiltersTypes) => {
        setSortedItems(sortItems(state, sortBy, changeFilterHandler))
    }

    const [sortedItems, setSortedItems] = useState<Array<FeedItem>>(state.items)

    return(
        <Table state={{...state, items: sortedItems}} fetchMore={fetchNews} sortItems={sortItemsHandler}/>
    )
}
