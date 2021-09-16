import React from 'react'
import './header.scss'
import Navigation from './navigation/navigation'
import Logo from '../common/Logo'
import styled from 'styled-components'
import { Route, Switch } from 'react-router'
import { NavLink } from 'react-router-dom'

const Header = () => {
	return (
		<header className="app-header">
			<div className="container">
				<NavLink className={'logo'} to={'/'}><Logo/></NavLink>
				<PageTitle className={'page-title'}>
					<Switch>
						<Route path="/news" render={()=>'News'}/>
						<Route path="/jobs" render={()=>'Jobs'}/>
						<Route path="/item" render={()=>'Comments'}/>
					</Switch>
				</PageTitle>
				<Navigation/>
			</div>
		</header>
	)
}

const PageTitle = styled.h1`
	color: #655659;
	margin: 0;
	font-size: 1.5rem;
`

export default Header
