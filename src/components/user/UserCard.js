import axios from 'axios';
import React, {useState, useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { cartList } from '../../apiList/cartApi';

export default function UserCard() {
  const [product,setProduct] = useState([])
  const fetchProduct = async () => {
    let response = await axios.get(cartList.cartList)
    if(response.data.success == true){
      setProduct(response.data.data[0].products)
    }
  }
  const removeItem = async (id) => {
    let deleteData = {
      product: id
    }
    let response = await axios.delete(cartList.cartDelete,{data :deleteData})
    if(response.data.success == true){
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: response.data.message,
        showConfirmButton: false,
        timer: 2300
      })
      fetchProduct()
    }
  }
  useEffect(()=>{
    fetchProduct()
  },[])
  return(
    <div className='container mt-5'>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Price</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {product.map((item) => (
          <tr key={item._id._id}>
            <td>{item._id._id}</td>
            <td>{item._id.price}</td>
            <td>{item._id.images}</td>
            <td>
              <Button variant="danger" className="mx-1" onClick={()=>{removeItem(item._id._id)}}>Remove</Button>
            </td>
          </tr>
          ))}
          </tbody>
      </Table>
    </div>
    );
}
