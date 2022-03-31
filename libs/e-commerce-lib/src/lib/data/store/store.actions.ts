import { createAction, props } from '@ngneat/effects';
import { AddProductInterface } from '../interfaces/add-product.interface';

// Products
export const loadAllProducts = createAction(
  '[Products page] Load All Products'
);
export const loadAllCategories = createAction(
  '[Landing page] Load All Categories'
);
export const loadAllBrands = createAction('[Landing page] Load All Brands');

export const addProduct = createAction(
  '[Dashboard page] Add Product',
  props<{ product: AddProductInterface }>()
);
