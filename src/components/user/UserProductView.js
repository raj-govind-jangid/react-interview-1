import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { productList } from '../../apiList/productApi';
import { useParams } from 'react-router-dom';
import { Button, Card, Form } from 'react-bootstrap';
import { orderList } from '../../apiList/orderApi';
import { cartList } from '../../apiList/cartApi';
import Swal from 'sweetalert2';

export default function UserProductView() {
    const [name,setName] = useState();
    const [price,setPrice] = useState();
    const [qty,setQty] = useState(1);
    var { id } = useParams();
    const getProduct = async () => {
        let response = await axios.get(productList.productsDetail(id));
        if(response.data.success == true){
            setName(response.data.data.name)
            setPrice(response.data.data.price)
        }
    }
    const addToCart = async () => {
        let data = {
            products:[
                {_id: id}
            ]
        }
        await axios.post(cartList.addCart,data).then(response=>{
            if(response.data.success == true){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: response.data.message,
                    showConfirmButton: false,
                    timer: 2300
                })
            }
        }).catch(error=>{
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: error.response.data.message,
                showConfirmButton: false,
                timer: 2300
            })
        })
    }
    const buyNow = async () => {
        let data = {
            products:[
                {_id: id,qty}
            ]
        }
        await axios.post(orderList.buyNow,data).then(response=>{
            if(response.data.success == true){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: response.data.message,
                    showConfirmButton: false,
                    timer: 2300
                })
            }

        }).catch(error=>{
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: error.response.data.message,
                    showConfirmButton: false,
                    timer: 2300
                })
        })
        
    }
    useEffect(()=>{
        getProduct()
    },[])  
    return( 
    <div className='container mt-3'>
        <div className='row'>
            <div className='col-md-6'>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://picsum.photos/400" />
            </Card>
            </div>
            <div className='col-md-6'>
            <Card.Body>
                <h2>{name}</h2>
                <h2>Rs {price}/-</h2>
                <Form.Control type="number" onChange={(e)=> setQty(e.target.value)} value={qty}/>    
                <Button variant="success" className="m-2" onClick={addToCart}>Add To Cart</Button>
                <Button variant="primary" className="m-2" onClick={buyNow}>Buy Now</Button>
            </Card.Body>
            </div>
        </div>
    </div>
    );
}
