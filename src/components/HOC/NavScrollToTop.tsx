import React from 'react'
import { useLocation } from 'react-router-dom';

const NavScrollToTop:React.FC<{children: any}> = ({children}) => {
    
    const location = useLocation();

    React.useEffect(()=>{
        window.scrollTo(0, 0)
    },[location])

    return children
}

export default NavScrollToTop