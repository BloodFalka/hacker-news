import React from 'react'
import styled from 'styled-components'
import useWindowDimensions from '../hooks/useWindowDimensions';
import { RowWrapper } from '../Table/ListItem';
import Filter from './Filter';
import { FiltersAscendingType, FiltersTypes } from '../../redux/reducers/feed-reducer';
import { useSelector } from 'react-redux';
import { selectFeedFiltersAscending } from '../../redux/selectors/feed-selector';
import './filters.scss'
import MobileDateFilter from './MobileDateFilter';

const FeedFilters:React.FC<{filtersAscending: FiltersAscendingType, sortHandler: (sortBy: FiltersTypes)=>void}> = ({filtersAscending, sortHandler}) => {
    const { width } = useWindowDimensions();



    return (
        <RowWrapper className={'filter-wrapper'}>
            <Filter filterHandler={sortHandler} ascending={filtersAscending.title} title={'title'}/>
            {width > 576?
                <>
                    <Filter filterHandler={sortHandler} ascending={filtersAscending.date} title={'date'}/>
                    <Filter filterHandler={sortHandler} ascending={filtersAscending.domain} title={'domain'}/>
                </>:
                <MobileDateFilter title={'date'} filterHandler={sortHandler} ascending={filtersAscending.date}/>

            }
        </RowWrapper>
    )
}

export default FeedFilters
