import React ,{ useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { setAuth } from '../../store/auth/actions';
import axios from "axios";
import { authList } from '../../apiList/authApi';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2'
// import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  // let navigate = useNavigate();
  const loginbtn = async() =>{  
    let data = {
      username,
      password
    }
    let response = await axios.post(authList.login,data);
    if(response.data.success){
      let data = {
        userToken: response.data.token,
        userType: response.data.role
      }
      dispatch(setAuth(data))
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: response.data.message,
        showConfirmButton: false,
        timer: 2300
      })
      setTimeout(window.location.reload(),2500)
    }
    else if(response.data.success == false){
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: response.data.error,
        showConfirmButton: false,
        timer: 2500
      })
    }
    else{
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Something Went Wrong',
        showConfirmButton: false,
        timer: 2500
      })
    }
  };
  return (
    <>
    <div className='row mt-5'>
    <div className='col-md-5 mx-auto'>
    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>UserName</Form.Label>
        <Form.Control type="text" placeholder="UserName" onChange={(e)=> setUsername(e.target.value)} value={username}/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e)=> setPassword(e.target.value)} value={password}/>
    </Form.Group>

    <Button variant="primary" onClick={loginbtn}>
        Login
    </Button>
    </Form>
    </div>    
    </div>
    </>
  );
}
