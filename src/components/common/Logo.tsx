import React from 'react'
import styled from 'styled-components'


const Logo = () => {
	return (
		<LogoPicture className={'logo'}>
			<source srcSet={require('../../img/logo.webp').default} type="image/webp"/>
			<source srcSet={require('../../img/logo.png').default} type="image/png"/> 
			<img src={require('../../img/logo.png').default} alt="logo"/>
		</LogoPicture>
	)
}

const LogoPicture = styled.picture`
	img, source{
		height: 50px;
		width: auto;
	}
	
`

export default Logo
