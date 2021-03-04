import React from 'react';
import { Link } from 'react-router-dom';
import Rate from '../components/Rate';
import data from '../../../data/data';

export default function ProductScreen(props) {
  const product = data.products.find(x => x._id === props.match.params.id);
  if (!product) {
    return <div> Sorry this product sold out...!</div>;
  }
  return (
    <div>
      <Link to="/">Back to Items</Link>
      <div className="row top">
        <div className="col-2">
          <img className="large" src={product.image} alt={product.name}></img>
        </div>
        <div className="col-1">
          <ul>
            <li>
              <h1>{product.name}</h1>
            </li>
            <li>
              <Rate rating={product.rating} reviewNumbers={product.reviewNumbers}></Rate>
            </li>
            <li>Price: ${product.price}</li>
            <li>
              Description:
              <p>{product.description} </p>
            </li>
          </ul>
        </div>
        <div className="col-1">
          <div className="card card-body">
            <ul>
              <li>
                <div className="row">
                  <div>Price:</div>
                  <div className="price">${product.price}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Status:</div>
                  <div>
                    {product.countInStock > 0 ? (
                      <span className="success">Avaliable</span>
                    ) : (
                      <span className="error">Sorry, Sold Out</span>
                    )}
                  </div>
                </div>
              </li>
              <li>
                <button className="primary block">Add My Chart</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
