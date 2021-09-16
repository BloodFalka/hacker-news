import React from 'react'
import { FeedItem as ListItem } from '../../redux/reducers/feed-reducer'
import styled from 'styled-components'
import { timeConverter } from '../../utils/time'
import useWindowDimensions from '../hooks/useWindowDimensions'
import { Link, useRouteMatch } from 'react-router-dom'


const ListItem: React.FC<ListItem> = (props) => {
    const { width } = useWindowDimensions();


    return (
        <RowWrapper>
            <TitleSection to={`item/${props.id}`}>
                <TitleText>{props.title}</TitleText>
                    
                        {width < 577 &&
                        <TextWrapper>
                            <Text>{timeConverter(props.time)}</Text>
                            {props.comments_count?(<Text>{props.comments_count} comments</Text>):null}
                        </TextWrapper>
                        }
                        
            </TitleSection>
            {width > 576 &&
                <>
                    <Date>{timeConverter(props.time)}</Date>
                    
                    <Domain 
                        style={{opacity: props.domain? 1: 0.4}} 
                        href={props.url}>{props.domain||'—'}</Domain>
                </>
            }
        </RowWrapper>
    )
}

const TextWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 3px;
    right: 3px;
    font-size: 12px;

    @media(max-width: 576px) {
        text-align: left;
        margin-top: 5px;
        position: initial;
        justify-content: space-between;

    }
`

const Text = styled.div`
`

export const RowWrapper = styled.div`
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 3fr 1fr 1fr;
    grid-template-rows: 1fr;
    grid-gap: 15px;
    color: #000000b0;
    
    &>div,a{
        text-overflow: ellipsis;
        box-sizing: border-box;
        text-align: center;
        display: block;
        /* width: 100px; */
        overflow: hidden;
        align-items: center;
        justify-content: center;
        padding: 10px;
        border-radius: 5px;
        margin: 5px 0;
        background-color: #c0c0c029;

        overflow-wrap: break-word;
        word-break: break-all;
        word-wrap: break-word;
    }

    @media(max-width: 576px) {
        grid-template-columns: 1fr;
    }
`


const TitleSection = styled(Link)`
    position: relative;
    cursor: pointer;
    margin: 0;
    text-decoration: none;
    color: #000000b0;
    width: 100%;
    h2{
        width: 100%;
        text-align: center;
        text-overflow: ellipsis; 
        overflow: hidden; 
        white-space: nowrap;
        display: inline-block;
    }
`

const TitleText = styled.h2`
    margin: 0;
    text-align: center;
    font-size: 1rem;
    @media(max-width: 576px) {
        font-size: 0.8rem;
    }
`

const Date = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    @media(max-width: 576px) {
        font-size: 0.8rem;
    }
`

const Domain = styled.a`
    cursor: pointer;
    text-align: center;
    font-size: 1rem;
    text-decoration: none;
    color: #00000094;
    white-space: nowrap;
    @media(max-width: 576px) {
        font-size: 0.8rem;
    }
`

export default ListItem
