import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { productList } from '../../apiList/productApi';

export default function AdminAddProduct() {
  const [image, setImage] = useState();
  const [price, setPrice] = useState();
  const [qty, setQty] = useState();
  const [name, setName] = useState();
  const addProduct = async () => {
    let formData = new FormData();
    formData.append('name', name);
    formData.append('qty', qty);
    formData.append('price', price);
    formData.append('images', image);
    let response = await axios.post(productList.addProduct,formData);
    if(response.data.success == true){
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: response.data.message,
        showConfirmButton: false,
        timer: 2300
      })
    }
  }
  return (
    <>
    <div className='row mt-5'>
    <div className='col-md-5 mx-auto'>
    <Form>

    <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" onChange={(e)=> setName(e.target.value)} value={name}/>
    </Form.Group>

    <Form.Group className="mb-3">
        <Form.Label>Image</Form.Label>
        <Form.Control type="file" onChange={(e)=> setImage(e.target.files[0])}/>
    </Form.Group>

    <Form.Group className="mb-3">
        <Form.Label>Price</Form.Label>
        <Form.Control type="number" onChange={(e)=> setPrice(e.target.value)} value={price}/>
    </Form.Group>

    <Form.Group className="mb-3">
        <Form.Label>Qty</Form.Label>
        <Form.Control type="number" onChange={(e)=> setQty(e.target.value)} value={qty}/>
    </Form.Group>

    <Button variant="primary" onClick={addProduct}>
        Add Product
    </Button>
    </Form>
    </div>    
    </div>
    </>
  );
}
