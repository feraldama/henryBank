import React, { useState, useEffect } from 'react'
import { oneUser } from '../../../controllers/userControllers'

import './styles.css'

const FormCard4 = (props) => {
    const [user, setUser] = useState({
        name: '',
        lastName: ''
    })



    useEffect(() => {
        oneUser(parseInt(props.userId))
            .then((data) => {
                setUser({
                    ...user,
                    name: data.data.name,
                    lastName: data.data.lastName
                })
            })
    }, [props.userId])


    return (
        <div className='cnt'>
            <header>SignUp Form</header>
            <div class="progress-bar">
                <div class="step active">
                    <p className='active'>Basic Info</p>
                    <div class="bullet active">
                        <span>1</span>
                    </div>
                    <div class="check fas fa-check active">
                    </div>
                </div>
                <div class="step active">
                    <p className='active'>Documents</p>
                    <div class="bullet active">
                        <span>2</span>
                    </div>
                    <div class="check fas fa-check active">
                    </div>
                </div>
                <div class="step active">
                    <p className='active'>Address</p>
                    <div class="bullet active">
                        <span>3</span>
                    </div>
                    <div class="check fas fa-check active">
                    </div>
                </div>
            </div>
            <div className='form-finish'>
                <p className='titlep'>CONGRATULATIONS</p>
                {user.name.length > 2 ? <p className='subtitle'>{user.name} {user.lastName}, Now open your app and enjoy it</p>: <p className='subtitle'>Loading...</p>}
                {/* <p className='subtitle'> Now open your app and enjoy it</p> */}
            </div>

        </div>
    )
}

export default FormCard4
