import { useEffect } from "react";
import CartItem from "../components/CartItem";
import OrderTotal from "../components/OrderTotal";
import { useGlobalContext } from "../useGlobleContext";

import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, setShowMenu, handleActivePage } = useGlobalContext();

  useEffect(() => {
    handleActivePage("Cart");
  }, []);

  return (
    <section
      className="padding h-auto dark:bg-gray-800 "
      onClick={() => setShowMenu(() => false)}
    >
      <div className="max-w-6xl mx-auto py-16 dark:bg-gray-800">
        <div className="border-b py-6 dark:border-black">
          <h1 className="text-3xl text-dark_gray font-semibold dark:text-slate-200">
            {cart.length < 1 ? "Your Cart is Empty" : "Shopping Cart"}
          </h1>
        </div>

        {cart.length > 0 && (
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="mt-8">
              {cart.map((item, index) => (
                <CartItem {...item} key={index} />
              ))}
            </div>

            <div className="mt-6 w-full flex flex-col">
              <OrderTotal />
              <Link
                to={"/checkout"}
                className="mt-6 w-full uppercase text-sm text-slate-300 font-semibold bg-light_blue p-3 rounded-lg hover:bg-blue-600 dark:bg-light_pink dark:hover:bg-pink-400 dark:text-slate-800 text-center"
              >
                proceed to checkout
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
export default Cart;
