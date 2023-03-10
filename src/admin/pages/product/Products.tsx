import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProjects = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/products');
                const data = response.data;
                setProducts(data);
            } catch (error) {
                console.log(error);
            }
        };
        getProjects();
    }, []);

    return (
        <div>
            <h1>Products</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product: any) => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>
                                <Link to={`/products/${product.id}`} className="btn btn-primary">Edit</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}