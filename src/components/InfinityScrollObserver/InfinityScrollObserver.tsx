import React from 'react'
import ObserverWrapper from './ObserverWrapper'

import { useInView } from 'react-intersection-observer'
import Spinner from '../common/Spinner'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

const InfinityScrollObserver: React.FC<{isLoading: boolean, onReach: any, isEndReached: boolean}> = ({isLoading, onReach, isEndReached}) => {

	const [ref, inView] = useInView({
		threshold: 0,
	})

	const dispatch = useDispatch()

	React.useEffect(() => {
		if (inView === true) dispatch(onReach())
	}, [inView])
	
    return (
        <>
            {isLoading ? (
				<Spinner center/>
			) : isEndReached? 
			<EndReached>
				End of List is Reached
			</EndReached>
			:(
				<ObserverWrapper ref={ref}>
					<div className="nextPortionObserver" ref={ref}>
						{/* {inView.toString()} */}
					</div>
				</ObserverWrapper>
			)}
        </>
    )
}

const EndReached = styled.div`
	text-align: center;
	background-color: #ffffff;
	color: #655659;
	font-weight: bold;
	border-radius: 5px;
	font-size: 1rem;
	padding: 10px;
	box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
	margin-top: 4px;
`

export default InfinityScrollObserver
