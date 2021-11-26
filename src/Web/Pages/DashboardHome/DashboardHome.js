import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

const DashboardHome = () => {
    const [product , setProduct]=useState([]);
    const [orders, setOrders] = useState([]);
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        fetch('https://aqueous-falls-64682.herokuapp.com/products')
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[]);
        const [review , setReview]=useState([]);
        useEffect(()=>{
            fetch('https://aqueous-falls-64682.herokuapp.com/reviews')
            .then(res=>res.json())
            .then(data=>setReview(data))
        },[])
        useEffect(() => {
            fetch("https://aqueous-falls-64682.herokuapp.com/allorders")
              .then((res) => res.json())
              .then((data) => setOrders(data));
          }, []);
        useEffect(() => {
            fetch("https://aqueous-falls-64682.herokuapp.com/users")
              .then((res) => res.json())
              .then((data) => setUsers(data));
          }, []);
    return (
        <div>
            <Container>
            <h1 className="text-secondary">Pearls,At a glance.</h1>
            
            
            
            
            <div className="my-5 ms-2">
                <div className="row">
                    <div className="col bg-primary text-light rounded-3 p-3 mx-3">
                        <h3>Total Users</h3>
                    <h3>{users.length}</h3>
                    </div>
                    <div className="col bg-warning text-light rounded-3 p-3">
                        <h3>Total Product</h3>
                    <h3>{product.length}</h3>
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col bg-warning text-light rounded-3 p-3 mx-3">
                        <h3>Total Order</h3>
                    <h3>{orders.length}</h3>
                    </div>
                    <div className="col bg-primary text-light rounded-3 p-3">
                    <h3>Total Review</h3>
                    <h3>{review.length}</h3>
                    </div>
                </div>
            </div>
            </Container>
        </div>
    );
};

export default DashboardHome;