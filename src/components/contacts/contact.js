import React from 'react';
import { useParams } from 'react-router-dom';
import { getContact } from './contacts-main';
import MaleIcon from '../../assets/male.png';
import FemaleIcon from '../../assets/female.png';
import NoneIcon from '../../assets/none.png';
import './contact.css';

const Contact = () => {
    let params = useParams();
    let contact = getContact(params.lastName);

    const setIcon = (gen) => {  
        switch (gen) {
            case 'male':
                return MaleIcon;
            case 'female':
                return FemaleIcon;
            default:
                return NoneIcon;
        }
    }

    return (
        <div className="contact">
            <div className='contact-icon'>
                <img src={setIcon(contact.gender)} alt='contact gender icon'/>
            </div>
            <div className='data'> 
                <div className='info'>Name:  <b>{contact.firstName}</b></div>
                <div className='info'>Surname:  <b>{contact.lastName}</b></div>
                <div className='info'>Phone number:  <b>{contact.phone}</b></div>
            </div>
        </div>
    )
}

export default Contact;