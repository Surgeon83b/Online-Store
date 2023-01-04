import React, { useEffect, useState } from 'react';
import { Bar } from './bar/leftBar';
import { ProdGrid } from './grid/products';
import Data from '../../Assets/products.json';
import { ProductItem, RangeValye } from 'types';
import { getMin, getMax, addSearchParams } from './helper';
import { useSearchParams } from 'react-router-dom';

export function StoreMain() {
  const [searchParams, setSearchParams] = useSearchParams({});
  const [productItems, setProductItem] = useState(Data.products);
  const [rangeValue, setRangeValue] = useState({
    price: [getMin(productItems, 'price'), getMax(productItems, 'price')],
    stock: [getMin(productItems, 'stock'), getMax(productItems, 'stock')],
  } as RangeValye);
  const [state, setState] = useState({
    defaultRange: {
      price: [getMin(Data.products, 'price'), getMax(Data.products, 'price')],
      stock: [getMin(Data.products, 'stock'), getMax(Data.products, 'stock')],
    },
    rank: '',
    category: new Set(),
    brands: new Set(),
    search: '',
    direction: '',
  });

  const getProducts = (range: boolean): ProductItem[] => {
    let products = Data.products;
    if (state.search !== '') {
      const search = state.search;
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
    if (state.category.size > 0) products = products.filter((item) => state.category.has(item.category));
    if (state.brands.size > 0) products = products.filter((item) => state.brands.has(item.brand));

    if (Array.isArray(rangeValue.price) && Array.isArray(rangeValue.stock) && range === true)
      products = products.filter(
        (item) =>
          (rangeValue.price as number[])[0] <= item.price &&
          item.price <= (rangeValue.price as number[])[1] &&
          (rangeValue.stock as number[])[0] <= item.stock &&
          item.stock <= (rangeValue.stock as number[])[1]
      );
    return products;
  };
  const drop = () => {
    setState({
      defaultRange: {
        price: [getMin(Data.products, 'price'), getMax(Data.products, 'price')],
        stock: [getMin(Data.products, 'stock'), getMax(Data.products, 'stock')],
      },
      rank: '',
      category: new Set() as Set<string>,
      brands: new Set() as Set<string>,
      search: '',
      direction: '',
    });
    setRangeValue({
      price: [getMin(Data.products, 'price'), getMax(Data.products, 'price')],
      stock: [getMin(Data.products, 'stock'), getMax(Data.products, 'stock')],
    } as RangeValye);
  };

  useEffect(() => {
    const products = getProducts(false);
    setProductItem(products);
    setRangeValue({
      price: [getMin(products, 'price'), getMax(products, 'price')],
      stock: [getMin(products, 'stock'), getMax(products, 'stock')],
    } as RangeValye);
  }, [state]);
  useEffect(() => setProductItem(getProducts(true)), [rangeValue]);
  useEffect(() => setSearchParams(addSearchParams(state, rangeValue)), [state, rangeValue]);
  //useEffect(
  //  () =>
  //    setRangeValue({
  //      price: [getMin(productItems, 'price'), getMax(productItems, 'price')],
  //      stock: [getMin(productItems, 'stock'), getMax(productItems, 'stock')],
  //    } as RangeValye),
  //  [state]
  //);
  return (
    <main className="comtainer">
      <Bar
        setRangeValue={(value: RangeValye) => setRangeValue(value)}
        drop={drop}
        rangeValue={rangeValue}
        range={state.defaultRange}
        search={state.search}
        setSearch={(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
          setState({ ...state, search: event.target.value })
        }
        switchCategory={(e: React.MouseEvent<HTMLInputElement>) => {
          if (state.category.has(e.currentTarget.id)) {
            state.category.delete(e.currentTarget.id);
            setState({ ...state, category: new Set(state.category) });
          } else {
            state.category.add(e.currentTarget.id);
            setState({ ...state, category: new Set(state.category) });
          }
        }}
        brands={state.brands}
        category={state.category}
        switchBrands={(e: React.MouseEvent<HTMLInputElement>) => {
          if (state.brands.has(e.currentTarget.id)) {
            state.brands.delete(e.currentTarget.id);
            setState({ ...state, brands: new Set(state.brands) });
          } else {
            state.brands.add(e.currentTarget.id);
            setState({ ...state, brands: new Set(state.brands) });
          }
        }}
        ProductItems={productItems}
      />
      <ProdGrid
        products={productItems}
        rank={state.rank}
        setRank={(value: string) => setState({ ...state, rank: value })}
        direction={state.direction}
        setDirection={(value: string) => setState({ ...state, direction: value })}
      />
    </main>
  );
}
