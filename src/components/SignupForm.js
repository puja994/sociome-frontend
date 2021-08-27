import React, {useState} from 'react'
import { Form, Button, Col, Jumbotron, Alert, Spinner, Row} from "react-bootstrap";
import './signup.css'

export const SignupForm = () => {



    return (
      
      <div className='form-container'>
      <h1>
         <span className='text-success'>SIGNUP</span> 
      </h1>
      <form >
        <div className='form-group'>
          <label htmlFor='name'>Name</label>
          <input
            id='name'
            type='text'
            name='fname'
            autocomplete="off" 
          />
          
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email Address</label>
          <input
            id='email'
            type='email'
            name="email"
           
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            id='password'
            type='password'
            name='password'
          
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password2'>Confirm Password</label>
          <input
            id='password2'
            type='password'
            name='password2'
            
            
          />
        </div>
        <input
          type='submit'
          value='Register'
          className='btn btn-success btn-block'
        />
      </form>
    </div>
    )
}
