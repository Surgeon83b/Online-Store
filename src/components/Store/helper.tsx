import { ICountChangerProps, ItemForCart, ProductItem, RangeValye, SearchParams } from '../../types/index';
import data from '../../Assets/products.json';

export const getMax = (data: ProductItem[], property: string): number => {
  return data.reduce((max: number, item: ProductItem) => {
    const current = item[property] as number;
    if (current > max) max = current;
    return max;
  }, 0);
};

export const getCategoryCount = (data: ProductItem[], category: string): number => {
  return data.reduce((result, item) => {
    if (item.category === category) result++;
    return result;
  }, 0 as number);
};

export const getBrandCount = (data: ProductItem[], brand: string): number => {
  return data.reduce((result, item: ProductItem) => {
    if (item.brand === brand) result++;
    return result;
  }, 0);
};
export const getMin = (data: ProductItem[], property: string): number => {
  return data.reduce((min: number, item: ProductItem) => {
    const current = (item as ProductItem)[property as keyof ProductItem] as number;
    if (current < min) min = current;
    return min;
  }, 1999);
};

export const DataCategory = data.products.reduce(
  (result: string[], x) => {
    if (result.indexOf(x.category) === -1) result.push(x.category);
    return result;
  },
  [data.products[0].category]
);

export const DataBrands = data.products.reduce(
  (result: string[], x) => {
    if (result.indexOf(x.brand) === -1) result.push(x.brand);
    return result;
  },
  [data.products[0].brand]
);

export const getRankingProducts = (products: ProductItem[], name: string): ProductItem[] => {
  if (name === 'raiting ASC') return products.sort((a, b) => a.rating - b.rating);
  if (name === 'raiting DESC') return products.sort((a, b) => b.rating - a.rating);
  if (name === 'price ASC') return products.sort((a, b) => a.price - b.price);
  if (name === 'price DESC') return products.sort((a, b) => b.price - a.price);
  return products;
};

export const setBackgroundImage = (element: HTMLElement | null, url: string) => {
  if (element) element.style.backgroundImage = `url(${url})`;
};

export const addSearchParams = (
  category: Set<string>,
  brand: Set<string>,
  search: string,
  range: RangeValye,
  defaultRange: { [key: string]: number[] },
  rank: string,
  direction: string
): SearchParams => {
  const result: SearchParams = {};
  if (category.size > 0) {
    result.category = Array.from(category).join('↕');
  }
  if (brand.size > 0) {
    result.brand = Array.from(brand).join('↕');
  }
  if (search !== '') result.search = search;
  if (Array.isArray(range.stock) && Array.isArray(range.price)) {
    if (range.price[0] !== defaultRange.price[0] || range.price[1] !== defaultRange.price[1]) {
      console.log(range.price);
      console.log(defaultRange.price);
      result.price = range.price[0] + '-' + range.price[1];
    }
    if (range.stock[0] !== defaultRange.stock[0] || range.stock[1] !== defaultRange.stock[1]) {
      result.stock = range.stock[0] + '-' + range.stock[1];
    }
  }
  if (rank !== '') {
    result.rankBy = rank;
  }
  if (direction !== '') {
    result.direction = direction;
  }
  return result;
};

export const getProductsForPage = (items: ItemForCart[], page: number, limit: number): ICountChangerProps[] => {
  const start = (page - 1) * limit;
  let end = page * limit - 1;
  const res = [];
  if (items.length - 1 < end) end = items.length - 1;
  for (let i = start; i <= end; i += 1) {
    res.push({
      product: data.products.find((prod) => prod.id === items[i].id) as ProductItem,
      count: items[i].count,
      number: i + 1,
    });
  }
  return res;
};

export const addToCart = (id: number): void => {
  const cartItems = localStorage.getItem('cart');
  if (cartItems === null) {
    localStorage.setItem('cart', JSON.stringify([{ id: id, count: 1 }]));
  } else {
    const items = JSON.parse(cartItems) as ItemForCart[];
    const index = items.indexOf(items.find((item) => item.id === id) as ItemForCart);
    if (index === -1) items.push({ id: id, count: 1 });
    else {
      items[index].count++;
    }
    localStorage.setItem('cart', JSON.stringify(items));
  }
};

export const removeFromCart = (id?: number): void => {
  const cartItems = localStorage.getItem('cart');
  if (cartItems !== null) {
    const items = JSON.parse(cartItems) as ItemForCart[];
    const index = items.indexOf(items.find((item) => item.id === id) as ItemForCart);
    if (index !== -1) {
      items[index].count--;
      if (items[index].count === 0) {
        items.splice(index, 1);
      }
    }
    localStorage.setItem('cart', JSON.stringify(items));
  }
};

export const getProductsDirection = (direction: string) => {
  if (direction === '' || direction === 'column') {
    return {
      container: {
        //margin: '0px auto',
        display: 'flex',
        flexWrap: 'wrap',
        //flexDirection: 'column',
        gap: '10px',
        justifyContent: 'flex-start',
      },
      card: {
        border: '1px solid rgb(204, 204, 204)',
        backgroundColor: 'rgb(248, 249, 250)',
        display: 'inline-flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px',
        borderRadius: '10px',
        boxSizing: 'border-box',
        flex: '0 0 31%',
        minWidth: '250px',
        gap: '5px',
      },
      button: {
        display: 'flex',
        gap: '5px',
      },
    } as const;
  }
  return {
    container: {
      //margin: '0px auto',
      display: 'flex',
      flexWrap: 'wrap',
      gap: '10px',
      justifyContent: 'flex-start',
    },
    card: {
      display: 'inline-flex',
      justifyContent: 'space-between',
      padding: '10px',
      borderRadius: '10px',
      boxSizing: 'border-box',
      flex: '0 0 90%',
      gap: '5px',
      border: '1px solid rgb(204, 204, 204)',
      backgroundColor: 'rgb(248, 249, 250)',
    },
    button: {
      display: 'flex',
      gap: '5px',
      flexDirection: 'column',
    },
  } as const;
};
