import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { FiltersTypes } from '../../redux/reducers/feed-reducer'
import FilterArrow from './FilterArrow'

const Filter:React.FC<{title: FiltersTypes, ascending?: boolean, filterHandler: (sortBy: FiltersTypes) => void}> = ({title, ascending, filterHandler}) => {

    const onClickHandler = () => {
        filterHandler(title)
    }

    return (
        <Wrapper className={'filter'} onClick={onClickHandler}>{title}<FilterArrow ascending={ascending}/></Wrapper>
    )
}


const Wrapper = styled.div`
    &.filter{
    box-sizing: border-box;
    z-index: 10;
    height: 50px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: #4b3947;
    box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
    background-color: #ffffff !important;
    text-transform: capitalize;
    }
`

export default Filter
