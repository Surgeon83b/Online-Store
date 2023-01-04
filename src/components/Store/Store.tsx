import React, { useEffect, useState } from 'react';
import { Bar } from './bar/leftBar';
import { ProdGrid } from './grid/products';
import Data from '../../Assets/products.json';
import { ProductItem, RangeValye } from 'types';
import { getMin, getMax, addSearchParams } from './helper';
import { useSearchParams } from 'react-router-dom';

export function StoreMain() {
  const [direction, setDirection] = useState('');
  const [searchParams, setSearchParams] = useSearchParams({});
  const [ProductItems, setProductItem] = useState({ items: Data.products, search: '' });
  const [category, setCategory] = useState(new Set() as Set<string>);
  const [brands, setBrands] = useState(new Set() as Set<string>);
  const [rank, setRank] = useState('');
  //
  const range = {
    price: [getMin(Data.products, 'price'), getMax(Data.products, 'price')],
    stock: [getMin(Data.products, 'stock'), getMax(Data.products, 'stock')],
  };
  //
  const [rangeValue, setRangeValue] = useState({
    price: [getMin(ProductItems.items, 'price'), getMax(ProductItems.items, 'price')],
    stock: [getMin(ProductItems.items, 'stock'), getMax(ProductItems.items, 'stock')],
  } as RangeValye);

  const getProducts = (range: boolean): void => {
    let products = Data.products;
    if (ProductItems.search !== '') {
      const search = ProductItems.search;
      products = products.filter((item) => {
        return (
          item.title.indexOf(search) !== -1 ||
          item.description.indexOf(search) !== -1 ||
          String(item.price).indexOf(search) !== -1 ||
          String(item.discountPercentage).indexOf(search) !== -1 ||
          String(item.rating).indexOf(search) !== -1 ||
          String(item.stock).indexOf(search) !== -1 ||
          item.brand.indexOf(search) !== -1 ||
          item.category.indexOf(search) !== -1
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
  const returnProducts = (search: string): ProductItem[] => {
    let products = Data.products;
    if (search !== '') {
      products = products.filter((item) => {
        return (
          item.title.indexOf(search) !== -1 ||
          item.description.indexOf(search) !== -1 ||
          String(item.price).indexOf(search) !== -1 ||
          String(item.discountPercentage).indexOf(search) !== -1 ||
          String(item.rating).indexOf(search) !== -1 ||
          String(item.stock).indexOf(search) !== -1 ||
          item.brand.indexOf(search) !== -1 ||
          item.category.indexOf(search) !== -1
        );
      });
    } else products = Data.products;
    if (category.size > 0) products = products.filter((item) => category.has(item.category));
    if (brands.size > 0) products = products.filter((item) => brands.has(item.brand));
    setRangeValue({
      price: [getMin(products, 'price'), getMax(products, 'price')],
      stock: [getMin(products, 'stock'), getMax(products, 'stock')],
    });
    return products;
  };
  //
  const drop = () => {
    setProductItem({ items: Data.products, search: '' });
    setRangeValue({
      price: [getMin(ProductItems.items, 'price'), getMax(ProductItems.items, 'price')],
      stock: [getMin(ProductItems.items, 'stock'), getMax(ProductItems.items, 'stock')],
    } as RangeValye);
    setCategory(new Set() as Set<string>);
    setBrands(new Set() as Set<string>);
    setRank('');
    setDirection('');
  };
  useEffect(() => getProducts(true), [rangeValue]);
  useEffect(
    () =>
      setRangeValue({
        price: [getMin(ProductItems.items, 'price'), getMax(ProductItems.items, 'price')],
        stock: [getMin(ProductItems.items, 'stock'), getMax(ProductItems.items, 'stock')],
      }),
    [brands, category]
  );
  useEffect(
    () => setSearchParams(addSearchParams(category, brands, ProductItems.search, rangeValue, range, rank, direction)),
    [category, brands, ProductItems, rank, direction]
  );
  console.log(searchParams);
  return (
    <main className="comtainer">
      <Bar
        drop={drop}
        rangeValue={rangeValue}
        setRangeValue={setRangeValue}
        range={range}
        search={ProductItems.search}
        setSearch={(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
          const products = returnProducts(event.currentTarget.value);
          setProductItem({ items: products, search: event.currentTarget.value });
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
      />
      <ProdGrid
        products={ProductItems.items}
        rank={rank}
        setRank={(value: string) => setRank(value)}
        direction={direction}
        setDirection={(value: string) => setDirection(value)}
      />
    </main>
  );
}
