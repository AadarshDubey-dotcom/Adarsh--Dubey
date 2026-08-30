import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const initialState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
};

const cartReducer = (state, action) => {
  let updatedItems;
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItemIndex = state.items.findIndex(item => item.id === action.payload.id);
      if (existingItemIndex >= 0) {
        updatedItems = [...state.items];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + (action.payload.quantity || 1)
        };
      } else {
        updatedItems = [...state.items, { ...action.payload, quantity: action.payload.quantity || 1 }];
      }
      break;

    case 'REMOVE_FROM_CART':
      updatedItems = state.items.filter(item => item.id !== action.payload);
      break;

    case 'UPDATE_QUANTITY':
      updatedItems = state.items.map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      ).filter(item => item.quantity > 0);
      break;

    case 'CLEAR_CART':
      return initialState;

    default:
      return state;
  }

  const totalItems = updatedItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = updatedItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return { items: updatedItems, totalItems, totalPrice };
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (product, quantity = 1) => dispatch({ type: 'ADD_TO_CART', payload: { ...product, quantity } });
  const removeFromCart = (id) => dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  const updateQuantity = (id, quantity) => dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  const clearCart = () => dispatch({ type: 'CLEAR_CART' });

  return (
    <CartContext.Provider value={{ cart: state, addToCart, removeFromCart, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
