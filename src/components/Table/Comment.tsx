import React from 'react'

import styled from 'styled-components'
import { timeConverter } from '../../utils/time'
import useWindowDimensions from '../hooks/useWindowDimensions'
import { Link, useRouteMatch } from 'react-router-dom'
import { ItemType } from '../../redux/reducers/item-reducer'


// const Comment: React.FC<ItemType> = (props) => {
//     const nestedComments = props.comments.map(comment => {
//       return <Comment key={comment.id} {...comment}  type="child" />
//     })
  
//     return (
//       <div style={{"marginLeft": "25px", "marginTop": "10px"}}>
//         <div dangerouslySetInnerHTML={{__html:props.content}}></div>
//         {nestedComments}
//       </div>
//     )
//   }

const Comment: React.FC<ItemType> = (props) => {

    const nestedComments = (props.comments || []).map(comment => {
        return <Comment key={comment.id} {...comment} type="child" />
    })
    

    return (<>
        <RowWrapper style={{marginLeft: `${20*props.level}px`}}>
            {props.deleted?'DELETED':
                
                    <>
                        <Content dangerouslySetInnerHTML={{
                        __html: props.content }}> 
                        </Content>
                        <DateText>
                            {timeConverter(props.time)} by <b>{props.user}</b>
                        </DateText>
                    </>
                    
                
            }
            
        </RowWrapper>
        {nestedComments}</>
    )
}

const Content = styled.div`
    overflow-wrap: break-word;
    word-break: break-all;
    word-wrap: break-word;
    white-space: pre-wrap;
    code, pre{
        white-space: pre-wrap;
    }
    p{
        margin: 5;
        text-align: left;
    }
    a{
        color: black;
    }
`

const DateText = styled.div`
    font-size: 12px;
    text-align: left;
    margin-top: 5px;
`

export const RowWrapper = styled.div`
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-gap: 15px;
    color: #000000b0;

    padding: 10px;
    border-radius: 5px;
    margin: 10px 0;
    background-color: #c0c0c029;
    @media(max-width: 576px) {
        grid-template-columns: 1fr;
    }
`

export default Comment
