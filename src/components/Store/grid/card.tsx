import { Button } from 'components/button/button';
import React from 'react';
import { ProductItem } from 'types';

export const ProductCard = (props: ProductItem) => {
  return (
    <div id={(props.id as unknown) as string}>
      <div className="col mb-5">
        <div className="card h-100">
          <img className="card-img-top" src={props.images[0]} alt="..." />
          <div className="card-body p-4">
            <div className="text-center">
              <h5 className="fw-bolder">{props.title}</h5>
              <h6 className="fw-bolder"> {props.brand}</h6>
              {props.price}$
            </div>
          </div>
          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center">
              <a className="btn btn-outline-dark mt-auto" href="#">
                Add to Cart
              </a>
              <Button
                text="Product Description"
                onclick={() => {
                  console.log(props.id);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
