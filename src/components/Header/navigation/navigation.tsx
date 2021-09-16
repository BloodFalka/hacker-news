import React, { FC } from 'react'

import { NavLink } from 'react-router-dom'
import './navigation.scss'

import { BsNewspaper } from 'react-icons/bs';
import { FaUserAlt } from 'react-icons/fa';

const Navigation: FC = () => {
	return (
		<nav className={`nav`}>
			<NavLink to={'/news'} exact>
				<BsNewspaper size={25} />
			</NavLink>
			<NavLink to="/jobs">
				<FaUserAlt size={25}/>
			</NavLink>
		</nav>
	)
}

export default Navigation
