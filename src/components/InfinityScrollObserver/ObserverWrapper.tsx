import React from 'react'

const ObserverWrapper = React.forwardRef<HTMLDivElement, {children: React.ReactNode}>(({ ...props }, ref) => {
	return <div ref={ref} {...props} />
})

export default ObserverWrapper
