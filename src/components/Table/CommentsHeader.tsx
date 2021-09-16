import React from 'react'
import styled from 'styled-components'
import { RowWrapper } from '../Table/ListItem';
import '../Filters/filters.scss'

const CommentsHeader:React.FC<{count: number, title: string}> = ({count, title}) => {

    return (
        <div className={'filter-wrapper'}>
            <Wrapper>
                <h2>{title}</h2>
                <span>Comments: {count}</span>
            </Wrapper>
        </div>
    )
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 5px;
    background-color: #ffffff;
    padding: 10px;
    border-radius: 5px;
    margin: 5px 20px;
    box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
    height: 40px;
    h2{
        text-align: center;
        text-overflow: ellipsis; 
        overflow: hidden; 
        white-space: nowrap;
        display: inline-block;
        width: 100%;
        color: #000000a2;
        margin: -10px;
        font-size: 1.2rem;
        align-items: center;
        @media (max-width: 576px) {
            font-size: 1rem;
        }
    }
    span{
        margin-top: 10px;
        @media (max-width: 576px) {
            font-size: 0.8rem;
        }
    }
`



export default CommentsHeader
