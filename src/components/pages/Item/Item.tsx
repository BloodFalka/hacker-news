import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { fetchItem, ItemType } from '../../../redux/reducers/item-reducer'
import { selectItemState } from '../../../redux/selectors/item-selector'

import Table from '../../Table/Table'

export default function Item() {

    const dispatch = useDispatch()

    const state = useSelector(selectItemState)

    const { id } = useParams<{id:string}>();
    
    React.useEffect(() => {
        dispatch(fetchItem(id))
    }, [id])


    return(
        <Table state={{...state}}/>
    )
}
