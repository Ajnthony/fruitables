import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  productDetailReducer,
  productListReducer,
  adminDeleteProductReducer,
  adminCreateProductReducer,
  adminUpdateProductReducer,
  createProductReviewReducer,
} from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers';
import {
  userDetailReducer,
  userLoginReducer,
  userRegisterReducer,
  userUpdateProfileReducer,
  usersListReducer,
  userDeleteReducer,
  adminUserUpdateReducer,
} from './reducers/userReducers';
import {
  adminGetAllOrdersReducer,
  listMyOrdersReducer,
  orderCreateReducer,
  orderDetailReducer,
  orderToOutForDeliveryReducer,
  orderToPaidReducer,
} from './reducers/orderReducer';

const reducer = combineReducers({
  productList: productListReducer,
  productDetail: productDetailReducer,
  createProductReview: createProductReviewReducer,
  adminDeleteProduct: adminDeleteProductReducer,
  adminCreateProduct: adminCreateProductReducer,
  adminUpdateProduct: adminUpdateProductReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetail: userDetailReducer,
  usersList: usersListReducer,
  userDelete: userDeleteReducer,
  adminUserUpdate: adminUserUpdateReducer,
  userUpdateProfile: userUpdateProfileReducer,
  orderCreate: orderCreateReducer,
  orderDetail: orderDetailReducer,
  orderToPaid: orderToPaidReducer,
  orderToOutForDelivery: orderToOutForDeliveryReducer,
  listMyOrders: listMyOrdersReducer,
  adminGetAllOrders: adminGetAllOrdersReducer,
});

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
  ? JSON.parse(localStorage.getItem('shippingAddress'))
  : {};

const paymentMethodFromStorage = localStorage.getItem('paymentMethod')
  ? JSON.parse(localStorage.getItem('paymentMethod'))
  : {};

// cart and token
const initialState = {
  cart: {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage,
    paymentMethod: paymentMethodFromStorage,
  },
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
