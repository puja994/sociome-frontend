import React, { useState, useEffect } from 'react'
import { Card, Form, Button, Spinner, Alert } from "react-bootstrap";

import './login.css'



  export const LoginForm = () => {
    

    return (
      
      <div className='form-container'>

      <h1>
         <span className='text-success'>LOGIN</span> 
      </h1>
      <form >
        <div className='form-group'>
          <label htmlFor='email'>Email Address</label>
          <input
            id='email'
            type='email'
            name='email'
            autocomplete="off"
            
            // value={email}
            // onChange={onChange}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            id='password'
            type='password'
            name='password'
      
            // value={password}
            // onChange={onChange}
            required
          />
        </div>
        <input
          type='submit'
          value='Login'
          className='btn btn-success btn-block'
        />
      </form>
    </div>
    )
}
