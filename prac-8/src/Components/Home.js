/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  userDetailsAction,
  userLogoutAction,
} from '../Redux/Actions/userAction'
import style from './Home.module.css'

const Home = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const userInfo = useSelector((state) => state.userDetails)
  const { user, loading } = userInfo

  useEffect(() => {
    dispatch(userDetailsAction())
  }, [dispatch])

  const handleLogout = () => {
    dispatch(userLogoutAction())
    navigate('/signup')
  }

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className={style.user_page}>
      <nav className="navbar navbar-dark bg-dark" style={{padding:'15px'}}>
        <h1>Home</h1>
        <button type="button" className="btn btn-outline-warning" onClick={handleLogout}>Logout</button>
      </nav>
      <div className="card" style={{marginTop:'-10px', padding:'15px'}}>
        <img  src={user?.image} alt="user" />
        <div className='card-body text-center '>
        <h2 className="card-title font-weight-bold text-capitalize">Hello {user?.name},</h2>
        <h4 className="card-text">you are registered with the email id - <span className="font-weight-bold">{user?.email}</span> </h4>
        <h5 className="card-text"> phone number: <span className="font-weight-bold">{user?.phoneNo}</span></h5>
      </div>
      </div>

    </div>
  )
}

export default Home
