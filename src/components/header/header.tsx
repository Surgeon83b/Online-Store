import React from 'react';
export interface IHeaderPrors {
  count: number;
  price: number;
}
export class Header extends React.Component<IHeaderPrors> {
  public val: IHeaderPrors;
  constructor(props: IHeaderPrors) {
    super(props);
    this.val = {
      count: props.count,
      price: props.price,
    };
  }
  render(): React.ReactNode {
    return (
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container px-4 px-lg-5">
            <a className="navbar-brand" href="#!">
              Onlain store
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#!">
                    Shop
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#!">
                    Cart
                  </a>
                </li>
              </ul>
              <form className="d-flex">
                <button className="btn btn-outline-dark" type="submit">
                  <i className="bi-cart-fill me-1"></i>
                  Cart
                  <span className="badge bg-dark text-white ms-1 rounded-pill">{this.val.count}</span>
                </button>
              </form>
            </div>
          </div>
        </nav>
        <div className="bg-dark py-5">
          <div className="container px-4 px-lg-5 my-5">
            <div className="text-center text-white">
              <h1 className="display-4 fw-bolder">Cart total: {this.val.price}$</h1>
              <p className="lead fw-normal text-white-50 mb-0"></p>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
