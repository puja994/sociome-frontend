import React from 'react'
import {Form} from 'react-bootstrap'
import './searchgroup.css'

export const SearchGroup = () => {
    return (
        <div className="search-group">
              <Form.Control type="email" className="search-group-bar" placeholder="Search Group " />
        </div>
    )
}
