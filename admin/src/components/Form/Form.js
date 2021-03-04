import React from 'react';
import FormCard1 from './FormCards/FormCard1'
import FormCard2 from './FormCards/FormCard2'
import FormCard3 from './FormCards/FormCard3'
import FormCard4 from './FormCards/FormCard4'
import logo from '../../images/logo2.png';
import { useSelector } from 'react-redux';
import './styles.css';

const Form = (props) => {
    const current = useSelector(state => state.form_reducer)
    const { userId } = props.userId.match.params

    let component = <FormCard1 userId={userId} />
    
    if(current === 2){
        component = <FormCard2 userId={userId} />
    }else if(current === 3){
        component = <FormCard3 userId={userId} />
    }else if(current === 4){
        component = <FormCard4 userId={userId} />
    }

    return (
        <div className='container'>
            <div className='card'>
                <div className='logo'>
                    <img className='img' src={logo} alt='logo' />
                </div>
                <div className='form'>
                    {component}
                </div>
            </div>
        </div>
    )
}

export default Form
