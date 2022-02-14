import React, {useState, useEffect} from 'react';
import { productList } from '../../apiList/productApi';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';

export default function AdminEditProduct() {
  const [image, setImage] = useState();
  const [price, setPrice] = useState();
  const [qty, setQty] = useState();
  const [name, setName] = useState();
  var { id } = useParams();
  const editProduct = async () => {
    let response = await axios.get(productList.productsDetail(id));
    if(response.data.success == true){
        setName(response.data.data.name)
        setPrice(response.data.data.price)
        setQty(response.data.data.qty)
    }
  }
  const updateProduct = async () => {
    let formData = new FormData();
    formData.append('name', name);
    formData.append('qty', qty);
    formData.append('price', price);
    formData.append('images', image);
    let response = await axios.put(productList.productsUpdate(id),formData);
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
  useEffect(()=>{
    editProduct()
  },[])
  return (
    <>
    <div className='row mt-5'>
    <div className='col-md-5 mx-auto'>
    <Form>

    <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Name" onChange={(e)=> setName(e.target.value)} value={name}/>
    </Form.Group>

    <Form.Group className="mb-3">
        <Form.Label>Image</Form.Label>
        <Form.Control type="file" placeholder="Image" onChange={(e)=> setImage(e.target.files[0])}/>
    </Form.Group>

    <Form.Group className="mb-3">
        <Form.Label>Price</Form.Label>
        <Form.Control type="number" onChange={(e)=> setPrice(e.target.value)} value={price}/>
    </Form.Group>

    <Form.Group className="mb-3">
        <Form.Label>Qty</Form.Label>
        <Form.Control type="number" onChange={(e)=> setQty(e.target.value)} value={qty}/>
    </Form.Group>

    <Button variant="primary" onClick={updateProduct} >
        Update Product
    </Button>
    </Form>
    </div>    
    </div>
    </>
  );
}
