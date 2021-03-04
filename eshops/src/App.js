import React from 'react';
import data from './data';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';


function App() {
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <a href="/">
            <img className="brand" src="./img/logo.png" />
          </a>
        </div>
        <div>
          <a href="/cart">Cart</a>
          <a href="/login">Log In</a>
        </div>
      </header>
      <main>
        <div>
          <div className="row center">
            {data.products.map(product => (
              <div key={product._id} className="cardBox">
                <a href={`/product/${product._id}`}>
                  <img
                    className="medium"
                    src={product.image}
                    alt={product.name}
                  />
                </a>
                <div className="card-body">
                  <a href={`/product/${product._id}`}>
                    <h2>{product.name}</h2>
                  </a>
                  <div className="rating">
                    <span>
                      <i className="fa fa-star"></i>
                    </span>
                    <span>
                      <i className="fa fa-star"></i>
                    </span>
                    <span>
                      <i className="fa fa-star"></i>
                    </span>
                    <span>
                      <i className="fa fa-star"></i>
                    </span>
                    <span>
                      <i className="fa fa-star"></i>
                    </span>
                  </div>
                  <div className="price">${product.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <footer className="row center">The KGM programming</footer>
    </div>
  );
}

export default App;
