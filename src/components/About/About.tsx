import React from 'react';
import { ProductItem } from 'types';
import { Button } from '../button/button';
import { styles } from '../styles';
import data from '../../Assets/products.json';
import { addToCart, setBackgroundImage } from '../Store/helper';

export function About(prop: { item: number }) {
  const item = data.products.find((item) => item.id == prop.item) as ProductItem;
  return (
    <>
      <div className="col mb-5">
        <div className="card h-100">
          <div className="card-body p-4">
            <div className="text-center">
              {/*Product name*/}
              <h5 className="fw-bolder">{item.title}</h5>
              <div className="mainDescription" style={styles.mainDescription}>
                {/* Product images*/}
                <div className="imageDescription" style={styles.imageDescription}>
                  <div className="imagesBar" style={styles.imagesBar}>
                    {item.images.map((element, i) => (
                      <img
                        src={element}
                        key={i}
                        className="imageInBar"
                        onClick={() => setBackgroundImage(document.querySelector('.card-img-top'), item.images[i])}
                      ></img>
                    ))}
                  </div>
                  <div className="imgContainer">
                    <div className="card-img-top" style={{ backgroundImage: `url(${item.thumbnail})` }} />
                  </div>
                </div>

                {/* Product description*/}
                <div className="infoDescription" style={styles.infoDescription}>
                  <h5 className="fw-bolder">Description:</h5>
                  <span className="text-muted">{item.description}</span>
                  <h5 className="fw-bolder">Discount Percentage:</h5>
                  <span className="text-muted">{item.discountPercentage}</span>
                  <h5 className="fw-bolder">Rating:</h5>
                  <span className="text-muted">{item.rating}</span>
                  <h5 className="fw-bolder">Stock:</h5>
                  <span className="text-muted">{item.stock}</span>
                  <h5 className="fw-bolder">Brand:</h5>
                  <span className="text-muted">{item.brand}</span>
                  <h5 className="fw-bolder">Category:</h5>
                  <span className="text-muted">{item.category}</span>
                </div>

                <div className="priceAndActionDescription">
                  {/*Product price*/}
                  <div className="containerPrice">
                    <h5 className="fw-bolder price">${item.price}</h5>
                    <Button
                      text="ADD TO CART"
                      onclick={() => {
                        addToCart(item.id);
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
          </div>
        </div>
      </div>
    </>
  );
}
