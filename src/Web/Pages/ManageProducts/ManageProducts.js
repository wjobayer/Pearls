import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import './ManageProducts.css'

const ManageProducts = () => {
    const [product , setProduct]=useState([]);
    const [control, setControl] = useState(false);
    useEffect(()=>{
        fetch('https://aqueous-falls-64682.herokuapp.com/products')
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[control]);

    const handleDelete = (id) => {
      fetch(`https://aqueous-falls-64682.herokuapp.com/deleteproduct/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            window.confirm("Do you really want to Delete?");
            setControl(!control);
           
          }
        });
      console.log(id);
    };
    return (
        <div>
            
            <div className="my-5">
            <h1 className="text-secondary">Manage All Products</h1>
            <h6>Total product: {product.length}</h6>
            <Table striped bordered hover className="custom-size">
        <thead>
          <tr className="bg-secondary text-light">
            <th>S.N</th>
            <th>Product</th>
            <th>Image</th>
            <th>Tag</th>
            {/* <th>Status</th> */}
            <th>Action</th>
          </tr>
        </thead>
        {product?.map((pd, index) => (
          <tbody>
            <tr>
              <td>{index}</td>
              <td>
                 <p className="title-font">{pd.product_name}</p>
                 <p className="des-font">Description</p>
                 <p className="des-font"> {pd.description}</p>
            </td>
              <td> <img width="150px" className="mx-5" src={pd.img} alt="" /> </td>
              <td className="fw-lighter"><h6 className="mx-5 title-font">{pd.tag}</h6></td>
              {/* <td>
                <input
                  
                  type="text"
                  defaultValue={pd.status}
                />
              </td> */}
              <div className="d-flex my-5 mx-5">
              <button onClick={() => handleDelete(pd?._id)} className="btn bg-danger p-2 text-light btn-fs">Delete</button>
              </div>
            </tr>
          </tbody>
        ))}
      </Table>
            </div>
        </div>
    );
};

export default ManageProducts;