import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Pageheader from './Header/Pageheader';

function CreatAccount() {
  return (
    <div  className=' flex justify-center items-center flex-col   bg-red-300'>

<Pageheader title='Create Account' current="Creat Account" />

  
    <Form className='w-[90vw]  lg:w-[50vw]  bg-gradient-to-b from-white rounded-3xl shadow-2xl p-8 relative bottom-3 '>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter  email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default CreatAccount
