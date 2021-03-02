import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { changeCurrent, returnCurrent } from '../../../stores/Form/actions/form_actions'
import { postForm } from '../../../controllers/form'

import './style3.css'

const FormCard3 = (props) => {
    const [info, setInfo] = useState({
        street: '',
        number: '',
        location: '',
        province: '',
        country: ''
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

    const handlerPrevious = (e) => {
        e.preventDefault()
        dispatch(returnCurrent())
    }

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
                <form action='#' >
                    <div className='page'>
                        <div className='title'>
                            Address Info:</div>
                        <div className='field'>
                            <div className='label'>
                                Street</div>
                            <input type='text' name='street' onChange={handlerInput} value={info.street} />
                            <div className='rightLabel'>
                                Number</div>
                            <input type='text' name='number' onChange={handlerInput} value={info.number} />
                        </div>
                        <div className='field'>
                            <div className='label'>
                                Location</div>
                            <input type='text' name='location' onChange={handlerInput} value={info.location} />
                            <div className='rightLabel'>
                                Province</div>
                            <input type='text' name='province' onChange={handlerInput} value={info.province} />
                        </div>
                        <div className='field'>
                            <div className='label'>
                                Country</div>
                            <input type='text' name='country' onChange={handlerInput} value={info.country} />
                        </div>
                        <div class="field btns">
                            <button class="prev-3 prev" onClick={(e) => handlerPrevious(e)} >Previous</button>
                            <button class="submit" onClick={(e) => handlerNext(e)}>Submit</button>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default FormCard3
