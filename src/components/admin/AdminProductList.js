import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { productList } from '../../apiList/productApi';

export default function AdminProductList() {
  const [product,setProduct] = useState([])
  const fetchProduct = async () => {
    let response = await axios.get(productList.productList)
    if(response.data.success == true){
      setProduct(response.data.data)
    }
  }
  const deleteProduct = async (id) => {
    let response = await axios.delete(productList.productsDelete(id))
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
          <th>Name</th>
          <th>Qty</th>
          <th>Price</th>
          <th>Image</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {product.map((item) => (
          <tr key={item._id}>
          <td>{item.name}</td>
          <td>{item.qty}</td>
          <td>{item.price}</td>
          <td>{item.images}</td>
          <td>
            <Link className="btn btn-success mx-1" to={`/admin/editproduct/${item._id}`}>Edit </Link>
            <Button variant="danger" className="mx-1" onClick={()=>{deleteProduct(item._id)}}>Delete</Button>
          </td>
        </tr>
        ))}
      </tbody>
    </Table>
  </div>
  )
}
