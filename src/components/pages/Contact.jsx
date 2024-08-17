import React from 'react';
import {useForm} from 'react-hook-form';
import { useState } from 'react';
import axios from 'axios';

const Contact = () => {

    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [clicked, setClicked] = useState(false);
    const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm();
    
    const onSubmit = async (data) => {
        setClicked(true);
        setSuccess(false);
        setError(false);
    
        try {
          const response = await axios.post('https://backend-portfolio-mb9e.onrender.com/contact', data);
    
          if (response.status === 200) {
            setSuccess(true);
            reset(); // Clear form fields after successful submission
          } else {
            setError(true);
          }
        } catch (error) {
          console.error('Error sending email:', error);
          setError(true);
        }
    
        setClicked(false);
      };

  return (
    <div className='contact-page'>
        <h3>Contact</h3>

        <p className='contact-info my-3'>
            You can reach out to me through various social media platforms such as
            GitHub, LinkedIn, Twitter, and Instagram for direct communication.
            Alternatively, you can use the contact form below to send me a message
            or inquire about any information you need.
        </p>
        <div className='contact-form'>
            <p className='fw-medium'>
                I am always open to discussing new projects, opportunities in tech
                world, partnerships and more so mentorship.
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='mb-3'>
                    <label className='form-label'>Name</label>
                    <input
                        type='text'
                        className='form-control'
                        placeholder=''
                        {...register("name",{required:true})}
                    />
                    {errors?.name && (
                    <p className="error-message">Please, Enter your name</p>
                    )}
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Email</label>
                    <input
                        type='email'
                        className='form-control'
                        placeholder=''
                        {...register("email",{required:true})}
                    />
                    {errors?.email && (
                    <p className="error-message">Please, Enter your Email</p>
                    )}
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Message</label>
                    <textarea
                    rows={"3"}
                    type="email"
                    className="form-control"
                    placeholder=""
                    {...register("message", { required: true })}
                    />
                    {errors?.name && (
                    <p className="error-message">Please, Enter your message</p>
                    )}
                </div>
                <button className="form-submit" type="submit" disabled={clicked}>
                    {clicked ? (
                    <>
                        <span
                        className="spinner-grow spinner-grow-sm"
                        role="status"
                        aria-hidden="true"
                        ></span>
                        <span>submitting...</span>
                    </>
                    ) : (
                    "Submit"
                    )}
                </button>
            </form>
            {success && (
          <p className="text-success">Your message reached &#x2713;</p>
        )}
        {error && <p className="error-message">Please Try again!</p>}
        </div>
    </div>
  )
}

export default Contact;