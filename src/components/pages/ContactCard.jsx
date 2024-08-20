import React from 'react';
import gmail from '../../assets/gmailLogo.png';
import location from '../../assets/locationLogo.png';
import { Link } from 'react-router-dom';
import {Download} from "lucide-react"

const ContactCard = () => {
  return (
    <div className='mt-3 pb-2 contact-card'>
        <div className='contact-icon gap-3 d-flex align-items-center py-3'>
            <img src={gmail} alt='gmail'className='contact-image'/>
            <div>
                <p className='text-color'>Email</p>
                <p>manikumarnakka324@gmail.com</p>
            </div>
        </div>
        <div className='contact-icon gap-3 d-flex align-items-center py-3'>
            <img src={location} alt='location'className='contact-image'/>
            <div>
                <p className='text-color'>Location</p>
                <p>Nandyal , Andhra Pradesh</p>
            </div>
        </div>
        <div className="py-3 d-flex justify-content-center">
            <a href="/ManiKumar_Resume_Updated.pdf" target='_blank' download className='btn btn-bg'>
            <div className='d-flex justify-content align-items gap-2'><Download size={16}/>Download Resume</div>
            </a>
        </div>
    </div>
  )
}

export default ContactCard;