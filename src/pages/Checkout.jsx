import { useEffect } from "react";
import { OrderTotal, Shipping } from "../components";
import { useGlobalContext } from "../useGlobleContext";

const Checkout = () => {
  const { cart, setShowMenu, handleActivePage } = useGlobalContext();

  useEffect(() => {
    handleActivePage("Checkout");
  }, []);

  return (
    <section
      className="padding h-auto dark:bg-gray-800 "
      onClick={() => setShowMenu(() => false)}
    >
      <div className="max-w-6xl mx-auto py-16 dark:bg-gray-800">
        <div className="border-b py-6 dark:border-black">
          <h1 className="text-3xl text-dark_gray font-semibold dark:text-slate-200">
            {cart.length > 0 ? "Place Your Order" : "Your Cart Is Empty"}
          </h1>
        </div>

        {cart.length > 0 && (
          <div className="grid md:grid-cols-2 gap-6">
            <Shipping />
            <div className="mt-8">
              <OrderTotal />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
export default Checkout;
