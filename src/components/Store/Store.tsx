import React, { useEffect, useState } from 'react';
import { Bar } from './bar/leftBar';
import { ProdGrid } from './grid/products';
import Data from '../../Assets/products.json';
import { ProductItem } from 'types';
import { getMax, getMin } from '../../utils/utils';

export interface CheckBox {
  checkBrands: Set<string>;
  checkCategories: Set<string>;
}

export type Hendler = (e: React.MouseEvent<HTMLInputElement>) => void;
export function Store() {
  const getProducts = (range: boolean): void => {
    let products = Data.products;
    if (ProductItems.serch !== '') {
      const serch = ProductItems.serch;
      products = products.filter((item) => {
        return (
          item.title.indexOf(serch) !== -1 ||
          item.description.indexOf(serch) !== -1 ||
          String(item.price).indexOf(serch) !== -1 ||
          String(item.discountPercentage).indexOf(serch) !== -1 ||
          String(item.rating).indexOf(serch) !== -1 ||
          String(item.stock).indexOf(serch) !== -1 ||
          item.brand.indexOf(serch) !== -1 ||
          item.category.indexOf(serch) !== -1
        );
      });
    } else products = Data.products;
    if (category.size > 0) products = products.filter((item) => category.has(item.category));
    if (brands.size > 0) products = products.filter((item) => brands.has(item.brand));
    if (Array.isArray(rangeValue.price) && Array.isArray(rangeValue.stock) && range === true)
      products = products.filter(
        (item) =>
          (rangeValue.price as number[])[0] <= item.price &&
          item.price <= (rangeValue.price as number[])[1] &&
          (rangeValue.stock as number[])[0] <= item.stock &&
          item.stock <= (rangeValue.stock as number[])[1]
      );
    setProductItem({ ...ProductItems, items: products });
  };
  const returnProducts = (serch: string): ProductItem[] => {
    let products = Data.products;
    if (serch !== '') {
      products = products.filter((item) => {
        return (
          item.title.indexOf(serch) !== -1 ||
          item.description.indexOf(serch) !== -1 ||
          String(item.price).indexOf(serch) !== -1 ||
          String(item.discountPercentage).indexOf(serch) !== -1 ||
          String(item.rating).indexOf(serch) !== -1 ||
          String(item.stock).indexOf(serch) !== -1 ||
          item.brand.indexOf(serch) !== -1 ||
          item.category.indexOf(serch) !== -1
        );
      });
    } else products = Data.products;
    if (category.size > 0) products = products.filter((item) => category.has(item.category));
    if (brands.size > 0) products = products.filter((item) => brands.has(item.brand));
    return products;
  };
  const [ProductItems, setProductItem] = useState({ items: Data.products, serch: '' });
  const [category, setCategory] = useState(new Set() as Set<string>);
  const [brands, setBrands] = useState(new Set() as Set<string>);
  const range = {
    price: [getMin(Data.products, 'price'), getMax(Data.products, 'price')],
    stock: [getMin(Data.products, 'stock'), getMax(Data.products, 'stock')],
  };

  const [rangeValue, setRangeValue] = useState({
    price: [getMin(ProductItems.items, 'price'), getMax(ProductItems.items, 'price')],
    stock: [getMin(ProductItems.items, 'stock'), getMax(ProductItems.items, 'stock')],
  } as { [price: string]: number[] | number; stock: number[] | number });
  useEffect(
    () =>
      setRangeValue({
        price: [getMin(ProductItems.items, 'price'), getMax(ProductItems.items, 'price')],
        stock: [getMin(ProductItems.items, 'stock'), getMax(ProductItems.items, 'stock')],
      }),
    [brands, category, ProductItems]
  );

  return (
    <main className="comtainer">
      <Bar
        rangeValue={rangeValue}
        setRangeValue={setRangeValue}
        range={range}
        serch={ProductItems.serch}
        setSerch={(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
          const products = returnProducts(event.currentTarget.value);
          setProductItem({ items: products, serch: event.currentTarget.value });
        }}
        switchCategory={(e: React.MouseEvent<HTMLInputElement>) => {
          if (category.has(e.currentTarget.id)) {
            category.delete(e.currentTarget.id);
            setCategory(new Set(category));
          } else {
            category.add(e.currentTarget.id);
            setCategory(new Set(category));
          }
          getProducts(false);
        }}
        brands={brands}
        category={category}
        switchBrands={(e: React.MouseEvent<HTMLInputElement>) => {
          if (brands.has(e.currentTarget.id)) {
            brands.delete(e.currentTarget.id);
            setBrands(new Set(brands));
          } else {
            brands.add(e.currentTarget.id);
            setBrands(new Set(brands));
          }
          getProducts(false);
        }}
        ProductItems={ProductItems.items}
        //drop={() => {
        //  setState({
        //    search: 'сброшено',
        //    price: {
        //      max: 1000,
        //      min: 0,
        //    },
        //    stock: {
        //      max: 10,
        //      min: 0,
        //    },
        //    ProductItem: Data.products,
        //  });
        //}}
      />
      <ProdGrid products={ProductItems.items} />
    </main>
  );
}
