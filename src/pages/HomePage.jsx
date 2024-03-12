import React from 'react'
import Login from '../components/Login'
import Signup from '../components/SignUp'
import { Link } from 'react-router-dom'

function HomePage() {
    return (
        <div>

            <Link to="/signup">signup</Link>
            <br />
            <Link to="/login">login</Link>

        </div>
    )
}

export default HomePage