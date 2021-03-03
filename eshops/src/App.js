import React from 'react';

function App() {
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <img className="brand" src="./img/logo.png" />
        </div>
        <div>
          <a href="cart.html">Cart</a>
          <a href="signin.html">Sign In</a>
        </div>
      </header>
      <main>
        <div>
          <div className="row center">
            <div className="card">
              <a href="product.html">
                <img
                  classNameName="medium"
                  src="./img/dress1.png"
                  alt="product"
                />
              </a>
              <div className="card-body">
                <a href="product.html">
                  <h2>Stylish Clothes</h2>
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
                <div className="price">$120</div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="row center">All right reserved</footer>
    </div>
  );
}

export default App;
