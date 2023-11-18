import { useGlobalContext } from "../useGlobleContext";

const OrderTotal = () => {
  const { subTotal, tax, shipping, total } = useGlobalContext();

  return (
    <article className="bg-light_gray rounded-xl dark:bg-dark">
      <div className="p-6 flex flex-col">
        <p className="py-2 flex justify-between text-xs text-dark_gray border-b dark:text-slate-200 dark:border-black">
          <span>Subtotal</span>
          <span>${subTotal}</span>
        </p>
        <p
          className="py-2 flex justify-between text-xs text-dark_gray border-b
        dark:text-slate-200 dark:border-black"
        >
          <span>Shipping</span>
          <span>${shipping}</span>
        </p>
        <p className="py-2 flex justify-between text-xs text-dark_gray border-b dark:text-slate-200 dark:border-black">
          <span>Tax</span>
          <span>${tax}</span>
        </p>

        <p className="mt-4 py-2 flex justify-between text-sm text-dark_gray dark:text-slate-200 dark:border-black">
          <span>Order Total</span>
          <span>${total}</span>
        </p>
      </div>
    </article>
  );
};
export default OrderTotal;
