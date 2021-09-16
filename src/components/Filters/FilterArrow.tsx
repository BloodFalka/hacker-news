import React from 'react'

import {FaArrowDown} from 'react-icons/fa'
import {FaArrowUp} from 'react-icons/fa'
import styled from 'styled-components'

const FilterArrow:React.FC<{ascending?: boolean|null}> = ({ascending}) => {

    if(ascending===null)return null

    return (
        <Wrapper>
            {ascending?
            <FaArrowUp size={15} color={'#6ec575'}/>:
            <FaArrowDown size={15} color={'#cb3541'}/>}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin: 0 10px;
`

export default FilterArrow
