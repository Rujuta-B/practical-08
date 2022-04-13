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
  }, [])

  const handleLogout = () => {
    dispatch(userLogoutAction())
    navigate('/signup')
  }

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className={style.user_page}>
      <nav class="navbar navbar-dark bg-dark">
        <h1>Home</h1>
        <button type="button" class="btn btn-outline-warning" onClick={handleLogout}>Logout</button>
      </nav>
      <div className="card">
        <img  src={user?.image} alt="user" />
        <div className='card-body text-center '>
        <h2 class="card-title font-weight-bold text-capitalize">Hello {user?.name},</h2>
        <h4 class="card-text">you are registered with the email id - <span class="font-weight-bold">{user?.email}</span> </h4>
        <h5 class="card-text"> phone number: <span class="font-weight-bold">{user?.phoneNo}</span></h5>
      </div>
      </div>

    </div>
  )
}

export default Home
