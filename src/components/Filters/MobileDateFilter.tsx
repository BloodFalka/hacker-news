import React from 'react'
import styled from 'styled-components'
import { FiltersTypes } from '../../redux/reducers/feed-reducer'
import FilterArrow from './FilterArrow'

const Filter:React.FC<{title: FiltersTypes, ascending?: boolean, filterHandler: (sortBy: FiltersTypes) => void}> = ({title, ascending, filterHandler}) => {
    const onClickHandler = () => {
        filterHandler(title)
    }

    return (
        <Wrapper className={'mobileFilter'} onClick={onClickHandler}>
            <picture>
                <source srcSet={require('../../img/dateFilter.webp').default} type="image/webp"/>
                <source srcSet={require('../../img/dateFilter.png').default} type="image/png"/> 
                <img src={require('../../img/dateFilter.png').default} alt="Date Filter"/>
            </picture>
            <FilterArrow ascending={ascending}/>
        </Wrapper>
    )
}


const Wrapper = styled.div`
    &.mobileFilter{
        position: fixed;
        bottom: 70;
        right: 20;
        width: 70px;
        height: 70px;
        background-color: #ffffff;
        z-index: 99;
        padding: 10px;
        border-radius: 100px;
        box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
        img{
            width: 100%;
        height: 100%;
        }
        &>div{
            position: absolute;
            bottom: 50%;
            left: 50%;
            transform: translate(50%, 50%);
            z-index: 100;
            path{
                size: 20;
            }
        }
    }

`

export default Filter
