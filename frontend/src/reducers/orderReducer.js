import {
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAIL,
  ORDER_DETAIL_REQUEST,
  ORDER_DETAIL_SUCCESS,
  ORDER_DETAIL_FAIL,
  ORDER_PAY_REQUEST,
  ORDER_PAY_SUCCESS,
  ORDER_PAY_FAIL,
  ORDER_PAY_RESET,
  LIST_MY_ORDERS_REQUEST,
  LIST_MY_ORDERS_SUCCESS,
  LIST_MY_ORDERS_FAIL,
  LIST_MY_ORDERS_RESET,
  ADMIN_GET_ALL_ORDERS_REQUEST,
  ADMIN_GET_ALL_ORDERS_SUCCESS,
  ADMIN_GET_ALL_ORDERS_FAIL,
} from '../constants/orderConstants';

export const orderCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_CREATE_REQUEST:
      return { loading: true };
    case ORDER_CREATE_SUCCESS:
      return { loading: false, success: true, order: action.payload };
    case ORDER_CREATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const orderDetailReducer = (
  state = { loading: true, orderItems: [], shippingAddress: {} },
  action
) => {
  switch (action.type) {
    case ORDER_DETAIL_REQUEST:
      return { ...state, loading: true };
    case ORDER_DETAIL_SUCCESS:
      return { loading: false, order: action.payload };
    case ORDER_DETAIL_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const orderToPaidReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_PAY_REQUEST:
      return { loading: true };
    case ORDER_PAY_SUCCESS:
      return { loading: false, success: true };
    case ORDER_PAY_FAIL:
      return { loading: false, error: action.payload };
    case ORDER_PAY_RESET:
      return {};
    default:
      return state;
  }
};

export const listMyOrdersReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case LIST_MY_ORDERS_REQUEST:
      return { loading: true };
    case LIST_MY_ORDERS_SUCCESS:
      return { loading: false, orders: action.payload };
    case LIST_MY_ORDERS_FAIL:
      return { loading: false, error: action.payload };
    case LIST_MY_ORDERS_RESET:
      return { orders: [] };
    default:
      return state;
  }
};

export const adminGetAllOrdersReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case ADMIN_GET_ALL_ORDERS_REQUEST:
      return { loading: true };
    case ADMIN_GET_ALL_ORDERS_SUCCESS:
      return { loading: false, orders: action.payload };
    case ADMIN_GET_ALL_ORDERS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
