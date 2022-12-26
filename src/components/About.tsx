import React from 'react';
import { Header, IHeaderProps } from './header/header';
import { Footer } from './footer/footer';
import { ProductItem } from 'types';
import { Button } from 'components/button/button';
import { styles } from './styles';

export function About(prop: { product: ProductItem; headerProps: IHeaderProps }) {
  const props = prop.product;
  return (
    <>
      <Header count={prop.headerProps.count} price={prop.headerProps.price}></Header>
      <div className="col mb-5">
        <div className="card h-100">
          <div className="card-body p-4">
            <div className="text-center">
              {/*Product name*/}
              <h5 className="fw-bolder">{props.title}</h5>
              <div className="mainDescription" style={styles.mainDescription}>
                {/* Product images*/}
                <div className="imageDescription">
                  {props.images.map((element) => (
                    <img src={element}></img>
                  ))}
                  <img className="card-img-top" src={props.thumbnail} alt="..." />
                </div>
                {/* Product description*/}
                <div className="infoDescription">
                  <h5 className="fw-bolder">Description:</h5>
                  <span className="text-muted">{props.description}</span>
                  <h5 className="fw-bolder">Discount Percentage:</h5>
                  <span className="text-muted">{props.discountPercentage}</span>
                  <h5 className="fw-bolder">Rating:</h5>
                  <span className="text-muted">{props.rating}</span>
                  <h5 className="fw-bolder">Stock:</h5>
                  <span className="text-muted">{props.stock}</span>
                  <h5 className="fw-bolder">Brand:</h5>
                  <span className="text-muted">{props.brand}</span>
                  <h5 className="fw-bolder">Category:</h5>
                  <span className="text-muted">{props.category}</span>
                </div>
                <div className="priceAndActionDescription">
                  {/*Product price*/}
                  <h5 className="fw-bolder">{props.price}</h5>
                  <Button
                    text="ADD TO CART"
                    onclick={() => {
                      console.log('add to cart');
                    }}
                  />
                  <Button
                    text="BUY NOW"
                    onclick={() => {
                      console.log('buy now');
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Product actions*/}
          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center">
              <a className="btn btn-outline-dark mt-auto" href="#">
                Add to cart
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
