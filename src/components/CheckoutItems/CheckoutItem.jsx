import React,{useContext} from "react";
import CartItem from "../CartItem/CartItem";
import { CartContext } from "../../contexts/cart-context";

const CheckoutItem = ({cartItem}) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const { clearItemFromCart, addItemToCart, removeItemToCart } =
    useContext(CartContext);

  //   const clearItemHandler = () => clearItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  //   const removeItemHandler = () => removeItemToCart(cartItem);
  return (
    <div>
   <li className="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
  <div className="shrink-0">
    <img className="h-24 w-24 max-w-full rounded-lg object-cover" src={imageUrl} alt />
  </div>
  <div className="relative flex flex-1 flex-col justify-between">
    <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
      <div className="pr-8 sm:pr-5">
        <p className="text-base font-semibold text-gray-900">{name}</p>
      
      </div>
      <div className="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
        <p className="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">
         {quantity}×${price}
        </p>
        <div className="sm:order-1">
          <div className="mx-auto flex h-8 items-stretch text-gray-600">
            <button className="flex items-center justify-center rounded-l-md bg-gray-200 px-4 transition hover:bg-black hover:text-white">
              -
            </button>
            <div className="flex w-full items-center justify-center bg-gray-100 px-4 text-xs uppercase transition">
              {quantity}
            </div>
            <button 
            onClick={addItemHandler}
            className="flex items-center justify-center rounded-r-md bg-gray-200 px-4 transition hover:bg-black hover:text-white">
              +
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
      <button type="button" className="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900">
        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" className />
        </svg>
      </button>
    </div>
  </div>
</li>

    </div>
  );
};

export default CheckoutItem;
