import React from 'react'
import styled from 'styled-components'

//@ts-ignore
import spinner from '../../img/loading.gif'

const Spinner:React.FC<{center?: boolean}> = ({center}) => {
	return (
		<Wrapper className={center?'center':''}>
			<img src={spinner} alt="spinner"/>
		</Wrapper>
	)
}

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
	img{
		width: 200px;
		height: 200px;
	}
	&.center{
		img{
			position: fixed;
			top: 50%;
			transform: translateY(-50%);
		}

	}
`

export default Spinner
