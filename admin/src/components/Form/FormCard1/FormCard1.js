import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { changeCurrent } from '../../../stores/Form/actions/form_actions'
import { postForm } from '../../../controllers/form'

import './style1.css'

const FormCard1 = (props) => {
    const [info, setInfo] = useState({
        name: '',
        lastName: '',
        phone: ''
    })

    const dispatch = useDispatch()

    const handlerInput = (e) => {
        setInfo({
            ...info,
            [e.target.name]: e.target.value
        })
    }


    const handlerNext = (e) => {
        e.preventDefault()
        dispatch(changeCurrent())
        // postForm(props.userId, info)
    }

    return (
        <div className='cnt'>
            <header>SignUp Form</header>
            <div class="progress-bar">
                <div class="step">
                    <p>Basic Info</p>
                    <div class="bullet">
                        <span>1</span>
                    </div>
                    <div class="check fas fa-check">
                    </div>
                </div>
                <div class="step">
                    <p>Documents</p>
                    <div class="bullet">
                        <span>2</span>
                    </div>
                    <div class="check fas fa-check">
                    </div>
                </div>
                <div class="step">
                    <p>Address</p>
                    <div class="bullet">
                        <span>3</span>
                    </div>
                    <div class="check fas fa-check">
                    </div>
                </div>
            </div>
            <div className='form-outer'>
                <form action='#' onSubmit={(e) => handlerNext(e)}>
                    <div className='page slide-page'>
                        <div className='title'>
                            Basic Info:</div>
                        <div className='field'>
                            <div className='label'>
                                First Name</div>
                            <input type='text' name='name' onChange={handlerInput} value={info.name} />
                        </div>
                        <div className='field'>
                            <div className='label'>
                                Last Name</div>
                            <input type='text' name='lastName' onChange={handlerInput} value={info.lastName} />
                        </div>
                        <div className='field'>
                            <div className='label'>
                                Phone</div>
                            <input type='text' name='phone' onChange={handlerInput} value={info.phone} />
                        </div>
                        <div className='field'>
                            <button type='submit' className='firstNext next' >Next</button>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default FormCard1
