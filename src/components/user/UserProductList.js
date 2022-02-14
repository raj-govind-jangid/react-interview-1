import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { productList } from '../../apiList/productApi';


export default function UserProductList() {
    const [product,setProduct] = useState([])
    const fetchProduct = async () => {
        let response = await axios.get(productList.productList)
        if(response.data.success == true){
        setProduct(response.data.data)
        }
    }
    useEffect(()=>{
        fetchProduct()
    },[])
    return(
    <div className='container mt-5'>
    <div className='row'>
    {product.map((item) => (
        <div className='col-md-4 d-flex justify-content-center mb-2' key={item._id}>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://picsum.photos/400" />
        <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>
            Price Rs {item.price}/-
            </Card.Text>
            <Link className="btn btn-success mx-1" to={`/user/view/${item._id}`}>View Details</Link>
        </Card.Body>
        </Card>
        </div>
    ))}    
    </div>
    </div>
  );
}
