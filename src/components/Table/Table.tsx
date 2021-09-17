import React from 'react'
import { useRouteMatch } from 'react-router-dom'
import styled from 'styled-components'
import { FiltersTypes, ListStateType, PageDataType } from '../../redux/reducers/feed-reducer'
import { ItemStateType } from '../../redux/reducers/item-reducer'
import Spinner from '../common/Spinner'
import FeedFilters from '../Filters/Filters'
import InfinityScrollObserver from '../InfinityScrollObserver/InfinityScrollObserver'
import Comment from './Comment'
import CommentsHeader from './CommentsHeader'
import ListItem from './ListItem'

const Table: React.FC<{state: ItemStateType|ListStateType, sortItems?: (sortBy: FiltersTypes)=>void, fetchMore?: (page: number) => void}> = ({state, fetchMore, sortItems}) => {
    const {items, filter, page, loading} = state

    const { url } = useRouteMatch();
    const isItemPage = url.startsWith('/item')
    
    return (
        !items ? <Spinner center/> :
        <>
        {isItemPage?
        //@ts-ignore
            <CommentsHeader title={state.title} count={state.commentsCount} url={state.url}/>:
            <FeedFilters sortHandler={sortItems} filtersAscending={filter.ascending}/>
        }

            <Wrapper>
                {items.map((i:any) => {
                    return isItemPage?<Comment key={i.id} {...i}/>:<ListItem key={i.id} {...i} />
                })}
                <InfinityScrollObserver 
                    isEndReached={page.current===page.max} 
                    onReach={()=>isItemPage?null:fetchMore(page.current+1)} 
                    isLoading={loading}/>
            </Wrapper></>
    )
}

const Wrapper = styled.div`
    margin-top: 65px;
    position: relative;
    width: 100%;
    @media(max-width: 576px) {
        margin-top: 55px;
    }
`

export default Table