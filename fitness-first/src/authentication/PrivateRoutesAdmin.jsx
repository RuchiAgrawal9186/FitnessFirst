import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

const PrivateRoutesAdmin = ({children}) => {

    const isAuthAdmin = useSelector(state=> state.authReducer.isAuthAdmin)
    const location = useLocation()
    // console.log(location)
    console.log(location.pathname)
    return isAuthAdmin ? children : <Navigate  to ="/login"/>
};


export default PrivateRoutesAdmin