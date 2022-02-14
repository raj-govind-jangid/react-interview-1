import axios from 'axios';
import React,{useEffect, useState} from 'react';
import { Button, Table } from 'react-bootstrap';
import { orderList } from '../../apiList/orderApi';

export default function UserOrder() {
  const [order,setOrder] = useState([])
  const fetchOrder = async () => {
    let response = await axios.get(orderList.orderList)
    if(response.data.success == true){
      setOrder(response.data.data)
    }
  }
  useEffect(()=>{
    fetchOrder()
  },[])
    return(
        <div className='container mt-5'>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Id</th>
                <th>Price</th>
                <th>Image</th>
              </tr>
            </thead>
            <tbody>
            {order.map((item) => (  
              <tr key={item}>
                <td>{item.products[0]._id._id}</td>
                <td>{item.products[0]._id.price}</td>
                <td>{item.products[0]._id.images}</td>
              </tr>
            ))}
            </tbody>
          </Table>
        </div>
    )
}
