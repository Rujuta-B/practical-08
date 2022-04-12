/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  userDetailsAction,
  userLogoutAction,
} from '../Redux/Actions/userAction'


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
    <>
      <nav>
        <h2>Home</h2>
        <button className='logoutBtn' onClick={handleLogout}>Logout</button>
      </nav>
      <div className="user_card">
      <img className='user-image' src={user?.image} alt="user" />
      <div className='user_details'>
      <p class="card-text bold">Hello {user?.name},</p>
      <p class="card-text">you are registered with the email id - {user?.email} and phone number: {user?.phoneNo}</p>
     
      
      </div>
      </div>

    </>
  )
}

export default Home
