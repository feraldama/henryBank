import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { changeCurrent,  returnCurrent} from '../../../stores/Form/actions/form_actions'
import { postForm } from '../../../controllers/form'

import './style2.css'

const FormCard2 = (props) => {
    const [info, setInfo] = useState({
        docType: '',
        docNumber: '',
        birthday: ''
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
                <form action='#' >
                    <div className='page'>
                        <div className='title'>
                            Documents:</div>
                        <div className='field'>
                            <div className='label'>
                                Document Type</div>
                            <select name='docType' onChange={handlerInput} value={info.docType}>
                                <option> </option>
                                <option>DNI</option>
                                <option>PASSPORT</option>
                            </select>
                        </div>
                        <div className='field'>
                            <div className='label'>
                                Document Number</div>
                            <input type='text' name='docNumber' onChange={handlerInput} value={info.docNumber} />
                        </div>
                        <div className='field'>
                            <div className='label'>
                                Birthday</div>
                            <input type='date' name='birthday' onChange={handlerInput} value={info.birthday} />
                        </div>
                        <div class="field btns">
                            <button type='submit' class="prev-1 prev" onClick={(e) => handlerPrevious(e)}>Previous</button>
                            <button type='submit' class="next-1 next" onClick={(e) => handlerNext(e)}>Next</button>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default FormCard2
