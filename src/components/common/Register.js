import axios from 'axios';
import React ,{useState} from 'react';
import { Button, Form } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { authList } from '../../apiList/authApi';

export default function Register() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [password2, setPassword2] = useState();
  const [firstName, setFirstname] = useState();
  const [lastName, setLastname] = useState();
  const [email, setEmail] = useState();
  const [error, setError] = useState([]);
  const registerbtn = async() =>{  
    let data = {
      username,
      password,
      password2,
      firstName,
      lastName,
      email,
    }
    await axios.post(authList.register,data).then(response =>{
        if(response.data.success){
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: response.data.message,
              showConfirmButton: false,
              timer: 2300
            })
        }
    }).catch(error =>{
        if(error.response.data.errors != undefined){
          setError(error.response.data.errors)
        }
        if(error.response.data.error != undefined){
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: error.response.data.error,
            showConfirmButton: false,
            timer: 2300
          })
        }
    })
  };
  return (
    <>
    <div className='row my-5'>
    <div className='col-md-5 mx-auto'>
    <Form>

    <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="John" onChange={(e)=> setFirstname(e.target.value)} value={firstName}/>
        <strong className='text-danger'>{error.firstName}</strong>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Cena" onChange={(e)=> setLastname(e.target.value)} value={lastName}/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>UserName</Form.Label>
        <Form.Control type="text" placeholder="UserName" onChange={(e)=> setUsername(e.target.value)} value={username}/>
        <strong className='text-danger'>{error.username}</strong>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="example@gmail.com" onChange={(e)=> setEmail(e.target.value)} value={email}/>
        <strong className='text-danger'>{error.email}</strong>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e)=> setPassword(e.target.value)} value={password}/>
        <strong className='text-danger'>{error.password}</strong>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e)=> setPassword2(e.target.value)} value={password2}/>
        <strong className='text-danger'>{error.password2}</strong>
    </Form.Group>

    <Button variant="primary" onClick={registerbtn}>
        Register
    </Button>
    </Form>
    </div>    
    </div>
    </>
  );
}
