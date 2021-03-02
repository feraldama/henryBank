import React from 'react'

import './style4.css'

const FormCard4 = (props) => {

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
                <p className='titlep'>Welcome to DevBank</p>
                <p className='subtitle'> Now open your app and enjoy it</p>
            </div>

        </div>
    )
}

export default FormCard4
